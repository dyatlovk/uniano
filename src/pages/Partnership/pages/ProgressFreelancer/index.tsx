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
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import { Link } from 'react-router-dom'
import StepsStates from '@common/components/StepsStates/index'
import StatesModel from '@common/models/partnership/statesModel'
import PartnersModel from '@common/models/partnership/partnersModel'
import ManagersDropDown from './components/ManagerDropdown'
import { ToolsCommon } from '@common/components/Partnership/Tools/index'
import FreelancerProjectsModel from '@common/models/partnership/freelancesProjectsModel'
import Progress from '@common/components/Partnership/Progress/index'

const freelancerProjectModel = new FreelancerProjectsModel(
  FreelancerProjectsModel.makeFakeData()
)
const freelancerFakeProject = freelancerProjectModel.findByLabel('Completed')
const freelancerFakeProjectProgress =
  freelancerProjectModel.getProgress('Completed')

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

              <Progress
                statusColor={freelancerFakeProject.color}
                statusLabel={freelancerFakeProject.label}
                percent={freelancerFakeProjectProgress}
              />
            </div>
          }
        />
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
  initState = false,
  title,
  node,
}: DetailsDropdownItemProps) => {
  const [showDropdown, setShowDropdown] = useState(initState)

  useEffect(() => {
    setShowDropdown(initState)
  }, [initState])

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
            className="chevron"
            width={'16px'}
            height={'8px'}
          />
        ) : (
          <AppColor.chevronBottom
            fill={AppColor.text}
            className="chevron"
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
