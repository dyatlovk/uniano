import ButtonChooseList from '@common/components/ButtonChooseList/index'
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import SizeBox from '@common/components/ui/SizeBox/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import TrustScore from '@common/components/ui/TrustScore/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import ContactModal from '@pages/Partnership/pages/Program/modals/contactModal/index'
import { useEffect, useState, useTransition } from 'react'
import { Selectbox, SelectItem } from '../../Service'
import SelectPro from '../../Service/components/modals/SelectPro'
import { SubscriptionList } from '../../Service/components/Subscriptions/List'
import MissionModal from '../MissionModal'
import styles from './style.module.scss'

interface Props {
  onClose: () => void
}
const SpecsModal = ({ onClose }: Props): JSX.Element => {
  return (
    <ModalCenterBasic
      title={'Change Service Solution'}
      callbackClose={() => {
        onClose()
      }}
      topPartPadding={'30px'}
      desktopMaxWidth={'388px'}
      desktopMinWidth={'388px'}
      bottomPartPadding={'0px'}
    >
      <PricePlan />
      <LineSplit />

      <PayPlan callback={() => {}} />
      <LineSplit />

      <Options />
      <LineSplit />

      <Subscriptions />
      <LineSplit />

      <Rewards />
      <LineSplit />

      <TrustScoreSection />

      <FooterButton />
      <DynamicPadding desktop="30px" mobile="15px" />
    </ModalCenterBasic>
  )
}

const PricePlan = (): JSX.Element => {
  const [selectedPricePlan, setSelectedPricePlan] = useState<string>('1250')

  return (
    <>
      <SelectItem
        selectedPrice={selectedPricePlan}
        callback={item => {
          setSelectedPricePlan(item)
        }}
        lvl={3}
        price="1250"
        priceWithDiscount="1000"
        titleProps="Easy Start"
      />
      <SelectItem
        selectedPrice={selectedPricePlan}
        callback={item => {
          setSelectedPricePlan(item)
        }}
        lvl={4}
        price="1750"
        priceWithDiscount="1500"
        titleProps="Pro"
      />
      <SelectItem
        selectedPrice={selectedPricePlan}
        callback={item => {
          setSelectedPricePlan(item)
        }}
        lvl={5}
        price="2250"
        priceWithDiscount="2000"
        titleProps="Ultimate"
      />
      <Selectbox
        selectedPrice={selectedPricePlan}
        callback={item => {
          setSelectedPricePlan(item)
        }}
        fontWeight="400"
        price="custom"
      />
    </>
  )
}

interface PayPlanProps {
  callback: (selected: string) => void
}
const PayPlan = ({ callback }: PayPlanProps): JSX.Element => {
  const [selected, setSelected] = useState<string>('Single-pay')

  return (
    <div className={styles.pay_layout}>
      <ButtonChooseList
        buttonPadding="4px 13px"
        buttons={['Single-pay', 'Milestones']}
        callback={item => {
          setSelected(item)
          callback(item)
        }}
        initValue={'Single-pay'}
        gap="0px"
      />

      {selected === 'Milestones' && (
        <>
          <DynamicPadding desktop="30px" mobile="15px" />
          <div className={styles.milestone_wrapper}>
            <Typography variant="body4" fontWeight="500">
              Milestone 1 : First draft
            </Typography>
            <SizeBox height="4px" />
            <Typography variant="body4">
              I'll prepare a first draft of the delivery.
            </Typography>
            <SizeBox height="4px" />
            <Typography variant="subtitle" fontWeight="500">
              $700
            </Typography>
            <DynamicPadding desktop="5px" mobile="10px" />
            <HorizontalLine />
            <DynamicPadding desktop="9px" mobile="10px" />
            <Typography variant="body4" fontWeight="500">
              Milestone 2 : Delivery
            </Typography>
            <SizeBox height="4px" />
            <Typography variant="body4">
              I'll send you the final delivery.
            </Typography>
            <SizeBox height="4px" />
            <Typography variant="subtitle" fontWeight="500">
              $800
            </Typography>
          </div>
        </>
      )}

      <DynamicPadding desktop="30px" mobile="20px" />

      <div className={styles.dots_text_wrapper}>
        <TextDotted
          fontWeightEndText="500"
          info={true}
          startTextColor="#01010150"
          text="Revisions"
          textEnd="3"
        />
        <TextDotted
          info={true}
          text="Source File"
          startTextColor="#01010150"
          endNode={
            <AppColor.singTrue
              stroke={AppColor.green}
              width={'11px'}
              height={'9px'}
            />
          }
        />
        <TextDotted
          info={true}
          text="High Resolution"
          startTextColor="#01010150"
          endNode={
            <AppColor.singTrue
              stroke={AppColor.green}
              width={'11px'}
              height={'9px'}
            />
          }
        />
        <TextDotted
          fontWeightEndText="500"
          startTextColor="#01010150"
          info={true}
          text="Delivery"
          textEnd="4 days"
        />
      </div>
    </div>
  )
}

