import AppColor from '@common/styles/variables-static'
import classNames from 'classnames'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import Typography from '../../Typography/Typography'
import styles from './shared/style.module.scss'

const DropDownContext = createContext<DropDown.Context>(null)

interface Props {
  selectBoxCss?: React.CSSProperties
  selectBoxInnerSpace?: boolean
  useOverlappedList?: boolean
  css?: React.CSSProperties
  listCss?: React.CSSProperties
  listWrapperCss?: React.CSSProperties
}
const DropDownBase = ({
  children,
  selectBoxCss,
  selectBoxInnerSpace = true,
  useOverlappedList = false,
  css,
  listCss,
  listWrapperCss,
}: PropsWithChildren<Props>): JSX.Element => {
  const { setVisible, isVisible, selectedItem, selectedNode, placeholder } =
    useContext<DropDown.Context>(DropDownContext)

  const selectBoxRef = useRef<HTMLDivElement>(null)

  return (
    <div
      style={{
        ...css,
      }}
      className={
        isVisible && useOverlappedList
          ? styles.dropdown_overlapped
          : styles.dropdown
      }
    >
      <div
        ref={selectBoxRef}
        className={
          isVisible && useOverlappedList
            ? styles.selectbox_overlapped
            : styles.selectbox
        }
        style={{
          ...selectBoxCss,
        }}
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
        {selectBoxInnerSpace && <div style={{ flexGrow: '1' }}></div>}
        <div className={styles.chevrons}>
          {isVisible && <AppColor.chevronTop fill={'#01010150'} />}
          {!isVisible && <AppColor.chevronBottom fill={'#01010180'} />}
        </div>
      </div>
      {isVisible && (
        <div
          style={{
            paddingTop:
              useOverlappedList && selectBoxRef.current
                ? selectBoxRef.current.clientHeight
                : '0',
            ...listWrapperCss,
          }}
          className={useOverlappedList ? styles.list_overlapped : styles.list}
        >
          <div style={{ ...listCss }}>{children}</div>
        </div>
      )}
    </div>
  )
}

interface ItemProps {
  data: DropDown.Item
  css?: React.CSSProperties
  onSelect?: (id: number) => void
}
const DropDownSimpleItem = ({
  data,
  css,
  onSelect,
}: ItemProps): JSX.Element => {
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
        onSelect(data.id)
        setIsActive(prev => !prev)
      }}
    >
      <Typography variant="body4" fontWeight={isActive ? '500' : '400'}>
        {data.listNode}
      </Typography>
    </div>
  )
}

const DropDownOverlapped = ({ data, css }: ItemProps): JSX.Element => {
  const { setSelectedItem, setSelectedNode, setVisible, selectedItem } =
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
        setIsActive(true)
        setSelectedItem(data)
        setSelectedNode(
          <div className={styles.selectbox_inner}>
            <div>{data.listNode}</div>
          </div>
        )
        setVisible(false)
      }}
    >
      <Typography variant="body4" fontWeight={isActive ? '500' : '400'}>
        {data.listNode}
      </Typography>
    </div>
  )
}

export { DropDownBase, DropDownSimpleItem, DropDownOverlapped, DropDownContext }
