import AskedQuestion from '@common/components/AskedQuestions/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import FilterList from '@common/components/FilterList/index'
import Footer from '@common/components/Footer/Footer'
import HeaderDummy from '@common/components/Header/Dummy/index'
import PopUpBottom from '@common/components/ModalPopUps/PopUpBottom/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import StepsStates from '@common/components/StepsStates/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import DetailsTableMultiNodes from '@common/components/ui/DetailsTable/DetailsTableMultiNodes/index'
import DotsButton from '@common/components/ui/DotsButtons/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import { FilterTemplateDropdown } from '@common/components/ui/FiltersTemplate/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparentGrey from '@common/components/ui/MyButton/variants/MyButtonTransparentGrey'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import SizeBox from '@common/components/ui/SizeBox/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import { ThreeLinesPopUpCustom } from '@common/components/ui/ThreeLinesPopUp/index'
import TitleExampleUl from '@common/components/ui/TitleExampleUl/index'
import Typography from '@common/components/ui/Typography/Typography'
import Urgent from '@common/components/ui/Urgent/index'
import UserAvatar from '@common/components/ui/UserAvatar/index'
import StatesModel from '@common/models/createOrder/statesModel'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import BackgroundItem from '@pages/Settings/pages/Profile/components/BackgroundItem/index'
import { useEffect, useRef, useState } from 'react'
import { AccountDropDown, FreelancersDropDown, PositiveReviewsDropDown } from './components/filtersDropDown'
import styles from './style.module.scss'

const CreateOrderPosting = () => {
  const [selectedFilter, setSelectedFilter] = useState('Overview')

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <div>
      <HeaderDummy logoText="Create Orders">
        <StepsStates
          maxWidth="824px"
          states={StatesModel.getAll()}
          useBg={false}
          padding="0"
          currentState={'Posting'}
        />
      </HeaderDummy>

      <DynamicPadding desktop="35px" />

      <div className="wrapper_page">
        <div className={styles.top_wrapper_part}>
          <div className={styles.title_wrapper}>
            <div className="gap_10">
              <Typography
                textTransform="uppercase"
                variant="titleBig"
                textLineHeight="1"
              >
                posting
              </Typography>
              <div className="mobile">
                <div className={styles.template_icon}>
                  <FilterTemplateDropdown />
                </div>
              </div>
            </div>
          </div>
          <div className="gap_15">
            <div>
              <img
                src={fakeUserConstant.image}
                height={'40px'}
                width={'40px'}
                alt=""
              />
              <img
                style={{ marginLeft: '-10px' }}
                src={fakeUserConstant.image}
                height={'40px'}
                width={'40px'}
                alt=""
              />
            </div>
            <div className="desktop">
              <div className={`${styles.template_icon} ${'justify_center'}`}>
                <FilterTemplateDropdown />
              </div>
            </div>
          </div>
        </div>

        <DynamicPadding desktop="32px" />

        <FilterList
          filters={[
            'Overview',
            'Advanced',
            'Filters',
            'Interview',
            'FAQ',
            'Complaints',
          ]}
          activeStartItem="Overview"
          callback={item => {
            setSelectedFilter(item)
          }}
        />

        <VariantSelect activeFilter={selectedFilter} />
      </div>

      <CardsSliderRelated secondSlider={true} />
      <div className="wrapper_page">
        <AskedQuestion margin="50px 0px 0px" />
      </div>

      <Footer />
    </div>
  )
}

type VariantSelectProps = {
  activeFilter: string
}
const VariantSelect = ({ activeFilter }: VariantSelectProps) => {
  switch (activeFilter) {
    case 'Overview':
      return <OverviewBlock />
    case 'Advanced':
      return <AdvancedBlock />
    case 'Filters':
      return <FiltersBlock />
    case 'Interview':
      return <InterviewBlock />
    case 'FAQ':
      return <FAQBlock />
    case 'Complaints':
      return <ComplaintsBlock />
  }
}

