import Header from '@common/components/Header/Header/index'
import styles from './style.module.scss'
import PageDetails from '@common/components/ui/PageDetails/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import AppColor from '@common/styles/variables-static'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import { fakeUserConstant } from '@common/models/user'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import DetailsProgress from '@common/components/ui/DetailsTable/variants/DetailsProgress/index'
import Typography from '@common/components/ui/Typography/Typography'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import { useEffect, useState } from 'react'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import { Link } from 'react-router-dom'
import StepsStates from '@common/components/StepsStates/index'
import StatesModel from '@common/models/partnership/statesModel'
import PartnersModel from '@common/models/partnership/partnersModel'
import ManagersDropDown from './components/ManagerDropdown'
import { ToolsCommon } from '@common/components/Partnership/Tools/index'

const ProgressFreelancer = () => {
  const [partnersModel, setPartnersModel] = useState<PartnersModel | null>(null)
  const [partnersSelectedUser, setPartnersSelecteduser] =
    useState<PartnerShip.Manager | null>(null)

  const arrayHistory = [
    'Partnership',
    'Development',
    'Web Development',
    'WordPress',
  ]
  const title = 'Artem Markevych WordPress Partnership'

  useEffect(() => {
    setPartnersModel(new PartnersModel())
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0 })
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

        <UserTopPageInfo
          user={fakeUserConstant}
          nodeAfter={<AppColor.refreshA />}
        />

        <DynamicPadding />

        <ResponsiveLayoutTwo
          orderItem1Desktop={0}
          orderItem2Desktop={1}
          orderItem1Mobile={1}
          orderItem2Mobile={0}
          item1MaxWidth="730px"
          item2MaxWidth="388px"
          gap="80px"
          item1={
            <div style={{ width: '100%' }}>
              <DetailsProgress
                informationDropdown={[
                  {
                    earned: '5 312',
                    rate: '5',
                    role: 'Referrer',
                    service: 'Artem Markevych Logo...',
                    traffic: 'https://workspree.com...',
                  },
                ]}
                informationTable={[
                  {
                    action: 'Service invitation',
                    date: 'Feb 26, 2021 16:32 ',
                    memberName: 'Artem M.',
                    page: 0,
                  },
                ]}
              />
              <DynamicPadding />
              <ToolsCommon />
              <DynamicPadding desktop="49px" />

              <div className="flex_space_between">
                <Link to={'/partnership/freelancer/selection'}>
                  <ChevronMoveTo
                    onClick={() => {}}
                    text="Step back"
                    title="Selection"
                    variant="left"
                  />
                </Link>
                <Link to={'/partnership/freelancer/completed'}>
                  <ChevronMoveTo
                    onClick={() => {}}
                    text="Final step"
                    title="complete"
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

              <DynamicPadding desktop="25px" mobile="20px" />

              <div className={`box_shadow ${styles.details_box}`}>
                <DetailsDropdownItem
                  title="Partnership"
                  text="Fab 27, 2023 23:55 - current"
                  initState={true}
                  node={
                    <div>
                      <DynamicPadding desktop="19px" mobile="15px" />
                      <div className="flex_space_between">
                        <Typography
                          variant="body4"
                          color={AppColor.transparentBlack}
                        >
                          Duration
                        </Typography>
                        <Typography variant="body4" fontWeight="500">
                          45 m 32 sec
                        </Typography>
                      </div>
                      <DynamicPadding desktop="9px" mobile="5px" />
                      <PercentBar currentPercent={20} height="5px" />
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
                          color={AppColor.orange}
                        >
                          Progress
                        </Typography>
                      </div>

                      <DynamicPadding desktop="25px" mobile="20px" />
                      <HorizontalLine />
                      <DynamicPadding desktop="24px" mobile="20px" />
                      <Typography variant="body3" fontWeight="500">
                        Statistics
                      </Typography>
                      <DynamicPadding desktop="22px" mobile="20px" />

                      <div className={styles.text_dotted_wrapper}>
                        <TextDotted
                          startTextColor={AppColor.transparentBlack}
                          fontWeightEndText="500"
                          text="CTR"
                          textEnd="5%"
                        />
                        <TextDotted
                          startTextColor={AppColor.transparentBlack}
                          fontWeightEndText="500"
                          text="eCPC"
                          textEnd="$5"
                        />
                        <TextDotted
                          startTextColor={AppColor.transparentBlack}
                          fontWeightEndText="500"
                          text="CR"
                          textEnd="3%"
                        />
                        <TextDotted
                          startTextColor={AppColor.transparentBlack}
                          fontWeightEndText="500"
                          text="Clicks"
                          textEnd="4178%"
                        />
                        <TextDotted
                          startTextColor={AppColor.transparentBlack}
                          fontWeightEndText="500"
                          text="Leads"
                          textEnd="643"
                        />
                        <TextDotted
                          startTextColor={AppColor.transparentBlack}
                          fontWeightEndText="500"
                          text="Sales"
                          textEnd="75"
                        />
                        <TextDotted
                          startTextColor={AppColor.transparentBlack}
                          fontWeightEndText="500"
                          text="Earned"
                          textEnd="$3 231"
                        />
                      </div>
                      <DynamicPadding desktop="20px" mobile="15px" />
                      <div className="gap_5">
                        <Typography variant="body4">
                          Public Financial Details{' '}
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
                    </div>
                  }
                />
              </div>
            </div>
          }
        />
        <DynamicPadding />
      </div>
      <CardsSliderRelated />
      <div className={'wrapper_page'}>
        <AskedQuestion />
      </div>
      <Footer />
    </div>
  )
}

type DetailsDropdownItemProps = {
  text: string
  title: string
  initState: boolean
  node: React.ReactNode
}
export const DetailsDropdownItem = ({
  text,
  initState,
  title,
  node,
}: DetailsDropdownItemProps) => {
  const [showDropdown, setShowDropdown] = useState(initState)

  return (
    <div
      data-detailsdropdown_state={showDropdown ? 'opened' : 'closed'}
      className={styles.dropdown_details}
    >
      <div
        style={{ userSelect: 'none', cursor: 'pointer' }}
        onClick={() => {
          setShowDropdown(prev => !prev)
        }}
        className="flex_space_between"
      >
        <div>
          <Typography variant="body3" fontWeight="500">
            {title}
          </Typography>
          <Typography variant="body5" color={AppColor.transparentBlack}>
            {text}
          </Typography>
        </div>
        {showDropdown ? (
          <AppColor.chevronTop
            fill={AppColor.text}
            width={'16px'}
            height={'8px'}
          />
        ) : (
          <AppColor.chevronBottom
            fill={AppColor.text}
            width={'16px'}
            height={'8px'}
          />
        )}
      </div>
      {showDropdown && node}
    </div>
  )
}

export default ProgressFreelancer
