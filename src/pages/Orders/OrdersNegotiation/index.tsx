import Header from '@common/components/Header/Header/index'
import NavigationBarSelection from '@common/components/NavigationBarSelection/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import { useScreenSize } from '@common/helpers/useScreenSize'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import StepsOfPreparing from '@common/components/StepsOfPreparing/index'
import Typography from '@common/components/ui/Typography/Typography'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import UserAvatar from '@common/components/ui/UserAvatar/index'
import { DetailsDropdownItem } from '@pages/Partnership/pages/ProgressFreelancer/index'
import ButtonChooseList from '@common/components/ButtonChooseList/index'
import InfoBox from '@common/components/ui/InfoBox/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'

const OrdersNegotiation = () => {
    const arrayHistory = [
        'Order',
        'Development ',
        'Web Development',
        'WordPress',
    ]

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    
    const title = 'Logo by sample in vector in maximum quality'

    return (
        <div>
            <Header />

            <NavigationBarSelection
                allItemsProgress={[
                    'Order',
                    'Selection',
                    'Negotiation',
                    'Progress',
                    'Completed',
                ]}
                currentItemProgress="Order"
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
                <DynamicPadding desktop="30px" mobile="20px" />
                <UserTopPageInfo
                    settings={true}
                    user={fakeUserConstant}
                />
                <DynamicPadding />

                <ResponsiveLayoutTwo
                    gap="80px"
                    item1MaxWidth="730px"
                    item2MaxWidth="390px"
                    orderItem1Desktop={0}
                    orderItem1Mobile={1}
                    orderItem2Desktop={1}
                    orderItem2Mobile={0}
                    item1={
                        <div>
                            <StepsOfPreparing
                                elements={[
                                    {
                                        solve: 'Change payment way',
                                        text: 'Fixed payment',
                                    },
                                    {
                                        solve: '$200, 6 days delivery',
                                        text: 'Fixed payment',
                                    },
                                    {
                                        solve: 'Change specification',
                                        text: 'Logo Design specification form',
                                    },
                                ]}
                            />

                            <DynamicPadding />

                            <div className={styles.text_box}>
                                <Typography variant="body4">
                                    Please proceed the payment
                                </Typography>
                            </div>
                            <DynamicPadding />

                            <div className={'flex_space_between'}>
                                <ChevronMoveTo
                                    variant="left"
                                    onClick={() => {}}
                                    text="Step back"
                                    title="Service"
                                />
                                <ChevronMoveTo
                                    variant="right"
                                    onClick={() => {}}
                                    text="Next step"
                                    title="payment"
                                />
                            </div>
                        </div>
                    }
                    item2={
                        <div style={{ width: '100%' }}>
                            <div
                                className={`flex_space_between box_shadow ${styles.user_wrappper}`}>
                                <UserAvatar
                                    role="Manager"
                                    preventMobileNone={true}
                                    url={fakeUserConstant.image}
                                    name={fakeUserConstant.name}
                                    flag={<AppColor.UkraineFlagIcon />}
                                    active={true}
                                />

                                <div className="gap_10">
                                    <Typography
                                        variant="body5"
                                        color={
                                            AppColor.transparentBlack
                                        }>
                                        15 hr 59 min ago
                                    </Typography>
                                    <AppColor.chevronBottom
                                        fill={AppColor.text}
                                        width={'16px'}
                                        height={'8px'}
                                    />
                                </div>
                            </div>

                            <DynamicPadding
                                desktop="25px"
                                mobile="20px"
                            />
                            <div className="justify_center">
                                <Typography
                                    variant="body4"
                                    textTransform="uppercase"
                                    fontWeight="500">
                                    Project 1
                                </Typography>
                            </div>
                            <DynamicPadding
                                desktop="25px"
                                mobile="20px"
                            />

                            <div
                                className={`box_shadow ${styles.details_box}`}>
                                <DetailsDropdownItem
                                    title="Fixed"
                                    text="Fab 27, 2023 23:55 - current"
                                    initState={true}
                                    node={
                                        <div>
                                            <DynamicPadding
                                                desktop="30px"
                                                mobile="15px"
                                            />
                                            <div className="flex_space_between">
                                                <Typography
                                                    variant="body4"
                                                    color={
                                                        AppColor.transparentBlack
                                                    }>
                                                    Duration
                                                </Typography>
                                                <Typography
                                                    variant="body4"
                                                    fontWeight="500">
                                                    0 sec
                                                </Typography>
                                            </div>
                                            <DynamicPadding
                                                desktop="15px"
                                                mobile="5px"
                                            />
                                            <PercentBar
                                                currentPercent={0}
                                                color={AppColor.green}
                                                height="5px"
                                            />
                                            <DynamicPadding desktop='15px' mobile='5px'/>
                                            <div className="flex_space_between">
                                                <Typography
                                                    variant="body4"
                                                    color={
                                                        AppColor.transparentBlack
                                                    }>
                                                    Status
                                                </Typography>
                                                <Typography
                                                    variant="body4"
                                                    fontWeight="500"
                                                    color='#F2C94C'>
                                                    Pending
                                                </Typography>
                                            </div>
                                           <DynamicPadding
                                                desktop="30px"
                                                mobile="20px"
                                            />
                                            <HorizontalLine />
                                            <DynamicPadding
                                                desktop="30px"
                                                mobile="20px"
                                            />
                                            <Typography
                                                variant="body3"
                                                fontWeight="500">
                                                Details
                                            </Typography>
                                            <DynamicPadding
                                                desktop="30px"
                                                mobile="20px"
                                            />
                                            <div
                                                className={
                                                    styles.text_dotted_wrapper
                                                }>
                                                <TextDotted
                                                    fontWeightEndText="500"
                                                    info={true}
                                                    text="Delivery"
                                                    startTextColor={
                                                        AppColor.transparentBlack
                                                    }
                                                    textEnd='6 days'
                                                />
                                               <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                                               Specification
                                               </Typography>
                                            </div>
                                            <DynamicPadding
                                                desktop="30px"
                                                mobile="20px"
                                            />
                                            <HorizontalLine />
                                            <DynamicPadding
                                                desktop="30px"
                                                mobile="20px"
                                            />
                                            <Typography
                                                variant="body3"
                                                fontWeight="500">
                                                Subscription
                                            </Typography>
                                            <DynamicPadding
                                                desktop="30px"
                                                mobile="20px"
                                            />
                                            <div className="flex_space_between">
                                                <ButtonChooseList
                                                    buttonPadding="4px 13px"
                                                    buttons={[
                                                        'Start',
                                                        'Pro',
                                                        'Ultimate',
                                                    ]}
                                                    callback={() => {}}
                                                    gap="0px"
                                                    initValue="Start"
                                                />

                                                <div
                                                    className={
                                                        styles.buy_wrapper
                                                    }>
                                                    <AppColor.buy
                                                        fill={
                                                            AppColor.text
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <DynamicPadding
                                                desktop="20px"
                                                mobile="10px"
                                            />
                                            <div className="gap_5">
                                                <AppColor.queue
                                                    fill={
                                                        AppColor.orange
                                                    }
                                                />
                                                <Typography variant="body4">
                                                    Higher Priority
                                                    Queue
                                                </Typography>
                                            </div>
                                            <DynamicPadding
                                                desktop="20px"
                                                mobile="10px"
                                            />
                                            <div className="gap_10">
                                                <div className="gap_5">
                                                    <AppColor.moneyHummer />
                                                    <Typography variant="body4">
                                                        $40
                                                    </Typography>
                                                </div>
                                                <div className="gap_5">
                                                    <AppColor.shield />
                                                    <Typography variant="body4">
                                                        10 days
                                                    </Typography>
                                                </div>
                                            </div>
                                            <DynamicPadding
                                                desktop="20px"
                                                mobile="10px"
                                            />
                                            <Typography
                                                variant="body4"
                                                fontWeight="500"
                                                color={
                                                    AppColor.transparentBlack
                                                }>
                                                Missions
                                            </Typography>
                                            <DynamicPadding
                                                desktop="30px"
                                                mobile="20px"
                                            />
                                            <HorizontalLine />
                                            <DynamicPadding
                                                desktop="30px"
                                                mobile="20px"
                                            />
                                            <Typography
                                                variant="body3"
                                                fontWeight="500">
                                                Rewards
                                            </Typography>
                                            <DynamicPadding
                                                desktop="30px"
                                                mobile="20px"
                                            />

                                            <div className="gap_20">
                                                <AppColor.reward30Xp />
                                                <AppColor.reward10PTS />
                                            </div>
                                            <DynamicPadding
                                                desktop="30px"
                                                mobile="20px"
                                            />
                                            <HorizontalLine />
                                            <DynamicPadding
                                                desktop="30px"
                                                mobile="20px"
                                            />
                                            <DynamicPadding
                                                desktop="15px"
                                                mobile="5px"
                                            />
                                            <Typography
                                                variant="body3"
                                                fontWeight="500">
                                                Summary
                                            </Typography>
                                            <DynamicPadding
                                                desktop="30px"
                                                mobile="20px"
                                            />
                                            <div
                                                className={
                                                    styles.text_dotted_wrapper
                                                }>
                                                <TextDotted
                                                    fontWeightEndText="500"
                                                    info={true}
                                                    text="Order"
                                                    startTextColor={
                                                        AppColor.transparentBlack
                                                    }
                                                    endNode={
                                                        <div className="gap_5">
                                                            <AppColor.threeOfFive />
                                                            <Typography
                                                                textLineHeight="1"
                                                                variant="body4"
                                                                fontWeight="500">
                                                                $200
                                                            </Typography>
                                                        </div>
                                                    }
                                                />
                                                <TextDotted
                                                    fontWeightEndText="500"
                                                    info={true}
                                                    text="Total To Pay"
                                                    startTextColor={
                                                        AppColor.orange
                                                    }
                                                    endNode={
                                                        <Typography
                                                            textLineHeight="1"
                                                            variant="body4"
                                                            fontWeight="500"
                                                            color={
                                                                AppColor.orange
                                                            }>
                                                            $200
                                                        </Typography>
                                                    }
                                                />
                                            </div>
                                            <DynamicPadding desktop='20px' mobile='15px'/>
                                            <div style={{opacity: '0.5'}} className="gap_5">
                                                <AppColor.gift />
                                                <Typography variant='body5' textTransform='uppercase' fontWeight='500'>no rewards</Typography>
                             
                                            </div>
                                            <DynamicPadding desktop='20px' mobile='15px'/>
                                            <div className="gap_5">
                                                <AppColor.likeRounded />
                                                <Typography variant='body4' fontWeight='500'><span style={{color: AppColor.green}}>96</span>Trust Score</Typography>
                                                    <InfoBox />
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
                <AskedQuestion />
            </div>

            <Footer />
        </div>
    )
}

export default OrdersNegotiation
