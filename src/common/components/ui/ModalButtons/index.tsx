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
}
const ModalButtonsSetup = ({
  onCancel,
  onSave,
  cancelLabel = 'Cancel',
  saveLabel = 'Save',
  align = 'end',
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  const css = {
    justifyContent: align,
  }
  return (
    <div style={css} className={styles.wrapper}>
      {children}
      <div className={styles.cancel}>
        <MyButtonTransparent
          fontWeight="500"
          textTransform="uppercase"
          onClick={onCancel}
        >
          {cancelLabel}
        </MyButtonTransparent>
      </div>
      <MyButtonOrange
        fontWeight="500"
        textTransform="uppercase"
        onClick={onSave}
      >
        {saveLabel}
      </MyButtonOrange>
    </div>
  )
}

export default ModalButtonsSetup
