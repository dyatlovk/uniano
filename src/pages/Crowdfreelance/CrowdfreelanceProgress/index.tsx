import Header from '@common/components/Header/Header/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import Typography from '@common/components/ui/Typography/Typography'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import { useEffect, useState } from 'react'
import DetailsTableMultiNodes from '@common/components/ui/DetailsTable/DetailsTableMultiNodes/index'
import UserAvatar from '@common/components/ui/UserAvatar/index'
import CenterShadowBox from '@common/components/ui/CenterShadowBox/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import { Link } from 'react-router-dom'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import { DetailsDropdownItem } from '@pages/Partnership/pages/ProgressFreelancer/index'
import StepsStates from '@common/components/StepsStates/index'
import StatesModel from '@common/models/partnership/statesModel'
import classNames from 'classnames'
import ManagersDropDown from '@pages/Partnership/pages/ProgressFreelancer/components/ManagerDropdown/index'
import PartnersModel from '@common/models/partnership/partnersModel'
import FilesModal from '@pages/Service/ServiceProgress/components/FilesModal/index'

const CrowdfreelanceProgress = () => {
  const arrayHistory = ['Crowdfreelance', 'Tech', 'Web Service']
  const title = 'MONITREE - Vines that grow along the moni...'

  const [partnersModel, setPartnersModel] = useState<PartnersModel | null>(null)
  const [partnersSelectedUser, setPartnersSelecteduser] =
    useState<PartnerShip.Manager | null>(null)
  const [showFilesModal, setShowFilesModal] = useState<boolean>(false)

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

        <DynamicPadding desktop="14px" mobile="20px" />
        <UserTopPageInfo user={fakeUserConstant} />
        <DynamicPadding />

        <ResponsiveLayoutTwo
          gap="80px"
          item1MaxWidth="730px"
          item2MaxWidth="390px"
          item1={
            <div>
              <DetailsTableMultiNodes
                titles={['User', 'Date', 'Action']}
                removeNavBar={true}
                elements={[
                  {
                    nodes: [
                      <UserAvatar
                        active={true}
                        name={fakeUserConstant.name}
                        url={fakeUserConstant.image}
                        role="Customer"
                        flag={<AppColor.UkraineFlagIcon />}
                      />,
                      <div style={{ maxWidth: '95px' }}>
                        <Typography variant="body4">
                          Feb 26, 2021 16:32
                        </Typography>
                      </div>,
                      <div
                        className={classNames(
                          'gap_5',
                          styles.sponsorship_orange
                        )}
                      >
                        <Typography
                          variant="body4"
                          fontWeight="500"
                          color={AppColor.orange}
                        >
                          Offered to complete sponsorship
                        </Typography>
                        <AppColor.time />
                      </div>,
                    ],
                  },
                  {
                    nodes: [
                      <UserAvatar
                        active={true}
                        name={fakeUserConstant.name}
                        url={fakeUserConstant.image}
                        role="Customer"
                        flag={<AppColor.UkraineFlagIcon />}
                      />,
                      <div style={{ maxWidth: '95px' }}>
                        <Typography variant="body4">
                          Feb 26, 2021 16:32
                        </Typography>
                      </div>,
                      <div
                        className={classNames(
                          'gap_5',
                          styles.sponsorship_green
                        )}
                      >
                        <Typography
                          variant="body4"
                          fontWeight="500"
                          color={AppColor.green}
                        >
                          Started the sponsorship
                        </Typography>
                        <AppColor.iconChecked />
                      </div>,
                    ],
                  },
                ]}
              />

              <DynamicPadding desktop="30px" />

              <div className={styles.cards_grid}>
                <div
                  className={styles.card_item}
                  onClick={() => {
                    setShowFilesModal(true)
                  }}
                >
                  <CenterShadowBox
                    elements={[
                      <AppColor.files height={'27px'} />,
                      <Typography variant="body4" fontWeight="500">
                        Files
                      </Typography>,
                      <Typography
                        variant="body5"
                        color={AppColor.transparentBlack}
                        fontWeight="500"
                        textTransform="uppercase"
                      >
                        3 files
                      </Typography>,
                    ]}
                    gap="20px"
                    paddingBoxDesktop="20px"
                  />
                </div>
                <div className={styles.card_item}>
                  <CenterShadowBox
                    elements={[
                      <AppColor.caseIcon height={'27px'} />,
                      <Typography variant="body4" fontWeight="500">
                        Sponsorship & Shipping
                      </Typography>,
                      <Typography
                        variant="body5"
                        color={AppColor.transparentBlack}
                        fontWeight="500"
                        textTransform="uppercase"
                      >
                        Change
                      </Typography>,
                    ]}
                    gap="20px"
                    paddingBoxDesktop="20px"
                  />
                </div>
              </div>

              <DynamicPadding />

              <div className="flex_space_between">
                <Link to={'/crowdfreelance/campaign'}>
                  <ChevronMoveTo
                    onClick={() => {}}
                    text="Step back"
                    title="Campaign"
                    variant="left"
                  />
                </Link>
                <Link
                  to={'crowdfreelance/completed'}
                  style={{ pointerEvents: 'none' }}
                >
                  <ChevronMoveTo
                    onClick={() => {}}
                    text="Next step"
                    disabled={true}
                    title="Complete"
                    variant="right"
                  />
                </Link>
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
              <div className={`box_shadow ${styles.details_box}`}>
                <DetailsDropdownItem
                  title="Easy start"
                  text="Fab 27, 2023 23:40 - Fab 28, 2023 21:55"
                  initState={true}
                  node={
                    <div>
                      <DynamicPadding desktop="22px" mobile="15px" />
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
                        currentPercent={100}
                        color={AppColor.green}
                        height="5px"
                      />
                      <DynamicPadding desktop="9px" mobile="5px" />
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
                          color={AppColor.green}
                        >
                          Completed
                        </Typography>
                      </div>

                      <DynamicPadding desktop="22px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="24px" mobile="20px" />
                      <Typography variant="body3" fontWeight="500">
                        Details
                      </Typography>
                      <DynamicPadding desktop="22px" mobile="20px" />

                      <div className={styles.text_dotted_wrapper}>
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Digital copy of game"
                          textEnd="1"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Your name in credits"
                          endNode={
                            <AppColor.singTrue stroke={AppColor.green} />
                          }
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Shipping"
                          textEnd="Ukraine"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Delivery"
                          textEnd="30 days"
                        />
                      </div>

                      <DynamicPadding desktop="30px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="25px" mobile="20px" />
                      <Typography variant="body3" fontWeight="500">
                        Rewards
                      </Typography>
                      <DynamicPadding desktop="22px" mobile="20px" />

                      <div className={styles.rewards_wrapper}>
                        <AppColor.reward10PTS height={'110px'} />
                        <AppColor.reward30Xp height={'110px'} />
                        <AppColor.rewardBox height={'110px'} />
                      </div>

                      <DynamicPadding desktop="25px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="24px" mobile="20px" />
                      <Typography variant="body3" fontWeight="500">
                        Summary
                      </Typography>
                      <DynamicPadding desktop="22px" mobile="20px" />
                      <div className={styles.text_dotted_wrapper}>
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Scheduled Date"
                          textEnd="in 14 days 12 hrs"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Scheduled Payment"
                          textEnd="$15 100"
                        />
                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.transparentBlack}
                          text="Easy Start Sponsorship"
                          textEnd="$15 100"
                        />

                        <TextDotted
                          fontWeightEndText="500"
                          startTextColor={AppColor.orange}
                          text="Total To Pay"
                          endNode={
                            <div className="gap_5">
                              <Typography
                                textLineHeight={'1'}
                                color={AppColor.orange}
                                variant="body4"
                                fontWeight="500"
                              >
                                $15 100
                              </Typography>
                            </div>
                          }
                        />
                      </div>
                      <DynamicPadding desktop="20px" mobile="15px" />
                      <div className="gap_5">
                        <Typography variant="body4">
                          Repeatable Monthly{' '}
                        </Typography>
                        <SwitchButton
                          height="24px"
                          width="44px"
                          startValue={true}
                        />
                        <div className={styles.info_icon}>
                          <AppColor.info />
                        </div>
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
                        <div className={styles.info_icon}>
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
      <CardsSliderRelated />

      <div className="wrapper_page">
        <AskedQuestion />
      </div>
      <Footer />

      {showFilesModal && (
        <FilesModal
          onClose={() => {
            setShowFilesModal(false)
          }}
        />
      )}
    </div>
  )
}

export default CrowdfreelanceProgress
