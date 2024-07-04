
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import { fakeUserConstant } from '@common/models/user';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import DetailsProgress from '@common/components/ui/DetailsTable/variants/DetailsProgress/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import Typography from '@common/components/ui/Typography/Typography';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { useEffect, useState } from 'react';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import TextDotted from '@common/components/ui/TextDotted/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import { Link } from 'react-router-dom';

const ProgressFreelancer = () => {
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
                        <DetailsProgress
                            informationDropdown={[
                                {
                                    earned: '5 312',
                                    rate: '5',
                                    role: 'Referrer',
                                    service: 'Artem Markevych Logo...',
                                    traffic: 'https://workspree.com...'
                                }
                            ]}
                            informationTable={[
                                {
                                    action: 'Service invitation',
                                    date: 'Feb 26, 2021 16:32 ',
                                    memberName: 'Artem M.',
                                    page: 0
                                }
                            ]}
                        />
                    <DynamicPadding />
                    <div className={styles.tools_wrapper_section}>
                        <ToolsItem
                            icon={<AppColor.deeplink/>}
                            title='Deeplink'
                            text='Sale Links'
                        />
                          <ToolsItem
                            icon={<AppColor.banners/>}
                            title='Banners'
                            text='Advertising Images'
                        />
                    </div>
                    <DynamicPadding />

                    <div className="flex_space_between">
                        
                        <Link to={'/partnership/freelancer/selection'}>
                        <ChevronMoveTo onClick={() => {}} text='Step back' title='Selection' variant='left' />
                        </Link>
                        <Link to={'/partnership/freelancer/completed'}>
                        <ChevronMoveTo onClick={() => {}} text='Final step' title='complete' variant='right' />
                        </Link>
                    </div>
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
                                            <Typography variant='body4' fontWeight='500'>45 m 32 sec</Typography>
                                        </div>
                                        <DynamicPadding desktop='15px' mobile='5px'/>
                                        <PercentBar
                                            currentPercent={20}
                                            height='5px'
                                        />
                                        <DynamicPadding desktop='15px' mobile='5px'/>
                                        <div className="flex_space_between">
                                            <Typography variant='body4' color={AppColor.transparentBlack}>Status</Typography>
                                            <Typography variant='body4' fontWeight='500' color={AppColor.orange}>Progress</Typography>
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

type DetailsDropdownItemProps = {
    text: string;
    title: string;
    initState: boolean
    node: React.ReactNode;
}
export const DetailsDropdownItem = ({text,initState,title,node}:DetailsDropdownItemProps) => {
    const [showDropdown,setShowDropdown] = useState(initState);
    return (
       <div className={styles.dropdown_details}>
            <div style={{userSelect: 'none',cursor: 'pointer'}} onClick={() => {setShowDropdown(prev => !prev)}} className='flex_space_between'>
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
export default ProgressFreelancer;