import AskedQuestion from '@common/components/AskedQuestions/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import CommentTitleFilter from '@common/components/CommentTitleFilters/index'
import FilterList from '@common/components/FilterList/index'
import Header from '@common/components/Header/Header/index'
import ImageCardsShow from '@common/components/ImageCardsShow/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import ReviewsProgramCard from '@common/components/ReviewsProgram/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import DaysLeftTimer from '@common/components/ui/DaysLeftTimer/DaysLeftTimer'
import Dropdown from '@common/components/ui/Dropdown/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import PageDetails from '@common/components/ui/PageDetails/index'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import SizeBox from '@common/components/ui/SizeBox/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import Typography from '@common/components/ui/Typography/Typography'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { FreelancerCard } from '@pages/Partnership/pages/Program/index'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'

import advertismentImage from '@assets/images/advertisment.png'
import test1 from '@assets/images/test1.png'
import test2 from '@assets/images/test2.png'
import test3 from '@assets/images/test3.png'
import test4 from '@assets/images/test4.png'
import { Selectbox } from '@pages/Service/Service/index'
import CenterShadowBox from '@common/components/ui/CenterShadowBox/index'
import CommentsSection, {
  comment,
} from '@common/components/CommentsSection/index'
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import ContactModal from '@pages/Partnership/pages/Program/modals/contactModal/index'
import { NavigationSimpleBar } from '@common/components/NavigationBar/index'
import LastSponsors from '@common/components/LastSponsors/index'
import TagsDisplay from '@common/components/TagsDisplay/index'
import Slider from '@common/components/ui/Slider/Slider'
import PaymentModal from './components/PaymentModal'

