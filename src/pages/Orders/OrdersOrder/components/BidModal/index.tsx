import ButtonChooseList from '@common/components/ButtonChooseList/index'
import { RoadmapFlex } from '@common/components/Header/Header/components/NewsPopUp/components/Roadmap/index'
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import DropDownCommon from '@common/components/ui/Dropdown/DropdownCommon/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import MyButton from '@common/components/ui/MyButton/MyButton'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import SizeBox from '@common/components/ui/SizeBox/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import TrustScore from '@common/components/ui/TrustScore/index'
import Typography from '@common/components/ui/Typography/Typography'
import UserLevelStat from '@common/components/Users/levels'
import { User, UserSkill } from '@common/models/users/levels'
import AppColor from '@common/styles/variables-static'
import classNames from 'classnames'
import {
  MouseEvent,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react'
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
      <DynamicPadding desktop="22px" mobile="25px" />

      <Rewards />
      <DynamicPadding desktop="23px" mobile="25px" />

      <Summary />
      <DynamicPadding desktop="30px" mobile="25px" />

      <Notify />
      <DynamicPadding desktop="30px" mobile="25px" />

      <MyButtonOrange
        width="100%"
        textTransform="uppercase"
        onClick={() => {
          onClose()
        }}
      >
        Place a bid 10/20
      </MyButtonOrange>
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
    <div>
      <Title>Offer</Title>
      <div className={styles.offer_text}>
        <Typography variant="body4" className={styles.offer_text}>
          <span style={{ fontWeight: '500' }}>Artem M.</span> skill is{' '}
          <span style={{ fontWeight: '500', color: AppColor.green }}>
            Lead.
          </span>
          You will lose rewards if you work with this price.
        </Typography>
      </div>
      <DynamicPadding desktop="20px" mobile="20px" />
      <OfferPriceDropdown />
      <DynamicPadding desktop="20px" mobile="20px" />
      <OfferDeliveryCalDropdown />
    </div>
  )
}

const UltimateSubscription = (): JSX.Element => {
  const [showMissionModal, setShowMissionModal] = useState(false)

  return (
    <div>
      <Title>Ultimate subscription</Title>
      <div className="gap_10" style={{ marginTop: '-2px' }}>
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
          setShowMissionModal(true)
        }}
      >
        <Typography
          variant="body4"
          fontWeight="500"
          color={AppColor.transparentBlack}
        >
          Missions
        </Typography>
      </span>

      {showMissionModal && (
        <ModalCenterBasic
          bottomPartPadding="0px"
          callbackClose={() => {
            setShowMissionModal(false)
          }}
          title="Pro Missions"
          nodeAfterTitle={
            <ButtonChooseList
              buttonPadding="4px 13px"
              buttons={['Start', 'Pro', 'Ultimate']}
              callback={() => {}}
              gap="0px"
              initValue="Fixed"
            />
          }
        >
          <Typography style={{ padding: '30px 30px' }} variant="body4">
            Freelancers create some tasks to achieve. After successful
            completion you can get valuable rewards.
          </Typography>
          <RoadmapFlex
            text="Provide complete information about yourself"
            title="Entrance challenge"
            completed={true}
            steps="1 of 12 completed"
          />
          <RoadmapFlex
            text="Provide complete information about yourself"
            title="Entrance challenge"
            completed={true}
            steps="1 of 12 completed"
          />

          <div style={{ padding: '30px' }} className="flex_end">
            <MyButtonOrange
              onClick={() => {}}
              fontWeight="500"
              textTransform="uppercase"
            >
              Change pro plan $25/month
            </MyButtonOrange>
          </div>
        </ModalCenterBasic>
      )}
    </div>
  )
}

const Rewards = (): JSX.Element => {
  return (
    <>
      <Title>Rewards</Title>
      <div className="gap_20">
        <AppColor.reward30Xp />
        <AppColor.reward10PTS />
      </div>
    </>
  )
}