const ComplaintsBlock = () => {
  return (
    <div>
      <DynamicPadding desktop="30px" />
      <DetailsTableMultiNodes
        titles={['ID', 'Date', 'Complaint', 'Solution', 'Status', '']}
        elements={[
          {
            nodes: [
              <div style={{ whiteSpace: 'nowrap' }} className="gap_5">
                <div>
                  <AppColor.lightning height={'37px'} width={'37px'} />
                </div>
                <Typography variant="body4" fontWeight="500">
                  # 1413
                </Typography>
              </div>,
              <Typography variant="body4">
                Feb 26, <br /> 2021 16:32{' '}
              </Typography>,
              <Typography fontStyle="italic" variant="body4">
                Freelancer didn’t finish the job
                <DotsButton />
              </Typography>,
              <AppColor.minus />,
              <Typography
                variant="body4"
                fontWeight="500"
                color={AppColor.orange}
              >
                Unsolved
              </Typography>,
              <PopupMenuTable />,
            ],
          },
          {
            nodes: [
              <div style={{ whiteSpace: 'nowrap' }} className="gap_5">
                <div>
                  <AppColor.lightning height={'37px'} width={'37px'} />
                </div>
                <Typography variant="body4" fontWeight="500">
                  # 1413
                </Typography>
              </div>,
              <Typography variant="body4">
                Feb 26, <br /> 2021 16:32{' '}
              </Typography>,
              <Typography fontStyle="italic" variant="body4">
                Freelancer didn’t finish the job
                <DotsButton />
              </Typography>,
              <AppColor.minus />,
              <Typography
                variant="body4"
                fontWeight="500"
                color={AppColor.orange}
              >
                Unsolved
              </Typography>,
              <PopupMenuTable />,
            ],
          },
          {
            nodes: [
              <div style={{ whiteSpace: 'nowrap' }} className="gap_5">
                <div>
                  <AppColor.lightning height={'37px'} width={'37px'} />
                </div>
                <Typography variant="body4" fontWeight="500">
                  # 1413
                </Typography>
              </div>,
              <Typography variant="body4">
                Feb 26, <br /> 2021 16:32{' '}
              </Typography>,
              <Typography fontStyle="italic" variant="body4">
                Freelancer didn’t finish the job
                <DotsButton />
              </Typography>,
              <AppColor.minus />,
              <Typography
                variant="body4"
                fontWeight="500"
                color={AppColor.orange}
              >
                Unsolved
              </Typography>,
              <PopupMenuTable />,
            ],
          },
        ]}
      />
    </div>
  )
}
const FAQBlock = () => {
  const [questions, setQuestions] = useState<QuestionItemProps[]>([
    {
      text: 'In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo. ',
      title: 'What if your requirements does not meet any of my package?',
      titles: [],
      callbackRemove: () => {},
    },
    {
      text: 'In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere.',
      title: 'What software do you use?',
      titles: [],
      callbackRemove: () => {},
    },
  ])
  return (
    <div>
      <DynamicPadding desktop="30px" />
      <ResponsiveLayoutTwo
        item1MaxWidth="732px"
        item2MaxWidth="388px"
        gap="80px"
        item1={
          <div>
            <div className={styles.flex_space_between_item}>
              <Typography variant="body4">
                Before bidding each freelancer should complete interview
              </Typography>

              <SwitchButton
                width="44px"
                height="24px"
                disable={false}
                startValue={false}
              />
            </div>

            <DynamicPadding desktop="30px" mobile="20px" />

            {questions.map(item => (
              <QuestionItem
                callbackRemove={item => {
                  setQuestions(questions.filter(itemF => itemF.title != item))
                }}
                text={item.text}
                title={item.title}
                titles={questions}
              />
            ))}
            <DynamicPadding desktop="20px" mobile="15px" />
            <div className="flex_space_between">
              <MyButtonOrange
                fontWeight="500"
                onClick={() => {}}
                textTransform="uppercase"
                padding="7px 14px"
              >
                <div className={styles.white}>
                  <AppColor.plus
                    stroke={AppColor.orange}
                    width={12}
                    height={12}
                  />
                </div>
                Add question
              </MyButtonOrange>
              <div className={styles.faq_cancel_btn}>
                <MyButtonTransparentGrey
                  fontWeight="500"
                  textTransform="uppercase"
                  onClick={() => {
                    setQuestions([])
                  }}
                >
                  Delete all
                </MyButtonTransparentGrey>
              </div>
            </div>
          </div>
        }
        item2={
          <div>
            <div className="desktop">
              <TitleExampleUl />
            </div>
          </div>
        }
      />
    </div>
  )
}

