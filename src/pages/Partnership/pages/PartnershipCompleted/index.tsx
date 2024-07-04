
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant } from '@common/models/user';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import Footer from '@common/components/Footer/Footer';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import DetailsProgress from '@common/components/ui/DetailsTable/variants/DetailsProgress/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import TextDotted from '@common/components/ui/TextDotted/index';
import Typography from '@common/components/ui/Typography/Typography';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { useEffect, useState } from 'react';
import SizeBox from '@common/components/ui/SizeBox/index';
import ReviewsProgramCard from '@common/components/ReviewsProgram/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';

const PartnershipCompleted = () => {
    const arrayHistory = ['Partnership', 'Development', 'Web Development', 'WordPress'] 
    const title = 'Artem Markevych WordPress Partnership';

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])

    
    return (
        <div>
        <Header />

        <NavigationBarSelection
           allItemsProgress={['Program', 'Selection', 'Progress', 'Completed']}
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
            <UserTopPageInfo user={fakeUserConstant}
                nodeAfter={
                            <AppColor.refreshA/>
                }
            />

            <DynamicPadding />
            <ResponsiveLayoutTwo
                orderItem1Desktop={0}
                orderItem2Desktop={1}
                orderItem1Mobile={1}
                orderItem2Mobile={0}
                item1MaxWidth='730px'
                item2MaxWidth='388px'
                gap='80px'
                item1={
                    <div style={{width: '100%'}}>
                       <Typography variant='body3' fontWeight='500'>Review</Typography>
                    <DynamicPadding desktop='30px' mobile='20px' />
                    <ReviewsProgramCard
                        likes='15'
                        money='2 000'
                        sales='20'
                        text='Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to.'
                        user={fakeUserConstant}
                    />
                    <DynamicPadding desktop='20px' mobile='15px'/>
                    <ReviewsProgramCard
                        likes='15'
                        money='2 000'
                        sales='20'
                        text='Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to.'
                        user={fakeUserConstant}
                    />

                    <DynamicPadding/>
                    <Typography variant='body3' fontWeight='500'>Tips</Typography>
                    <DynamicPadding desktop='30px' mobile='20px' />
                    
                    <TipsItem description={'Submit a new partnership project with'} firstButtonText={'this program'} secondButtonText={'other programs'} />
                    </div>
                }
                item2={
                    <div style={{width: '100%'}}>
                        <div className={`flex_space_between box_shadow ${styles.user_wrappper}`}>
                            <UserAvatar role='Manager' preventMobileNone={true} url={fakeUserConstant.image} name={fakeUserConstant.name} flag={<AppColor.UkraineFlagIcon/>} active={true} />

                            <div className='gap_10'>
                                <Typography variant='body5' color={AppColor.transparentBlack}>15 hr 59 min ago</Typography>
                                <AppColor.chevronBottom fill={AppColor.text} width={'16px'} height={'8px'}/>
                            </div>
                        </div>

                        <DynamicPadding desktop='25px' mobile='20px'/>
                        <div className="justify_center">
                            <Typography variant='body4' textTransform='uppercase' fontWeight='500'>Project 1</Typography>
                        </div>
                        <DynamicPadding desktop='25px' mobile='20px'/>

                        <div className={`box_shadow ${styles.details_box}`}>
                            <DetailsDropdownItem
                                title='Partnership'
                                text='Fab 27, 2023 23:55 - current'
                                initState={true}
                                node={
                                    <div>
                                        <DynamicPadding desktop='30px' mobile='15px' />
                                        <div className="flex_space_between">
                                            <Typography variant='body4' color={AppColor.transparentBlack}>Duration</Typography>
                                            <Typography variant='body4' fontWeight='500'>2 weeks 2 days</Typography>
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
                                        <Typography variant='body3' fontWeight='500'>Status</Typography>
                                        <DynamicPadding desktop='30px' mobile='20px'/>

                                       <div className={styles.text_dotted_wrapper}>
                                            <TextDotted
                                                startTextColor={AppColor.transparentBlack}
                                                text='CTR' 
                                                textEnd='5%'
                                            />
                                             <TextDotted
                                                startTextColor={AppColor.transparentBlack}
                                                text='eCPC' 
                                                textEnd='$5'
                                            />
                                             <TextDotted
                                                startTextColor={AppColor.transparentBlack}
                                                text='CR' 
                                                textEnd='3%'
                                            />
                                             <TextDotted
                                                startTextColor={AppColor.transparentBlack}
                                                text='Clicks' 
                                                textEnd='4178%'
                                            />
                                             <TextDotted
                                                startTextColor={AppColor.transparentBlack}
                                                text='Leads' 
                                                textEnd='643'
                                            />
                                             <TextDotted
                                                startTextColor={AppColor.transparentBlack}
                                                text='Sales' 
                                                textEnd='75'
                                            />
                                             <TextDotted
                                                startTextColor={AppColor.transparentBlack}
                                                text='Earned' 
                                                textEnd='$3 231'
                                            />
                                       </div>
                                        <DynamicPadding desktop='20px' mobile='15px'/>
                                       <div className="gap_5">
                                       <Typography variant='body4'>Public Financial Details </Typography>
                                       <SwitchButton width='44px' height='24px'  startValue={true}/>
                                       <div className='circle_shadow' style={{padding: '3px 6px'}}><AppColor.info/></div>
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
            <AskedQuestion/>
        </div>
        <Footer/>
           
      </div>
    );
};

export const TipsItem =({description,firstButtonText,secondButtonText}) => {
    const [activeTips,setActiveTips] = useState<string>('5');
    return (
       <div className={styles.tips_main_wrapper}>
            <div className={styles.tips_wrapper}>
                <InputCommon
                    backgroundColor={AppColor.ligthWhite}
                    textAlingCenter={true}  
                    callback={(item) => {setActiveTips(item)}}
                    placeholder='Enter Price Manually'
                    padding='13px 45px'
                    rightPadding={45}
                    textColor={AppColor.transparentBlack}
                    type='number'
                />
    
                <div className={styles.tips_wrapper_button}>
                    <SelectTips activePrice={activeTips} price='5' callback={(item) => {setActiveTips(item)}} />
                    <SelectTips activePrice={activeTips} price='10' callback={(item) => {setActiveTips(item)}} />
                    <SelectTips activePrice={activeTips} price='20' callback={(item) => {setActiveTips(item)}} />
                    <SelectTips activePrice={activeTips} price='50' removeMobile={true} callback={(item) => {setActiveTips(item)}} />
                    <SelectTips activePrice={activeTips} price='100' removeMobile={true} callback={(item) => {setActiveTips(item)}} />
                </div>
            </div>
            <DynamicPadding desktop='30px' mobile='20px'/>
            <div className={styles.end_text_tips}>
                <Typography variant='body4'>You can tip only once</Typography>
                <DynamicPadding desktop='20px' mobile='10px' side='right'/>
                <MyButtonOrange textTransform='uppercase' onClick={() => {}}>Tip ${activeTips} now</MyButtonOrange>
            </div>

            <DynamicPadding/>

            <div className={`box_shadow ${styles.end_node}`}>
                <div className={styles.absolute_end_node}><AppColor.plus stroke={AppColor.orange}/></div>
                <Typography variant='body4'>{description} <span style={{fontWeight: '500'}}>Artem M.</span></Typography>
                <DynamicPadding desktop='30px' mobile='15px'/>
                <div className={styles.buttons_end}>
                    <MyButtonOrange onClick={() => {}} textTransform='uppercase'>{firstButtonText}</MyButtonOrange>
                    <MyButtonTransparentOrange onClick={() => {}} textTransform='uppercase'>{secondButtonText}</MyButtonTransparentOrange>
                </div>
            </div>
       </div>
    )
}

type SelectTipesProps = {
    price: string;
    activePrice: string;
    callback: (item:string) => void;
    removeMobile?: boolean;
}
export const SelectTips = ({price,activePrice,callback,removeMobile}:SelectTipesProps) => {
    return(
        <div onClick={() => {callback(price)}} className={`${styles.select_tips_button} ${removeMobile ? styles.desktop : ''}`} style={price == activePrice ? {border: `1px solid ${AppColor.orange}`} : {border: '1px solid transparent'}}>
            <Typography
            color={activePrice == price ? AppColor.orange : AppColor.text}
            variant='body4'>
                ${price}
            </Typography>
        </div>
    )
}

type DetailsDropdownItemProps = {
    text: string;
    title: string;
    initState: boolean
    node: React.ReactNode;
}
const DetailsDropdownItem = ({text,initState,title,node}:DetailsDropdownItemProps) => {
    const [showDropdown,setShowDropdown] = useState(initState);
    return (
       <div className={styles.dropdown_details}>
            <div style={{userSelect: 'none'}} onClick={() => {setShowDropdown(prev => !prev)}} className='flex_space_between'>
                <div>
                    <Typography variant='body3' fontWeight='500'>{title}</Typography>
                    <Typography variant='body5' color={AppColor.transparentBlack}>{text}</Typography>
                </div>
                {showDropdown ? <AppColor.chevronTop fill={AppColor.text} width={'16px'} height={'8px'}/>
                : <AppColor.chevronBottom fill={AppColor.text} width={'16px'} height={'8px'}/>}
            </div>
            {showDropdown && node}
       </div>
    )
}
type ToolsItemProps = {
    icon: any;
    title: string;
    text: string;
}

const ToolsItem = ({icon,text,title}:ToolsItemProps) => {
    return (
        <div className={styles.tools_wrapper}>
            {icon}
            <SizeBox height='15px'/>
            <Typography textLineHeight='1' variant='body3' fontWeight='500'>{title}</Typography>
            <SizeBox height='15px'/>
            <Typography textLineHeight='1' variant='body5' fontWeight='500' textTransform='uppercase'>{text}</Typography>
        </div>
    )
}

export default PartnershipCompleted;