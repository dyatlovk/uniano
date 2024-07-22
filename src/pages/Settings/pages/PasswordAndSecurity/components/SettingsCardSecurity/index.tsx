import Typography from '@common/components/ui/Typography/Typography'
import styles from './style.module.scss'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import { useCallback, useState } from 'react'

export type SettingsCardSecurityprops = {
  icon: any
  title: string
  body: React.ReactNode
  onClick: () => void
  buttonText: string
  isSolved: boolean
  solveText?: string
}
const SettingsCardSecurity = ({
  buttonText,
  icon,
  onClick,
  title,
  isSolved,
  solveText,
  body,
}: SettingsCardSecurityprops) => {
  const [solvedText, setSolvedText] = useState<string>(buttonText)

  const onSolvedButtonHover = useCallback(
    (e: any) => {
      setSolvedText(buttonText)
    },
    [buttonText]
  )

  const onSolvedButtonLeave = useCallback(
    (e: any) => {
      setSolvedText(solveText)
    },
    [solveText]
  )

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.top_info}>
          {icon}
          <Typography variant="body3" fontWeight="500">
            {title}
          </Typography>
        </div>
        {body}
      </div>
      {!isSolved ? (
        <MyButtonTransparentOrange
          padding="7px 5px"
          onClick={onClick}
          fontWeight="500"
        >
          {buttonText}
        </MyButtonTransparentOrange>
      ) : (
        <div
          onPointerEnter={onSolvedButtonHover}
          onPointerLeave={onSolvedButtonLeave}
          className={styles.button_solve}
        >
          {solvedText}
        </div>
      )}
    </div>
  )
}

export default SettingsCardSecurity
