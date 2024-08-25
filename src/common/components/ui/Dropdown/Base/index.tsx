import AppColor from '@common/styles/variables-static'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import Typography from '../../Typography/Typography'
import styles from './shared/style.module.scss'

const DropDownContext = createContext<DropDown.Context>(null)

interface Props {}
const DropDownBase = ({ children }: PropsWithChildren<Props>): JSX.Element => {
  const { setVisible, isVisible, selectedItem, selectedNode, placeholder } =
    useContext<DropDown.Context>(DropDownContext)

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.selectbox}
        onClick={() => {
          setVisible(prev => !prev)
        }}
      >
        {!selectedItem && (
          <Typography color={AppColor.transparentBlack} variant="body4">
            {placeholder}
          </Typography>
        )}
        {selectedItem && !selectedNode && selectedItem.listNode}
        {selectedItem && selectedNode && selectedNode}
        <div style={{ flexGrow: '1' }}></div>
        <div className={styles.chevrons}>
          {isVisible && <AppColor.chevronTop fill={'#01010180'} />}
          {!isVisible && <AppColor.chevronBottom fill={'#01010180'} />}
        </div>
      </div>
      {isVisible && <div className={styles.list}>{children}</div>}
    </div>
  )
}

interface ItemProps {
  data: DropDown.Item
  css?: React.CSSProperties
}
const DropDownSimpleItem = ({ data, css }: ItemProps): JSX.Element => {
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
      }}
    >
      <Typography variant="body4" fontWeight={isActive ? '500' : '400'}>
        {data.listNode}
      </Typography>
    </div>
  )
}

export { DropDownBase, DropDownSimpleItem, DropDownContext }