const Options = (): JSX.Element => {
  return (
    <div className={styles.options_layout}>
      <Typography variant="body3" fontWeight="500">
        Options
      </Typography>
      <DynamicPadding desktop="23px" mobile="20px" />
      <div className={styles.benefit_wrapper}>
        <SelectBenefitItem
          daysDelta="+1 day"
          price="25"
          title="Add Revisions"
        />
        <SelectBenefitItem
          daysDelta="-2 day"
          price="15"
          title="Reduce Delivery"
        />
        <SelectBenefitItem daysDelta="" price="3" title="Add Vector Files" />
      </div>
    </div>
  )
}

const Subscriptions = (): JSX.Element => {
  const [showMissionModal, setShowMissionModal] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition()

  return (
    <>
      <div className={styles.subscriptions_layout}>
        <Typography variant="body3" fontWeight="500">
          Subscription
        </Typography>
        <DynamicPadding desktop="22px" mobile="20px" />
        <div className="flex_space_between">
          <SubscriptionList
            callback={(title: string) => {
              console.log(title)
            }}
          />

          <div className={styles.buy_wrapper}>
            <AppColor.buy fill={AppColor.text} />
          </div>
        </div>
        <DynamicPadding desktop="18px" mobile="10px" />
        <div className="gap_5">
          <AppColor.queue fill={AppColor.orange} />
          <Typography variant="body4">Higher Priority Queue</Typography>
        </div>
        <DynamicPadding desktop="18px" mobile="10px" />
        <div className="gap_10">
          <div className="gap_5">
            <AppColor.moneyHummer />
            <Typography variant="body4">$40</Typography>
          </div>
          <div className="gap_5">
            <AppColor.shield />
            <Typography variant="body4">10 days</Typography>
          </div>
        </div>
        <DynamicPadding desktop="13px" mobile="10px" />
        <span
          className={styles.mission_btn}
          onClick={() => {
            startTransition(() => {
              setShowMissionModal(true)
            })
          }}
        >
          {' '}
          <Typography
            variant="body4"
            fontWeight="500"
            color={AppColor.transparentBlack}
          >
            Missions
          </Typography>
        </span>
      </div>
      {showMissionModal && !isPending && (
        <MissionModal
          onClose={() => {
            setShowMissionModal(false)
          }}
        />
      )}
    </>
  )
}

type SelectBenefitItemProps = {
  price: string
  daysDelta: string
  title?: string
}
export const SelectBenefitItem = ({
  daysDelta,
  price,
  title,
}: SelectBenefitItemProps) => {
  return (
    <div className={styles.select_benefit}>
      <div className={styles.benefit_checkbox}>
        <MyCheckbox height="20px" width="20px" />
      </div>
      <div className={styles.benefit_first_line}>
        <Typography
          variant="body4"
          textLineHeight="1"
          color={AppColor.transparentBlack}
        >
          {title}
        </Typography>
      </div>
      <div className={styles.benefit_second_line}>
        <Typography variant="body4" fontWeight="500">
          +{price} ${daysDelta != '' && `(${daysDelta})`}
        </Typography>
      </div>
    </div>
  )
}

const LineSplit = (): JSX.Element => {
  return (
    <>
      <DynamicPadding desktop="20px" mobile="20px" />
      <div className={styles.line}>
        <HorizontalLine />
      </div>
      <DynamicPadding desktop="18px" mobile="20px" />
    </>
  )
}

const Rewards = (): JSX.Element => {
  return (
    <div className={styles.rewards_layout}>
      <Typography variant="body3" fontWeight="500">
        Rewards
      </Typography>
      <DynamicPadding desktop="22px" mobile="20px" />

      <div className="gap_20">
        <AppColor.reward30Xp />
        <AppColor.reward10PTS />
      </div>
    </div>
  )
}

const TrustScoreSection = (): JSX.Element => {
  return (
    <div className={styles.trust_score_layout}>
      <TrustScore />
    </div>
  )
}

const FooterButton = (): JSX.Element => {
  const [selectProModal, setSelectProModal] = useState<boolean>(false)
  const [contactModal, setContactModal] = useState<boolean>(false)

  return (
    <div className={styles.footer_layout}>
      <DynamicPadding desktop="15px" mobile="10px" />
      <MyButtonOrange
        textTransform="uppercase"
        onClick={() => {
          setSelectProModal(true)
        }}
        fontWeight="500"
        width="100%"
      >
        Select pro $1500
      </MyButtonOrange>
      <DynamicPadding desktop="15px" mobile="10px" />
      <MyButtonTransparentOrange
        textTransform="uppercase"
        fontWeight="500"
        onClick={() => {
          setContactModal(true)
        }}
        width="100%"
      >
        Contact freelancer
      </MyButtonTransparentOrange>

      {contactModal && (
        <ModalCenterBasic
          desktopMaxWidth="880px"
          title="Join to Artem Markevych Wordpress Partnership"
          bottomPartPadding="30px"
          callbackClose={() => {
            setContactModal(false)
          }}
        >
          <ContactModal
            callbackClose={() => {
              setContactModal(false)
            }}
          />
        </ModalCenterBasic>
      )}

      {selectProModal && <SelectPro onClose={() => setSelectProModal(false)} />}
    </div>
  )
}

export default SpecsModal
