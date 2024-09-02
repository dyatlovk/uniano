import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useEffect } from 'react'
import styles from './style.module.scss'

const AmountStep = ({ onReady }: Props): JSX.Element => {
  useEffect(() => {
    onReady('Amount')
  })
  return (
    <div>
      <div className={styles.update_amount}>
        <InputCommon
          backgroundColor={AppColor.white}
          placeholder={'Enter Amount Manually'}
          callback={() => {}}
          padding={'15.5px 20px'}
        />
        <div className={styles.balance}>
          <div className={styles.money_round}>
            <AppColor.moneyWithdraw width={21} height={13} />
          </div>
          <div className={styles.balance_value}>
            <Typography variant="body5">Withdrawal Balance</Typography>
            <Typography color={AppColor.text}>$100</Typography>
          </div>
        </div>
      </div>

      <DynamicPadding desktop="20px" />

      <Typography>
        Max $95.47{' '}
        <span style={{ color: AppColor.transparentBlack }}>
          (payment system commission is 4.35% + 0.18$)
        </span>
      </Typography>
    </div>
  )
}

interface Props {
  onReady: (title: string) => void
}

export default AmountStep
