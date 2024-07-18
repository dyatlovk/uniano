import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'

const DotsButton = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <AppColor.threePoints />
    </div>
  )
}

export default DotsButton
