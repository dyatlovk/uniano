import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import DropDownCommon from '@common/components/ui/Dropdown/DropdownCommon/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import MyButton from '@common/components/ui/MyButton/MyButton'
import SizeBox from '@common/components/ui/SizeBox/index'
import Typography from '@common/components/ui/Typography/Typography'
import UserLevelStat from '@common/components/Users/levels'
import useUpdater from '@common/helpers/useUpdater'
import { User, UserSkill } from '@common/models/users/levels'
import AppColor from '@common/styles/variables-static'
import classNames from 'classnames'
import { PropsWithChildren, useEffect, useRef, useState } from 'react'
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

export default BidModal
