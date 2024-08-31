import Typography from '@common/components/ui/Typography/Typography'
import useUpdater from '@common/helpers/useUpdater'
import { fakeUserConstant, userModel } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import BatchPopup from '@pages/AdminPannel/components/BatchActions/index'
import { useCallback, useEffect, useState } from 'react'
import DetailsTable from '../..'
import DynamicPadding from '../../../DynamicPadding'
import UserAvatar from '../../../UserAvatar'

type DetailsWithdrawProps = {
  information: DetailsWithdrawPropsItem[]
}

export type DetailsWithdrawPropsItem = {
  operation: string
  id: string
  date: string
  user: userModel
  method: 'visa'
  amount: string
  status: string
}

const DetailsWithdraw = ({ information }: DetailsWithdrawProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const currentItem = information[currentPage - 1]
  const [selectedAll, setSelectedAll] = useState<boolean>(false)
  const [isBatchPopupVisible, setBatchPopupVisible] = useState<boolean>(false)
  const [statesManager, setStatesManager] = useState<StatesManager | null>(null)
  const update = useUpdater()

  useEffect(() => {
    const mgr = new StatesManager()
    mgr.add('Operation', false)
    setStatesManager(mgr)
    return () => mgr.clear()
  }, [information])

  const onSelect = useCallback(
    (title: string, state: boolean) => {
      if (!statesManager) return
      statesManager.toggle(title, state)
      setBatchPopupVisible(statesManager.countStates(state) > 0)
      update()
    },
    [statesManager, update]
  )

  const onSelectAll = useCallback(
    (state: boolean) => {
      if (!statesManager) return
      if (!state) statesManager.toggleAll(false)
      if (state) statesManager.toggleAll(true)
      setBatchPopupVisible(statesManager.countStates(state) > 0)
      update()
    },
    [statesManager, update]
  )

  return (
    <>
      <DetailsTable
        selectAllClick={onSelectAll}
        selectClick={onSelect}
        removeNavBar={true}
        titleEnd="operation"
        projectsCount="1"
        callbackNav={item => {
          setCurrentPage(item)
        }}
        filters={['All', 'Pending', 'Completed', 'Cancelled']}
        page={currentPage}
        details={
          currentItem != null
            ? [
                {
                  title: 'Operation',
                  selecrable: true,

                  child: (
                    <div className="gap_5">
                      <AppColor.moneyWithdraw width={'38px'} height={'35px'} />
                      <Typography variant="body4">
                        Withdrawal to “...9653”
                      </Typography>
                    </div>
                  ),
                },
                {
                  title: 'ID',
                  child: (
                    <Typography variant="body4">{currentItem.id}</Typography>
                  ),
                },
                {
                  title: 'Date',
                  child: (
                    <Typography variant="body4">{currentItem.date}</Typography>
                  ),
                },
                {
                  title: 'User',
                  child: (
                    <UserAvatar
                      width="22px"
                      height="22px"
                      active={true}
                      url={fakeUserConstant.image}
                      preventMobileNone={true}
                      name={fakeUserConstant.name}
                    />
                  ),
                },
                {
                  title: 'Method',
                  child: <AppColor.visa />,
                },
                {
                  title: 'Amount',
                  child: (
                    <Typography variant="body4">
                      {currentItem.amount}
                    </Typography>
                  ),
                },
                {
                  title: 'Status',
                  child: (
                    <Typography
                      textLineHeight="100%"
                      variant="body4"
                      color={AppColor.orange}
                    >
                      {currentItem.status}
                    </Typography>
                  ),
                },
              ]
            : [
                {
                  title: 'Operation',
                  child: (
                    <>
                      <DynamicPadding desktop="30px" mobile="10px" />
                    </>
                  ),
                },
                {
                  title: 'ID',
                  child: <></>,
                },
                {
                  title: 'Date',
                  child: <></>,
                },
                {
                  title: 'User',
                  child: <></>,
                },
                {
                  title: 'Method',
                  child: <></>,
                },
                {
                  title: 'Amount',
                  child: <></>,
                },
                {
                  title: 'Status',
                  child: <></>,
                },
              ]
        }
      />
      {isBatchPopupVisible && (
        <BatchPopup
          onCancel={() => {
            setBatchPopupVisible(false)
            statesManager.toggleAll(false)
            update()
          }}
          onClose={() => {
            setBatchPopupVisible(false)
            statesManager.toggleAll(false)
            update()
          }}
          onComplete={() => {
            setBatchPopupVisible(false)
            statesManager.toggleAll(false)
            update()
          }}
          width={400}
        />
      )}
    </>
  )
}

export default DetailsWithdraw

interface StorageItem {
  title: string
  state: boolean
}
class StatesManager {
  private storage: StorageItem[] = []

  constructor() {}

  public add(id: string, state: boolean): void {
    this.storage.push({ title: id, state: state })
  }

  public toggleAll(state: boolean): void {
    this.storage.map(el => {
      el.state = state
    })
  }

  public toggle(id: string, state: boolean = false): boolean {
    const item = this.findItem(id)
    if (!item) return false
    item.state = state
    return true
  }

  public findItem(id: string): StorageItem | null {
    const found = this.storage.find(el => el.title === id)
    if (!found) return null

    return found
  }

  public isInList(id: string): boolean {
    return this.storage.find(el => el.title === id) !== undefined
  }

  public getStorage(): StorageItem[] {
    return this.storage
  }

  public remove(id: string): void {
    this.storage = this.storage.filter(item => {
      return item.title !== id
    })
  }

  public clear(): void {
    this.storage = []
  }

  public total(): number {
    return this.storage.length
  }

  public countStates(state: boolean): number {
    const found = this.storage.filter(el => (el.state = state))
    if (!found) return 0
    return found.length
  }
}
