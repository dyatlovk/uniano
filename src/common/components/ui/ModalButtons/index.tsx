import { PropsWithChildren } from 'react'
import MyButtonOrange from '../MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '../MyButton/variants/MyButtonTransparent'
import styles from './style.module.scss'

type AlignType = 'start' | 'center' | 'end'

interface Props {
  onCancel: () => void
  onSave: () => void
  saveLabel?: string
  cancelLabel?: string
  align?: AlignType
  isSaveDisabled?: boolean
  isCancelDisabled?: boolean
}
const ModalButtonsSetup = ({
  onCancel,
  onSave,
  cancelLabel = 'Cancel',
  saveLabel = 'Save',
  align = 'end',
  children,
  isSaveDisabled = false,
  isCancelDisabled = false,
}: PropsWithChildren<Props>): JSX.Element => {
  const css = {
    justifyContent: align,
  }
  return (
    <div style={css} className={styles.wrapper}>
      {children}
      <div className={styles.cancel}>
        <MyButtonTransparent
          padding="8px 13.95px"
          disabled={isCancelDisabled}
          fontWeight="500"
          textTransform="uppercase"
          onClick={onCancel}
        >
          {cancelLabel}
        </MyButtonTransparent>
      </div>
      <MyButtonOrange
        disabled={isSaveDisabled}
        fontWeight="500"
        padding="8px 13.95px"
        textTransform="uppercase"
        onClick={onSave}
      >
        {saveLabel}
      </MyButtonOrange>
    </div>
  )
}

export default ModalButtonsSetup
