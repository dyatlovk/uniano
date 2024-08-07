import Header from '@common/components/Header/Header/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import StepsOfPreparing, {
  StepItem,
} from '@common/components/StepsOfPreparing/index'
import ButtonChooseList from '@common/components/ButtonChooseList/index'
import Typography from '@common/components/ui/Typography/Typography'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import TextDotted from '@common/components/ui/TextDotted/index'
import { DetailsDropdownItem } from '@pages/Partnership/pages/ProgressFreelancer/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import { useEffect, useState } from 'react'
import StepsStates from '@common/components/StepsStates/index'
import StatesModel from '@common/models/services/statesModel'
import ManagersDropDown from '@pages/Partnership/pages/ProgressFreelancer/components/ManagerDropdown/index'
import PartnersModel from '@common/models/partnership/partnersModel'
import { SubscriptionList } from '../Service/components/Subscriptions/List'
import FreelancerProjectsModel from '@common/models/partnership/freelancesProjectsModel'
import { RoadmapFlex } from '@common/components/Header/Header/components/NewsPopUp/components/Roadmap/index'
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'

const freelancerProjectModel = new FreelancerProjectsModel(
  FreelancerProjectsModel.makeFakeData()
)
const freelancerFakeProject = freelancerProjectModel.findByLabel('Progress')
const freelancerFakeProjectProgress =
  freelancerProjectModel.getProgress('Progress')

