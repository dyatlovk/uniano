import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import Typography from '@common/components/ui/Typography/Typography'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import { useEffect, useState } from 'react'

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

      <div className={styles.price_section}>
        {price > 0 ? (
          <div className={styles.text_flex}>
            <MakeFullPrice price={price} isActive={isActive} />
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
        <HorizontalLine width="154px" />
      </div>
      <Typography contenteditable="true" variant="body4">
        {description}
      </Typography>
    </div>
  )
}

interface FullPriceProps {
  price: number
  currencySign?: string
  isActive: boolean
}
const MakeFullPrice = ({
  price,
  currencySign = '$',
  isActive = false,
}: FullPriceProps): JSX.Element => {
  return (
    <div className={styles.full_price}>
      <div className={styles.price}>
        <span className={styles.currency_sign}>{currencySign}</span>
        <span className={styles.price_value} contentEditable={isActive}>
          {price.toString()}
        </span>
      </div>
      <span className={styles.price_period}>/month</span>
    </div>
  )
}

export default SaleCard
