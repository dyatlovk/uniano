import Header from '@common/components/Header/Header/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant } from '@common/models/user'
import FilterList from '@common/components/FilterList/index'
import LastSponsors from '@common/components/LastSponsors/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import TagsDisplay from '@common/components/TagsDisplay/index'
import { FreelancerCard } from '@pages/Partnership/pages/Program/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import Dropdown from '@common/components/ui/Dropdown/index'
import SizeBox from '@common/components/ui/SizeBox/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import CenterShadowBox from '@common/components/ui/CenterShadowBox/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import AskedQuestion from '@common/components/AskedQuestions/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import Footer from '@common/components/Footer/Footer'
import { Link } from 'react-router-dom'
import { RefObject, useEffect, useRef, useState } from 'react'
import { NavigationSimpleBar } from '@common/components/NavigationBar/index'
import ManagersDropDown from '@pages/Partnership/pages/ProgressFreelancer/components/ManagerDropdown/index'
import PartnersModel from '@common/models/partnership/partnersModel'

const OrdersOrder = () => {
  const [partnersModel, setPartnersModel] = useState<PartnersModel | null>(null)
  const [partnersSelectedUser, setPartnersSelecteduser] =
    useState<PartnerShip.Manager | null>(null)

  const arrayHistory = ['Order', 'Development ', 'Web Development', 'WordPress']
  const title = 'Logo by sample in vector in maximum quality'

  const specifRef = useRef(null)
  const customerRef = useRef(null)
  const faqRef = useRef(null)

  const mapOfRefs = {
    Description: null, // Replace null with the appropriate ref if needed
    Specification: specifRef,
    Customer: customerRef,
    'FAQ (2)': faqRef,
  }

  function scrollToRef(item: string) {
    const currentRef: RefObject<any> = mapOfRefs[item]

    if (currentRef.current) {
      const yOffset = currentRef.current.getBoundingClientRect().top - 105
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    setPartnersModel(new PartnersModel())
  }, [])

  return (
    <div>
      <Header />

      <NavigationSimpleBar
        title="Order"
        activeId={1}
        icon={<AppColor.partnership />}
        links={[
          {
            title: 'All orders',
            link: '/orders/all',
          },
          {
            title: 'My order',
            link: '/orders/myorders',
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

        <DynamicPadding desktop="13px" mobile="20px" />
        <UserTopPageInfo
          user={fakeUserConstant}
          nodeAfter={
            <div className="gap_10">
              <div className="gap_5">
                <AppColor.eye fill={AppColor.text} />
                <Typography variant="body4">20 views</Typography>
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
          callback={item => {
            scrollToRef(item)
          }}
          filters={['Description', 'Specification', 'Customer', 'FAQ (2)']}
          activeStartItem="Description"
        />

        <DynamicPadding desktop="30px" mobile="0px" />

        <ResponsiveLayoutTwo
          gap="80px"
          item1MaxWidth="732px"
          item2MaxWidth="388px"
          orderItem1Desktop={0}
          orderItem1Mobile={1}
          orderItem2Desktop={1}
          orderItem2Mobile={0}
          item1={
            <div style={{ width: '100%' }}>
              <LastSponsors />
              <DynamicPadding desktop="43px" />

              <Typography variant="body3" fontWeight="500">
                Description
              </Typography>
              <DynamicPadding desktop="16px" mobile="20px" />
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
                arcu. Pellentesque sapien, arcu, nulla quis magnis praesent.
              </Typography>
              <DynamicPadding desktop="10px" mobile="20px" />

              <Typography
                variant="body4"
                color={AppColor.transparentBlack}
                fontWeight="500"
              >
                Tags
              </Typography>
              <SizeBox height="10px" />
              <TagsDisplay tags={['Logos', 'Logo Design', 'Logo']} />

              <DynamicPadding desktop="44px" />
              <span ref={specifRef}>
                <Typography variant="body3" fontWeight="500">
                  Specification
                </Typography>
              </span>
              <DynamicPadding desktop="20px" mobile="20px" />
              <div className="gap_10">
                <AppColor.layers />
                <div className={styles.flex_column}>
                  <div className="gap_5">
                    <Typography variant="body4" fontWeight="500">
                      Minimal logo for website
                    </Typography>
                    <AppColor.earchSecondVariant />
                  </div>
                  <Typography variant="body5" color={AppColor.transparentBlack}>
                    A. Markevych • 16 Oct 2023 13:15
                  </Typography>
                </div>
              </div>

              <DynamicPadding desktop="40px" />

              <span ref={customerRef}>
                <Typography variant="body3" fontWeight="500">
                  Customer
                </Typography>
              </span>
              <DynamicPadding desktop="35px" mobile="20px" />
              <FreelancerCard
                disableFirstTwo={true}
                type="Logo design"
                links={['aCCOUNT', 'Stats', 'Reviews']}
                user={fakeUserConstant}
              />

              <DynamicPadding />
              <div ref={faqRef} className={'gap_5  '}>
                <Typography variant="body3" fontWeight="500">
                  FAQ
                </Typography>
                <div className={styles.box_black}>
                  <Typography variant="body3" color="white" fontWeight="500">
                    2
                  </Typography>
                </div>
              </div>
              <DynamicPadding desktop="25px" mobile="20px" />

              <Dropdown
                title="What if your requirements does not meet any of my package?                        "
                description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo. "
                showLine={false}
              />
              <SizeBox height="15px" />
              <Dropdown
                title="What software do you use?                        "
                description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo. "
                showLine={false}
              />

              <DynamicPadding desktop="45px" />
              <div className={'flex_space_between'}>
                <Link to={'/orders/all'}>
                  <ChevronMoveTo
                    variant="left"
                    onClick={() => {}}
                    text="Step back"
                    title="catalog"
                  />
                </Link>
                <Link to={'/orders/selection'}>
                  <ChevronMoveTo
                    variant="right"
                    onClick={() => {}}
                    text="Next step"
                    title="Selection"
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
              <DynamicPadding desktop="30px" mobile="20px" />

              <CenterShadowBox
                align="start"
                elements={[
                  <div style={{ width: '100%' }}>
                    <Typography
                      variant="body3"
                      fontWeight="500"
                      textLineHeight="1"
                    >
                      Details
                    </Typography>
                    <DynamicPadding desktop="24px" mobile="20px" />

                    <div className={styles.text_dotted_wrapper}>
                      <TextDotted
                        fontWeightEndText="500"
                        startTextColor={AppColor.transparentBlack}
                        text="Price"
                        endNode={
                          <div className="gap_5">
                            <AppColor.fourOfFive />
                            <Typography
                              textLineHeight="1"
                              variant="body5"
                              fontWeight="500"
                            >
                              $5K-6K
                            </Typography>
                            <AppColor.puzle />
                          </div>
                        }
                      />
                      <TextDotted
                        fontWeightEndText="500"
                        startTextColor={AppColor.transparentBlack}
                        text="Delivery"
                        textEnd="need offer"
                      />
                      <TextDotted
                        fontWeightEndText="500"
                        startTextColor={AppColor.transparentBlack}
                        text="Need To Hire"
                        textEnd="0 of 1"
                      />
                      <TextDotted
                        fontWeightEndText="500"
                        startTextColor={AppColor.transparentBlack}
                        text="Bids"
                        textEnd="3"
                      />
                    </div>
                    <DynamicPadding desktop="30px" />
                    <HorizontalLine />
                    <DynamicPadding desktop="28px" />
                    <Typography
                      variant="body3"
                      fontWeight="500"
                      textLineHeight="1"
                    >
                      Freelancers
                    </Typography>
                    <DynamicPadding desktop="24px" mobile="20px" />

                    <div className={styles.text_dotted_wrapper}>
                      <TextDotted
                        fontWeightEndText="500"
                        startTextColor={AppColor.transparentBlack}
                        text="Level"
                        endNode={
                          <div className="gap_5">
                            <Typography
                              textLineHeight="1"
                              variant="body4"
                              fontWeight="500"
                            >
                              1 and up
                            </Typography>
                            <AppColor.singTrue stroke="#B6DE59" />
                          </div>
                        }
                      />
                      <TextDotted
                        fontWeightEndText="500"
                        startTextColor={AppColor.transparentBlack}
                        text="Positive Reviews"
                        textEnd=" 95% and up"
                      />
                      <TextDotted
                        fontWeightEndText="500"
                        startTextColor={AppColor.transparentBlack}
                        text="Organization"
                        endNode={
                          <div className="gap_5">
                            <Typography
                              textLineHeight="1"
                              variant="body4"
                              fontWeight="500"
                            >
                              no preference
                            </Typography>
                            <AppColor.singTrue stroke="#B6DE59" />
                          </div>
                        }
                      />
                      <Typography
                        variant="body4"
                        fontWeight="500"
                        color={AppColor.transparentBlack}
                      >
                        More 3
                      </Typography>
                    </div>
                    <DynamicPadding desktop="23px" mobile="20px" />
                    <HorizontalLine />
                    <DynamicPadding desktop="30px" mobile="20px" />
                    <MyButtonOrange
                      width="100%"
                      textTransform="uppercase"
                      onClick={() => {}}
                    >
                      Place a bid 10/20
                    </MyButtonOrange>
                  </div>,
                ]}
                gap="0px"
                paddingBoxDesktop="30px"
                paddingBoxMobile="15px"
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

export default OrdersOrder
