import Typography from '@common/components/ui/Typography/Typography'
import React, { PropsWithChildren } from 'react'
import styles from './style.module.scss'

const Fluid = ({
  children,
  titleOptions,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <div className={styles.fluid}>
      <div className={styles.title_line}>
        {titleOptions.title && (
          <Title text={titleOptions.title} after={titleOptions.after} />
        )}
        {titleOptions.stretchLine && <div className={styles.stretch}></div>}
        {titleOptions.atEnd && titleOptions.atEnd}
      </div>
      {children}
    </div>
  )
}

interface TitleProps {
  text: string
  after?: React.ReactNode
}
const Title = ({ text, after }: TitleProps): JSX.Element => {
  return (
    <div className={styles.title}>
      <Typography variant="titleBig" fontWeight="600" textTransform="uppercase">
        {text}
      </Typography>
      {after && after}
    </div>
  )
}

interface TitleLineOptions {
  title?: string
  after?: React.ReactNode
  atEnd?: React.ReactNode
  stretchLine?: boolean
}

interface Props {
  titleOptions: TitleLineOptions
  title?: string
  afterTitle?: React.ReactNode | string
  atEnd?: React.ReactNode | string
}

export default Fluid