const CrowdfreelanceCustomer = () => {
  const arrayHistory = ['Crowdfreelance', 'Tech', 'Web Service']
  const title = 'Logo by sample in vector in maximum quality'
  const [selectedPricePlan, setSelectedPricePlan] = useState('')
  const [paymentModal, setPaymentModal] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  const fakeComment: comment = {
    user: fakeUserConstant,
    comment:
      'In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo. ',
    likesPercent: Math.round(Math.random() * 100),
    isSolution: false,
    money: '200',
    isBestReplay: Math.random() < 0.3,
    answeredUserComment: [
      {
        user: fakeUserConstant,
        comment:
          '1111111Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likesPercent: Math.round(Math.random() * 100),
        isSolution: false,
        isBestReplay: false,
        answeredUserComment: [
          {
            user: fakeUserConstant,
            comment:
              '1111111Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likesPercent: Math.round(Math.random() * 100),
            isSolution: false,
            isBestReplay: false,
            answeredUserComment: [],
          },
          {
            user: fakeUserConstant,
            comment:
              '1111111Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likesPercent: Math.round(Math.random() * 100),
            isSolution: false,
            isBestReplay: false,
            answeredUserComment: [],
          },
        ],
      },
      {
        user: fakeUserConstant,
        comment:
          '1111111Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likesPercent: Math.round(Math.random() * 100),
        isSolution: false,
        isBestReplay: false,
        answeredUserComment: [],
      },
      {
        user: fakeUserConstant,
        comment:
          '1111111Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        likesPercent: Math.round(Math.random() * 100),
        isSolution: false,
        isBestReplay: false,
        answeredUserComment: [],
      },
    ],
  }

  const fakeComments: comment[] = Array.from({ length: 30 }, () => ({
    ...fakeComment,
  }))
  const [contactModal, setContactModal] = useState(false)
  return (
    <div>
      <Header />

      <NavigationSimpleBar
        title="Crowdfreelance"
        activeId={-1}
        icon={<AppColor.partnership />}
        links={[
          {
            title: 'All campaigns',
            link: '/crowdfreelance/all',
          },
          {
            title: 'My campaigns',
            link: '/crowdfreelance/my',
          },
        ]}
      />

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
          nodeAfter={
            <div className="gap_10">
              <div className="gap_5">
                <AppColor.caseWhiteOrange />
                <Typography variant="body4"> 55 sponsors </Typography>
              </div>
              <div className="gap_5">
                <AppColor.heartEmpty />
                <Typography variant="body4">20 wishlists</Typography>
              </div>
            </div>
          }
        />
        <DynamicPadding desktop="38px" />

        <FilterList
          filters={['Description', 'Freelancer', 'Reviews (25)', 'FAQ (2)']}
          activeStartItem="Freelancer"
        />

        <DynamicPadding desktop="30px" />

        <ResponsiveLayoutTwo
          orderItem1Desktop={0}
          orderItem1Mobile={1}
          orderItem2Desktop={1}
          orderItem2Mobile={0}
          gap="80px"
          item1MaxWidth="732px"
          item2MaxWidth="388px"
          item1={
            <div style={{ width: '100%' }}>
              <ImageCardsShow images={[test1, test2, test3, test4]} />
              <DynamicPadding desktop="30px" />
              <LastSponsors />
              <DynamicPadding desktop="44px" />
              <Typography variant="body3" fontWeight="500">
                Description
              </Typography>
              <DynamicPadding desktop="17px" mobile="15px" />
              <Typography variant="body4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,
                tristique enim, neque, mollis at. Quam scelerisque pulvinar
                pellentesque phasellus. Nisl id sit tincidunt ut. Egestas
                ullamcorper magna mi integer elementum dictum aenean in.
                Ultrices convallis in sit venenatis, ut nunc pellentesque. Eu
                lacus sapien et eu tortor cursus dolor. Nunc nunc, consequat
                porttitor sed tortor. Tempus mi sit blandit nibh fusce morbi
                nullam. Nunc sagittis tortor, dictum lorem quis faucibus elit.
                Pretium fames leo ut eget augue velit eros, pellentesque. Non
                quis imperdiet dui praesent at massa. Bibendum commodo eros
                bibendum sit cras sit venenatis, vulputate a. Et aliquet eu et
                tristique nibh ultrices vel amet amet. Sit facilisi pretium ut
                placerat sem. Sit nunc integer velit facilisi adipiscing lectus
                arcu. Pellentesque sapien, arcu, nulla quis magnis praesent
                aliquet venenatis.
              </Typography>

              <DynamicPadding desktop="15px" mobile="15px" />
              <Typography fontWeight="500" color="#01010180" variant="body4">
                Tags
              </Typography>
              <DynamicPadding desktop="12px" mobile="10px" />
              <TagsDisplay tags={['Video', 'Social Media']} />

              <DynamicPadding desktop="50px" mobile="25px" />

              <div className="gap_5">
                <Typography variant="body3" fontWeight="500">
                  Roadmap
                </Typography>
                <div className={styles.box_black}>
                  <Typography variant="body3" fontWeight="500" color="white">
                    5
                  </Typography>
                </div>
              </div>

              <DynamicPadding desktop="30px" mobile="20px" />
              <Slider
                elementsCount={6}
                itemWidth={230}
                maxWidth={730}
                gap={20}
                swiper={true}
                buttonSize="29px"
                maxShowCount={3}
                padding="0"
                buttonLeft="-8px"
                buttonRight="-8px"
              >
                <SliderStageItem
                  currentMoney="5000"
                  stageNumber="1"
                  title="Immersion - Arrival April"
                  totalMoney="5000"
                />
                <SliderStageItem
                  currentMoney="3000"
                  stageNumber="2"
                  title="Immersion - Arrival April"
                  totalMoney="5000"
                />
                <SliderStageItem
                  currentMoney="0"
                  stageNumber="3"
                  title="Immersion - Arrival April"
                  totalMoney="5000"
                />
                <SliderStageItem
                  currentMoney="5000"
                  stageNumber="1"
                  title="Immersion - Arrival April"
                  totalMoney="5000"
                />
                <SliderStageItem
                  currentMoney="3000"
                  stageNumber="2"
                  title="Immersion - Arrival April"
                  totalMoney="5000"
                />
                <SliderStageItem
                  currentMoney="0"
                  stageNumber="3"
                  title="Immersion - Arrival April"
                  totalMoney="5000"
                />
              </Slider>

              <DynamicPadding desktop="43px" mobile="30px" />

              <Typography variant="body3" fontWeight="500">
                Customer
              </Typography>
              <DynamicPadding desktop="40px" mobile="20px" />
              <FreelancerCard
                disableFirstTwo={true}
                user={fakeUserConstant}
                links={['Account', 'Stats', 'Reviews']}
              />

              <DynamicPadding desktop="50px" />

              <CommentTitleFilter
                notCount={111}
                textAfterTitle={
                  <Typography
                    variant="body4"
                    color={AppColor.green}
                    textTransform="uppercase"
                    fontWeight="500"
                  >
                    95% positive reviews{' '}
                  </Typography>
                }
                title="Reviews "
              />

              <DynamicPadding desktop="30px" mobile="20px" />
              <ReviewsProgramCard
                likes="55"
                money="200"
                text="Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to."
                user={fakeUserConstant}
                addInfo={{
                  icon: <AppColor.caseIcon height={'18px'} />,
                  text: 'Musguard OMNI: Rollable Bicycle Mudguards',
                  users: [
                    fakeUserConstant,
                    fakeUserConstant,
                    fakeUserConstant,
                    fakeUserConstant,
                    fakeUserConstant,
                  ],
                }}
                images={[test1, test2, test3]}
                afterPriceNode={
                  <div className="gap_10">
                    <AppColor.cart fill={AppColor.text} height={'22px'} />{' '}
                    <AppColor.flag height={'22px'} />
                  </div>
                }
              />
              <DynamicPadding desktop="20px" mobile="15px" />
              <ReviewsProgramCard
                likes="90"
                money="200"
                text="Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to."
                user={fakeUserConstant}
                afterPriceNode={
                  <div className="gap_10">
                    <AppColor.cart fill={AppColor.text} height={'22px'} />{' '}
                    <AppColor.puzle height={'22px'} />
                  </div>
                }
              />

              <DynamicPadding />
              <div className="gap_10">
                <Typography variant="body3" fontWeight="500">
                  FAQ
                </Typography>
                <div className={styles.box_black}>
                  <Typography color="white" variant="body3" fontWeight="500">
                    3
                  </Typography>
                </div>
              </div>
              <DynamicPadding desktop="22px" mobile="15px" />
              <Dropdown
                showLine={false}
                title="What if your requirements does not meet any of my package?"
                description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
              />
              <DynamicPadding desktop="20px" mobile="10px" />
              <Dropdown
                showLine={false}
                title="What software do you use?"
                description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
              />
              <DynamicPadding desktop="47px" />
              <div className="gap_10">
                <Typography variant="body3" fontWeight="500">
                  Documents
                </Typography>
                <div className={styles.box_black}>
                  <Typography color="white" variant="body3" fontWeight="500">
                    3
                  </Typography>
                </div>
              </div>
              <DynamicPadding desktop="30px" mobile="20px" />
              <div className={styles.documents_wrapper}>
                <CenterShadowBox
                  elements={[
                    <AppColor.filePdf />,
                    <Typography variant="body5" fontWeight="500">
                      NCA.pdf{' '}
                    </Typography>,
                    <Typography
                      variant="body5"
                      color={AppColor.transparentBlack}
                    >
                      432.1 KB{' '}
                    </Typography>,
                  ]}
                  gap="10px"
                  paddingBoxDesktop="10px 0px"
                />
                <CenterShadowBox
                  elements={[
                    <AppColor.filePdf />,
                    <Typography variant="body5" fontWeight="500">
                      NCA.pdf{' '}
                    </Typography>,
                    <Typography
                      variant="body5"
                      color={AppColor.transparentBlack}
                    >
                      432.1 KB{' '}
                    </Typography>,
                  ]}
                  gap="10px"
                  paddingBoxDesktop="10px 0px"
                />
              </div>
              <DynamicPadding desktop="48px" mobile="20px" />
              <CommentsSection comments={fakeComments} />
            </div>
          }
          item2={
            <div>
              <div className={styles.time_box}>
                <Typography variant="body3" fontWeight="500" textLineHeight="1">
                  Fundrasing
                </Typography>
                <DynamicPadding desktop="20px" mobile="15px" />
                <div className="flex_space_between">
                  <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography variant="body3" fontWeight="500">
                      $131
                    </Typography>
                    <Typography
                      variant="body5"
                      color={AppColor.transparentBlack}
                    >
                      of $4 000
                    </Typography>
                  </div>
                  <Typography
                    variant="body3"
                    color={AppColor.orange}
                    fontWeight="500"
                  >
                    22%
                  </Typography>
                </div>
                <PercentBar currentPercent={35} height="15px" />
                <DynamicPadding desktop="20px" mobile="15px" />
                <div className="justify_center">
                  <DaysLeftTimer
                    fontWeightTextTime="500"
                    dotsHeight="5px"
                    dotsWidth="5px"
                    width="65px"
                    height="65px"
                    borderRadius="20px"
                    time={new Date()}
                  />
                </div>
              </div>

              <DynamicPadding desktop="30px" mobile="20px" />
              <div className={styles.plan_box}>
                <SelectItem
                  selectedPrice={selectedPricePlan}
                  callback={item => {
                    setSelectedPricePlan(item)
                  }}
                  price="1000+"
                  title="Easy Start"
                />
                <SelectItem
                  selectedPrice={selectedPricePlan}
                  callback={item => {
                    setSelectedPricePlan(item)
                  }}
                  price="1500+"
                  title="Pro"
                />
                <DynamicPadding desktop="5px" />
                <Selectbox
                  fontWeight="400"
                  titleProps="Without a reward"
                  selectedPrice={selectedPricePlan}
                  callback={item => {
                    setSelectedPricePlan(item)
                  }}
                  price="custom"
                />

                <div className={styles.plan_box_padding}>
                  <DynamicPadding desktop="18px" mobile="20px" />
                  <HorizontalLine />
                  <DynamicPadding desktop="30px" mobile="20px" />
                  <img
                    src={advertismentImage}
                    width={'fit-content'}
                    height={'330px'}
                    alt=""
                  />
                  <DynamicPadding desktop="30px" mobile="20px" />
                  <Typography variant="body4">
                    Negotiate all technical and financial questions in private
                    messages and start the project.
                  </Typography>
                  <DynamicPadding desktop="16px" mobile="20px" />
                  <div className={styles.dots_text_wrapper}>
                    <TextDotted
                      fontWeightEndText="500"
                      info={true}
                      text="Digital copy of game"
                      textEnd="1"
                      startTextColor={AppColor.transparentBlack}
                    />
                    <TextDotted
                      info={true}
                      text="Your name in credits"
                      startTextColor={AppColor.transparentBlack}
                      endNode={
                        <AppColor.singTrue
                          stroke={AppColor.green}
                          width={'11px'}
                          height={'9px'}
                        />
                      }
                    />
                    <TextDotted
                      info={true}
                      text="Shipping"
                      textEnd="Worldwide"
                      fontWeightEndText="500"
                      startTextColor={AppColor.transparentBlack}
                    />
                    <TextDotted
                      fontWeightEndText="500"
                      info={true}
                      text="Delivery"
                      textEnd="30 days"
                      startTextColor={AppColor.transparentBlack}
                    />
                    <TextDotted
                      fontWeightEndText="500"
                      info={true}
                      text="Left"
                      textEnd="14/1000"
                      startTextColor={AppColor.transparentBlack}
                    />
                  </div>

                  <DynamicPadding desktop="30px" mobile="20px" />
                  <HorizontalLine />
                  <DynamicPadding desktop="23px" mobile="20px" />
                  <Typography variant="body3" fontWeight="500">
                    Rewards
                  </Typography>
                  <DynamicPadding desktop="23px" mobile="20px" />

                  <div className="gap_20">
                    <AppColor.reward30Xp height={'110px'} />
                    <AppColor.reward10PTS height={'110px'} />
                    <AppColor.rewardBox height={'110px'} />
                  </div>
                  <DynamicPadding desktop="25px" mobile="20px" />
                  <HorizontalLine />
                  <DynamicPadding desktop="30px" mobile="20px" />

                  <MyButtonOrange
                    textTransform="uppercase"
                    onClick={() => {
                      setPaymentModal(true)
                    }}
                    width="100%"
                  >
                    Select{' '}
                    {selectedPricePlan == '1000+'
                      ? `easy start ${selectedPricePlan}`
                      : `pro ${selectedPricePlan}`}
                  </MyButtonOrange>
                  <DynamicPadding desktop="15px" mobile="10px" />
                  <MyButtonTransparentOrange
                    textTransform="uppercase"
                    onClick={() => {
                      setContactModal(true)
                    }}
                    width="100%"
                  >
                    Contact customer
                  </MyButtonTransparentOrange>
                  <DynamicPadding desktop="30px" mobile="15px" />
                </div>
              </div>
            </div>
          }
        />
        {contactModal && (
          <ModalCenterBasic
            desktopMaxWidth="880px"
            title="Join to Artem Markevych Wordpress Partnership"
            bottomPartPadding="30px"
            callbackClose={() => {
              setContactModal(false)
            }}
          >
            <ContactModal
              callbackClose={() => {
                setContactModal(false)
              }}
            />
          </ModalCenterBasic>
        )}
        {paymentModal && (
          <PaymentModal
            onClose={() => {
              setPaymentModal(false)
            }}
          />
        )}
      </div>
      <CardsSliderRelated />

      <div className="wrapper_page">
        <AskedQuestion />
      </div>
    </div>
  )
}

