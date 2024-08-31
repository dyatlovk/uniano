import {
  DropDownBase,
  DropDownContext,
  DropDownSimpleItem,
} from '@common/components/ui/Dropdown/Base/index'
import Typography from '@common/components/ui/Typography/Typography'
import { ReactNode, useContext, useEffect, useState } from 'react'
import styles from '@common/components/ui/Dropdown/Base/shared/style.module.scss'
import AppColor from '@common/styles/variables-static'

const Status = ({ onReady }: Props): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Status')

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
          selectBoxCss={{
            height: '50px',
            padding: '13px 20px',
          }}
        >
          <DropDownItem
            key={1}
            css={{ padding: '13px 20px' }}
            onSelect={(label: string) => {
              onReady(label)
            }}
            data={{
              id: 1,
              Label: 'Expired',
              listNode: <>Expired</>,
            }}
          />
          <DropDownItem
            key={2}
            onSelect={(label: string) => {
              onReady(label)
            }}
            css={{ padding: '13px 20px' }}
            data={{
              id: 2,
              Label: 'Released',
              listNode: <>Released</>,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </>
  )
}

interface DropDownItem extends DropDown.Item {
  Label: string
}

interface DropDownItemProps {
  data: DropDownItem
  css?: React.CSSProperties
  onSelect?: (label: string) => void
}

const DropDownItem = ({
  data,
  css,
  onSelect,
}: DropDownItemProps): JSX.Element => {
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
        setSelectedNode(
          <Typography
            fontWeight="500"
            color={AppColor.transparentBlack}
            variant="body4"
          >
            {data.listNode}
          </Typography>
        )
        onSelect(data.Label)
        setIsActive(prev => !prev)
      }}
    >
      <Typography variant="body4" fontWeight={isActive ? '500' : '400'}>
        {data.listNode}
      </Typography>
    </div>
  )
}

interface Props {
  onReady: (title: string) => void
}

export default Status