const Summary = (): JSX.Element => {
  return (
    <div>
      <Title>Summary</Title>
      <div className={styles.dots_text_wrapper}>
        <TextDotted
          fontWeightEndText="500"
          startTextColor="#01010150"
          text="Price"
          textEnd="3"
        />
        <TextDotted
          text="Service Fee 10%"
          startTextColor="#01010150"
          textEnd="-$15"
          fontWeightEndText="500"
        />
        <TextDotted
          text="Total To Receive"
          startTextColor="#01010150"
          textEnd="$135"
          fontWeightEndText="500"
        />
      </div>
      <DynamicPadding desktop="25px" />
      <div className={styles.flex_row}>
        <AppColor.gift />
        <Typography
          color={AppColor.green}
          fontWeight={'500'}
          textTransform="uppercase"
        >
          1 reward available
        </Typography>
      </div>
      <DynamicPadding desktop="23px" />
      <TrustScore />
    </div>
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
      <DynamicPadding desktop="28px" mobile="25px" />
    </>
  )
}

const OfferPriceDropdown = (): JSX.Element => {
  const [priceDropDownOpened, setPriceDropDownOpened] = useState<boolean>(false)
  const [selectedPrice, setSelectedPrice] = useState<number>(0)

  return (
    <DropDown
      selectedNode={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
          }}
        >
          <UserLevelStat level={User.SkillsLabels.Beginner} />
          <Typography variant="body4" color={'#01010180'}>
            Price
          </Typography>
          <Typography>${selectedPrice}</Typography>
          <SizeBox width="1px" />
          <AppColor.chevronBottom fill={AppColor.text} />
        </div>
      }
      onCallback={(state: boolean) => {
        setPriceDropDownOpened(state)
      }}
      initOpened={priceDropDownOpened}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        Fixed <DropDownCommon items={['Milestones 1', 'Milestones 2']} />
      </div>
      <DynamicPadding desktop="20px" />
      <div className={styles.price_input}>
        <InputCommon
          type={'number'}
          boxShadowNone={true}
          callback={() => {}}
          placeholder={''}
        />
        <MyButton
          padding="7.5px 13.3px"
          fontWeight="500"
          textTransform="uppercase"
          onClick={() => {
            setPriceDropDownOpened(false)
          }}
        >
          ok
        </MyButton>
      </div>
      <DynamicPadding desktop="20px" />
      <HorizontalLine />
      <DynamicPadding desktop="8px" />
      <ul className={styles.offer_list}>
        <li
          onClick={() => {
            setPriceDropDownOpened(false)
            setSelectedPrice(40)
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <UserLevelStat level={User.SkillsLabels.Beginner} />
            <Typography
              variant="body4"
              fontWeight="500"
              color={
                UserSkill.getLevelByLabel(User.SkillsLabels.Beginner).color
              }
            >
              {UserSkill.getLevelByLabel(User.SkillsLabels.Beginner).label}
            </Typography>
            $30 - $50
          </div>
        </li>
        <li
          onClick={() => {
            setPriceDropDownOpened(false)
            setSelectedPrice(80)
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <UserLevelStat level={User.SkillsLabels.Junior} />
            <Typography
              variant="body4"
              fontWeight="500"
              color={UserSkill.getLevelByLabel(User.SkillsLabels.Junior).color}
            >
              {UserSkill.getLevelByLabel(User.SkillsLabels.Junior).label}
            </Typography>
            $51 - $100
          </div>
        </li>
        <li
          onClick={() => {
            setPriceDropDownOpened(false)
            setSelectedPrice(100)
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <UserLevelStat level={User.SkillsLabels.Middle} />
            <Typography
              variant="body4"
              fontWeight="500"
              color={UserSkill.getLevelByLabel(User.SkillsLabels.Middle).color}
            >
              {UserSkill.getLevelByLabel(User.SkillsLabels.Middle).label}
            </Typography>
            $101 - $300
          </div>
        </li>
        <li
          onClick={() => {
            setPriceDropDownOpened(false)
            setSelectedPrice(200)
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <UserLevelStat level={User.SkillsLabels.Senior} />
            <Typography
              variant="body4"
              fontWeight="500"
              color={UserSkill.getLevelByLabel(User.SkillsLabels.Senior).color}
            >
              {UserSkill.getLevelByLabel(User.SkillsLabels.Senior).label}
            </Typography>
            $301 - $500
          </div>
        </li>
        <li
          onClick={() => {
            setPriceDropDownOpened(false)
            setSelectedPrice(300)
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <UserLevelStat level={User.SkillsLabels.Lead} />
            <Typography
              variant="body4"
              fontWeight="500"
              color={UserSkill.getLevelByLabel(User.SkillsLabels.Lead).color}
            >
              {UserSkill.getLevelByLabel(User.SkillsLabels.Lead).label}
            </Typography>
            starting at $501
            <AppColor.shieldTrue width={9} fill={AppColor.red} />
          </div>
        </li>
      </ul>
    </DropDown>
  )
}

const OfferDeliveryCalDropdown = (): JSX.Element => {
  const [dropDownOpened, setDropDownOpened] = useState<boolean>(false)
  const [selectedDays, setSelectedDays] = useState<number>(0)
  const daysGridCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  return (
    <DropDown
      initOpened={dropDownOpened}
      selectedNode={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
          }}
        >
          <Typography variant="body4" color={'#01010180'}>
            Delivery
          </Typography>
          <Typography>{selectedDays} days</Typography>
          <SizeBox width="1px" />
          <AppColor.chevronBottom fill={AppColor.text} />
        </div>
      }
    >
      <div className={styles.dropdown_delivery_date}>
        <InputCommon
          type={'number'}
          callback={(item: string) => {
            setSelectedDays(Number(item))
          }}
          boxShadowNone={true}
          textAlingCenter={true}
          placeholder={'Enter Days Manually'}
          backgroundColor={AppColor.transparent}
        />
      </div>
      <DynamicPadding desktop="20px" />
      <div className={styles.calendar_grid}>
        {daysGridCount.map(i => (
          <span
            onClick={() => {
              setSelectedDays(i)
            }}
            className={styles.calendar_day}
            style={{ width: '49px', height: '42px', display: 'flex' }}
          >
            {i}
          </span>
        ))}
      </div>
      <DynamicPadding desktop="10px" />
    </DropDown>
  )
}

interface DropDownProps {
  onCallback?: (state: boolean) => void
  selectedNode?: React.ReactNode
  initOpened?: boolean
}
const DropDown = ({
  onCallback,
  children,
  selectedNode,
  initOpened = false,
}: PropsWithChildren<DropDownProps>): JSX.Element => {
  const [isSelected, setIsSelected] = useState<boolean>(initOpened)
  const selectedRef = useRef<HTMLDivElement>(null)
  const dropDownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsSelected(initOpened)
  }, [initOpened])

  return (
    <div
      className={classNames(
        isSelected ? styles.dropdown_opened : styles.dropdown
      )}
      ref={dropDownRef}
      data-orderdropdown={isSelected ? 'opened' : 'closed'}
      onClick={() => {
        if (!isSelected) {
          setIsSelected(true)
          if (onCallback) onCallback(!isSelected)
        }
      }}
    >
      <div
        onClick={() => {
          setIsSelected(false)
          if (onCallback) onCallback(false)
        }}
        className={classNames(
          isSelected
            ? styles.dropdown_selected_active
            : styles.dropdown_selected
        )}
        ref={selectedRef}
      >
        {selectedNode}
      </div>
      <div
        className={classNames(
          isSelected ? styles.dropdown_content_active : styles.dropdown_content
        )}
      >
        <DynamicPadding desktop="20px" />
        {children}
      </div>
    </div>
  )
}

const Notify = (): JSX.Element => {
  return (
    <div className={styles.notify}>
      <Typography variant="body4">
        You can cancel your bid only when there are no hired freelancers or
        until you will not be moved from new list.{' '}
      </Typography>
    </div>
  )
}

export default BidModal
