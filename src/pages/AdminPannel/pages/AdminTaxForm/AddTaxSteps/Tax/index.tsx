import {
  DropDownBase,
  DropDownContext,
} from '@common/components/ui/Dropdown/Base/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { ReactNode, useContext, useEffect, useState } from 'react'
import styles from './style.module.scss'
import dropDownStyles from '@common/components/ui/Dropdown/Base/shared/style.module.scss'

const TaxForm = ({ onReady }: Props): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Tax')

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
            padding: '13px 20px',
            height: '50px',
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
              TaxLabel: 'W-8BEN',
              listNode: <>W-8BEN</>,
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
              TaxLabel: 'Y-12HC',
              listNode: <>Y-12HC</>,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>

      <DynamicPadding desktop="10px" />
      <div className={styles.attaches}>
        <div className={styles.attached_file}>
          <div className={styles.file_close}>
            <AppColor.close fill={'rgba(1, 1, 1, 0.5)'} />
          </div>
          <div className={styles.attached_file_inner}>
            <div>
              <AppColor.filePdf />
            </div>
            <div>
              <Typography
                variant="body5"
                color={AppColor.text}
                fontWeight="500"
              >
                W-8BEN.pdf
              </Typography>
            </div>
            <div>
              <Typography variant="body5" color={AppColor.transparentBlack}>
                432.1 KB
              </Typography>
            </div>
          </div>
        </div>
        <div className={styles.attached_file}>
          <div className={styles.file_close}>
            <AppColor.close fill={'rgba(1, 1, 1, 0.5)'} />
          </div>
          <div className={styles.attached_file_inner}>
            <div>
              <AppColor.filePdf />
            </div>
            <div>
              <Typography
                variant="body5"
                color={AppColor.text}
                fontWeight="500"
              >
                W-8BEN.pdf
              </Typography>
            </div>
            <div>
              <Typography variant="body5" color={AppColor.transparentBlack}>
                432.1 KB
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface DropDownItem extends DropDown.Item {
  TaxLabel: string
}

interface DropDownProps {
  data: DropDownItem
  css?: React.CSSProperties
  onSelect?: (label: string) => void
}
const DropDownItem = ({ data, css, onSelect }: DropDownProps): JSX.Element => {
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
      className={dropDownStyles.simple_item}
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
        onSelect(data.TaxLabel)
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

export default TaxForm
