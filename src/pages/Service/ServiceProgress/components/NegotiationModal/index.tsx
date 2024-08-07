import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import StepsOfPreparing from '@common/components/StepsOfPreparing/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparentGrey from '@common/components/ui/MyButton/variants/MyButtonTransparentGrey'
import SizeBox from '@common/components/ui/SizeBox/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'

interface NegotiationsModalProps {
  onClose: () => void
}
const NegotiationsModal = ({
  onClose,
}: NegotiationsModalProps): JSX.Element => {
  return (
    <ModalCenterBasic
      callbackClose={onClose}
      desktopMaxWidth="792px"
      desktopMinWidth="792px"
      title={'Change negotiations'}
      bottomPartPadding={'30px'}
    >
      <div className={styles.content}>
        <div className={styles.steps}>
          <StepsOfPreparing
            elements={[
              {
                solve: 'Change specification',
                text: '$2 500, 6 days delivery',
              },
              {
                solve: 'Change documents to sign',
                text: 'Custom text',
              },
            ]}
          />
        </div>
        <HorizontalLine />
        <DropdownMyProgramsItem />
        <div className={styles.notify}>
          <Typography variant="body4">
            <span>Notice !</span> Your offer will affect the current and all
            next payment periods until delivery.
          </Typography>
        </div>
        <div className={styles.footer}>
          <MyButtonTransparentGrey
            fontWeight="500"
            textTransform="uppercase"
            padding="7.5px 16px"
            onClick={onClose}
          >
            Cancel
          </MyButtonTransparentGrey>
          <MyButtonOrange
            textTransform="uppercase"
            fontWeight="500"
            padding="7.5px 16px"
            onClick={onClose}
          >
            Offer
          </MyButtonOrange>
        </div>
      </div>
    </ModalCenterBasic>
  )
}

const DropdownMyProgramsItem = ({}) => {
  return (
    <div className={styles.dropdown_wrapper}>
      <div className={styles.dropdown_content}>
        <DropdownText
          sizeBox={true}
          title="Budget"
          node={
            <div className="gap_5">
              <Typography variant="body4" fontWeight="500" textLineHeight="1">
                $1 500
              </Typography>
              <AppColor.doubleUp />
              <Typography variant="body4" fontWeight="500" textLineHeight="1">
                $3 000
              </Typography>
            </div>
          }
          text=""
        />
        <DropdownText
          sizeBox={true}
          title="Delivery"
          node={
            <div className="gap_5">
              <Typography variant="body4" fontWeight="500" textLineHeight="1">
                6 days
              </Typography>
              <AppColor.doubleUp />
              <Typography variant="body4" fontWeight="500" textLineHeight="1">
                5 days
              </Typography>
            </div>
          }
          text=""
        />
        <DropdownText
          sizeBox={true}
          title="New Specifications"
          node={<div className="gap_5">View</div>}
          text=""
        />
        <DropdownText
          sizeBox={true}
          title="Ultimate Subscription"
          node={
            <div className="gap_10">
              <div className="gap_5">
                <AppColor.moneyHummer />
                <Typography variant="body4" fontWeight="500" textLineHeight="1">
                  $40
                </Typography>
              </div>
              <div className="gap_5">
                <AppColor.shield />
                <Typography variant="body4" fontWeight="500" textLineHeight="1">
                  10 days
                </Typography>
              </div>
            </div>
          }
          text=""
        />
      </div>
    </div>
  )
}

const DropdownText = ({
  text,
  title,
  node,
  color,
  sizeBox,
}: {
  text: string
  sizeBox: boolean
  title: string
  node?: React.ReactNode
  color?: string
}) => {
  return (
    <div>
      <Typography
        variant="body5"
        color={AppColor.transparentBlack}
        textLineHeight="1"
      >
        {title}
      </Typography>
      {sizeBox && <SizeBox height="9px" />}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        {node}
        <Typography
          textLineHeight="1"
          color={color ? color : AppColor.text}
          variant="body4"
          fontWeight="500"
        >
          {text}
        </Typography>
      </div>
    </div>
  )
}

export default NegotiationsModal
