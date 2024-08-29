import { DropDownContext } from '@common/components/ui/Dropdown/Base/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useContext, useState, useEffect } from 'react'
import styles from '@common/components/ui/Dropdown/Base/shared/style.module.scss'

interface ItemProps {
  data: DropDown.Item
  css?: React.CSSProperties
}
const RewardDropDownItem = ({ data, css }: ItemProps): JSX.Element => {
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
          <>
            <AppColor.pigBonuses
              width={29}
              height={25}
              style={{ marginTop: '-8px' }}
            />
            <>{data.listNode}</>
          </>
        )
      }}
    >
      <Typography variant="body4" fontWeight={isActive ? '500' : '400'}>
        {data.listNode}
      </Typography>
    </div>
  )
}

export default RewardDropDownItem
