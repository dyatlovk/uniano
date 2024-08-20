import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import styles from './style.module.scss'

interface Props {
  data: TextPage.ArticleNavTree
  onRootClick: () => void
}

const NavTree = ({ data, onRootClick }: Props): JSX.Element => {
  const [isOpened, setOpened] = useState<boolean>(false)

  return (
    <div className={isOpened ? styles.group_opened : styles.group}>
      <div
        className={styles.root}
        onClick={() => {
          onRootClick()
          setOpened(prev => !prev)
        }}
      >
        <Typography variant="body3">{data.group}</Typography>
        {isOpened && <AppColor.chevronTop fill={AppColor.text} />}
        {!isOpened && <AppColor.chevronBottom fill={AppColor.text} />}
      </div>
      {isOpened && (
        <div className={styles.child}>
          {data.sections.map(section => (
            <div className={styles.child_item}>{section.title}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavTree
