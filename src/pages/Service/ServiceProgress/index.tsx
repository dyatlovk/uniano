import Header from '@common/components/Header/Header/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import DetailsProgresService from '@common/components/ui/DetailsTable/variants/DetailsProgresService/index'
import CenterShadowBox from '@common/components/ui/CenterShadowBox/index'
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
import FreelancerProjectsModel from '@common/models/partnership/freelancesProjectsModel'
import ManagersDropDown from '@pages/Partnership/pages/ProgressFreelancer/components/ManagerDropdown/index'
import PartnersModel from '@common/models/partnership/partnersModel'
import { SubscriptionList } from '../Service/components/Subscriptions/List'
import NegotiationsModal from './components/NegotiationModal'
import CancelModal from './components/CancelModal'
import FilesModal from './components/FilesModal'
import MissionModal from './components/MissionModal'

const freelancerProjectModel = new FreelancerProjectsModel(
  FreelancerProjectsModel.makeFakeData()
)
const freelancerFakeProject = freelancerProjectModel.findByLabel('Progress')
const freelancerFakeProjectProgress =
  freelancerProjectModel.getProgress('Progress')

const ServiceProgress = () => {
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
  const [showMissionModal, setShowMissionModal] = useState<boolean>(false)
  const [showFilesModal, setShowFilesModal] = useState<boolean>(false)
  const [showNegotiationModal, setShowNegotiationModal] =
    useState<boolean>(false)
  const [showCancelModal, setShowCancelModal] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    setPartnersModel(new PartnersModel())
  }, [])

  return (
    <div>
      <Header />

      <StepsStates states={StatesModel.getAll()} currentState={'Progress'} />

      <div className={'wrapper_page'}>
        <PageDetails
          historyNode={
            <NavigationItem image={<AppColor.home />} textList={arrayHistory} />
          }
          pageTitle={title}
        />

        <DynamicPadding desktop="15px" mobile="20px" />
        <UserTopPageInfo user={fakeUserConstant} />
        <DynamicPadding desktop="51px" />

        <ResponsiveLayoutTwo
          gap="80px"
          item1MaxWidth="730px"
          item2MaxWidth="390px"
          item1={
            <div className={styles.details_progress}>
              <DetailsProgresService
                informationTable={[
                  {
                    action: 'Offered new negotiation',
                    date: 'Feb 26, 2021 16:32 ',
                    memberName: 'Artem M.',
                    page: 0,
                  },
                ]}
              />
              <DynamicPadding />
              <div className={styles.shadow_box_grid}>
                <div
                  className={styles.action}
                  onClick={() => {
                    setShowFilesModal(true)
                  }}
                >
                  <CenterShadowBox
                    elements={[
                      <AppColor.files height={27} />,
                      <Typography
                        variant="body4"
                        fontWeight="500"
                        textLineHeight="1"
                      >
                        Files
                      </Typography>,
                      <Typography
                        color={AppColor.transparentBlack}
                        textTransform="uppercase"
                        variant="body5"
                        fontWeight="500"
                        textLineHeight="1"
                      >
                        3 files
                      </Typography>,
                    ]}
                    gap="15px"
                    paddingBoxDesktop="20px 0px"
                  />
                </div>

                <div
                  className={styles.action}
                  onClick={() => {
                    setShowNegotiationModal(true)
                  }}
                >
                  <CenterShadowBox
                    elements={[
                      <AppColor.negotiation height={27} />,
                      <Typography
                        variant="body4"
                        fontWeight="500"
                        textLineHeight="1"
                      >
                        Negotiations
                      </Typography>,
                      <Typography
                        color={AppColor.transparentBlack}
                        textTransform="uppercase"
                        variant="body5"
                        fontWeight="500"
                        textLineHeight="1"
                      >
                        Change
                      </Typography>,
                    ]}
                    gap="15px"
                    paddingBoxDesktop="20px 0px"
                  />
                </div>

                <div
                  className={styles.action}
                  onClick={() => {
                    setShowCancelModal(true)
                  }}
                >
                  <CenterShadowBox
                    elements={[
                      <AppColor.cancel
                        className={styles.action_icon_cancel}
                        height={27}
                      />,
                      <Typography
                        variant="body4"
                        fontWeight="500"
                        textLineHeight="1"
                      >
                        Cancel
                      </Typography>,
                      <Typography
                        color={AppColor.transparentBlack}
                        textTransform="uppercase"
                        variant="body5"
                        fontWeight="500"
                        textLineHeight="1"
                      >
                        project
                      </Typography>,
                    ]}
                    gap="15px"
                    paddingBoxDesktop="20px 0px"
                  />
                </div>
              </div>

              <DynamicPadding />
              <div className="flex_space_between">
                <ChevronMoveTo
                  onClick={() => {}}
                  text="Step back"
                  title="negotiation"
                  variant="left"
                />
                <ChevronMoveTo
                  onClick={() => {}}
                  text="Final step"
                  title="complete"
                  variant="right"
                  disabled={true}
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
                  initState={false}
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
                  initState={false}
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

      {showFilesModal && (
        <FilesModal
          onClose={() => {
            setShowFilesModal(false)
          }}
        />
      )}

      {showNegotiationModal && (
        <NegotiationsModal
          onClose={() => {
            setShowNegotiationModal(false)
          }}
        />
      )}

      {showCancelModal && (
        <CancelModal
          onClose={() => {
            setShowCancelModal(false)
          }}
        />
      )}
    </div>
  )
}

export default ServiceProgress