type QuestionItemProps = {
  title: string
  text: string
  titles: QuestionItemProps[]
  callbackRemove: (item: string) => void
}
const QuestionItem = ({
  text,
  title,
  titles,
  callbackRemove,
}: QuestionItemProps) => {
  return (
    <div>
      <div className={styles.question_item}>
        <div>
          <AppColor.arrowFour width={'15px'} height={'15px'} />
        </div>
        <div>
          <Typography textLineHeight="1" variant="body4" fontWeight="500">
            {title}
          </Typography>
          <DynamicPadding desktop="15px" mobile="10px" />
          <Typography variant="body4">{text}</Typography>
        </div>

        <div className={styles.flex_gap}>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => {
              callbackRemove(title)
            }}
          >
            <AppColor.close height={'16px'} fill={AppColor.red} />
          </div>
          <AppColor.edit fill={AppColor.text} height={'16px'} />
        </div>
      </div>
      <DynamicPadding desktop="30px" mobile="20px" />
      <HorizontalLine />
      <DynamicPadding desktop="18px" mobile="20px" />
    </div>
  )
}
const InterviewBlock = () => {
  return (
    <div>
      <DynamicPadding desktop="30px" />
      <ResponsiveLayoutTwo
        item1MaxWidth="730px"
        item2MaxWidth="390px"
        gap="80px"
        item1={
          <div>
            <div className={styles.flex_space_between_item}>
              <Typography variant="body4">
                Before bidding each freelancer should complete interview
              </Typography>

              <SwitchButton
                width="44px"
                height="24px"
                disable={false}
                startValue={true}
              />
            </div>

            <SizeBox height="20px" />
            <div className="gap_5">
              <div className={styles.orange}>
                <AppColor.interview />
              </div>
              <Typography
                variant="body5"
                fontWeight="500"
                textTransform="uppercase"
                color={AppColor.transparentBlack}
              >
                Interview
              </Typography>
            </div>
          </div>
        }
        item2={
          <div>
            <div className="desktop">
              <TitleExampleUl />
            </div>
          </div>
        }
      />
    </div>
  )
}
const FiltersBlock = () => {
  const [selectedUsers, setSelectedUsers] = useState([fakeUserConstant.name])
  const [selectedCountries, setSelectedCountrues] = useState([])
  const [selectedAccess, setSelectedAccess] = useState<string>(
    'Only for filtered freelancers'
  )

  return (
    <>
      <DynamicPadding desktop="25px" />
      <ResponsiveLayoutTwo
        gap="120px"
        item1MaxWidth="730px"
        item2MaxWidth="330px"
        item1={
          <div>
            <Typography variant="body3" fontWeight="500">
              Access
            </Typography>
            <DynamicPadding desktop="23px" mobile="20px" />
            <InputDropdown
              marginLeft={true}
              dropdownVariants={[
                'Only personal invitations',
                'Only for filtered freelancers',
              ]}
              initText="Only for filtered freelancers"
              labelIcon={<></>}
              callback={(item: string) => {
                setSelectedAccess(item)
              }}
              iconHeight="12px"
            />

            <DynamicPadding desktop="20px" mobile="15px" />
            {selectedUsers.map(item => (
              <SelectUser
                activeSelected={selectedUsers}
                callbackRemove={() => {
                  setSelectedUsers([])
                }}
              />
            ))}
            <DynamicPadding desktop="10px" mobile="20px" />
            <MyButtonOrange
              padding="7px 14px"
              textTransform="uppercase"
              fontWeight="500"
              onClick={() => {}}
            >
              {' '}
              <div className={styles.white}>
                <AppColor.plus
                  stroke={AppColor.orange}
                  width={12}
                  height={12}
                />
              </div>{' '}
              Add Freelancer
            </MyButtonOrange>
            <DynamicPadding desktop="42px" />

            <div
              className={
                selectedAccess === 'Only for filtered freelancers'
                  ? ''
                  : styles.positive_disabled
              }
            >

            <Typography variant="body3" fontWeight="500">
              Need To Hire
            </Typography>
            <DynamicPadding desktop="23px" mobile="20px" />
            <InputDropdown
              marginLeft={true}
              dropdownVariants={[
                '1 freelancers',
                '2 freelancers',
                '3 freelancers',
              ]}
              initText="2 freelancers"
              labelIcon={<></>}
              callback={() => {}}
              iconHeight="12px"
            />

            <DynamicPadding desktop="45px" />
              <div className={styles.positive_wrapper}>
                <div>
                  <Typography variant="body3" fontWeight="500">
                    Positive Reviews
                  </Typography>
                  <DynamicPadding desktop="24px" mobile="20px" />
                  <PositiveReviewsDropDown />
                </div>
                <div>
                  <Typography variant="body3" fontWeight="500">
                    Freelancers
                  </Typography>
                  <DynamicPadding desktop="28px" mobile="20px" />
                  <FreelancersDropDown />
                </div>
                <div>
                  <Typography variant="body3" fontWeight="500">
                    Account Level
                  </Typography>
                  <DynamicPadding desktop="28px" mobile="20px" />
                  <AccountDropDown />
                </div>
              </div>
              <DynamicPadding desktop="45px" />
              <Typography variant="body3" fontWeight="500">
                Cooperation
              </Typography>
              <DynamicPadding desktop="28px" mobile="20px" />

              <div className={styles.wrapper_campaign}>
                <Typography variant="body4">
                  Were previous projects with freelancers
                </Typography>

                <SwitchButton
                  width="44px"
                  height="24px"
                  disable={false}
                  startValue={true}
                />
              </div>
              <DynamicPadding desktop="45px" />
              <Typography variant="body3" fontWeight="500">
                Location
              </Typography>
              <DynamicPadding desktop="28px" mobile="20px" />
              <InputDropdown
                marginLeft={true}
                dropdownVariants={['Ukraine', 'Congo', 'England']}
                initText="Add regions, countries or cities"
                labelIcon={<></>}
                callback={() => {}}
                iconHeight="12px"
              />
              <DynamicPadding desktop="45px" />
              <Typography variant="body3" fontWeight="500">
                Languages
              </Typography>
              <DynamicPadding desktop="28px" mobile="20px" />
              <InputDropdown
                marginLeft={true}
                dropdownVariants={['Ukraine', 'Congo', 'England']}
                initText="Add languages"
                labelIcon={<></>}
                callback={() => {}}
                iconHeight="12px"
              />
              <DynamicPadding desktop="45px" />
              <Typography variant="body3" fontWeight="500">
                Other Filters
              </Typography>
              <DynamicPadding desktop="28px" mobile="20px" />
              <InputDropdown
                marginLeft={true}
                dropdownVariants={['Ukraine', 'Congo', 'England']}
                initText="Add regions, countries or cities"
                labelIcon={<></>}
                callback={() => {}}
                iconHeight="12px"
              />
            </div>
          </div>
        }
        item2={
          <div className="desktop">
            <TitleExampleUl />
          </div>
        }
      />
    </>
  )
}
type SelectUserProps = {
  activeSelected: string[]
  callbackRemove: (item: string) => void
}

