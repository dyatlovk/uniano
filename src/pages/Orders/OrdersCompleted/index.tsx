import AskedQuestion from '@common/components/AskedQuestions/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import Footer from '@common/components/Footer/Footer'
import Header from '@common/components/Header/Header/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import StepsStates from '@common/components/StepsStates/index'
import BigInput from '@common/components/ui/BigInput/index'
import CenterShadowBox from '@common/components/ui/CenterShadowBox/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import PageDetails from '@common/components/ui/PageDetails/index'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import SizeBox from '@common/components/ui/SizeBox/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import Typography from '@common/components/ui/Typography/Typography'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import StatesModel from '@common/models/orders/statesModel'
import FreelancerProjectsModel from '@common/models/partnership/freelancesProjectsModel'
import PartnersModel from '@common/models/partnership/partnersModel'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { TipsItem } from '@pages/Partnership/pages/PartnershipCompleted/index'
import ManagersDropDown from '@pages/Partnership/pages/ProgressFreelancer/components/ManagerDropdown/index'
import { DetailsDropdownItem } from '@pages/Partnership/pages/ProgressFreelancer/index'
import { SubscriptionList } from '@pages/Service/Service/components/Subscriptions/List/index'
import MissionModal from '@pages/Service/ServiceProgress/components/MissionModal/index'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'

const freelancerProjectModel = new FreelancerProjectsModel(
  FreelancerProjectsModel.makeFakeData()
)
const freelancerFakeProject = freelancerProjectModel.findByLabel('Progress')
const freelancerFakeProjectProgress =
  freelancerProjectModel.getProgress('Progress')

const OrdersCompleted = () => {
  const arrayHistory = [
    'Partnership',
    'Development',
    'Web Development',
    'WordPress',
  ]
  const title = 'Logo by sample in vector in maximum quality'

  const [partnersModel, setPartnersModel] = useState<PartnersModel | null>(null)
  const [partnersSelectedUser, setPartnersSelecteduser] =
    useState<PartnerShip.Manager | null>(null)
  const [showMissionModal, setShowMissionModal] = useState<boolean>(false)

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
            currentState={'Completed'}
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

        <DynamicPadding desktop="14px" mobile="14px" />
        <UserTopPageInfo user={fakeUserConstant} />
        <DynamicPadding desktop="42px" mobile="20px" />

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
              <Typography variant="body3" fontWeight="500">
                Review
              </Typography>
              <DynamicPadding desktop="23px" mobile="20px" />
              <BigInput />
              <DynamicPadding desktop="44px" mobile="20px" />

              <Typography variant="body3" fontWeight="500">
                Warranty
              </Typography>
              <DynamicPadding desktop="27px" mobile="20px" />
              <CenterShadowBox
                elements={[
                  <div className="gap_10">
                    <Typography variant="body4" fontWeight="500">
                      Start Subscription
                    </Typography>
                    <div className="gap_5">
                      <AppColor.shield />
                      <Typography variant="body4">3 of 10 days</Typography>
                    </div>
                  </div>,
                  <DynamicPadding desktop="17px" mobile="17px" />,
                  <PercentBar currentPercent={30} height="3px" />,
                  <DynamicPadding desktop="20px" mobile="20px" />,
                  <div className="gap_5_wrap">
                    <Typography variant="body4">
                      You can upgrade your subscription to extend your warranty
                    </Typography>
                    <SizeBox width="10px" />
                    <MyButtonTransparentOrange
                      padding="7.5px 14px"
                      fontWeight="500"
                      textTransform="uppercase"
                      onClick={() => {}}
                    >
                      <AppColor.buy fill={AppColor.orange} />
                      upgrade now
                    </MyButtonTransparentOrange>
                  </div>,
                ]}
                align="start"
                gap="0"
                paddingBoxDesktop="22px 30px 30px 30px"
                paddingBoxMobile="15px"
              />
              <DynamicPadding desktop="25px" mobile="20px" />

              <Typography variant="body3" fontWeight="500">
                Tips
              </Typography>
              <DynamicPadding desktop="25px" mobile="20px" />

              <TipsItem
                description={'Start a new order project with'}
                firstButtonText={'this order'}
                secondButtonText={'new order'}
              />
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
              <DynamicPadding desktop="25px" mobile="20px" />
              <div className="justify_center">
                <Typography
                  variant="body4"
                  textTransform="uppercase"
                  fontWeight="500"
                >
                  Project 1
                </Typography>
              </div>
              <DynamicPadding desktop="30px" mobile="15px" />
              <div className={`box_shadow ${styles.details_box}`}>
                <DetailsDropdownItem
                  title="Fixed"
                  text="Fab 27, 2023 23:40 - Fab 28, 2023 21:55"
                  initState={true}
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
                          22 hrs 15 min
                        </Typography>
                      </div>
                      <DynamicPadding desktop="9px" mobile="5px" />
                      <PercentBar
                        currentPercent={freelancerFakeProjectProgress}
                        color={freelancerFakeProject.color}
                        height="5px"
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
                          info={false}
                          startTextColor={AppColor.transparentBlack}
                          text="Delivery"
                          textEnd="10"
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
                        <AppColor.reward10PTS />
                        <AppColor.reward30Xp />
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
                          text="Start Package Milestone 2"
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
                                color={AppColor.orange}
                                variant="body4"
                                fontWeight="500"
                              >
                                $500
                              </Typography>
                            </div>
                          }
                        />
                      </div>
                      <DynamicPadding desktop="20px" mobile="15px" />
                      <div className="gap_5">
                        <Typography variant="body4">
                          Public Financial Details{' '}
                        </Typography>
                        <SwitchButton
                          height="24px"
                          width="44px"
                          startValue={true}
                        />
                      </div>
                      <DynamicPadding desktop="20px" mobile="15px" />

                      <Typography
                        variant="body5"
                        color={AppColor.transparentBlack}
                        fontWeight="500"
                      >
                        Invoice
                      </Typography>

                      <DynamicPadding desktop="20px" mobile="15px" />
                      <div className="gap_5">
                        <AppColor.likeRounded />
                        <Typography variant="body4" fontWeight="500">
                          <span color={AppColor.green}>96</span> Trust Score
                        </Typography>
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

      <DynamicPadding />
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

export default OrdersCompleted
