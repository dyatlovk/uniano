import AskedQuestion from '@common/components/AskedQuestions/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import Footer from '@common/components/Footer/Footer'
import Header from '@common/components/Header/Header/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import StepsStates from '@common/components/StepsStates/index'
import CenterShadowBox from '@common/components/ui/CenterShadowBox/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import DetailsProgressOrders from '@common/components/ui/DetailsTable/variants/DetailsProgressOrders/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import Typography from '@common/components/ui/Typography/Typography'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import StatesModel from '@common/models/orders/statesModel'
import FreelancerProjectsModel from '@common/models/partnership/freelancesProjectsModel'
import PartnersModel from '@common/models/partnership/partnersModel'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import ManagersDropDown from '@pages/Partnership/pages/ProgressFreelancer/components/ManagerDropdown/index'
import { DetailsDropdownItem } from '@pages/Partnership/pages/ProgressFreelancer/index'
import { SubscriptionList } from '@pages/Service/Service/components/Subscriptions/List/index'
import CancelModal from '@pages/Service/ServiceProgress/components/CancelModal/index'
import FilesModal from '@pages/Service/ServiceProgress/components/FilesModal/index'
import MissionModal from '@pages/Service/ServiceProgress/components/MissionModal/index'
import NegotiationsModal from '@pages/Service/ServiceProgress/components/NegotiationModal/index'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'

const freelancerProjectModel = new FreelancerProjectsModel(
  FreelancerProjectsModel.makeFakeData()
)
const freelancerFakeProject = freelancerProjectModel.findByLabel('Progress')
const freelancerFakeProjectProgress =
  freelancerProjectModel.getProgress('Progress')

const OrdersProgress = () => {
  const [showFilesModal, setShowFilesModal] = useState<boolean>(false)
  const [showNegotiationModal, setShowNegotiationModal] =
    useState<boolean>(false)
  const [showCancelModal, setShowCancelModal] = useState<boolean>(false)
  const [showMissionModal, setShowMissionModal] = useState<boolean>(false)
  const [partnersModel, setPartnersModel] = useState<PartnersModel | null>(null)
  const [partnersSelectedUser, setPartnersSelecteduser] =
    useState<PartnerShip.Manager | null>(null)

  const arrayHistory = [
    'Partnership',
    'Development',
    'Web Development',
    'WordPress',
  ]
  const title = 'Logo by sample in vector in maximum quality'

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    setPartnersModel(new PartnersModel())
  }, [])

  return (
    <div>
      <Header />

      <div className={styles.steps_wrap}>
        <div className="wrapper">
          <StepsStates
            useBg={false}
            maxWidth="100%"
            states={StatesModel.getAll()}
            currentState={'Progress'}
          />
        </div>
      </div>

      <div className={'wrapper_page'}>
        <PageDetails
          historyNode={
            <NavigationItem image={<AppColor.home />} textList={arrayHistory} />
          }
          pageTitle={title}
        />

        <DynamicPadding desktop="15px" mobile="20px" />
        <UserTopPageInfo user={fakeUserConstant} />
        <DynamicPadding />

        <ResponsiveLayoutTwo
          gap="80px"
          item1MaxWidth="730px"
          item2MaxWidth="388px"
          orderItem1Desktop={0}
          orderItem1Mobile={1}
          orderItem2Desktop={1}
          orderItem2Mobile={0}
          item1={
            <div style={{ width: '100%' }}>
              <DetailsProgressOrders
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
                      <AppColor.files />,
                      <Typography variant="body4" fontWeight="500">
                        Files
                      </Typography>,
                      <Typography
                        color={AppColor.transparentBlack}
                        textTransform="uppercase"
                        variant="body5"
                        fontWeight="500"
                      >
                        3 files
                      </Typography>,
                    ]}
                    gap="20px"
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
                      <AppColor.negotiation />,
                      <Typography variant="body4" fontWeight="500">
                        Negotiations
                      </Typography>,
                      <Typography
                        color={AppColor.transparentBlack}
                        textTransform="uppercase"
                        variant="body5"
                        fontWeight="500"
                      >
                        Change
                      </Typography>,
                    ]}
                    gap="20px"
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
                      <AppColor.cancel />,
                      <Typography variant="body4" fontWeight="500">
                        Cancel
                      </Typography>,
                      <Typography
                        color={AppColor.transparentBlack}
                        textTransform="uppercase"
                        variant="body5"
                        fontWeight="500"
                      >
                        project
                      </Typography>,
                    ]}
                    gap="20px"
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
                        height={'5px'}
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
                          text="Delivary"
                          textEnd="1 day"
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
                      </div>

                      <DynamicPadding desktop="27px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="23px" mobile="20px" />

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
                          text="Order"
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
                          startTextColor={AppColor.orange}
                          text="Total To Pay"
                          endNode={
                            <div className="gap_5">
                              <AppColor.lock />
                              <Typography
                                textLineHeight={'1'}
                                variant="body4"
                                fontWeight="500"
                                color={AppColor.orange}
                              >
                                $200
                              </Typography>
                            </div>
                          }
                        />
                      </div>

                      <DynamicPadding desktop="20px" mobile="20px" />

                      <div className="gap_5">
                        <Typography variant="body4">
                          Public Financial Details
                        </Typography>
                        <SwitchButton
                          width="44px"
                          height="24px"
                          startValue={true}
                        />
                        <div
                          className="circle_shadow"
                          style={{ padding: '3px 6px' }}
                        >
                          <AppColor.info />
                        </div>
                      </div>

                      <DynamicPadding desktop="20px" mobile="5px" />

                      <div className={styles.trust_score}>
                        <AppColor.likeRounded />
                        <Typography color={AppColor.green}>96</Typography>
                        <Typography>Trust Score</Typography>
                        <div className={styles.info_box}>
                          <AppColor.info />
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

export default OrdersProgress