type SelectionItemProps = {
  text: string
  color?: string
  icon: React.ReactNode
}
const SelectionItem = ({ icon, text, color }: SelectionItemProps) => {
  return (
    <div className={styles.select_item}>
      {icon}
      <Typography variant="body4" color={color ?? AppColor.text}>
        {text}
      </Typography>
      <AppColor.chevronBottom fill={AppColor.text} height={'12px'} />
    </div>
  )
}
const SelectUser = ({ activeSelected, callbackRemove }: SelectUserProps) => {
  return (
    <div className="gap_10">
      <UserAvatar
        active={true}
        name="Artem M."
        flag={<AppColor.UkraineFlagIcon />}
        role="Freelancer"
      />
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          callbackRemove(fakeUserConstant.name)
        }}
      >
        <AppColor.close width={'15px'} height={'15px'} fill={AppColor.red} />
      </div>
    </div>
  )
}
const OverviewBlock = () => {
  const [isPosted, setIsPosted] = useState(false)
  return isPosted ? (
    <ResponsiveLayoutTwo
      gap="133px"
      item1MaxWidth="732px"
      item2MaxWidth="335px"
      item1={
        <div>
          <DynamicPadding />
          <Typography variant="body3" fontWeight="500">
            Campaign stages
          </Typography>

          <DynamicPadding desktop="30px" mobile="20px" />

          <PercentBar currentPercent={30} height="13px" />
          <DynamicPadding desktop="20px" mobile="15px" />
          <div className="flex_space_between desktop">
            <Typography
              variant="body4"
              fontWeight="500"
              color={AppColor.orange}
            >
              Campaign
            </Typography>
            <Typography variant="body4" color={AppColor.transparentBlack}>
              Progress
            </Typography>
            <Typography variant="body4" color={AppColor.transparentBlack}>
              Completed
            </Typography>
          </div>
          <div className="mobile">
            <Typography variant="body4" fontWeight="500">
              Campaign
            </Typography>
          </div>
          <DynamicPadding />

          <div className={styles.details_grid}>
            <DetailsItem
              icon={<AppColor.playTriangle />}
              text="Running"
              title="Status"
            />
            <DetailsItem
              icon={<AppColor.timelapse />}
              absolute={true}
              text="5 days left"
              title="Lifetime"
            />
            <DetailsItem
              icon={<AppColor.orderPlace />}
              absolute={true}
              text="55"
              title="Order Place"
            />
          </div>

          <DynamicPadding />

          <div className="text_box">
            <Typography variant="body4">
              Your project has entered the{' '}
              <span style={{ fontWeight: '500' }}>negotiation stage</span>,
              which means you have hired freelancers and are ready to proceed.
            </Typography>
          </div>

          <DynamicPadding />

          <div className={'flex_space_between'}>
            <ChevronMoveTo
              variant="left"
              onClick={() => {}}
              text="Step back"
              title="Negotiation"
            />
            <ChevronMoveTo
              variant="right"
              preview={true}
              onClick={() => {}}
              text="Before posting"
              title="Preview"
            />
            <ChevronMoveTo
              variant="right"
              onClick={() => {
                setIsPosted(true)
              }}
              text="For free"
              disabled={true}
              title="update"
            />
          </div>
        </div>
      }
      item2={
        <div className="desktop">
          <BackgroundItem image="" />
        </div>
      }
    />
  ) : (
    <ResponsiveLayoutTwo
      gap="133px"
      item1MaxWidth="732px"
      item2MaxWidth="335px"
      item1={
        <div>
          <DynamicPadding desktop="32px" />
          <div className="justify_center">
            <AppColor.reachingFlag
              width={'fit-content'}
              style={{ maxHeight: '245px', maxWidth: '470px' }}
            />
          </div>
          <DynamicPadding />
          <div className="text_box">
            <Typography variant="body4">
              Preview your order before posting and{' '}
              <span style={{ fontWeight: '500' }}>2 freelancers</span> will see
              your project.
            </Typography>
          </div>
          <DynamicPadding />
          <div className="mobile">
            <BackgroundItem image="" />
            <DynamicPadding />
          </div>
          <div className={'flex_space_between'}>
            <ChevronMoveTo
              variant="left"
              onClick={() => {}}
              text="Step back"
              title="Negotiation"
            />
            <ChevronMoveTo
              variant="right"
              preview={true}
              onClick={() => {}}
              text="Before posting"
              title="Preview"
            />
            <ChevronMoveTo
              variant="right"
              onClick={() => {
                setIsPosted(true)
              }}
              text="For free"
              title="Post"
            />
          </div>
        </div>
      }
      item2={
        <div className="desktop" style={{ flexDirection: 'column' }}>
          <DynamicPadding desktop="32px" />
          <BackgroundItem image="/src/assets/images/bg.png" />
        </div>
      }
    />
  )
}