const ServiceNegotiationCustomer = () => {
  const arrayHistory = [
    'Service',
    'Development',
    'Web Development',
    'WordPress',
  ]
  const title = 'Logo by sample in vector in maximum quality'

  const [partnersModel, setPartnersModel] = useState<PartnersModel | null>(null)
  const [partnersSelectedUser, setPartnersSelecteduser] =
    useState<PartnerShip.Manager | null>(null)
  const [showMissionModal, setShowMissionModal] = useState(false)
  const [selectedMileStone, setSelectedMilestone] =
    useState<string>('Milestone 2')
  const [addMilistone, setAddMilestone] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    setPartnersModel(new PartnersModel())
  }, [])

  return (
    <div>
      <Header />

      <StepsStates states={StatesModel.getAll()} currentState={'Negotiation'} />

      <div className={'wrapper_page'}>
        <PageDetails
          historyNode={
            <NavigationItem image={<AppColor.home />} textList={arrayHistory} />
          }
          pageTitle={title}
        />

        <DynamicPadding desktop="13px" mobile="20px" />
        <UserTopPageInfo user={fakeUserConstant} />
        <DynamicPadding />

        <ResponsiveLayoutTwo
          gap="80px"
          item1MaxWidth="730px"
          item2MaxWidth="390px"
          item1={
            <div style={{ width: '100%' }}>
              <StepItem
                solve="Change service solution"
                text="Custom Requirements"
                drawLine={false}
              />
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '24px' }}
              >
                <ButtonChooseList
                  buttonPadding="4px 13px"
                  buttons={['Milestone 1', 'Milestone 2']}
                  callback={(item: string) => {
                    setSelectedMilestone(item)
                  }}
                  initValue={selectedMileStone}
                  gap="0px"
                />
                <div
                  className={styles.add_milestone}
                  onClick={() => {
                    setAddMilestone(true)
                  }}
                >
                  <AppColor.plusCircle />
                </div>
              </div>
              <DynamicPadding desktop="30px" mobile="20px" />
              <StepsOfPreparing
                elements={[
                  {
                    solve: 'Change specification',
                    text: 'Logo Design specification form',
                  },
                  {
                    solve: 'Change documents to sign',
                    text: 'NDA, NCA',
                  },
                ]}
              />
              <DynamicPadding desktop="20px" mobile="10px" />
              <div className={styles.text_wrapper}>
                <Typography variant="body4">
                  <span style={{ fontWeight: '500' }}>
                    The customer has completed the negotiation and made the
                    payment.
                  </span>{' '}
                  To start your project, please complete all the necessary
                  steps.
                </Typography>
              </div>
              <DynamicPadding />

              <div className="flex_space_between">
                <ChevronMoveTo
                  onClick={() => {}}
                  text="Step back"
                  title="Service"
                  variant="left"
                />
                <ChevronMoveTo
                  onClick={() => {}}
                  text="Next step"
                  title="payment"
                  variant="right"
                />
              </div>
            </div>
          }
          item2={
            <div style={{ width: '100%' }}>
              <ManagersDropDown
                selectedUser={partnersSelectedUser}
                users={partnersModel && partnersModel.getAll()}
                onUserCallback={(id: string) => {
                  if (partnersModel) {
                    const uuid = partnersModel.findByUuid(id)
                    setPartnersSelecteduser(uuid)
                  }
                }}
              />

              <DynamicPadding desktop="30px" mobile="15px" />
              <div className="justify_center">
                <Typography
                  variant="body4"
                  textTransform="uppercase"
                  fontWeight="500"
                >
                  Project 2
                </Typography>
              </div>
              <DynamicPadding desktop="30px" mobile="15px" />
              <div className={`box_shadow ${styles.details_box}`}>
                <DetailsDropdownItem
                  title="Milestone 2"
                  text="Fab 27, 2023 23:55 - current"
                  initState={selectedMileStone === 'Milestone 2'}
                  node={
                    <div>
                      <DynamicPadding desktop="20px" mobile="15px" />
                      <div className="flex_space_between">
                        <Typography
                          variant="body4"
                          color={AppColor.transparentBlack}
                        >
                          Duration
                        </Typography>
                        <Typography variant="body4" fontWeight="500">
                          0 sec
                        </Typography>
                      </div>
                      <DynamicPadding desktop="9px" mobile="5px" />
                      <PercentBar
                        currentPercent={freelancerFakeProjectProgress}
                        color={freelancerFakeProject.color}
                      />
                      <DynamicPadding desktop="10px" mobile="5px" />
                      <div className="flex_space_between">
                        <Typography
                          variant="body4"
                          color={AppColor.transparentBlack}
                        >
                          Status
                        </Typography>
                        <Typography
                          variant="body4"
                          fontWeight="500"
                          color={freelancerFakeProject.color}
                        >
                          {freelancerFakeProject.label}
                        </Typography>
                      </div>

                      <DynamicPadding desktop="25px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="24px" mobile="20px" />
                      <Typography variant="body3" fontWeight="500">
                        Details
                      </Typography>
                      <DynamicPadding desktop="21px" mobile="20px" />

                      <div className={styles.text_dotted_wrapper}>
                        <TextDotted
                          fontWeightEndText="500"
                          info={true}
                          startTextColor={AppColor.transparentBlack}
                          text="Revisions"
                          textEnd="10"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          info={true}
                          startTextColor={AppColor.transparentBlack}
                          text="Source File"
                          textEnd="2"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          info={true}
                          startTextColor={AppColor.transparentBlack}
                          text="High Resolution"
                          textEnd="2"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          info={true}
                          startTextColor={AppColor.transparentBlack}
                          text="Delivery"
                          textEnd="6 days"
                        />
                      </div>
                      <DynamicPadding desktop="20px" mobile="15px" />
                      <div className="gap_10">
                        <Typography
                          fontWeight="500"
                          color={AppColor.transparentBlack}
                          variant="body4"
                        >
                          Specification
                        </Typography>
                        <Typography
                          fontWeight="500"
                          color={AppColor.transparentBlack}
                          variant="body4"
                        >
                          Documents
                        </Typography>
                      </div>

                      <DynamicPadding desktop="27px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="23px" mobile="20px" />

                      <Typography variant="body3" fontWeight="500">
                        Subscription
                      </Typography>
                      <DynamicPadding desktop="27px" mobile="20px" />

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
                        <Typography variant="body4">
                          Higher Priority Queue
                        </Typography>
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
                      <DynamicPadding desktop="14px" mobile="10px" />
                      <span
                        className={styles.mission_btn}
                        onClick={() => {
                          setShowMissionModal(true)
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
                      <DynamicPadding desktop="23px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="24px" mobile="20px" />
                      <Typography variant="body3" fontWeight="500">
                        Rewards
                      </Typography>
                      <DynamicPadding desktop="20px" mobile="20px" />

                      <div className={styles.rewards_wrapper}>
                        <AppColor.reward30Xp />
                        <AppColor.reward30XpDisabled />
                      </div>

                      <DynamicPadding desktop="25px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="24px" mobile="20px" />

                      <div className={styles.text_dotted_wrapper}>
                        <Typography variant="body3" fontWeight="500">
                          Summary
                        </Typography>
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Start Package"
                          endNode={
                            <div className="gap_5">
                              <AppColor.threeOfFive />{' '}
                              <Typography
                                textLineHeight={'1'}
                                variant="body4"
                                fontWeight="500"
                              >
                                $200
                              </Typography>
                            </div>
                          }
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Sale Discount 5%"
                          textEnd="-$10"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Service Fee 10%"
                          textEnd="-$19"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Bonus Reward"
                          endNode={
                            <div className="gap_5">
                              <AppColor.close
                                width={'15px'}
                                height={'15px'}
                                fill={AppColor.red}
                              />{' '}
                              <Typography
                                textLineHeight={'1'}
                                variant="body4"
                                fontWeight="500"
                              >
                                $10
                              </Typography>
                            </div>
                          }
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.orange}
                          text="Total To Receive"
                          endNode={
                            <Typography
                              textLineHeight={'1'}
                              color={AppColor.orange}
                              variant="body4"
                              fontWeight="500"
                            >
                              $181
                            </Typography>
                          }
                        />
                      </div>

                      <DynamicPadding desktop="20px" mobile="20px" />
                      <div className={styles.reward}>
                        <AppColor.gift width={15} height={15} />
                        <Typography
                          variant="body3"
                          color={AppColor.green}
                          textTransform="uppercase"
                        >
                          <span>1 reward available</span>
                        </Typography>
                      </div>
                      <DynamicPadding desktop="14px" mobile="20px" />

                      <div className={styles.trust_score}>
                        <AppColor.likeRounded />
                        <Typography color={AppColor.green}>96</Typography>
                        <Typography>Trust Score</Typography>
                        <div className={styles.info_box}>
                          <AppColor.info />
                        </div>
                        <div style={{ flexGrow: 1 }}></div>
                        <div
                          style={{
                            gap: '5px',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <AppColor.close
                            width={15}
                            height={15}
                            fill={AppColor.red}
                          />
                          <AppColor.moneyHummer width={26} height={22} />
                          <Typography
                            fontWeight="500"
                            textLineHeight="1"
                            variant="body4"
                          >
                            $40
                          </Typography>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>

              <DynamicPadding desktop="30px" mobile="15px" />
              <div className={`box_shadow ${styles.details_box}`}>
                <DetailsDropdownItem
                  title="Milestone 1"
                  text="Fab 27, 2023 23:55 - current"
                  initState={selectedMileStone === 'Milestone 1'}
                  node={
                    <div>
                      <DynamicPadding desktop="20px" mobile="15px" />
                      <div className="flex_space_between">
                        <Typography
                          variant="body4"
                          color={AppColor.transparentBlack}
                        >
                          Duration
                        </Typography>
                        <Typography variant="body4" fontWeight="500">
                          0 sec
                        </Typography>
                      </div>
                      <DynamicPadding desktop="9px" mobile="5px" />
                      <PercentBar
                        currentPercent={freelancerFakeProjectProgress}
                        color={freelancerFakeProject.color}
                      />
                      <DynamicPadding desktop="10px" mobile="5px" />
                      <div className="flex_space_between">
                        <Typography
                          variant="body4"
                          color={AppColor.transparentBlack}
                        >
                          Status
                        </Typography>
                        <Typography
                          variant="body4"
                          fontWeight="500"
                          color={freelancerFakeProject.color}
                        >
                          {freelancerFakeProject.label}
                        </Typography>
                      </div>

                      <DynamicPadding desktop="25px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="24px" mobile="20px" />
                      <Typography variant="body3" fontWeight="500">
                        Details
                      </Typography>
                      <DynamicPadding desktop="21px" mobile="20px" />

                      <div className={styles.text_dotted_wrapper}>
                        <TextDotted
                          fontWeightEndText="500"
                          info={true}
                          startTextColor={AppColor.transparentBlack}
                          text="Revisions"
                          textEnd="10"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          info={true}
                          startTextColor={AppColor.transparentBlack}
                          text="Source File"
                          textEnd="2"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          info={true}
                          startTextColor={AppColor.transparentBlack}
                          text="High Resolution"
                          textEnd="2"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          info={true}
                          startTextColor={AppColor.transparentBlack}
                          text="Delivery"
                          textEnd="6 days"
                        />
                      </div>
                      <DynamicPadding desktop="20px" mobile="15px" />
                      <div className="gap_10">
                        <Typography
                          fontWeight="500"
                          color={AppColor.transparentBlack}
                          variant="body4"
                        >
                          Specification
                        </Typography>
                        <Typography
                          fontWeight="500"
                          color={AppColor.transparentBlack}
                          variant="body4"
                        >
                          Documents
                        </Typography>
                      </div>

                      <DynamicPadding desktop="27px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="23px" mobile="20px" />

                      <Typography variant="body3" fontWeight="500">
                        Subscription
                      </Typography>
                      <DynamicPadding desktop="27px" mobile="20px" />

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
                        <Typography variant="body4">
                          Higher Priority Queue
                        </Typography>
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
                      <DynamicPadding desktop="14px" mobile="10px" />
                      <span
                        className={styles.mission_btn}
                        onClick={() => {
                          setShowMissionModal(true)
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
                      <DynamicPadding desktop="23px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="24px" mobile="20px" />
                      <Typography variant="body3" fontWeight="500">
                        Rewards
                      </Typography>
                      <DynamicPadding desktop="20px" mobile="20px" />

                      <div className={styles.rewards_wrapper}>
                        <AppColor.reward30Xp />
                        <AppColor.reward30XpDisabled />
                      </div>

                      <DynamicPadding desktop="25px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="24px" mobile="20px" />

                      <div className={styles.text_dotted_wrapper}>
                        <Typography variant="body3" fontWeight="500">
                          Summary
                        </Typography>
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Start Package"
                          endNode={
                            <div className="gap_5">
                              <AppColor.threeOfFive />{' '}
                              <Typography
                                textLineHeight={'1'}
                                variant="body4"
                                fontWeight="500"
                              >
                                $200
                              </Typography>
                            </div>
                          }
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Sale Discount 5%"
                          textEnd="-$10"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Service Fee 10%"
                          textEnd="-$19"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Bonus Reward"
                          endNode={
                            <div className="gap_5">
                              <AppColor.close
                                width={'15px'}
                                height={'15px'}
                                fill={AppColor.red}
                              />{' '}
                              <Typography
                                textLineHeight={'1'}
                                variant="body4"
                                fontWeight="500"
                              >
                                $10
                              </Typography>
                            </div>
                          }
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.orange}
                          text="Total To Receive"
                          endNode={
                            <Typography
                              textLineHeight={'1'}
                              color={AppColor.orange}
                              variant="body4"
                              fontWeight="500"
                            >
                              $181
                            </Typography>
                          }
                        />
                      </div>

                      <DynamicPadding desktop="20px" mobile="20px" />
                      <div className={styles.reward}>
                        <AppColor.gift width={15} height={15} />
                        <Typography
                          variant="body3"
                          color={AppColor.green}
                          textTransform="uppercase"
                        >
                          <span>1 reward available</span>
                        </Typography>
                      </div>
                      <DynamicPadding desktop="14px" mobile="20px" />

                      <div className={styles.trust_score}>
                        <AppColor.likeRounded />
                        <Typography color={AppColor.green}>96</Typography>
                        <Typography>Trust Score</Typography>
                        <div className={styles.info_box}>
                          <AppColor.info />
                        </div>
                        <div style={{ flexGrow: 1 }}></div>
                        <div
                          style={{
                            gap: '5px',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <AppColor.close
                            width={15}
                            height={15}
                            fill={AppColor.red}
                          />
                          <AppColor.moneyHummer width={26} height={22} />
                          <Typography
                            fontWeight="500"
                            textLineHeight="1"
                            variant="body4"
                          >
                            $40
                          </Typography>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          }
        />
      </div>
      <CardsSliderRelated secondSlider={true} />
      <div className="wrapper_page">
        <AskedQuestion />
      </div>

      <Footer />

      {showMissionModal && (
        <MissionModal
          onClose={() => {
            setShowMissionModal(false)
          }}
        />
      )}
    </div>
  )
}

interface MissionModalProps {
  onClose: () => void
}

const MissionModal = ({ onClose }: MissionModalProps): JSX.Element => {
  return (
    <ModalCenterBasic
      bottomPartPadding="0px"
      callbackClose={() => {
        onClose()
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
        Freelancers create some tasks to achieve. After successful completion
        you can get valuable rewards.
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
  )
}

export default ServiceNegotiationCustomer
