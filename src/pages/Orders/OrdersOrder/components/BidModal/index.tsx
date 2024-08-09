import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import DropDownCommon from '@common/components/ui/Dropdown/DropdownCommon/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { PropsWithChildren } from 'react'
import styles from './style.module.scss'

interface Props {
  onClose: () => void
}
const BidModal = ({ onClose }: Props): JSX.Element => {
  return (
    <ModalCenterBasic
      title={'Place a bid'}
      callbackClose={onClose}
      topPartPadding="28px 30px"
      bottomPartPadding={'30px'}
      desktopMinWidth="388px"
      desktopMaxWidth="388px"
    >
      <CoverLetter />
      <DynamicPadding desktop="30px" mobile="25px" />

      <Interview />
      <DynamicPadding desktop="30px" mobile="25px" />

      <Offer />
      <DynamicPadding desktop="30px" mobile="25px" />

      <UltimateSubscription />
      <DynamicPadding desktop="30px" mobile="25px" />

      <Rewards />
      <DynamicPadding desktop="30px" mobile="25px" />

      <Summary />
    </ModalCenterBasic>
  )
}

const CoverLetter = (): JSX.Element => {
  return (
    <>
      <Title>Cover letter</Title>
      <BoxShadow>
        <Typography variant="body4">
          The Website Wise Team is a WordPress development agency that helps
          businesses build a strong digital presence and grow In the last 5
          years, we have created 550+ WordPress websites per local clients.
        </Typography>
      </BoxShadow>
    </>
  )
}

const Interview = (): JSX.Element => {
  return (
    <>
      <Title>Interview</Title>
      <BoxShadow padding="11px 20px">
        <div className={styles.interview_wrap}>
          <div className={styles.interview_section_1}>
            <div className={styles.interview_cycle}>
              <AppColor.contractPartnership width={13} height={16} />
            </div>
            <Typography
              color="#01010180"
              variant="body4"
              textTransform="uppercase"
              fontWeight="500"
            >
              Start
            </Typography>
          </div>
          <div className={styles.interview_section_2}>
            <Typography color={AppColor.text}>Not started</Typography>
          </div>
        </div>
      </BoxShadow>
    </>
  )
}

const Offer = (): JSX.Element => {
  return (
    <>
      <Title>Offer</Title>
      <DropDownCommon items={[<>item</>]} callback={() => {}} />
    </>
  )
}

const UltimateSubscription = (): JSX.Element => {
  return (
    <>
      <Title>Ultimate subscription</Title>
    </>
  )
}

const Rewards = (): JSX.Element => {
  return (
    <>
      <Title>Rewards</Title>
    </>
  )
}

const Summary = (): JSX.Element => {
  return (
    <>
      <Title>Summary</Title>
    </>
  )
}

interface BoxShadowProps {
  padding?: string
}
const BoxShadow = ({
  padding = '20px',
  children,
}: PropsWithChildren<BoxShadowProps>): JSX.Element => {
  return (
    <div
      style={{
        boxShadow: '-1px 1px 6px 2px #0000001C',
        borderRadius: AppColor.borderRadius,
        padding: padding,
      }}
    >
      {children}
    </div>
  )
}

interface TitleProps {}
const Title = (props: PropsWithChildren<TitleProps>): JSX.Element => {
  return (
    <>
      <Typography textLineHeight="1" variant="body3">
        {props.children}
      </Typography>
      <DynamicPadding desktop="30px" mobile="25px" />
    </>
  )
}

export default BidModal
