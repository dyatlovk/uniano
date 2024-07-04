
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import styles from './style.module.scss';
import { developmentDropdown } from '@common/models/constants';
import Header from '@common/components/Header/Header/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import AppColor from '@common/styles/variables-static';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant, userModel } from '@common/models/user';
import Typography from '@common/components/ui/Typography/Typography';
import FilterList from '@common/components/FilterList/index';
import TagsDisplay from '@common/components/TagsDisplay/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import { Ref, RefObject, useEffect, useRef, useState } from 'react';
import TextDotted from '@common/components/ui/TextDotted/index';
import fakeUserImage from '@assets/images/user-fake.png';
import CardTypeDisplay from '@common/components/cards/CardTypeDisplay/CardTypeDisplay';
import ReviewsProgramCard from '@common/components/ReviewsProgram/index';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import Dropdown from '@common/components/ui/Dropdown/index';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import { links } from 'common/components/Header/components/MenuLinks/content';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import { Link } from 'react-router-dom';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import PartnershipModal from './modals/partnershipModal';
import DarkBox from '@common/components/ui/DarkBox/index';
import { ButtonDropdownSelect } from '@common/components/ui/ThreeLinesPopUp/index';
import DropdownNumber from '@common/components/ui/SearchFilterBar/components/DropdownNumber/index';
import { ActivityItem } from '@common/components/ui/Dropdown/DropdownNodes/variants/DropdownNodeActivity/index';
import MyButtonTransparentBlack from '@common/components/ui/MyButton/variants/MyButtonTransparentBlack';
import ActivityModal from './modals/activityModal';
import StatsModal from './modals/StatsModal';
import ServiceModal from './modals/ServiceModal';
import PorftolioModal from './modals/PorftolioModal';
import ReviewsModal from './modals/reviewsModal';
import SearchFilterBar, { FilterTags } from '@common/components/ui/SearchFilterBar/index';
import SubscriptionsModal from './modals/subscriptionsModal';
import DeeplinkModal from './modals/deeplinkModal';