type DetailsItemProps = {
  title: string
  text: string
  icon: React.ReactNode
  absolute?: boolean
}
const DetailsItem = ({ icon, text, title, absolute }: DetailsItemProps) => {
  return (
    <div className={styles.details_wrapper}>
      {absolute && (
        <div className={styles.absolute_details}>
          <AppColor.upCirlcle />
        </div>
      )}
      <div className={styles.details_padding}>
        {icon}
        <div>
          <Typography
            variant="body5"
            color={AppColor.transparentBlack}
            textLineHeight="1"
          >
            {title}
          </Typography>
          <SizeBox height="10px" />
          <Typography variant="body4" fontWeight="500" textLineHeight="1">
            {text}
          </Typography>
        </div>
      </div>
      <div className={styles.orange_line}></div>
    </div>
  )
}

const AdvancedBlock = () => {
  return (
    <>
      <DynamicPadding desktop="24px" />
      <ResponsiveLayoutTwo
        gap="80px"
        item1MaxWidth="732px"
        item2MaxWidth="388px"
        item1={
          <div>
            <Typography variant="body3" fontWeight="500">
              Visibility
            </Typography>
            <DynamicPadding desktop="30px" mobile="20px" />
            <InputDropdown
              marginLeft={true}
              dropdownVariants={[
                'All users and search engines',
                'All registered users and search engines',
                'All users',
                'All registered users',
              ]}
              padding={'17px 20px'}
              initText="all users and search engines"
              labelIcon={<></>}
              callback={(item: string) => {}}
              iconHeight="12px"
            />

            <DynamicPadding desktop="45px" />
            <Typography variant="body3" fontWeight="500">
              Sponsorship Campaign
            </Typography>
            <DynamicPadding desktop="30px" mobile="20px" />
            <SponsorshipDropdown onSelect={() => {}} />

            <DynamicPadding desktop="45px" />
            <div className="gap_10">
              <Typography variant="body3" fontWeight="500">
                Urgent Order
              </Typography>
              <AppColor.upCirlcle />
            </div>
            <DynamicPadding desktop="26px" mobile="20px" />

            <div
              style={{ opacity: '0.5', padding: '13px 20px' }}
              className={styles.wrapper_campaign}
            >
              <div className="gap_15">
                <Urgent />
                <Typography variant="body4">
                  you will have a special badge about urgent order
                </Typography>
              </div>

              <SwitchButton width="44px" height="24px" disable={true} />
            </div>
          </div>
        }
        item2={
          <div className="desktop">
            <TitleExampleUl />
          </div>
        }
      />
    </>
  )
}

