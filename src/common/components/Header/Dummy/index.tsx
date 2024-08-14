import Logo from '@common/components/Logo/Logo'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState, useEffect, PropsWithChildren } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './style.module.scss'

interface Props {}

const HeaderDummy = ({ children }: PropsWithChildren<Props>): JSX.Element => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 0)
  }, [])

  return (
    <div style={{ opacity: visible ? '1' : '0' }} className={styles.wrapper}>
      <div className={styles.title_content_wrapper}>
        <Logo text="Search master" color="white" />
        <div className={styles.content}>{children}</div>
        <Link to={'/dashboard/home'}>
          <div className={`${styles.close_box} ${styles.desktop}`}>
            <AppColor.close fill="white" width={'16px'} height={'16px'} />
          </div>
        </Link>
        <div className={`${styles.mobile} gap_5`}>
          <Typography
            textLineHeight="1"
            variant="body5"
            color="white"
            fontWeight="500"
          >
            Category{' '}
          </Typography>
          <AppColor.chevronBottom fill="white" height={'6px'} width={'12px'} />
        </div>
      </div>
    </div>
  )
}

export default HeaderDummy
