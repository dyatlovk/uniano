import SizeBox from '@common/components/ui/SizeBox/index'
import Typography from '@common/components/ui/Typography/Typography'
import styles from './style.module.scss'

interface Item {
  title: string
  description: string
  icon: React.ReactNode
}

interface Props {
  items: Item[]
}

const Suggestions = ({ items }: Props) => {
  return (
    <div className={styles.flex_row}>
      {items.map(item => (
        <div className={`${styles.flex_preview} cursor`}>
          {item.icon}
          <div className={styles.flex_column}>
            <Typography variant="body5" fontWeight="500">
              {item.title}
            </Typography>
            <SizeBox height="5px" />
            <Typography variant="body5">{item.description}</Typography>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