const Program = () => {
    const [showAllDetailsRight,setShowAllDetailsRight] = useState(false);
    const title = 'Artem Markevych WordPress Partnership'
    const arrayHistory = ['Partnership', 'Development', 'Web Development', 'WordPress']

    const [deeplinkModal, setDeeplinkModal] = useState(false);

    const ratesRef = useRef(null);
    const toolsRef = useRef(null);
    const freelancerRef = useRef(null);
    const reviewsRef = useRef(null);
    const faqRef = useRef(null);

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])

    const mapOfRefs = {
        'Description': null, // Replace null with the appropriate ref if needed
        'Rates': ratesRef,
        'Tools': toolsRef,
        'Freelancer': freelancerRef,
        'Reviews (25)': reviewsRef,
        'FAQ (2)': faqRef,
    };

    function scrollToRef(item: string) {
        const currentRef:RefObject<any> = mapOfRefs[item];

        if(currentRef.current) {
            const yOffset = currentRef.current.getBoundingClientRect().top - 105;
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
    }

    return (
        <div>
        <Header />

        <NavigationBarDropdowns
            title="partnership"
            navItems={developmentDropdown}
            titleIcon={<AppColor.partnership />}
        />

        <div className={styles.wrapper}>
            <PageDetails
                historyNode={
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={arrayHistory}
                    />
                }
                endNode={
                    <ButtonDropdownSelect text='My programs' variants={['My programs','2','3']} />
                }
                pageTitle={title}
            />

            <DynamicPadding desktop='30px' mobile='20px'/>
            <UserTopPageInfo user={fakeUserConstant}
                nodeAfter={
                    <div className={styles.node_after_passed_top}>
                       <div>
                            <AppColor.clicks/>
                            <Typography variant='body4'>20 clicks</Typography>
                       </div>
                        <div>
                            <AppColor.leads/>
                            <Typography variant='body4'>20 leads</Typography>
                        </div>
                        <div>
                            <AppColor.sales/>
                            <Typography variant='body4'>20 sales</Typography>
                        </div>
                       <div>
                            <AppColor.refreshA/>
                       </div>
                    </div>
                }
            />

            <DynamicPadding />

            <FilterList
                activeStartItem='Description'
                filters={['Description', 'Rates', 'Tools', 'Freelancer', 'Reviews (25)', 'FAQ (2)']}
                callback={(item) => {scrollToRef(item)}}
            />
             <DynamicPadding />

             <ResponsiveLayoutTwo
                    gap='80px'
                    item1MaxWidth='730px'
                    item2MaxWidth='390px'
                    item1={
                        <div style={{width: '100%'}}>
                            <Typography variant='body3'>Description</Typography>

                            <DynamicPadding desktop='35px' mobile='15px'/>
                            <Typography variant='body4'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tristique enim, neque, mollis at. Quam scelerisque pulvinar pellentesque phasellus. Nisl id sit tincidunt ut. Egestas ullamcorper magna mi integer elementum dictum aenean in. Ultrices convallis in sit venenatis, ut nunc pellentesque. Eu lacus sapien et eu tortor cursus dolor.
                            Nunc nunc, consequat porttitor sed tortor. Tempus mi sit blandit nibh fusce morbi nullam. Nunc sagittis tortor, dictum lorem quis faucibus elit. Pretium fames leo ut eget augue velit eros, pellentesque. Non quis imperdiet dui praesent at massa. Bibendum commodo eros bibendum sit cras sit venenatis, vulputate a. Et aliquet eu et tristique nibh ultrices vel amet amet. Sit facilisi pretium ut placerat sem. Sit nunc integer velit facilisi adipiscing lectus arcu. Pellentesque sapien, arcu, nulla quis magnis praesent.
                            </Typography>

                            <DynamicPadding desktop='20px' mobile='20px'/>
                            <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Tags</Typography>
                            <SizeBox height='10px'/>
                            <TagsDisplay
                                tags={['Logos', 'Logo Design', 'Logo']}
                            />
                            <DynamicPadding />
                            <span ref={ratesRef}><ConditionSection /></span>
                            <DynamicPadding />
                            <span ref={toolsRef}><Typography variant='body3' fontWeight='500'>Tools</Typography></span>

                            <DynamicPadding desktop='40px' mobile='30px'/>
                            <div className={styles.tools_wrapper_section}>
                                <ToolsItem
                                    icon={<AppColor.deeplink/>}
                                    title='Deeplink'
                                    text='Sale Links'
                                    onClick={() => {setDeeplinkModal(true)}}
                                />
                                <ToolsItem
                                    icon={<AppColor.banners/>}
                                    title='Banners'
                                    text='Advertising Images'
                                />
                            </div>
                            {deeplinkModal && <ModalCenterBasic desktopMaxWidth='830px' bottomPartPadding='30px' callbackClose={() => {setDeeplinkModal(false)}} 
                                title='Deeplink'
                            >
                                <DeeplinkModal />
                                </ModalCenterBasic>}
                            

                            <DynamicPadding />
                            <span ref={freelancerRef}><Typography variant='body3' fontWeight='500'>Freelancer</Typography></span>

                            <DynamicPadding desktop='40px' mobile='30px'/>
                            <FreelancerCard user={fakeUserConstant} />
                            <DynamicPadding />
                            <div className={styles.review_wrapper}>
            <div className={styles.gap_10}>
                <span ref={reviewsRef}><Typography variant='body3' fontWeight='500'>Reviews</Typography></span>
                <div className={styles.box_black}>
                    <Typography variant='body3' color='white' fontWeight='500'>1</Typography>
                </div>
                <div className={styles.margin_mobile}><Typography variant='body4' fontWeight='500' color={AppColor.green}>100% positive reviews </Typography></div>
            </div>
            <div className={styles.gap_30}>
                <div className={styles.gap_5}>
                    <AppColor.filter />
                    <Typography variant='body4' textTransform='uppercase' fontWeight='500'>Filters</Typography>
                </div>
                <div className={styles.gap_5}>
            <AppColor.relevant />
            <Typography variant='body4' textTransform='uppercase' fontWeight='500'>Most recent</Typography>
        </div>
    </div>
</div>

<DynamicPadding desktop='30px' mobile='20px'/>
<ReviewsProgramCard 
    money='2000'
    sales='20'
    likes='15'
    text='Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to.'
    user={fakeUserConstant}

/>

<DynamicPadding />
<div ref={faqRef} className={styles.questions_answers}>
    <Typography variant='body3' fontWeight='500'>Questions & Answers</Typography>
    <div className={styles.box_black}>
        <Typography variant='body3' color='white' fontWeight='500'>2</Typography>
    </div>
</div>
<DynamicPadding desktop='30px' mobile='20px'/>

<Dropdown 
    title="What if your requirements does not meet any of my package?                        "
    description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo. "
showLine={false}
/>
<SizeBox height='15px'/>
<Dropdown 
    title="What software do you use?                        "
    description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo. "
    showLine={false}
/>

<DynamicPadding />
<div className={styles.justify_flex}>
    <Link to={'/partnership'}>
    <ChevronMoveTo variant='left' onClick={() => {}} text='Step back' title='catalog' />
    </Link>
    <Link to={'/partnership/freelancer/selection'}>
    <ChevronMoveTo variant='right' onClick={() => {}} text='Next step' title='Selection' />
    </Link>
</div>
                        </div>
                    }
                    item2={
                    <div style={{width: '100%'}}>
                        <div className={styles.right_part_item}>
                            <div>
                                <Typography variant='body3'>Details</Typography>
                                <DynamicPadding desktop='25px' mobile='15px'/>
                                <div className={styles.details_dotted_text_wrapper}>
                                    <TextDotted
                                        text='EPC'
                                        textEnd='3$'
                                    />
                                    <TextDotted
                                        text='CR'
                                        textEnd='5.61%'
                                    />
                                    <TextDotted
                                        text='CR for 48 hours'
                                        textEnd='8.61%'
                                    />
                                </div>
                          </div>
                          <DynamicPadding desktop='30px' mobile='20px'/>
                          <HorizontalLine />
                          <DynamicPadding desktop='30px' mobile='20px'/>
                          <div>
                                <Typography variant='body3'>Managers</Typography>
                                <DynamicPadding desktop='25px' mobile='15px'/>
                               <div className={styles.details_dotted_text_wrapper}>
                                    <TextDotted
                                        text='Level'
                                        textEnd='3$'
                                    />
                                    <TextDotted
                                        text='Positive Reviews'
                                        textEnd='5.61%'
                                    />
                                    <TextDotted
                                        text='Organization'
                                        textEnd='8.61%'
                                    />
                                  {!showAllDetailsRight && <div onClick={() => {setShowAllDetailsRight(true)}} style={{cursor: 'pointer'}}> 
                                    <Typography variant='body4' fontWeight='500'>Show 3 more</Typography>
                                   </div>}
    
                                   {
                                    showAllDetailsRight && <div className={styles.details_dotted_text_wrapper}>
                                        <TextDotted
                                        text='Level'
                                        textEnd='3$'
                                    />
                                    <TextDotted
                                        text='Positive Reviews'
                                        textEnd='5.61%'
                                    />
                                    <TextDotted
                                        text='Organization'
                                        textEnd='8.61%'
                                    />
                                    </div>
                                   }
                                   
                               </div>
                               <DynamicPadding desktop='30px' mobile='20px'/>
                                <HorizontalLine />
                                <DynamicPadding desktop='30px' mobile='20px'/>
    
                                <Typography variant='body4' fontWeight='500' color={AppColor.red}>You do not qualify for this program</Typography>
                                <DynamicPadding desktop='15px' mobile='10px' />
                                <MyButtonOrange  fontWeight='500' textTransform='uppercase' disabled={true} width='100%' onClick={() => {}}>Submit</MyButtonOrange>
                                <DynamicPadding desktop='15px' mobile='10px' />
                                <MyButtonTransparentOrange fontWeight='500' textTransform='uppercase'  width='100%' onClick={() => {}}>Contact Freelancer</MyButtonTransparentOrange>
                          </div>
                        </div>
                      </div>
            
                    }
                    />
             
        </div>
           <CardsSliderRelated />
           <div className={styles.wrapper}>
                <AskedQuestion/>
           </div>
           <Footer/>
      </div>
    );
};

