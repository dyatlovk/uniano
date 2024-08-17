import { useCallback, useEffect, useState } from 'react'
import styles from './style.module.scss'
import AppColor from '@common/styles/variables-static'

type SwitchButtonProps = {
  callback?: (bool: boolean) => void
  startValue?: boolean
  width?: string
  height?: string
  backgroundColorActive?: string
  backgroundColorInActive?: string
  activeIcon?: React.ReactNode
  disable?: boolean
}
const SwitchButton = ({
  disable = false,
  activeIcon,
  backgroundColorActive = AppColor.orange,
  backgroundColorInActive = '#E0E0E0',
  callback,
  startValue = false,
  height,
  width,
}: SwitchButtonProps) => {
  const [isActive, setIsActive] = useState<boolean>(startValue)
  const [buttonVariables, setButtonVariables] = useState<Object>({
    '--colorActive': backgroundColorInActive,
  })

  const handle = useCallback((item: boolean) => {
    if (!disable) {
      if (callback != null) {
        callback(item)
      }
      setIsActive(item)
      item
        ? setButtonVariables({ '--colorActive': backgroundColorActive })
        : setButtonVariables({ '--colorActive': backgroundColorInActive })
    }
  }, [backgroundColorActive, backgroundColorInActive, callback, disable])

  useEffect(() => {
    handle(startValue)
  }, [handle, startValue])

  return (
    <div>
      <label
        style={{ width: width, height: height, ...buttonVariables }}
        className={styles.switch}
      >
        <input
          checked={isActive}
          onChange={value => {
            handle(value.target.checked)
          }}
          type="checkbox"
        />
        <span className={`${styles.slider} ${styles.round}`}>
          {activeIcon != null && (
            <div
              style={{ opacity: isActive ? 1 : 0 }}
              className={styles.absolute_icon}
            >
              {activeIcon}
            </div>
          )}
        </span>
      </label>
    </div>
  )
}

export default SwitchButton
