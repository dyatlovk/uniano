import Typography from '@common/components/ui/Typography/Typography'
import { PropsWithChildren } from 'react'
import styles from './style.module.scss'

interface Props {
  title?: string
}

const Fluid = ({ children, title }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <div className={styles.fluid}>
      {title && <Title text={title} />}
      {children}
    </div>
  )
}

interface TitleProps {
  text: string
}
const Title = ({ text }: TitleProps): JSX.Element => {
  return (
    <div className={styles.title}>
      <Typography variant="titleBig" fontWeight="600" textTransform="uppercase">
        {text}
      </Typography>
    </div>
  )
}

export default Fluid