type ToolsItemProps = {
    icon: any;
    title: string;
    text: string;
    onClick?: () => void;
}
type FreelancerCardProps = {
    user: userModel;
    type?: string;
    links?: string[];
    disableFirstTwo?: boolean
}
export const FreelancerCard = ({disableFirstTwo,user,type,links}: FreelancerCardProps) => {
    const [partnershipModal, setPartnershipModal] = useState(false);
    const [subscriptionsModal, setSubscriptionsModal] = useState(false);
    const [completedModal, setCompletedModal] = useState(false);
    const [statsModal, setStatsModal] = useState(false);
    const [servicesModal, setServicesModal] = useState(false);
    const [portfolioModal, setPortfolioModal] = useState(false);
    const [reviewsModal, setReviewsModal] = useState(false);

    return (
       <div style={{position: 'relative'}}>
         {subscriptionsModal && <ModalCenterBasic
      
        desktopMaxWidth='1260px' bottomPartPadding='30px' callbackClose={() => {setSubscriptionsModal(false)}}
            title='Subscriptions'
        >
                <SubscriptionsModal />
            </ModalCenterBasic>}
         {reviewsModal && <ModalCenterBasic
        nodeAfterTitle={
            <div className={styles.flex_node}>
                <DarkBox text='3' />
                <Typography variant='body4' color={AppColor.green}>95% positive reviews </Typography>
                <div style={{flexGrow: '1'}}></div>
                <ButtonDropdownSelect text='Projects' variants={['Projects' , 'Projects1']} />
                <DropdownNumber />
                <SizeBox width='30px'/>
            </div>
        }
        desktopMaxWidth='820px' bottomPartPadding='30px' callbackClose={() => {setReviewsModal(false)}}
            title='Reviews'
        >
                <ReviewsModal />
            </ModalCenterBasic>}
         {portfolioModal && <ModalCenterBasic
        nodeAfterTitle={
            <div className={styles.flex_node}>
                <DarkBox text='3' />
                <div style={{flexGrow: '1'}}></div>
                <DropdownNumber />
                <SizeBox width='30px'/>
            </div>
        }
        desktopMaxWidth='880px' bottomPartPadding='30px' callbackClose={() => {setPortfolioModal(false)}}
            title='Portfolio'
        >
                <PorftolioModal />
            </ModalCenterBasic>}
        {servicesModal && <ModalCenterBasic
        nodeAfterTitle={<DarkBox text='3' />}
        desktopMaxWidth='820px' bottomPartPadding='30px' callbackClose={() => {setServicesModal(false)}}
            title='Services'
        >
                <ServiceModal />
            </ModalCenterBasic>}
        {statsModal && <ModalCenterBasic
        nodeAfterTitle={<div className={styles.flex_node}>
            <DarkBox text='3' />
            <div style={{flexGrow: '1'}}></div>
            <ButtonDropdownSelect text='Projects' variants={['Projects' , 'Projects1']} />
            <SizeBox width='30px'/>
            </div>}
        desktopMaxWidth='820px' bottomPartPadding='30px' callbackClose={() => {setStatsModal(false)}}
            title='Statistics'
        >
              <StatsModal />
            </ModalCenterBasic>}
        {partnershipModal && <ModalCenterBasic
        nodeAfterTitle={<DarkBox text='3' />}
        desktopMaxWidth='820px' bottomPartPadding='30px' callbackClose={() => {setPartnershipModal(false)}}
            title='Parterships'
        >
                <PartnershipModal />
            </ModalCenterBasic>}
        {completedModal && <ModalCenterBasic
        desktopMinWidth='650px'
        nodeAfterTitle={
            <div className={styles.flex_node}>
                <DarkBox text='3' />
                <div style={{flexGrow: '1'}}></div>
                <div className='gap_10' style={{gap: '30px'}}>
                    <ButtonDropdownSelect text='Projects' variants={['Projects' , 'Projects1']} />
                    <DropdownNumber />
                </div>
                <SizeBox width='30px'/>
            </div>
        }
        desktopMaxWidth='650px' bottomPartPadding='10px' callbackClose={() => {setCompletedModal(false)}}
            title='Common activity'
        >
            <ActivityModal />
            </ModalCenterBasic>}
         <span className={styles.shell_absolute}>
                    <CardTypeDisplay
                        textColor={AppColor.white}
                        text={type ?? "Business"}
                        backgroundColor={AppColor.text}
                    />
                </span>
    
                <div className={styles.shell_absolute_right}>
                   {!disableFirstTwo && <>
                    <div onClick={() => {setPartnershipModal(true)}} className={`${styles.absolute_black} cursor`}>
                        <AppColor.checkedFile width={'13px'}/>
                    </div>
                    <div onClick={() => {setSubscriptionsModal(true)}} className={`${styles.absolute_black} cursor`}>
                        <AppColor.subscriptionsWhite width={'13px'}/>
                    </div>
                   </>}
                    <div onClick={() => {setCompletedModal(true)}} className={`${styles.absolute_black} cursor`}>
                        <AppColor.completed width={'13px'}/>
                    </div>
                </div>
            <div className={styles.freelance_card_wrapper}>
                <div className={styles.freelance_card_content}>
                  <div style={{position: 'relative',height: 'fit-content'}}>
                        <div className={styles.active_status}></div>
                        <img src={user.image} alt="" />
                  </div>
                    <div>
                        <div style={{display:'flex',alignItems:'center',gap:'10px',flexWrap: 'wrap'}}>
                            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                                <AppColor.UkraineFlagIcon />
                                <Typography variant='body4'>{user.name}</Typography>
                            </div>
                            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                                <AppColor.starFilled fill={AppColor.green} />
                                <Typography variant='body4'>95%</Typography>
                            </div>
                            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                                <AppColor.fiveOfFive />
                                <Typography variant='body4'>{user.lvl} lvl</Typography>
                                <Typography variant='body4' color={AppColor.red}>Lead</Typography>
                            </div>
                        </div>
                        <DynamicPadding desktop='20px' mobile='15px'/>
                        <div className={styles.freelancer_links}>
                            {links 
                            ? links.map(item => {
                                switch(item.toLowerCase()) {
                                  case 'account':
                                    return <Link key={item} to={'/dashboard/account'}>
                                      <Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>{item}</Typography>
                                    </Link>;
                                  case 'stats':
                                    return <div key={item} className='cursor' onClick={() => {setStatsModal(true)}}>
                                      <Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>{item}</Typography>
                                    </div>;
                                  case 'services':
                                    return <div key={item} className='cursor' onClick={() => {setServicesModal(true)}}>
                                      <Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>{item}</Typography>
                                    </div>;
                                case 'portfolio':
                                    return <div key={item} className='cursor' onClick={() => {setPortfolioModal(true)}}>
                                        <Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>{item}</Typography>
                                    </div>;
                                case 'reviews':
                                    return <div key={item} className='cursor' onClick={() => {setReviewsModal(true)}}>
                                        <Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>{item}</Typography>
                                    </div>;
                                  // Add more cases for other links/modal actions as needed
                                  default:
                                    return <Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>{item}</Typography>; // Render nothing for unsupported links
                                }
                              })
                            : <>
                            <Link to={'/dashboard/account'}><Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>ACCOUNT</Typography></Link>
                            <div className='cursor' onClick={() => {setStatsModal(true)}}><Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>Stats</Typography></div>
                            <div className='cursor' onClick={() => {setServicesModal(true)}}><Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>services</Typography></div>
                            <div className='cursor' onClick={() => {setPortfolioModal(true)}}><Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>portfolio</Typography></div>
                            <div className='cursor' onClick={() => {setReviewsModal(true)}}><Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>Reviews</Typography></div>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}


export const DisplayArrayOfDetailsProfile = ({array}: {array:string[]}) => {

    let modifiedArray = [];
    const [partnershipModal, setPartnershipModal] = useState(false);
    const [subscriptionsModal, setSubscriptionsModal] = useState(false);
    const [completedModal, setCompletedModal] = useState(false);
    const [statsModal, setStatsModal] = useState(false);
    const [servicesModal, setServicesModal] = useState(false);
    const [portfolioModal, setPortfolioModal] = useState(false);
    const [reviewsModal, setReviewsModal] = useState(false);

    return (
      <>
      {subscriptionsModal && <ModalCenterBasic
      
      desktopMaxWidth='1260px' bottomPartPadding='30px' callbackClose={() => {setSubscriptionsModal(false)}}
          title='Subscriptions'
      >
              <SubscriptionsModal />
          </ModalCenterBasic>}
       {reviewsModal && <ModalCenterBasic
      nodeAfterTitle={
          <div className={styles.flex_node}>
              <DarkBox text='3' />
              <Typography variant='body4' color={AppColor.green}>95% positive reviews </Typography>
              <div style={{flexGrow: '1'}}></div>
              <ButtonDropdownSelect text='Projects' variants={['Projects' , 'Projects1']} />
              <DropdownNumber />
              <SizeBox width='30px'/>
          </div>
      }
      desktopMaxWidth='820px' bottomPartPadding='30px' callbackClose={() => {setReviewsModal(false)}}
          title='Reviews'
      >
              <ReviewsModal />
          </ModalCenterBasic>}
       {portfolioModal && <ModalCenterBasic
      nodeAfterTitle={
          <div className={styles.flex_node}>
              <DarkBox text='3' />
              <div style={{flexGrow: '1'}}></div>
              <DropdownNumber />
              <SizeBox width='30px'/>
          </div>
      }
      desktopMaxWidth='880px' bottomPartPadding='30px' callbackClose={() => {setPortfolioModal(false)}}
          title='Portfolio'
      >
              <PorftolioModal />
          </ModalCenterBasic>}
      {servicesModal && <ModalCenterBasic
      nodeAfterTitle={<DarkBox text='3' />}
      desktopMaxWidth='820px' bottomPartPadding='30px' callbackClose={() => {setServicesModal(false)}}
          title='Services'
      >
              <ServiceModal />
          </ModalCenterBasic>}
      {statsModal && <ModalCenterBasic
      nodeAfterTitle={<div className={styles.flex_node}>
          <DarkBox text='3' />
          <div style={{flexGrow: '1'}}></div>
          <ButtonDropdownSelect text='Projects' variants={['Projects' , 'Projects1']} />
          <SizeBox width='30px'/>
          </div>}
      desktopMaxWidth='820px' bottomPartPadding='30px' callbackClose={() => {setStatsModal(false)}}
          title='Statistics'
      >
            <StatsModal />
          </ModalCenterBasic>}
      {partnershipModal && <ModalCenterBasic
      nodeAfterTitle={<DarkBox text='3' />}
      desktopMaxWidth='820px' bottomPartPadding='30px' callbackClose={() => {setPartnershipModal(false)}}
          title='Parterships'
      >
              <PartnershipModal />
          </ModalCenterBasic>}
      {completedModal && <ModalCenterBasic
      desktopMinWidth='650px'
      nodeAfterTitle={
          <div className={styles.flex_node}>
              <DarkBox text='3' />
              <div style={{flexGrow: '1'}}></div>
              <div className='gap_10' style={{gap: '30px'}}>
                  <ButtonDropdownSelect text='Projects' variants={['Projects' , 'Projects1']} />
                  <DropdownNumber />
              </div>
              <SizeBox width='30px'/>
          </div>
      }
      desktopMaxWidth='650px' bottomPartPadding='10px' callbackClose={() => {setCompletedModal(false)}}
          title='Common activity'
      >
          <ActivityModal />
          </ModalCenterBasic>}
           <div className='gap_10' style={{flexWrap: 'wrap'}}>
            {array.map(item => {
                switch(item.toLowerCase()) {
                    case 'account':
                      return <Link key={item} to={'/dashboard/account'}>
                        <Typography textTransform='uppercase' color={'white'} variant='body5' fontWeight='500'>{item}</Typography>
                      </Link>;
                    case 'stats':
                      return <div key={item} className='cursor' onClick={() => {setStatsModal(true)}}>
                        <Typography textTransform='uppercase' color={'white'} variant='body5' fontWeight='500'>{item}</Typography>
                      </div>;
                    case 'services':
                      return <div key={item} className='cursor' onClick={() => {setServicesModal(true)}}>
                        <Typography textTransform='uppercase' color={'white'} variant='body5' fontWeight='500'>{item}</Typography>
                      </div>;
                  case 'portfolio':
                      return <div key={item} className='cursor' onClick={() => {setPortfolioModal(true)}}>
                          <Typography textTransform='uppercase' color={'white'} variant='body5' fontWeight='500'>{item}</Typography>
                      </div>;
                  case 'reviews':
                      return <div key={item} className='cursor' onClick={() => {setReviewsModal(true)}}>
                          <Typography textTransform='uppercase' color={'white'} variant='body5' fontWeight='500'>{item}</Typography>
                      </div>;
                    // Add more cases for other links/modal actions as needed
                    default:
                      return <Typography textTransform='uppercase' color={'white'} variant='body5' fontWeight='500'>{item}</Typography>; // Render nothing for unsupported links
                  }
            })}
           </div>
      </>
    )
}
const ToolsItem = ({icon,text,title,onClick}:ToolsItemProps) => {
    return (
        <div
        onClick={() => {
            if(onClick) {
                onClick();
            }
        
        }}
        className={`${styles.tools_wrapper} cursor`}>
            {icon}
            <SizeBox height='15px'/>
            <Typography textLineHeight='1' variant='body3' fontWeight='500'>{title}</Typography>
            <SizeBox height='15px'/>
            <Typography textLineHeight='1' variant='body5' fontWeight='500' textTransform='uppercase'>{text}</Typography>
        </div>
    )
}
const ConditionSection = () => {

    const [activeItem,setActiveItem] = useState<"Services" | "Orders" | "Subscriptions">("Services");
    return (
        <div>
            <div style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between'}}>
                <Typography variant='body3' fontWeight='500'>Conditions</Typography>
                <div className={styles.condition_buttons}>
                    <div style={activeItem == "Services" ? {border: `1px solid ${AppColor.orange}`} : {}} className={styles.condition_swith_buttton} onClick={() => {setActiveItem('Services')}}> 
                        <Typography color={activeItem == 'Services' ? AppColor.orange : AppColor.text} variant='body4'>Services</Typography>
                    </div>
                    <div style={activeItem == "Orders" ? {border: `1px solid ${AppColor.orange}`} : {}} className={styles.condition_swith_buttton} onClick={() => {setActiveItem('Orders')}}> 
                        <Typography color={activeItem == 'Orders' ? AppColor.orange : AppColor.text} variant='body4'>Orders</Typography>
                    </div>
                    <div style={activeItem == "Subscriptions" ? {border: `1px solid ${AppColor.orange}`} : {}} className={styles.condition_swith_buttton} onClick={() => {setActiveItem('Subscriptions')}}> 
                        <Typography color={activeItem == 'Subscriptions' ? AppColor.orange : AppColor.text} variant='body4'>Subscriptions</Typography>
                    </div>
                </div>
            </div>
            <SizeBox height='20px'/>

            <div>
                {
                    activeItem == 'Services' &&
                    <div className={styles.condition_values_wrapper}>
                        <TextDotted text='Services Referral Rate' textEnd={'15%'}/>
                        <TextDotted text='Services Manager Rate' textEnd={'15%'}/>
                        <TextDotted text='Access to chat with customers' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text=' Access to “Selection” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text='Access to “Negotiation” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text='Access to “Progress” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text=' Access to “Completed” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                    </div>
                }
                {
                    activeItem == 'Orders' &&
                    <div className={styles.condition_values_wrapper}>
                        <TextDotted text='Orders Referral Rate' textEnd={'15%'}/>
                        <TextDotted text='Orders Manager Rate' textEnd={'15%'}/>
                        <TextDotted text='Access to chat with customers' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text=' Access to “Selection” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text='Access to “Negotiation” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text='Access to “Progress” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text=' Access to “Completed” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                    </div>
                }
                {
                    activeItem == 'Subscriptions' &&
                    <div className={styles.condition_values_wrapper}>
                        <TextDotted text='Subscriptions Referral Rate' textEnd={'15%'}/>
                       
                    </div>
                }
            </div>
        </div>
    )
}



export default Program;