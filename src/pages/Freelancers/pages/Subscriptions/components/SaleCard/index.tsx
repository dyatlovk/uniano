import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import Typography from '@common/components/ui/Typography/Typography'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'

export type SaleCardProps = {
  filter: string
  price: number
  description: string
  isActive: boolean
  callback: (item: string) => void
}
const SaleCard = ({
  filter,
  price,
  description,
  isActive,
  callback,
}: SaleCardProps) => {
  return (
    <div className={styles.box_wrapper}>
      <Typography
        textLineHeight="100%"
        variant="body4"
        color={AppColor.orange}
        fontWeight="500"
      >
        {filter}
      </Typography>

      {price > 0 ? (
        <div className={styles.text_flex}>
          <Typography
            textLineHeight="1"
            variant="titleSmall"
            color={AppColor.text}
            fontWeight="600"
          >
            ${price}
          </Typography>
          <Typography
            textLineHeight="1"
            variant="body7"
            color={AppColor.transparentBlack}
            fontWeight="500"
          >
            /month
          </Typography>
        </div>
      ) : (
        <Typography
          textLineHeight="100%"
          variant="titleSmall"
          color={AppColor.text}
          fontWeight="600"
        >
          FREE
        </Typography>
      )}

      <Typography variant="body4">{description}</Typography>

      {isActive ? (
        <div className={styles.current_button}>
          <Typography variant="body4" fontWeight="500">
            Your current plan
          </Typography>
        </div>
      ) : (
        <MyButtonTransparentOrange
          padding="9px"
          width="100%"
          fontWeight="500"
          onClick={() => {
            callback(filter)
          }}
        >
          Change plan
        </MyButtonTransparentOrange>
      )}
    </div>
  )
}

export default SaleCard