interface SponsorshipDropdownProps {
  onSelect: () => void
}
const SponsorshipDropdown = ({
  onSelect,
}: SponsorshipDropdownProps): JSX.Element => {
  const [selected, setSelected] = useState<number>(-1)
  const [showDropdown, setShowDropDown] = useState<boolean>(false)
  const listRef = useRef<HTMLUListElement | null>(null)

  const list = [
    {
      icon: <AppColor.workClub width={29} height={29} />,
      title: 'WorkClub',
      text: '$5 500',
    },
    {
      icon: <AppColor.googleLogo width={29} height={29} />,
      title: 'MyDreamCampaign',
      text: '$4 000',
    },
  ]

  function getActiveItem(): Object {
    return Object.values(list)[selected]
  }

  function isActive(id: number): boolean {
    return id === selected
  }

  return (
    <div
      style={{ position: 'relative' }}
      className={styles.wrapper_campaign}
      onClick={() => {
        setShowDropDown(prev => !prev)
      }}
    >
      <div className="gap_10">
        <div className={styles.orange}>
          <AppColor.caseWhite />
        </div>
        <Typography
          variant="body5"
          fontWeight="500"
          textTransform="uppercase"
          color={AppColor.transparentBlack}
        >
          Change a campaign
        </Typography>
      </div>
      <div className="gap_10">
        {/* @ts-ignore */}
        {getActiveItem() && getActiveItem().icon}
        <Typography variant="body4" fontWeight="500">
          {/* @ts-ignore */}
          {getActiveItem() && getActiveItem().title}
        </Typography>
      </div>
      {showDropdown && (
        <div className={styles.sponsorship_dropdown}>
          <div
            className={styles.search}
            onClick={() => {
              setShowDropDown(false)
            }}
          >
            <AppColor.searchIconBlack fill={AppColor.text} />
            <InputCommon
              width="100%"
              padding="20px 0 20px 10px"
              boxShadowNone={true}
              placeholder={'Search'}
              callback={() => {}}
            />
          </div>
          <ul ref={listRef} className={styles.list}>
            {list.map((item, id: number) => (
              <li
                key={id}
                className={styles.list_item}
                onClick={e => {
                  setSelected(id)
                  onSelect()
                }}
              >
                <div className={styles.list_logo}>{item.icon}</div>
                <div
                  style={{
                    flexGrow: 1,
                    fontWeight: isActive(id) ? '500' : '400',
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontWeight: isActive(id) ? '500' : '400',
                  }}
                >
                  {item.text}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const PopupMenuTable = (): JSX.Element => {
  return (
    <div style={{ width: '40px', height: '34px' }}>
      <PopUpBottom
        positionRight="-100%"
        showBackgroundHover={true}
        showNodeHover={
          <div className="cursor">
            {' '}
            <AppColor.threeLinesActive />
          </div>
        }
        showNode={
          <div className="cursor">
            <AppColor.threeLines />
          </div>
        }
        popUpNode={
          <ThreeLinesPopUpCustom
            positionRight="45%"
            items={[
              {
                icon: <AppColor.share />,
                title: 'Share',
              },
              {
                icon: <AppColor.report />,
                title: 'Report',
              },
            ]}
          />
        }
        topPaddingFromNode="27px"
      />
    </div>
  )
}

export default CreateOrderPosting
