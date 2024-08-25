import Typography from '@common/components/ui/Typography/Typography'
import { useContext, useEffect, useState } from 'react'
import { DropDownContext } from '../..'
import styles from '../../shared/style.module.scss'

interface Props {
  data: DropDown.CountryItem
  css?: React.CSSProperties
}

const CountryItem = ({ data, css }: Props): JSX.Element => {
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
            <div>{data.flag}</div>
            <div>{data.listNode}</div>
          </div>
        )
        setVisible(false)
      }}
    >
      {data.flag && data.flag}
      <Typography variant="body4" fontWeight={isActive ? '500' : '400'}>
        {data.listNode}
      </Typography>
    </div>
  )
}

export default CountryItem
