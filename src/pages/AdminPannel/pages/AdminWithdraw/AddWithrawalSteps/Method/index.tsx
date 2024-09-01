import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import styles from './style.module.scss'

const MethodStep = ({ onReady }: Props): JSX.Element => {
  const [selected, setSelected] = useState<string>('')

  const selectHandler = (type: string) => {
    setSelected(type)
    onReady(type)
  }

  return (
    <>
      <div className={styles.payments_list}>
        <Payments
          isActive={selected === 'visa'}
          callback={selectHandler}
          type={'visa'}
          priceRange={'$10 - $30 000'}
          tax={'4.35% Fee + $0.18'}
        />
        <Payments
          isActive={selected === 'payoneer'}
          callback={selectHandler}
          type={'payoneer'}
          priceRange={'$10 - $30 000'}
          tax={'4% Fee'}
        />
        <Payments
          isActive={selected === 'paypal'}
          callback={selectHandler}
          type={'paypal'}
          priceRange={'$10 - $30 000'}
          tax={'1% Fee'}
        />
      </div>
    </>
  )
}

type PaymentsTypes = 'visa' | 'paypal' | 'payoneer'

interface PaymentsProps {
  type: PaymentsTypes
  priceRange: string
  tax: string
  isActive: boolean
  callback: (type: string) => void
}
const Payments = ({
  priceRange,
  tax,
  type,
  callback,
  isActive,
}: PaymentsProps): JSX.Element => {
  return (
    <div
      className={
        isActive ? styles.payment_type_item_active : styles.payment_type_item
      }
      onClick={() => {
        callback(type)
      }}
    >
      {type === 'visa' && <AppColor.visa height={23} />}
      {type === 'paypal' && <AppColor.paypal height={23} />}
      {type === 'payoneer' && <AppColor.payoneer height={23} />}
      <DynamicPadding desktop="20px" />
      <Typography variant="body4">{priceRange}</Typography>
      <Typography variant="body4">{tax}</Typography>
    </div>
  )
}

interface Props {
  onReady: (title: string) => void
}

export default MethodStep
