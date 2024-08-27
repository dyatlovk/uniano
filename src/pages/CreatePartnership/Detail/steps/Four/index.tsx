import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import Typography from '@common/components/ui/Typography/Typography'
import { useState } from 'react'
import shared from '../../shared/shared.module.scss'
import styles from './style.module.scss'

interface Props {
  onReady: (title: string) => void
  onAttach: (state: boolean) => void
}

const maxSymbols = 3000

const StepFour = ({ onReady, onAttach }: Props): JSX.Element => {
  const [counter, setCounter] = useState<number>(0)
  const [checked, setChecked] = useState<boolean>(false)

  return (
    <ResponsiveLayoutTwo
      item1={
        <div className={styles.wrapper}>
          <div className={styles.textarea}>
            <InputCommon
              multiLine={true}
              callback={text => {
                setCounter(text.length)
                onReady(text)
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
      }
      item2={<Help />}
      gap="80px"
      item1MaxWidth="692px"
      item2MaxWidth="388px"
    />
  )
}

const Help = (): JSX.Element => {
  return (
    <div className={shared.right_text_box}>
      <Typography variant="body3" fontWeight="500">
        Title examples
      </Typography>
      <DynamicPadding desktop="18px" mobile="20px" />
      <ul className={shared.ul_wrapper}>
        <li>
          <Typography variant="body4">
            Build responsive WordPress site with booking/payment functionality
          </Typography>
        </li>
        <li>
          <Typography variant="body4">
            Graphic designer needed to design ad creative for multiple campaigns
          </Typography>
        </li>
        <li>
          <Typography variant="body4">
            Facebook ad specialist needed for product launch
          </Typography>
        </li>
      </ul>
    </div>
  )
}

export default StepFour
