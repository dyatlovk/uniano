import AskedQuestion from '@common/components/AskedQuestions/index'
import ButtonChooseList from '@common/components/ButtonChooseList/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import Footer from '@common/components/Footer/Footer'
import Header from '@common/components/Header/Header/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import { StepItem } from '@common/components/StepsOfPreparing/index'
import StepsStates from '@common/components/StepsStates/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import MyButton from '@common/components/ui/MyButton/MyButton'
import PageDetails from '@common/components/ui/PageDetails/index'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import Preloader from '@common/components/ui/Preloader/index'
import {
  StepActionNode,
  StepNav,
  StepResolverItem,
  StepsResolver,
} from '@common/components/ui/StepsResolver/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import Typography from '@common/components/ui/Typography/Typography'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import useUpdater from '@common/helpers/useUpdater'
import FreelancerProjectsModel from '@common/models/partnership/freelancesProjectsModel'
import PartnersModel from '@common/models/partnership/partnersModel'
import StatesModel from '@common/models/services/statesModel'
import StepsNegotiationCustomerModel from '@common/models/services/stepsNegotiationCustomerModel'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import ManagersDropDown from '@pages/Partnership/pages/ProgressFreelancer/components/ManagerDropdown/index'
import { DetailsDropdownItem } from '@pages/Partnership/pages/ProgressFreelancer/index'
import { useEffect, useState, useTransition } from 'react'
import { SubscriptionList } from '../Service/components/Subscriptions/List'
import MissionModal from '../shared/MissionModal'
import SpecsModal from '../shared/SpecModal'
import DocsStep from './steps/Docs'
import SpecsStep from './steps/Specs'
import styles from './style.module.scss'

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
  const [specificationModalShow, setSpecificationModalShow] =
    useState<boolean>(false)
  const [isSpecsModalPending, startSpecsModalTransition] = useTransition()
  const [isMissionModalPending, startMissionModalTransition] = useTransition()
  const [stepsModel, setStepsModel] = useState<StepsNegotiationCustomerModel>(
    new StepsNegotiationCustomerModel()
  )
  const updater = useUpdater()
  const [stepsNeedUpdate, setStepsNeedUpdate] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    setPartnersModel(new PartnersModel())
  }, [])

  useEffect(() => {
    stepsModel.replace({
      steps: [
        {
          no: 1,
          title: 'Select specification',
          isVisible: true,
          isActive: false,
          isResolved: false,
          actiondNode: (
            <div
              className={styles.link_hover}
              onClick={() => {
                stepsModel.setResolveMode(1)
                setStepsNeedUpdate(prev => !prev)
                updater()
              }}
            >
              <StepActionNode title="Change specification" />
            </div>
          ),
          resolvingNode: (
            <SpecsStep
              onReady={() => {
                stepsModel.setReadyToResolve(1, true)
                stepsModel.updateResolvedTitle(1, 'Specs resolved title')
                setStepsNeedUpdate(prev => !prev)
                updater()
              }}
            />
          ),
        },
        {
          no: 2,
          title: 'Change documents to sign',
          isVisible: true,
          isActive: false,
          isResolved: false,
          actiondNode: (
            <div
              className={styles.link_hover}
              onClick={() => {
                stepsModel.setResolveMode(2)
                setStepsNeedUpdate(prev => !prev)
                stepsModel.setReadyToResolve(2, true)
                updater()
              }}
            >
              <StepActionNode title="Change documents to sign" />
            </div>
          ),
          resolvingNode: (
            <DocsStep
              onReady={() => {
                stepsModel.setReadyToResolve(2, true)
                stepsModel.updateResolvedTitle(2, 'Docs sign resolved')
                setStepsNeedUpdate(prev => !prev)
                updater()
              }}
            />
          ),
        },
      ],
    })
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
                onSolveClick={() => {
                  startSpecsModalTransition(() => {
                    setSpecificationModalShow(true)
                  })
                }}
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

              <StepsResolver needUpdate={stepsNeedUpdate}>
                {stepsModel.getAll().steps.map(
                  item =>
                    item.isVisible && (
                      <StepResolverItem
                        onResolved={(no: number) => {
                          stepsModel.resolveAndClose(no)
                          updater()
                        }}
                        forceUpdate={stepsNeedUpdate}
                        data={item}
                      >
                        <StepNav
                          onNext={() => {
                            stepsModel.resolveAndClose(item.no)
                            const nextItem = stepsModel.findNext(item.no)
                            if (nextItem) stepsModel.setResolveMode(nextItem.no)
                            updater()
                          }}
                          onPrev={() => {
                            stepsModel.resolveAndClose(item.no)
                            const prevItem = stepsModel.findPrev(item.no)
                            if (prevItem) stepsModel.setResolveMode(prevItem.no)
                            updater()
                          }}
                          nextVisible={true}
                          prevVisible={!stepsModel.isFirstItem(item.no)}
                          nextDisable={!stepsModel.getReadyToResolve(item.no)}
                          prevDisable={stepsModel.isFirstItem(item.no)}
                        />
                      </StepResolverItem>
                    )
                )}
              </StepsResolver>

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
                          startMissionModalTransition(() => {
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
                          startMissionModalTransition(() => {
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

      {isMissionModalPending && <Preloader />}
      {showMissionModal && (
        <MissionModal
          onClose={() => {
            setShowMissionModal(false)
          }}
        />
      )}

      {isSpecsModalPending && <Preloader />}
      {specificationModalShow && (
        <SpecsModal
          onClose={() => {
            setSpecificationModalShow(false)
          }}
        />
      )}
    </div>
  )
}

export default ServiceNegotiationCustomer
