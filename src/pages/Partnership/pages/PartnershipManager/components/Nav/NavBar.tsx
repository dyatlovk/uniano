import { Link } from 'react-router-dom'
import styles from 'style.module.scss'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'

interface NavBarProps {
  title: string
  link: string
  isActive: boolean
  counter?: number
}

const NavBarLink = ({ title, counter, link, isActive }: NavBarProps) => {
  return (
    <Link
      to={link}
      className={styles.nav_bar_link}
      style={{
        backgroundColor: isActive ? AppColor.orange : 'transparent',
      }}
    >
      <Typography
        textTransform="uppercase"
        color="white"
        variant="body1"
        fontWeight="500"
      >
        {title}
      </Typography>
      {counter ? (
        <span className={styles.nav_bar_counter}>{counter}</span>
      ) : (
        <></>
      )}
    </Link>
  )
}

export default NavBarLink
