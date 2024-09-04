import stylesDropDownItem from '@common/components/ui/Dropdown/Base/shared/style.module.scss'
import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant, userModel } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { ReactNode, useContext, useEffect, useState } from 'react'
import DetailsTable from '../..'
import {
  DropDownBase,
  DropDownContext
} from '../../../Dropdown/Base'
import DynamicPadding from '../../../DynamicPadding'
import HorizontalLine from '../../../Lines/HorizontalLine'
import SizeBox from '../../../SizeBox'
import UserAvatar from '../../../UserAvatar'
import Filters from '../../shared/Filters'
import styles from './style.module.scss'

type DetailsTableOrdersAdminProps = {
  information: DetailsTableOrdersAdminItem[]
}

export type DetailsTableOrdersAdminItem = {
  user: userModel
  date: string
  category: string
  price: string
  delivery: string
  bids: string
  needToHire: string
}

const DetailsTableOrdersAdmin = ({
  information,
}: DetailsTableOrdersAdminProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const currentItem = information[currentPage - 1]
  const [filters, setFilters] = useState<string[]>([])

  return (
    <DetailsTable
      removeNavBar={true}
      titleEnd="project"
      projectsCount="1"
      callbackNav={item => {
        setCurrentPage(item)
      }}
      groupDropdown={
        <Filters
          initActiveGroup="Projects"
          onSelect={(group: DetailsTable.Filter.Group | null) => {
            if (!group) {
              setFilters([])
              return
            }
            let filters = []
            group.items.map(el => filters.push(el.title))
            setFilters(filters)
          }}
          data={[
            {
              title: 'Projects',
              items: [
                { title: 'All' },
                { title: 'Progress' },
                { title: 'Pending' },
                { title: 'Completed' },
                { title: 'Canceled' },
              ],
            },
            {
              title: 'Programs',
              items: [
                { title: 'All' },
                { title: 'Active' },
                { title: 'Pending' },
              ],
            },
          ]}
        />
      }
      filters={filters}
      page={currentPage}
      dropdownNode={
        <div>
          <DynamicPadding desktop="30px" mobile="20px" />
          <UserTypes />
          <DynamicPadding desktop="30px" mobile="20px" />
          <div className={styles.dropdow_grid}>
            <div className="gap_20">
              <AppColor.openInBrowser />
              <TextItem
                title="ID"
                node={
                  <Typography variant="body5" fontWeight="500">
                    #352
                  </Typography>
                }
              />
            </div>
            <TextItem
              title="Queue"
              node={
                <div className="gap_5">
                  <AppColor.queue fill={AppColor.orange} />
                  <Typography variant="body4" fontWeight="500">
                    1
                  </Typography>
                </div>
              }
            />
            <TextItem
              title="Customer"
              node={
                <UserAvatar
                  width="22px"
                  height="22px"
                  url={fakeUserConstant.image}
                  active={true}
                  name={fakeUserConstant.name}
                  preventMobileNone={true}
                />
              }
            />
            <TextItem
              title="Freelancer"
              node={
                <UserAvatar
                  width="22px"
                  height="22px"
                  url={fakeUserConstant.image}
                  active={true}
                  name={fakeUserConstant.name}
                  preventMobileNone={true}
                />
              }
            />
            <TextItem
              title="Manager"
              node={
                <UserAvatar
                  width="22px"
                  height="22px"
                  url={fakeUserConstant.image}
                  active={true}
                  name={fakeUserConstant.name}
                  preventMobileNone={true}
                />
              }
            />

            <TextItem
              title="Traffic Source"
              node={
                <Typography variant="body4" fontWeight="500">
                  Partnership
                </Typography>
              }
            />
            <TextItem
              title="Role"
              node={
                <Typography variant="body4" fontWeight="500">
                  Manager
                </Typography>
              }
            />
            <TextItem
              title="Rate"
              node={
                <Typography variant="body4" fontWeight="500">
                  5%
                </Typography>
              }
            />
            <TextItem
              title="Earned"
              node={
                <Typography variant="body4" fontWeight="500">
                  $5 312
                </Typography>
              }
            />
            <TextItem
              title="Status"
              node={
                <Typography
                  variant="body4"
                  fontWeight="500"
                  color={AppColor.orange}
                >
                  Progress
                </Typography>
              }
            />
          </div>
          <DynamicPadding desktop="30px" mobile="20px" />

          <HorizontalLine />
        </div>
      }
      details={
        currentItem != null
          ? [
              {
                title: 'Order',
                selecrable: true,
                maxWidth: '250px',
                child: (
                  <div className="gap_5">
                    <img src={fakeUserConstant.image} height={'38px'} alt="" />
                    <Typography variant="body4" fontWeight="500">
                      Open CL - use my GPU to optimise / backtest{' '}
                    </Typography>
                  </div>
                ),
              },
              {
                title: 'Date',
                maxWidth: '110px',
                child: (
                  <Typography variant="body4">{currentItem.date}</Typography>
                ),
              },
              {
                title: 'Category',
                maxWidth: '130px',
                child: (
                  <div className={styles.category_wrapper}>
                    <Typography
                      textLineHeight="1"
                      textTransform="uppercase"
                      fontSizeStatic="13px"
                      color="white"
                    >
                      {currentItem.category}
                    </Typography>
                  </div>
                ),
              },
              {
                title: 'Price',
                child: (
                  <div className="gap_5">
                    <AppColor.fourOfFive />{' '}
                    <Typography variant="body4">{currentItem.price}</Typography>
                  </div>
                ),
              },
              {
                title: 'Bids',
                child: (
                  <Typography variant="body4">{currentItem.bids}</Typography>
                ),
              },
              {
                title: 'Delivery',
                child: (
                  <Typography variant="body4">
                    {currentItem.delivery}
                  </Typography>
                ),
              },
              {
                title: 'Need To Hire',
                child: (
                  <Typography variant="body4">
                    {currentItem.needToHire}
                  </Typography>
                ),
              },
            ]
          : [
              {
                title: 'Order',
                child: (
                  <>
                    <DynamicPadding desktop="30px" mobile="10px" />
                  </>
                ),
              },
              {
                title: 'Date',
                child: <></>,
              },
              {
                title: 'Category',
                child: <></>,
              },
              {
                title: 'Price',
                child: <></>,
              },
              {
                title: 'Bids',
                child: <></>,
              },
              {
                title: 'Delivery',
                child: <></>,
              },
              {
                title: 'Need To Hire',
                child: <></>,
              },
            ]
      }
    />
  )
}

