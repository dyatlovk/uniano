
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar from '@common/components/NavigationBar/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import headphones from '@assets/images/rewards-1.png';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { fakeUserConstant } from '@common/models/user';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import { useState } from 'react';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import PopUpBottom from '@common/components/ModalPopUps/PopUpBottom/index';
import { ButtonDropdownSelect, ThreeLinesPopUpCustom } from '@common/components/ui/ThreeLinesPopUp/index';
import AddRewardButton from '@common/components/ui/ButtonsPlus/AddRewardButton/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';

const rewards:RewardItemProps[] = [
    {
        image: <img src={headphones} />,
        title: 'Logitech G435 LIGHTSPEED ',
        user: <div className='gap_5'>
            <UserAvatar variant='image' url={fakeUserConstant.image} width='22px' height='22px' active={true} name='Artem M.' />
            <Typography variant='body4' fontWeight='500' textLineHeight='1'>Artem M.</Typography>
        </div>,
    },
    {
        image: <AppColor.box width={62} height={62} />   ,
        title: 'Logitech G435 LIGHTSPEED ',
        user: <div className='gap_5'>
            <UserAvatar variant='image' url={fakeUserConstant.image} width='22px' height='22px' active={true} name='Artem M.' />
            <Typography variant='body4' fontWeight='500' textLineHeight='1'>Artem M.</Typography>
        </div>,
    },
    {
        image: <AppColor.cart fill={AppColor.text} width={80} height={62} />, 
        title: 'Logitech G435 LIGHTSPEED ',
        user: <div className='gap_5'>
            <UserAvatar variant='image' url={fakeUserConstant.image} width='22px' height='22px' active={true} name='Artem M.' />
            <Typography variant='body4' fontWeight='500' textLineHeight='1'>Artem M.</Typography>
        </div>,
        count: 3
    }
]
const Rewards = () => {

    return (
        <div>
            <Header />
            <NavigationBar
                activePageIndex={3}
                currentCategoryTitle="Dashboard"
            />

            <div className={styles.wrapper}>
                <DynamicPadding />
                <div className={styles.top_section}>
                    <div className={styles.top_flex}>
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Dashboard']}
                        />
                        <Typography
                            variant="titleBig"
                            textTransform="uppercase"
                            fontWeight="600">
                            <div className={styles.flex_center}>
                                rewards{' '}
                            </div>
                        </Typography>
                    </div>
                   <div className='gap_10'>
                   <ButtonDropdownSelect text='Customer' variants={['Customer','2','3']} />
                        <AddRewardButton />
                   </div>
                </div>

                <DynamicPadding />
                <SearchFilterBar />
                <DynamicPadding />
                <div className={styles.rewards_wrapper}>
                    {rewards.map(item =>
                        <RewardItem
                            image={item.image}
                            title={item.title}
                            user={item.user}
                            count={item.count}
                        />
                    )}
                </div>
                
                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
};

type RewardItemProps = {
    image: any;
    title: string;
    user: any;
    count?: number;
}
const RewardItem = ({count,image,title,user,}:RewardItemProps) => {

    const [showDatails, setShowDatails] = useState(false);

    return (
        <>
            {showDatails && <ModalCenterBasic
            desktopMinWidth='40vw'
                bottomPartPadding='30px' callbackClose={() => setShowDatails(false)} title='Reward’s details' 
            >
                <RewardDetails item={
                    {
                        image,
                        title,
                        user
                    }
                } challenge='Entrance challenge' date='Feb 26, 2021 ' />
                </ModalCenterBasic>}
            <div className={styles.reward_wrapper}>
                {count != null && (
                    <div className={styles.reward_absolute_item_left}><Typography variant='body5' color={'white'}>{count}</Typography></div>
                )}
                
                <div className={styles.reward_absolute_item_right}>
                            <PopUpBottom
                                showBackgroundHover={true}
                                showNodeHover={
                                    <div className='cursor'><AppColor.threeLinesActive /></div>
                                }
                                   showNode={
                                    <div className='cursor'><AppColor.threeLines /></div>
                                   }
                                   popUpNode={<ThreeLinesPopUpCustom
                                        items={[
                                            {
                                                icon: <AppColor.share />,
                                                title: 'Share'
                                            },
                                            {
                                                icon: <AppColor.report />,
                                                title: 'Report'
                                            }
                                        ]}
                                    />}
                                   topPaddingFromNode='10px'
                               />
                </div>
                {image}
                <div onClick={() => {setShowDatails(true)}}>
                    <Typography className='underline_appearance' variant='body4' fontWeight='500'>
                        {title}
                    </Typography>
                </div>
                {user}
            </div>
        </>
    )
}

type RewardDetailsProps = {
    item: RewardItemProps;
    challenge: string;
    date: string;
}
const RewardDetails = ({challenge,date,item}:RewardDetailsProps) => {
    return (
        <div>
            <div className='gap_10'>
                {item.image}
                <div>
                    <Typography variant='body4' fontWeight='500'>{item.title}</Typography>
                    <SizeBox height='8px'/>
                    <Typography variant='body5' color={AppColor.transparentBlack}>{fakeUserConstant.name}</Typography>
                </div>
            </div>
            <DynamicPadding desktop='30px' mobile='10px' />
            <div style={{position: 'relative'}}>
                <HorizontalLine />
                <div className={styles.absolute_box}>
                   <div style={{width: 'fit-content'}}> <DarkBox fonstSize='13px' text='MISSION' /></div>
                </div>
            </div>
            <DynamicPadding desktop='30px' mobile='10px' />
            <div className='flex_space_between'>
                <div className='gap_10'>
                    <AppColor.taskCheck />
                    <div className='gap_5'>
                    <Typography variant='body4' fontWeight='500'>{challenge}</Typography>
                    <AppColor.subscriptions />
                    </div>
                    <SizeBox height='8px'/>
                    <Typography variant='body4' fontWeight='500' color={AppColor.orange}>10 of 10 completed</Typography>
                </div>
                <Typography variant='body4'>{date}</Typography>
            </div>
            <DynamicPadding desktop='30px' mobile='10px' />
            <div style={{position: 'relative'}}>
                <HorizontalLine />
                <div className={styles.absolute_box}>
                    <div style={{width: 'fit-content'}}><DarkBox fonstSize='13px' text='CAN BE USED' /></div>
                </div>
            </div>

            <DynamicPadding desktop='30px' mobile='10px' />
            <div className='flex_space_between'>
                <Typography variant='body4' fontWeight='500'>
                You can ask the author about the delivery
                </Typography>
                <Typography className='underline_appearance orange' variant='body5' fontWeight='500' color={AppColor.orange}>
                Go to author
                </Typography>
            </div>
        </div>
    )
}
export default Rewards;