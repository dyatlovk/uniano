import {
  DropDownBase,
  DropDownContext
} from '@common/components/ui/Dropdown/Base/index'
import styles from '@common/components/ui/Dropdown/Base/shared/style.module.scss'
import Typography from '@common/components/ui/Typography/Typography'
import { ReactNode, useContext, useEffect, useState } from 'react'

const OperationStep = ({ onReady }: Props): JSX.Element => {
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
          selectBoxCss={{
            height: '50px',
            padding: '13px 20px',
          }}
        >
          <DropDownItem
            key={1}
            css={{ padding: '13px 20px' }}
            onSelect={onReady}
            data={{
              id: 1,
              listNode: (
                <>Withdrawal from withdrawal balance to payment system</>
              ),
            }}
          />
          <DropDownItem
            key={2}
            css={{ padding: '13px 20px' }}
            onSelect={onReady}
            data={{
              id: 2,
              listNode: <>Option 2</>,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </>
  )
}

interface UserProps {
  data: DropDown.Item
  css?: React.CSSProperties
  onSelect: (title: string) => void
}

const DropDownItem = ({ data, css, onSelect }: UserProps): JSX.Element => {
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
        setSelectedNode(<>{data.listNode}</>)
        setIsActive(prev => !prev)
        onSelect(data.listNode)
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

export default OperationStep
