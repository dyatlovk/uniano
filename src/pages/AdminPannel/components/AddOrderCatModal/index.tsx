import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import {
  DropDownBase,
  DropDownContext,
} from '@common/components/ui/Dropdown/Base/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import ModalButtonsSetup from '@common/components/ui/ModalButtons/index'
import {
  StepActionNode,
  StepResolverItem,
  StepsResolver,
} from '@common/components/ui/StepsResolver/index'
import useUpdater from '@common/helpers/useUpdater'
import StepsNegotiationCustomerModel from '@common/models/services/stepsNegotiationCustomerModel'
import { ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import styles from './style.module.scss'

const AddOrderCatModal = ({
  onAdd,
  onCancel,
  onClose,
  title,
}: Props): JSX.Element => {
  const [nextLabel, setNextLabel] = useState<string>('Next')
  const [nextDisabled, setNextDisabled] = useState<boolean>(true)
  const [stepsNeedUpdate, setStepsNeedUpdate] = useState<boolean>(false)
  const [stepsModel, setStepsModel] =
    useState<StepsNegotiationCustomerModel | null>(null)
  const update = useUpdater()

  const onSaveOrNextCallback = useCallback(() => {
    if (!stepsModel) return
    const current = stepsModel.findActive()
    if (!current) return

    const next = stepsModel.findNext(current.no)
    const last = stepsModel.findLast()

    if (current === last) {
      onAdd()
      return
    }

    if (last === next) {
      setNextLabel('Add')
    }

    if (last !== next) {
      setNextLabel('Next')
    }

    setNextDisabled(true)
    if (current !== last) {
      stepsModel.goToNext(current)
    }
    update()
  }, [stepsModel, update])

  useEffect(() => {
    setStepsModel(new StepsNegotiationCustomerModel())
  }, [])

  useEffect(() => {
    if (!stepsModel) {
      update()
      return
    }
    if (stepsModel.count() === 0) update()

    stepsModel.append({
      no: 1,
      title: 'Title',
      isVisible: true,
      isActive: false,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div
          className={'link_hover'}
          onClick={() => {
            if (!stepsModel) return
            const index = 1
            stepsModel.setResolveMode(index)
            setNextLabel('Next')
            setNextDisabled(true)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        >
          <StepActionNode title="Change Title" />
        </div>
      ),
      resolvingNode: (
        <div>
          <InputCommon
            padding="15.5px"
            placeholder={''}
            callback={(item: string) => {
              if (!stepsModel) return
              const index = 1
              if (item.length > 0) {
                stepsModel.setReadyToResolve(index, true)
                setNextDisabled(false)
              }
              if (item.length == 0) {
                stepsModel.setReadyToResolve(index, false)
                setNextDisabled(true)
              }
              stepsModel.updateResolvedTitle(index, item)
              setStepsNeedUpdate(prev => !prev)
            }}
          />
        </div>
      ),
    })
    stepsModel.append({
      no: 2,
      title: 'Group',
      isVisible: false,
      isActive: false,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div
          className={'link_hover'}
          onClick={() => {
            if (!stepsModel) return
            const index = 2
            stepsModel.setResolveMode(index)
            setNextLabel('Next')
            setNextDisabled(true)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        >
          <StepActionNode title="Change Amount" />
        </div>
      ),
      resolvingNode: (
        <StepGroup
          onReady={(title: string) => {
            if (!stepsModel) return
            const index = 2
            if (title.length > 0) {
              stepsModel.setReadyToResolve(index, true)
              setNextDisabled(false)
            }
            if (title.length == 0) {
              stepsModel.setReadyToResolve(index, false)
              setNextDisabled(true)
            }
            stepsModel.updateResolvedTitle(index, title)
            setStepsNeedUpdate(prev => !prev)
          }}
        />
      ),
    })

    return () => {
      stepsModel.clear()
    }
  }, [stepsModel])

  return (
    <ModalCenterBasic
      desktopMaxWidth="729px"
      desktopMinWidth="729px"
      bottomPartPadding="30px"
      callbackClose={onClose}
      title={title}
    >
      <StepsResolver needUpdate={stepsNeedUpdate}>
        {stepsModel &&
          stepsModel
            .findVisible()
            .map((item: StepsResolver.Item) => (
              <StepResolverItem
                key={item.no}
                onResolved={(no: number) => {}}
                forceUpdate={stepsNeedUpdate}
                data={item}
              ></StepResolverItem>
            ))}
      </StepsResolver>
      <ModalButtonsSetup
        onCancel={onCancel}
        onSave={() => onSaveOrNextCallback()}
        saveLabel={nextLabel}
        isSaveDisabled={nextDisabled}
      />
    </ModalCenterBasic>
  )
}

const StepGroup = ({ onReady }: StepProps): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>({
    id: 1,
    listNode: <div className={styles.cat_label}>Orders</div>,
  })
  const [selectedNode, setSelectedNode] = useState<ReactNode>(
    <div className={styles.cat_label}>Orders</div>
  )
  const [placeholder, setPlaceholder] = useState<ReactNode>('')

  return (
    <div>
      <DropDownContext.Provider
        value={{
          isVisible,
          setVisible,
          selectedItem,
          setSelectedItem,
          setSelectedNode,
          selectedNode,
          placeholder,
          setPlaceholder,
        }}
      >
        <DropDownBase
          useOverlappedList={true}
          selectBoxInnerSpace={true}
          selectBoxCss={{
            justifyContent: 'center',
            padding: '13px 20px',
          }}
        >
          <StepDropDownItem
            key={1}
            css={{ padding: '13px 20px' }}
            onSelect={onReady}
            data={{
              id: 1,
              title: 'Orders',
              listNode: <div className={styles.cat_label}>Orders</div>,
            }}
          />
          <StepDropDownItem
            key={2}
            css={{ padding: '13px 20px' }}
            onSelect={onReady}
            data={{
              id: 2,
              title: 'Design',
              listNode: <div className={styles.cat_label}>Design</div>,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </div>
  )
}

const StepDropDownItem = ({ data, css, onSelect }: ItemProps): JSX.Element => {
  const { setSelectedItem, setVisible, setSelectedNode, selectedItem } =
    useContext<DropDown.Context>(DropDownContext)
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    if (!selectedItem) return
    setIsActive(selectedItem.id === data.id)
  }, [data.id, selectedItem])

  return (
    <div
      style={css}
      className={styles.simple_item}
      onClick={() => {
        setSelectedItem(data)
        setVisible(false)
        setSelectedNode(data.listNode)
        onSelect(data.title)
        setIsActive(prev => !prev)
      }}
    >
      {data.listNode}
    </div>
  )
}

interface DropDownItemData extends DropDown.Item {
  title: string
}

interface ItemProps {
  data: DropDownItemData
  css?: React.CSSProperties
  onSelect?: (item: React.ReactNode) => void
}

interface StepProps {
  onReady: (item: React.ReactNode) => void
}

interface Props {
  title: string
  onClose: () => void
  onCancel: () => void
  onAdd: () => void
}

export default AddOrderCatModal
