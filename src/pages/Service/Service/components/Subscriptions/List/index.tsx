import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import classNames from 'classnames'

type Props = {
  callback: (item: string) => void
}
const SubscriptionList = ({ callback }: Props) => {
  const [activeButton, setActiveButton] = useState(initButton)

  return (
    <div className={styles.buttons_wrapper}>
      {buttons.map(item => (
        <SubscriptionItem
          callback={title => {
            setActiveButton(title)
            callback(title)
          }}
          title={item.label}
          isActive={item.label === activeButton}
          disabled={findDisabledButtons(item.label).includes(item)}
          icon={item.icon}
        />
      ))}
    </div>
  )
}

interface ItemProps {
  title: string
  icon?: React.ReactNode
  isActive: boolean
  disabled?: boolean
  callback: (item: string) => void
}
const SubscriptionItem = ({
  title,
  icon = null,
  isActive,
  disabled = false,
  callback,
}: ItemProps): JSX.Element => {
  const [color, setColor] = useState<string>(AppColor.text)
  const [enablePointer, setEnablePointer] = useState<boolean>(true)
  const [borderColor, serBorderColor] = useState<string>(AppColor.transparent)

  useEffect(() => {
    if (disabled) {
      setColor('rgba(81, 81, 81, 0.3)')
      setEnablePointer(false)
      return
    }

    if (isActive) {
      setColor(AppColor.orange)
      serBorderColor(AppColor.orange)
      setEnablePointer(true)
      return
    }

    if (!isActive) {
      serBorderColor(AppColor.transparent)
      setEnablePointer(true)
      return setColor(AppColor.text)
    }
  }, [disabled, isActive])

  return (
    <div
      onClick={() => {
        if (enablePointer) callback(title)
      }}
      style={{
        border: `1px solid ${borderColor}`,
        padding: '4px 13px',
      }}
      className={isActive ? styles.button_item_active : styles.button_item}
    >
      <Typography
        variant="body4"
        fontWeight={isActive ? '500' : '400'}
        color={color}
      >
        {title}
      </Typography>
      {icon}
    </div>
  )
}

interface Button {
  label: string
  icon?: React.ReactNode
}

const buttons: Button[] = [
  {
    label: 'Start',
    icon: <AppColor.shieldTrue />,
  },
  {
    label: 'Pro',
    icon: null,
  },
  {
    label: 'Ultimate',
    icon: null,
  },
]
const initButton = 'Start'
const disabledButtons = ['Ultimate']

function findDisabledButtons(label: string): Button[] {
  const found = buttons.filter(el => disabledButtons.includes(label))
  if (!found) return []
  return found
}

export { SubscriptionList }
