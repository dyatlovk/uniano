import {
  DropDownBase, DropDownContext
} from '@common/components/ui/Dropdown/Base/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { ReactNode, useContext, useEffect, useState } from 'react'
import styles from './style.module.scss'

interface DropDownProps {}

const PositiveReviewsDropDown = ({}: DropDownProps): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Value')

  return (
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
        selectBoxInnerSpace={false}
        selectBoxCss={{
          justifyContent: 'center',
          padding: '18px 20px',
          height: '56px',
        }}
      >
        <ReviewsItem
          key={1}
          data={{
            id: 1,
            listNode: <>90% and Up</>,
          }}
        />
        <ReviewsItem
          key={2}
          data={{
            id: 2,
            listNode: <>80% and Up</>,
          }}
        />
      </DropDownBase>
    </DropDownContext.Provider>
  )
}

const FreelancersDropDown = ({}: DropDownProps): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Value')

  return (
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
        selectBoxInnerSpace={false}
        selectBoxCss={{
          justifyContent: 'center',
          padding: '18px 20px',
          height: '56px',
        }}
      >
        <FreelancersItem
          key={1}
          data={{
            id: 1,
            listNode: <>Teams Only</>,
          }}
        />
        <FreelancersItem
          key={2}
          data={{
            id: 2,
            listNode: <>Companies Only</>,
          }}
        />
      </DropDownBase>
    </DropDownContext.Provider>
  )
}

const AccountDropDown = ({}: DropDownProps): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('No Preference')

  return (
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
        selectBoxInnerSpace={false}
        selectBoxCss={{
          justifyContent: 'center',
          padding: '18px 20px',
          height: '56px',
        }}
      >
        <AccountItem
          key={1}
          data={{
            id: 1,
            listNode: <>Level 1</>,
          }}
        />
        <AccountItem
          key={2}
          data={{
            id: 2,
            listNode: <>Level 2</>,
          }}
        />
      </DropDownBase>
    </DropDownContext.Provider>
  )
}

interface ItemProps {
  data: DropDown.Item
  css?: React.CSSProperties
}

const ReviewsItem = ({ data, css }: ItemProps): JSX.Element => {
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
      className={styles.item}
      onClick={() => {
        setIsActive(true)
        setSelectedItem(data)
        setVisible(false)
        setSelectedNode(
          <div className={styles.selected_item_reviews}>
            <AppColor.starColored fill={AppColor.green} />
            {data.listNode}
          </div>
        )
      }}
    >
      <Typography
        variant="body4"
        textLineHeight="1"
        fontWeight={isActive ? '500' : '400'}
      >
        {data.listNode}
      </Typography>
    </div>
  )
}

const FreelancersItem = ({ data, css }: ItemProps): JSX.Element => {
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
      className={styles.item}
      onClick={() => {
        setSelectedItem(data)
        setSelectedNode(
          <div className={styles.selected_item_freelancers}>
            <AppColor.teams fill={AppColor.text} />
            {data.listNode}
          </div>
        )
        setVisible(false)
      }}
    >
      <Typography
        variant="body4"
        textLineHeight="1"
        fontWeight={isActive ? '500' : '400'}
      >
        {data.listNode}
      </Typography>
    </div>
  )
}

const AccountItem = ({ data, css }: ItemProps): JSX.Element => {
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
      className={styles.item}
      onClick={() => {
        setSelectedItem(data)
        setSelectedNode(
          <div className={styles.selected_item_freelancers}>
            {data.listNode}
          </div>
        )
        setVisible(false)
      }}
    >
      <Typography
        variant="body4"
        textLineHeight="1"
        fontWeight={isActive ? '500' : '400'}
      >
        {data.listNode}
      </Typography>
    </div>
  )
}

export { PositiveReviewsDropDown, FreelancersDropDown, AccountDropDown }
