
import Header from '@common/components/Header/Header/index';
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import PageDetails from '@common/components/ui/PageDetails/index';
import Typography from '@common/components/ui/Typography/Typography';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { crowdfreelancerNav } from '@common/models/constants';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import DetailCrowdfreelanceProgress from '@common/components/ui/DetailsTable/variants/DetailsCrowdfreelancerProgress/index';
import { useEffect } from 'react';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import DetailsTableMultiNodes from '@common/components/ui/DetailsTable/DetailsTableMultiNodes/index';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import CenterShadowBox from '@common/components/ui/CenterShadowBox/index';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import { Link } from 'react-router-dom';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import SizeBox from '@common/components/ui/SizeBox/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import TextDotted from '@common/components/ui/TextDotted/index';
import { DetailsDropdownItem } from '@pages/Partnership/pages/ProgressFreelancer/index';

const CrowdfreelanceProgress = () => {
    const arrayHistory = ['Crowdfreelance', 'Tech', 'Web Service'] 
    const title = 'MONITREE - Vines that grow along the moni...';

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])

    
    return (
        <div>
        <Header />

        <NavigationBarSelection
         allItemsProgress={['Campaign', 'Progress', 'Completed',]}
         currentItemProgress='Progress'
      />

        <div className={'wrapper_page'}>
            <PageDetails
                historyNode={
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={arrayHistory}
                    />
                }
                pageTitle={title}
            />

            <DynamicPadding desktop='30px' mobile='20px'/>
            <UserTopPageInfo user={fakeUserConstant}
            />
            <DynamicPadding />

            <ResponsiveLayoutTwo
                gap='80px'
                item1MaxWidth='730px'
                item2MaxWidth='390px'
                item1={
                    <div>
                        <DetailsTableMultiNodes
                            titles={['User', 'Date', 'Action']}
                            removeNavBar={true}
                            elements={[
                                {
                                    nodes: [
                                        <UserAvatar active={true} name={fakeUserConstant.name} url={fakeUserConstant.image}
                                         role='Customer' flag={<AppColor.UkraineFlagIcon/>}/>,
                                         <div style={{maxWidth: '95px'}}>  

                                        <Typography variant='body4'>
                                            Feb 26, 2021 16:32 
                                         </Typography>
                                         </div>,
                                        <div className='gap_5'>
                                             <Typography variant='body4' fontWeight='500' color={AppColor.orange}>
                                                Offered to complete sponsorship
                                             </Typography>
                                             <AppColor.time />
                                        </div>,
                                    ]
                                },
                                {
                                    nodes: [
                                        <UserAvatar active={true} name={fakeUserConstant.name} url={fakeUserConstant.image}
                                         role='Customer' flag={<AppColor.UkraineFlagIcon/>}/>,
                                         <div style={{maxWidth: '95px'}}>  

                                        <Typography variant='body4'>
                                            Feb 26, 2021 16:32 
                                         </Typography>
                                         </div>,
                                        <div className='gap_5'>
                                             <Typography variant='body4' fontWeight='500' color={AppColor.orange}>
                                                Offered to complete sponsorship
                                             </Typography>
                                             <AppColor.time />
                                        </div>,
                                    ]
                                }
                            ]}
                        />

                        <DynamicPadding />

                        <div className={styles.cards_grid}>
                            <CenterShadowBox
                                elements={[
                                    <AppColor.files  height={'27px'}/>,
                                    <Typography variant='body4' fontWeight='500'>
                                        Files
                                    </Typography>,
                                    <Typography variant='body5' color={AppColor.transparentBlack} fontWeight='500' textTransform='uppercase'>
                                        3 files
                                    </Typography>
                                ]}
                                gap='20px'
                                paddingBoxDesktop='20px'


                                />
                                <CenterShadowBox
                                elements={[
                                    <AppColor.caseIcon  height={'27px'}/>,
                                    <Typography variant='body4' fontWeight='500'>
                                        Sponsorship & Shipping
                                    </Typography>,
                                    <Typography variant='body5' color={AppColor.transparentBlack} fontWeight='500' textTransform='uppercase'>
                                        Change
                                    </Typography>
                                ]}
                                gap='20px'
                                paddingBoxDesktop='20px'
                                

                                />
                        </div>

                        <DynamicPadding />

                        <div className="flex_space_between">
                            <Link to={'/service/'}>
                            <ChevronMoveTo onClick={() => {}} text='Step back' title='Campaign' variant='left' />
                            </Link>
                            <Link to={'/service/negotioation/freelancer'}>
                            <ChevronMoveTo onClick={() => {}} text='Next step' disabled={true} title='Complete' variant='right' />
                            </Link>
                        </div>
                    </div>
                }
                item2={
                    <div style={{width: '100%'}}>
                        <div className={`flex_space_between box_shadow ${styles.user_wrappper}`}>
                            <UserAvatar role='Freelancer' preventMobileNone={true} url={fakeUserConstant.image} name={fakeUserConstant.name} flag={<AppColor.UkraineFlagIcon/>} active={true} />

                            <div className='gap_10'>
                                <Typography variant='body5' color={AppColor.transparentBlack}>15 hr 59 min ago</Typography>
                                <AppColor.chevronBottom fill={AppColor.text} width={'16px'} height={'8px'}/>
                            </div>
                        </div>
                        <DynamicPadding desktop='30px' mobile='15px'/>
                        <div className="justify_center">
                            <Typography variant='body4' textTransform='uppercase' fontWeight='500'>Project 1</Typography>
                        </div>
                        <DynamicPadding desktop='30px' mobile='15px'/>
                            <div className={`box_shadow ${styles.details_box}`}>
                            <DetailsDropdownItem
                                title='Easy start'
                                text=' 
                                Fab 27, 2023 23:40 - Fab 28, 2023 21:55'
                                initState={true}
                                node={
                                    <div>
                                        <DynamicPadding desktop='30px' mobile='15px' />
                                        <div className="flex_space_between">
                                            <Typography variant='body4' color={AppColor.transparentBlack}>Duration</Typography>
                                            <Typography variant='body4' fontWeight='500'>22 hrs 15 min</Typography>
                                        </div>
                                        <DynamicPadding desktop='15px' mobile='5px'/>
                                        <PercentBar
                                            currentPercent={100}
                                            color={AppColor.green}
                                            height='5px'
                                        />
                                        <DynamicPadding desktop='15px' mobile='5px'/>
                                        <div className="flex_space_between">
                                            <Typography variant='body4' color={AppColor.transparentBlack}>Status</Typography>
                                            <Typography variant='body4' fontWeight='500' color={AppColor.green}>Completed</Typography>
                                        </div>

                                        <DynamicPadding desktop='30px' mobile='20px'/>
                                        <HorizontalLine/>
                                        <DynamicPadding desktop='30px' mobile='20px'/>
                                        <Typography variant='body3' fontWeight='500'>Details</Typography>
                                        <DynamicPadding desktop='30px' mobile='20px'/>

                                       <div className={styles.text_dotted_wrapper}>
                                            <TextDotted
                                                fontWeightEndText='500'
                                           
                                                startTextColor={AppColor.transparentBlack}
                                                text='Digital copy of game' 
                                                textEnd='1'
                                            />
                                             <TextDotted
                                                fontWeightEndText='500'
                                        
                                                startTextColor={AppColor.transparentBlack}
                                                text='Your name in credits' 
                                                endNode={
                                                    <AppColor.singTrue stroke={AppColor.green}/>
                                                }
                                            />
                                             <TextDotted
                                                fontWeightEndText='500'
                                       
                                                startTextColor={AppColor.transparentBlack}
                                                text='Shipping' 
                                                textEnd='Ukraine'
                                            />
                                             <TextDotted
                                                fontWeightEndText='500'
                                             
                                                startTextColor={AppColor.transparentBlack}
                                                text='Delivery' 
                                                textEnd='30 days'
                                            />
                                       </div>
                                       
                                    <DynamicPadding desktop='30px' mobile='20px'/>
                                    <HorizontalLine/>
                                    <DynamicPadding desktop='30px' mobile='20px'/>
                                    <Typography variant='body3' fontWeight='500'>Rewards</Typography>
                                    <SizeBox height='10px'/>

                                    <div className={styles.rewards_wrapper}>
                                        <AppColor.reward10PTS height={'110px'} />
                                        <AppColor.reward30Xp  height={'110px'}/>
                                        <AppColor.rewardBox  height={'110px'}/>
                                    </div>

                                    <DynamicPadding desktop='30px' mobile='20px'/>
                                    <HorizontalLine/>
                                    <DynamicPadding desktop='30px' mobile='20px'/>
                                    <Typography variant='body3' fontWeight='500'>Summary</Typography>
                                    <DynamicPadding desktop='30px' mobile='20px'/>
                                     <div className={styles.text_dotted_wrapper}>
                                            <TextDotted
                                                fontWeightEndText='500'
                                             
                                                startTextColor={AppColor.transparentBlack}
                                                text='Scheduled Date' 
                                                textEnd='in 14 days 12 hrs'
                                            />
                                            <TextDotted
                                                fontWeightEndText='500'
                                             
                                                startTextColor={AppColor.transparentBlack}
                                                text='Scheduled Payment' 
                                                textEnd='$15 100'
                                            />
                                            <TextDotted
                                                fontWeightEndText='500'
                                             
                                                startTextColor={AppColor.transparentBlack}
                                                text='Easy Start Sponsorship' 
                                                textEnd='$15 100'
                                            />
                                           
                                             
                                            <TextDotted
                                                fontWeightEndText='500'
                                                
                                                startTextColor={AppColor.orange}
                                                text='Total To Pay' 
                                                endNode={
                                                    <div className='gap_5'>
                                                        
                                                        <Typography textLineHeight={'1'} color={AppColor.orange} variant='body4' fontWeight='500'>$15 100</Typography>
                                                    </div>
                                                }
                                            />
                                       </div>    
                                       <DynamicPadding desktop='20px' mobile='15px'/>
                                       <div className="gap_5">
                                                <Typography variant='body4'>Repeatable Monthly </Typography>
                                                <SwitchButton height='24px' width='44px' startValue={true} />
                                        </div>       
                                        <DynamicPadding desktop='20px' mobile='15px'/>
                                       <div className="gap_5">
                                                <Typography variant='body4'>Public Financial Details  </Typography>
                                                <SwitchButton height='24px' width='44px' startValue={true} />
                                        </div>       
                                       <DynamicPadding desktop='20px' mobile='15px'/>
                                      
                                        <Typography  variant='body4' color={AppColor.transparentBlack} fontWeight='500' >Invoice</Typography>
                                       
                                      

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
      </div>
    );
};

export default CrowdfreelanceProgress;