type TextItemProps = {
  title: string
  node: React.ReactNode
}
const TextItem = ({ node, title }: TextItemProps) => {
  return (
    <div className={styles.text_item}>
      <Typography variant="body5" color={AppColor.transparentBlack}>
        {title}
      </Typography>
      <SizeBox height="2px" />
      {node}
    </div>
  )
}

const UserTypes = (): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select User')

  return (
    <>
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
          css={{ width: 'fit-content', alignItems: 'center' }}
          selectBoxCss={{
            height: '50px',
            justifyContent: 'center',
            padding: '13px 20px',
            alignItems: 'center',
          }}
        >
          <DropDownUser
            key={1}
            css={{ padding: '13px 20px' }}
            data={{
              id: 1,
              Name: 'User',
              listNode: (
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <UserAvatar
                    width="22px"
                    height="22px"
                    active={true}
                    variant={'image'}
                    margin="0"
                    name={'User2'}
                  />
                  <AppColor.UkraineFlagIcon />
                  <Typography>User2</Typography>
                  <div style={{ flexGrow: '1' }}></div>
                  <div>15 hr 59 min ago</div>
                </div>
              ),
            }}
          />
          <DropDownUser
            key={2}
            css={{ padding: '12px 20px' }}
            data={{
              id: 2,
              Name: 'User 2',
              listNode: (
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <UserAvatar
                    width="22px"
                    height="22px"
                    active={false}
                    variant={'image'}
                    margin="0"
                    name={'User'}
                  />
                  <AppColor.UkraineFlagIcon />
                  <Typography>User</Typography>
                  <div style={{ flexGrow: '1' }}></div>
                  <div>15 hr 59 min ago</div>
                </div>
              ),
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </>
  )
}

interface UserDropDownItem extends DropDown.Item {
  Name: string
}

interface UserProps {
  data: UserDropDownItem
  css?: React.CSSProperties
  onSelect?: (userName: string) => void
}

const DropDownUser = ({ data, css, onSelect }: UserProps): JSX.Element => {
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
      className={stylesDropDownItem.simple_item}
      onClick={() => {
        setSelectedItem(data)
        setVisible(false)
        setSelectedNode(<>{data.listNode}</>)
        onSelect(data.Name)
        setIsActive(prev => !prev)
      }}
    >
      {data.listNode}
    </div>
  )
}

export default DetailsTableOrdersAdmin
