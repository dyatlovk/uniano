import AppColor from '@common/styles/variables-static'
import DynamicPadding from '../DynamicPadding'
import Typography from '../Typography/Typography'
import styles from './style.module.scss'

type PaymentsVendor = 'visa' | 'mastercard'

interface Props {
  vendor: PaymentsVendor
  numberLastFour: number
  holder: {
    name: string
    lastName: string
  }
  expired: {
    month: string
    year: string
  }
  onDelete: () => void
}

const PaymentCard = ({
  expired,
  holder,
  numberLastFour,
  vendor,
  onDelete,
}: Props): JSX.Element => {
  return (
    <div className={styles.card}>
      <div>{vendor === 'visa' && <AppColor.visa height={23} />}</div>
      <DynamicPadding desktop="15px" />
      <div>
        <Typography
          color={AppColor.transparentBlack}
          variant="body5"
          fontSizeStatic={AppColor.pxToRem(12)}
          textTransform="uppercase"
          textLineHeight="1"
        >
          Card number
        </Typography>
        <DynamicPadding desktop="2px" />
        <Typography>**** **** **** {numberLastFour}</Typography>
      </div>
      <DynamicPadding desktop="12px" />

      <div className={styles.card_bottom}>
        <div className={styles.holder}>
          <Typography
            color={AppColor.transparentBlack}
            variant="body5"
            textLineHeight="1"
            fontSizeStatic={AppColor.pxToRem(12)}
            textTransform="uppercase"
          >
            Card holder
          </Typography>
          <DynamicPadding desktop="2px" />
          <Typography>{holder.name}</Typography>{' '}
          <Typography>{holder.lastName}</Typography>
        </div>

        <div className={styles.expired}>
          <Typography
            color={AppColor.transparentBlack}
            variant="body5"
            textLineHeight="1"
            fontSizeStatic={AppColor.pxToRem(12)}
            textTransform="uppercase"
          >
            Expiry date
          </Typography>
          <DynamicPadding desktop="2px" />
          <Typography textLineHeight="1">{expired.month}</Typography>
          <Typography textLineHeight="1"> / </Typography>
          <Typography textLineHeight="1">{expired.year}</Typography>
        </div>
      </div>

      <div className={styles.tools}>
        <div className={styles.delete} onClick={onDelete}>
          <AppColor.close width={15} height={15} fill={AppColor.red} />
        </div>
      </div>
    </div>
  )
}

export default PaymentCard
