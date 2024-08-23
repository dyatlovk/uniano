import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import Typography from '@common/components/ui/Typography/Typography'
import { useState } from 'react'
import styles from './style.module.scss'

interface Props {
  onReady: (title: string) => void
  onAttach: (state: boolean) => void
}

const maxSymbols = 3000

const StepFive = ({ onReady, onAttach }: Props): JSX.Element => {
  const [counter, setCounter] = useState<number>(0)
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.textarea}>
        <InputCommon
          multiLine={true}
          callback={text => {
            setCounter(text.length)
            if (text.length > 0) onReady(text)
            if (text.length === 0) onReady('')
          }}
          placeholder={''}
          maxSymbolCount={maxSymbols}
          boxShadowNone={true}
          borderRadius={'0'}
          padding={'0'}
        />
        <div>
          <span>{counter}</span>
          <span>/</span>
          <span>{maxSymbols}</span>
        </div>
      </div>

      <DynamicPadding desktop="20px" />

      <div
        className={styles.attach_docs}
        onClick={() => {
          setChecked(prev => !prev)
          onAttach(!checked)
        }}
      >
        <MyCheckbox width={'22px'} height={'22px'} basicValue={checked} />
        <Typography>Attach Documents</Typography>
      </div>
    </div>
  )
}

export default StepFive