type SelectItemProps = {
  title?: string
  price: string
  selectedPrice: string
  callback: (item: string) => void
}
const SelectItem = ({
  price,
  title,
  selectedPrice,
  callback,
}: SelectItemProps) => {
  const isSelected = selectedPrice == price

  return (
    <div
      style={{
        backgroundColor: isSelected ? AppColor.white : AppColor.transparent,
      }}
      className={styles.price_plan_wrapper}
      onClick={() => {
        callback(price)
      }}
    >
      <div className={styles.price_plan_description}>
        <div className="gap_10">
          <div
            className={`${styles.select_box} ${isSelected ? styles.select_box_active : styles.select_box_disabled}`}
          ></div>
          <Typography
            color={price == selectedPrice ? AppColor.orange : AppColor.text}
            variant="body3"
            textLineHeight="1"
          >
            {title}
          </Typography>
        </div>
        <DynamicPadding desktop="9px" />
        <Typography
          variant="titleSmall"
          fontWeight="700"
          textLineHeight="1"
          color={price == selectedPrice ? AppColor.orange : AppColor.text}
        >
          ${price}
        </Typography>
      </div>
    </div>
  )
}

type SliderStageItemProps = {
  stageNumber: string
  title: string
  currentMoney: string
  totalMoney: string
}
const SliderStageItem = ({
  currentMoney,
  stageNumber,
  title,
  totalMoney,
}: SliderStageItemProps) => {
  const percent = (parseInt(currentMoney) / parseInt(totalMoney)) * 100
  return (
    <div className={styles.stage_item}>
      <div className={styles.stage_padding}>
        <div className="gap_5">
          <Typography
            textLineHeight="1"
            variant="body5"
            color={AppColor.transparentBlack}
          >
            Stage {stageNumber}
          </Typography>
          <div>
            <AppColor.singTrue stroke="white" />
          </div>
        </div>
        <SizeBox height="15px" />
        <Typography variant="body4" fontWeight="500">
          {title}
        </Typography>
        <SizeBox height="15px" />
        <div style={{ alignItems: 'baseline' }} className="gap_5">
          <Typography textLineHeight="1" variant="subtitle" fontWeight="500">
            {currentMoney}
          </Typography>
          <Typography
            textLineHeight="1"
            variant="body5"
            color={AppColor.transparentBlack}
          >
            of {totalMoney}
          </Typography>
        </div>
        <SizeBox height="15px" />
      </div>
      <PercentBar
        currentPercent={percent}
        height="3px"
        backgroundColor={AppColor.grey}
        color={percent == 100 ? AppColor.green : AppColor.orange}
      />
    </div>
  )
}

export default CrowdfreelanceCustomer
