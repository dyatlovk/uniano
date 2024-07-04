
import Header from '@common/components/Header/Header/index';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import StepsOfPreparing, { StepItem } from '@common/components/StepsOfPreparing/index';
import ButtonChooseList from '@common/components/ButtonChooseList/index';
import Typography from '@common/components/ui/Typography/Typography';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import SizeBox from '@common/components/ui/SizeBox/index';
import TextDotted from '@common/components/ui/TextDotted/index';
import { DetailsDropdownItem } from '@pages/Partnership/pages/ProgressFreelancer/index';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import { useEffect } from 'react';

const ServiceNegotiationCustomer = () => {
    const arrayHistory = ['Service', 'Development', 'Web Development', 'WordPress'] 
    const title = 'Logo by sample in vector in maximum quality';
  

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
  
    return (
        <div>
        <Header />
  
        <NavigationBarSelection
           allItemsProgress={['Service', 'Selection','Negotiation', 'Progress', 'Completed']}
           currentItemProgress='Negotiation'
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
                item1={
                    <div style={{width: '100%'}}>
                        <StepItem solve='Change service solution' text='Custom Requirements' drawLine={false} />
                        <ButtonChooseList 
                            buttonPadding='4px 13px'
                            buttons={['Milestone 1', 'Milestone 2']}
                            callback={() => {}}
                            initValue='Milestone 2'
                            gap='0px'
                        />
                        <DynamicPadding desktop='30px' mobile='20px'/>
                        <StepsOfPreparing
                            elements={[
                                {
                                    solve: 'Change specification',
                                    text: 'Logo Design specification form'
                                },
                                {
                                    solve: 'Change documents to sign',
                                    text: 'NDA, NCA'
                                },
                                
                            ]}
                        />
                        <DynamicPadding desktop='20px' mobile='10px'/>
                        <div className={styles.text_wrapper}>
                            <Typography variant='body4'><span style={{fontWeight: '500'}}>The customer has completed the negotiation and made the payment.</span> To start your project, please complete all the necessary steps.</Typography>
                        </div>
                        <DynamicPadding />

                        <div className="flex_space_between">
                            <ChevronMoveTo onClick={() => {}} text='Step back' title='Service' variant='left'/>
                            <ChevronMoveTo onClick={() => {}} text='Next step' title='payment' variant='right' />
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
                            <Typography variant='body4' textTransform='uppercase' fontWeight='500'>Project 2</Typography>
                        </div>
                        <DynamicPadding desktop='30px' mobile='15px'/>
                            <div className={`box_shadow ${styles.details_box}`}>
                            <DetailsDropdownItem
                                title='Milestone 2'
                                text='Fab 27, 2023 23:55 - current'
                                initState={true}
                                node={
                                    <div>
                                        <DynamicPadding desktop='30px' mobile='15px' />
                                        <div className="flex_space_between">
                                            <Typography variant='body4' color={AppColor.transparentBlack}>Duration</Typography>
                                            <Typography variant='body4' fontWeight='500'>0 sec</Typography>
                                        </div>
                                        <DynamicPadding desktop='15px' mobile='5px'/>
                                        <PercentBar
                                            currentPercent={0}
                                            height='5px'
                                        />
                                        <DynamicPadding desktop='15px' mobile='5px'/>
                                        <div className="flex_space_between">
                                            <Typography variant='body4' color={AppColor.transparentBlack}>Status</Typography>
                                            <Typography variant='body4' fontWeight='500' color={'#F2C94C'}>Pending</Typography>
                                        </div>

                                        <DynamicPadding desktop='30px' mobile='20px'/>
                                        <HorizontalLine/>
                                        <DynamicPadding desktop='30px' mobile='20px'/>
                                        <Typography variant='body3' fontWeight='500'>Details</Typography>
                                        <DynamicPadding desktop='30px' mobile='20px'/>

                                       <div className={styles.text_dotted_wrapper}>
                                            <TextDotted
                                                fontWeightEndText='500'
                                                info={true}
                                                startTextColor={AppColor.transparentBlack}
                                                text='Revisions' 
                                                textEnd='10'
                                            />
                                             <TextDotted
                                                fontWeightEndText='500'
                                                info={true}
                                                startTextColor={AppColor.transparentBlack}
                                                text='Source File' 
                                                textEnd='2'
                                            />
                                             <TextDotted
                                                fontWeightEndText='500'
                                                info={true}
                                                startTextColor={AppColor.transparentBlack}
                                                text='High Resolution' 
                                                textEnd='2'
                                            />
                                             <TextDotted
                                                fontWeightEndText='500'
                                                info={true}
                                                startTextColor={AppColor.transparentBlack}
                                                text='Delivery' 
                                                textEnd='6 days'
                                            />
                                       </div>
                                        <DynamicPadding desktop='20px' mobile='15px'/>
                                       <div className="gap_10">
                                        <Typography fontWeight='500' color={AppColor.transparentBlack} variant='body4'>Specification</Typography>
                                        <Typography fontWeight='500' color={AppColor.transparentBlack} variant='body4'>Documents</Typography>
                                       </div>

                                       <DynamicPadding desktop='30px' mobile='20px'/>
                                        <HorizontalLine/>
                                        <DynamicPadding desktop='30px' mobile='20px'/>

                                        <Typography variant='body3' fontWeight='500'>Subscription</Typography>
                                        <DynamicPadding desktop='30px' mobile='20px'/>
                           <div className='flex_space_between'>
                                <ButtonChooseList
                                    buttonPadding='4px 13px'
                                    buttons={['Start','Pro', 'Ultimate']}
                                    callback={() => {}}
                                    gap='0px'
                                    initValue='Start'
                                />

                                <div className={styles.buy_wrapper}>
                                    <AppColor.buy fill={AppColor.text}/>
                                </div>
                                </div>
                                    <DynamicPadding desktop='20px' mobile='10px'/>
                                <div className="gap_5">
                                        <AppColor.queue fill={AppColor.orange} />
                                        <Typography variant='body4'>Higher Priority Queue</Typography>
                                </div>
                                <DynamicPadding desktop='20px' mobile='10px'/>
                                <div className="gap_10">
                                        <div className="gap_5">
                                            <AppColor.moneyHummer />
                                            <Typography variant='body4'>$40</Typography>
                                        </div>
                                        <div className="gap_5">
                                            <AppColor.shield />
                                            <Typography variant='body4'>10 days</Typography>
                                        </div>
                                </div>
                                    <DynamicPadding desktop='20px' mobile='10px' />
                                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Missions</Typography>
                                    <DynamicPadding desktop='30px' mobile='20px'/>
                                    <HorizontalLine/>
                                    <DynamicPadding desktop='30px' mobile='20px'/>
                                    <Typography variant='body3' fontWeight='500'>Rewards</Typography>
                                    <SizeBox height='10px'/>

                                    <div className={styles.rewards_wrapper}>
                                        <AppColor.reward10PTS />
                                        <AppColor.reward30Xp />
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
                                                text='Start Package Milestone 2' 
                                                endNode={<div className='gap_5'><AppColor.threeOfFive /> <Typography textLineHeight={'1'} variant='body4' fontWeight='500'>$200</Typography></div>}
                                            />
                                             <TextDotted
                                                fontWeightEndText='500'
                                                
                                                startTextColor={AppColor.transparentBlack}
                                                text='Sale Discount 50%' 
                                                textEnd='-$100'
                                            />
                                             
                                            <TextDotted
                                                fontWeightEndText='500'
                                                
                                                startTextColor={AppColor.orange}
                                                text='Total To Pay' 
                                                endNode={<Typography textLineHeight={'1'} color={AppColor.orange} variant='body4' fontWeight='500'>$100</Typography>}
                                            />
                                       </div>    

                                       <DynamicPadding desktop='20px' mobile='15px'/>
                                       <div style={{opacity: '0.5'}} className="gap_5">
                                            <AppColor.gift />
                                            <Typography  variant='body5' fontWeight='500' textTransform='uppercase'>no rewards</Typography>
                                       </div>
                                       <DynamicPadding desktop='20px' mobile='15px'/>
                                       <div className="gap_5">
                                            <AppColor.likeRounded />
                                            <Typography variant='body4' fontWeight='500'><span color={AppColor.green}>96</span> Trust Score</Typography>
                                            <div className={styles.info_box}><AppColor.info /></div>
                                       </div>

                                </div>
                                }
                            />
                        </div>
                        

                        {/* <DynamicPadding desktop='30px' mobile='15px'/>
                        <div className="justify_center">
                            <Typography variant='body4' textTransform='uppercase' fontWeight='500'>Project 1</Typography>
                        </div> */}
                        <DynamicPadding desktop='30px' mobile='15px'/>
                        <div className={`box_shadow ${styles.details_box}`}>
                            <DetailsDropdownItem
                                title='Milestone 1'
                                text='Fab 27, 2023 23:55 - current'
                                initState={true}
                                node={
                                    <div>
                                        <DynamicPadding desktop='30px' mobile='15px' />
                                        <div className="flex_space_between">
                                            <Typography variant='body4' color={AppColor.transparentBlack}>Duration</Typography>
                                            <Typography variant='body4' fontWeight='500'>0 sec</Typography>
                                        </div>
                                        <DynamicPadding desktop='15px' mobile='5px'/>
                                        <PercentBar
                                            currentPercent={0}
                                            height='5px'
                                        />
                                        <DynamicPadding desktop='15px' mobile='5px'/>
                                        <div className="flex_space_between">
                                            <Typography variant='body4' color={AppColor.transparentBlack}>Status</Typography>
                                            <Typography variant='body4' fontWeight='500' color={'#F2C94C'}>Pending</Typography>
                                        </div>

                                        <DynamicPadding desktop='30px' mobile='20px'/>
                                        <HorizontalLine/>
                                        <DynamicPadding desktop='30px' mobile='20px'/>
                                        <Typography variant='body3' fontWeight='500'>Details</Typography>
                                        <DynamicPadding desktop='30px' mobile='20px'/>

                                       <div className={styles.text_dotted_wrapper}>
                                            <TextDotted
                                                fontWeightEndText='500'
                                                info={true}
                                                startTextColor={AppColor.transparentBlack}
                                                text='Revisions' 
                                                textEnd='10'
                                            />
                                             <TextDotted
                                                fontWeightEndText='500'
                                                info={true}
                                                startTextColor={AppColor.transparentBlack}
                                                text='Source File' 
                                                textEnd='2'
                                            />
                                             <TextDotted
                                                fontWeightEndText='500'
                                                info={true}
                                                startTextColor={AppColor.transparentBlack}
                                                text='High Resolution' 
                                                textEnd='2'
                                            />
                                             <TextDotted
                                                fontWeightEndText='500'
                                                info={true}
                                                startTextColor={AppColor.transparentBlack}
                                                text='Delivery' 
                                                textEnd='6 days'
                                            />
                                       </div>
                                        <DynamicPadding desktop='20px' mobile='15px'/>
                                       <div className="gap_10">
                                        <Typography fontWeight='500' color={AppColor.transparentBlack} variant='body4'>Specification</Typography>
                                        <Typography fontWeight='500' color={AppColor.transparentBlack} variant='body4'>Documents</Typography>
                                       </div>

                                       <DynamicPadding desktop='30px' mobile='20px'/>
                                        <HorizontalLine/>
                                        <DynamicPadding desktop='30px' mobile='20px'/>

                                        <Typography variant='body3' fontWeight='500'>Subscription</Typography>
                                        <DynamicPadding desktop='30px' mobile='20px'/>
                           <div className='flex_space_between'>
                                <ButtonChooseList
                                    buttonPadding='4px 13px'
                                    buttons={['Start','Pro', 'Ultimate']}
                                    callback={() => {}}
                                    gap='0px'
                                    initValue='Start'
                                />

                                <div className={styles.buy_wrapper}>
                                    <AppColor.buy fill={AppColor.text}/>
                                </div>
                                </div>
                                    <DynamicPadding desktop='20px' mobile='10px'/>
                                <div className="gap_5">
                                        <AppColor.queue fill={AppColor.orange} />
                                        <Typography variant='body4'>Higher Priority Queue</Typography>
                                </div>
                                <DynamicPadding desktop='20px' mobile='10px'/>
                                <div className="gap_10">
                                        <div className="gap_5">
                                            <AppColor.moneyHummer />
                                            <Typography variant='body4'>$40</Typography>
                                        </div>
                                        <div className="gap_5">
                                            <AppColor.shield />
                                            <Typography variant='body4'>10 days</Typography>
                                        </div>
                                </div>
                                    <DynamicPadding desktop='20px' mobile='10px' />
                                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Missions</Typography>
                                    <DynamicPadding desktop='30px' mobile='20px'/>
                                    <HorizontalLine/>
                                    <DynamicPadding desktop='30px' mobile='20px'/>
                                    <Typography variant='body3' fontWeight='500'>Rewards</Typography>
                                    <SizeBox height='10px'/>

                                    <div className={styles.rewards_wrapper}>
                                        <AppColor.reward10PTS />
                                        <AppColor.reward30Xp />
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
                                                text='Start Package Milestone 2' 
                                                endNode={<div className='gap_5'><AppColor.threeOfFive /> <Typography textLineHeight={'1'} variant='body4' fontWeight='500'>$200</Typography></div>}
                                            />
                                             <TextDotted
                                                fontWeightEndText='500'
                                                
                                                startTextColor={AppColor.transparentBlack}
                                                text='Sale Discount 50%' 
                                                textEnd='-$100'
                                            />
                                             
                                            <TextDotted
                                                fontWeightEndText='500'
                                                
                                                startTextColor={AppColor.orange}
                                                text='Total To Pay' 
                                                endNode={<Typography textLineHeight={'1'} color={AppColor.orange} variant='body4' fontWeight='500'>$100</Typography>}
                                            />
                                       </div>    

                                       <DynamicPadding desktop='20px' mobile='15px'/>
                                       <div style={{opacity: '0.5'}} className="gap_5">
                                            <AppColor.gift />
                                            <Typography  variant='body5' fontWeight='500' textTransform='uppercase'>no rewards</Typography>
                                       </div>
                                       <DynamicPadding desktop='20px' mobile='15px'/>
                                       <div className="gap_5">
                                            <AppColor.likeRounded />
                                            <Typography variant='body4' fontWeight='500'><span color={AppColor.green}>96</span> Trust Score</Typography>
                                            <div className={styles.info_box}><AppColor.info /></div>
                                       </div>

                                </div>
                                }
                            />
                        </div>
                    </div>
                }
            />
        </div>
           <CardsSliderRelated secondSlider={true}/>
           <div className="wrapper_page">
            <AskedQuestion/>
           </div>

           <Footer />
      </div>
    );
};

export default ServiceNegotiationCustomer;