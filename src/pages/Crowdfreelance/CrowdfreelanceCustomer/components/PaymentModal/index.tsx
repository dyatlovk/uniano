import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import FullAddress from '@common/components/ui/Address/Full/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparentGrey from '@common/components/ui/MyButton/variants/MyButtonTransparentGrey'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import styles from './style.module.scss'

interface Props {
  onClose: () => void
}

const PaymentModal = ({ onClose }: Props): JSX.Element => {
  return (
    <ModalCenterBasic
      desktopMaxWidth="1108px"
      title={'Payment'}
      callbackClose={() => onClose()}
      bottomPartPadding={'30px'}
      desktopMinWidth="1108px"
      desktopMinHeight="500px"
      topPartPadding="24px 30px"
    >
      <ResponsiveLayoutTwo
        item1={
          <div>
            <Steps />
            <DynamicPadding desktop="28px" mobile="20px" />

            <Sponsors />
            <DynamicPadding desktop="28px" mobile="20px" />

            <ShippingAddress />
            <DynamicPadding desktop="28px" mobile="20px" />

            <AvailableBalance />
          </div>
        }
        item2={
          <div style={{ width: '100%' }}>
            <AvailableBalanceAlt />
            <DynamicPadding desktop="24px" mobile="20px" />

            <Summary />
            <DynamicPadding desktop="30px" mobile="20px" />

            <Support />
          </div>
        }
        item2MaxWidth={'388px'}
        gap={'50px'}
        item1MaxWidth={''}
      />
    </ModalCenterBasic>
  )
}

const Steps = (): JSX.Element => {
  return (
    <div className={styles.steps}>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <Typography fontWeight="500" variant="body4" textLineHeight="1">
          Step 1/3
        </Typography>
        &nbsp;{'-'}&nbsp;
        <Typography variant="body4" color={AppColor.text} textLineHeight="1">
          Sponsorship & Shipping
        </Typography>
      </div>
      <DynamicPadding desktop="8px" />
      <PercentBar currentPercent={35} height="13px" />
    </div>
  )
}

const Sponsors = (): JSX.Element => {
  const [selected, setSelected] = useState<number>(0)

  function getClassName(isActive: boolean): string {
    return isActive ? styles.price_item_active : styles.price_item
  }

  function getColor(isActive: boolean): string {
    return isActive ? AppColor.orange : AppColor.text
  }

  return (
    <>
      <Title>Sponsors</Title>
      <div className={styles.price_items}>
        <InputCommon
          backgroundColor={AppColor.ligthWhite}
          textAlingCenter={true}
          callback={item => {}}
          placeholder="Enter Price Manually"
          padding="13px"
          textColor={AppColor.transparentBlack}
          type="number"
        />
        <div
          className={getClassName(selected === 50)}
          onClick={() => {
            setSelected(50)
          }}
        >
          <Typography
            color={getColor(selected === 50)}
            textLineHeight="1"
            fontWeight="400"
          >
            $50
          </Typography>
        </div>
        <div
          className={getClassName(selected === 100)}
          onClick={() => {
            setSelected(100)
          }}
        >
          <Typography
            color={getColor(selected === 100)}
            textLineHeight="1"
            fontWeight="400"
          >
            $100
          </Typography>
        </div>
        <div
          className={getClassName(selected === 150)}
          onClick={() => {
            setSelected(150)
          }}
        >
          <Typography
            color={getColor(selected === 150)}
            textLineHeight="1"
            fontWeight="400"
          >
            $150
          </Typography>
        </div>
        <div
          className={getClassName(selected === 200)}
          onClick={() => {
            setSelected(200)
          }}
        >
          <Typography
            color={getColor(selected === 200)}
            textLineHeight="1"
            fontWeight="400"
          >
            $200
          </Typography>
        </div>
      </div>
      <DynamicPadding desktop="30px" mobile="20px" />
      <div className={styles.repeated_toggle}>
        <Typography textLineHeight="1" fontWeight="400">
          Repeated Monthly
        </Typography>
        <SwitchButton height="24px" width="44px" />
        <div className={styles.info_circle}>
          <AppColor.info />
        </div>
      </div>
    </>
  )
}

const ShippingAddress = (): JSX.Element => {
  return (
    <div>
      <Title>Shipping Address</Title>
      <FullAddress />
    </div>
  )
}

const AvailableBalance = (): JSX.Element => {
  return (
    <div>
      <Title>Available balance</Title>
      <div className={styles.available}>
        <Typography color={AppColor.text} fontWeight="400">
          You need $100 to proceed
        </Typography>
        <Typography color={AppColor.orange}>Balance $15 000.00</Typography>
      </div>
    </div>
  )
}

const AvailableBalanceAlt = (): JSX.Element => {
  return (
    <div className={styles.available_alt}>
      <div className={styles.walletIcon}>
        <AppColor.wallet fill={AppColor.white} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography fontWeight="400" color={AppColor.transparentBlack}>
          Avaliable Balance
        </Typography>
        <Typography fontWeight="500">$15 000</Typography>
      </div>
    </div>
  )
}

const Summary = (): JSX.Element => {
  return (
    <div className={styles.summary}>
      <Title>Summary</Title>
      <div className={styles.dots_text_wrapper}>
        <TextDotted
          info={false}
          text="Easy Start Sponsorship"
          textEnd="$15 100"
          fontWeightEndText="500"
          startTextColor={AppColor.transparentBlack}
        />
        <TextDotted
          info={false}
          text="Total To Pay"
          endNode={
            <Typography color={AppColor.orange} textLineHeight="1">
              $15 100
            </Typography>
          }
          fontWeightEndText="500"
          startTextColor={AppColor.orange}
        />
      </div>
      <DynamicPadding desktop="30px" mobile="20px" />
      <div className={styles.summary_buttons}>
        <MyButtonTransparentGrey
          fontWeight="500"
          textTransform="uppercase"
          onClick={() => {}}
        >
          Cancel
        </MyButtonTransparentGrey>
        <MyButtonOrange
          fontWeight="500"
          textTransform="uppercase"
          onClick={() => {}}
        >
          top up & pay $15 100
        </MyButtonOrange>
      </div>
    </div>
  )
}

const Support = (): JSX.Element => {
  return (
    <div className={styles.support}>
      <AppColor.iconSupportUa />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Typography fontSizeStatic="1.15rem" textLineHeight="1">
          Support Ukraine
        </Typography>
        <InputCommon
          width="129px"
          padding="10px 14px"
          placeholder={''}
          callback={() => {}}
          type="number"
        />
      </div>
      <div>
        <MyButtonTransparentOrange
          onClick={() => {}}
          fontWeight="500"
          textTransform="uppercase"
        >
          Donate
        </MyButtonTransparentOrange>
      </div>
    </div>
  )
}

interface TitleProps {}
const Title = ({
  children,
}: React.PropsWithChildren<TitleProps>): JSX.Element => {
  return (
    <div>
      <Typography
        fontWeight="500"
        textLineHeight="1"
        variant="subtitle"
        fontSizeStatic="1.15rem"
      >
        {children}
      </Typography>
      <DynamicPadding desktop="30px" />
    </div>
  )
}

export default PaymentModal
