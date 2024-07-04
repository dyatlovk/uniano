
import AskedQuestion from '@common/components/AskedQuestions/index';
import ButtonChooseList from '@common/components/ButtonChooseList/index';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import Footer from '@common/components/Footer/Footer';
import Header from '@common/components/Header/Header/index';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import BigInput from '@common/components/ui/BigInput/index';
import CenterShadowBox from '@common/components/ui/CenterShadowBox/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import PageDetails from '@common/components/ui/PageDetails/index';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import SizeBox from '@common/components/ui/SizeBox/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import TextDotted from '@common/components/ui/TextDotted/index';
import Typography from '@common/components/ui/Typography/Typography';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { TipsItem } from '@pages/Partnership/pages/PartnershipCompleted/index';
import { DetailsDropdownItem } from '@pages/Partnership/pages/ProgressFreelancer/index';
import styles from './style.module.scss';
import { useEffect } from 'react';

const CrowdfreelanceCompleted = () => {
    const arrayHistory = ['Crowdfreelance', 'All Campaigns', 'Tech', 'Web Service'] 
    const title = 'MONITREE - Vines that grow along the monitor';

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
  
  
    return (
        <div>
        <Header />
  
        <NavigationBarSelection
           allItemsProgress={['Campaign', 'Progress', 'Completed']}
           currentItemProgress='Completed'
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
            <UserTopPageInfo user={fakeUserConstant}/>
            <DynamicPadding />

            <ResponsiveLayoutTwo
                gap='80px'
                item1MaxWidth='730px'
                item2MaxWidth='390px'
                orderItem1Desktop={0}
                orderItem1Mobile={1}
                orderItem2Desktop={1}
                orderItem2Mobile={0}
                item1={
                    <div style={{width: '100%'}}>
                        <Typography variant='body3' fontWeight='500'>Review</Typography>
                        <DynamicPadding desktop='30px' mobile='20px'/>
                        <BigInput />
                        <DynamicPadding />

                        

                        <Typography variant='body3' fontWeight='500'>Tips</Typography>
                        <DynamicPadding desktop='30px' mobile='20px'/>

                        <TipsItem description={'Sponsor a new campaign project with'} firstButtonText={'this campaign'} secondButtonText={'new campaign'}  />
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

        <DynamicPadding />
        <CardsSliderRelated />
        <div className="wrapper_page">
            <AskedQuestion />
        </div>

        <Footer />
           
      </div>
    );
};

export default CrowdfreelanceCompleted;