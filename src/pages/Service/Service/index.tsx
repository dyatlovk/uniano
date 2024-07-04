
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant } from '@common/models/user';
import Typography, { fontWeight } from '@common/components/ui/Typography/Typography';
import FilterList from '@common/components/FilterList/index';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import DaysLeftTimer from '@common/components/ui/DaysLeftTimer/DaysLeftTimer';
import { useEffect, useRef, useState } from 'react';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import ButtonChooseList from '@common/components/ButtonChooseList/index';
import TextDotted from '@common/components/ui/TextDotted/index';
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import ImageCardsShow from '@common/components/ImageCardsShow/index';

import test1 from '@assets/images/test1.png';
import test2 from '@assets/images/test2.png';
import test3 from '@assets/images/test3.png';
import test4 from '@assets/images/test4.png';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import TagsDisplay from '@common/components/TagsDisplay/index';
import { FreelancerCard } from '@pages/Partnership/pages/Program/index';
import CommentTitleFilter from '@common/components/CommentTitleFilters/index';
import ReviewsProgramCard from '@common/components/ReviewsProgram/index';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Dropdown from '@common/components/ui/Dropdown/index';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import { Link } from 'react-router-dom';
import { developmentDropdown } from '@common/models/constants';
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import LastSponsors from '@common/components/LastSponsors/index';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import ContactModal from '@pages/Partnership/pages/Program/modals/contactModal/index';
import { ButtonDropdownSelect } from '@common/components/ui/ThreeLinesPopUp/index';
import HoverDotsBox, { HoverDotsBoxService } from '@common/components/ui/HoverDotsBox/index';
import Roadmap, { RoadmapFlex } from '@common/components/Header/Header/components/NewsPopUp/components/Roadmap/index';
import TrustScore from '@common/components/ui/TrustScore/index';

const Service = () => {
    const arrayHistory = ['Service', 'Development', 'Web Development', 'WordPress'] 
    const title = 'Logo by sample in vector in maximum quality';
    const [activeBuyPlan,setActiveBuyPlan] = useState('Fixed');
    const [selectedPricePlan,setSelectedPricePlan] = useState('');

    const [showMissionModal,setShowMissionModal] = useState(false);

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    const [contactModal,setContactModal] = useState(false);
    
    return (
        <div>
            {
                showMissionModal && <ModalCenterBasic 
                bottomPartPadding='0px' callbackClose={() => {setShowMissionModal(false)}} title='Pro Missions'
                nodeAfterTitle={
                    <ButtonChooseList
                                    buttonPadding='4px 13px'
                                    buttons={['Start','Pro', 'Ultimate']}
                                    callback={() => {}}
                                    gap='0px'
                                    initValue='Fixed'
                                />
                }
                >
                    <Typography style={{padding: '30px 30px'}} variant='body4'>
                    Freelancers create some tasks to achieve. After successful completion you can get valuable rewards.
                    </Typography>
                    <RoadmapFlex text='Provide complete information about yourself' title='Entrance challenge' completed={true}
                    steps='1 of 12 completed'
                    />
                    <RoadmapFlex  text='Provide complete information about yourself' title='Entrance challenge' completed={true}
                    steps='1 of 12 completed'
                    />
                  
                    <div style={{padding: '30px'}} className='flex_end'>
                        <MyButtonOrange onClick={() => {}} fontWeight='500' textTransform='uppercase'>
                        Change pro plan $25/month
                        </MyButtonOrange>
                    </div> 
                </ModalCenterBasic>
            }
        <Header />

        <NavigationBarSelection
         allItemsProgress={['Service', 'Selection','Negotiation', 'Progress', 'Completed']}
         currentItemProgress='Service'
      />

        <div className={'wrapper_page'}>
            <PageDetails
            endNode={
                <ButtonDropdownSelect text='All services' variants={['All services','2','3']} />
            }
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
                        <div className='gap_10'>
                            <div className="gap_5">
                                <AppColor.queue fill={AppColor.text} />
                                <Typography variant='body4'>20 queues</Typography>
                            </div>
                            <div className="gap_5">
                                <AppColor.heartEmpty />
                                <Typography variant='body4'>20 wishlists</Typography>
                            </div>
                            <div className="gap_5">
                                <AppColor.returnIcon />
                                <Typography variant='body4'>90% return</Typography>
                            </div>
                            
                        </div>
                }
            />
            <DynamicPadding />
            <FilterList
                filters={['Description', 'Freelancer', 'Reviews (25)', 'FAQ (2)']}
                activeStartItem='Freelancer'
            />

            <DynamicPadding />

            <ResponsiveLayoutTwo
                orderItem1Desktop={0}
                orderItem1Mobile={1}
                orderItem2Desktop={1}
                orderItem2Mobile={0}
                gap='60px'  
                item1MaxWidth='750px'
                item2MaxWidth='380xpx'
                item1={<div style={{width: '100%'}}>
                    <ImageCardsShow
                        images={[test1,test2,test3,test4]}
                    />
                    <DynamicPadding />

                    
                    <LastSponsors />
                    <DynamicPadding />
                        <Typography variant='body3' fontWeight='500'>Description</Typography>
                        <DynamicPadding desktop='30px' mobile='15px'/>
                        <Typography variant='body4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tristique enim, neque, mollis at. Quam scelerisque pulvinar pellentesque phasellus. Nisl id sit tincidunt ut. Egestas ullamcorper magna mi integer elementum dictum aenean in. Ultrices convallis in sit venenatis, ut nunc pellentesque. Eu lacus sapien et eu tortor cursus dolor.
Nunc nunc, consequat porttitor sed tortor. Tempus mi sit blandit nibh fusce morbi nullam. Nunc sagittis tortor, dictum lorem quis faucibus elit. Pretium fames leo ut eget augue velit eros, pellentesque. Non quis imperdiet dui praesent at massa. Bibendum commodo eros bibendum sit cras sit venenatis, vulputate a. Et aliquet eu et tristique nibh ultrices vel amet amet. Sit facilisi pretium ut placerat sem. Sit nunc integer velit facilisi adipiscing lectus arcu. Pellentesque sapien, arcu, nulla quis magnis praesent aliquet venenatis.</Typography>
                        <DynamicPadding desktop='30px' mobile='15px'/>  

                        <div className="gap_20" style={{flexWrap: 'wrap'}}>
                           <div>
                                <Typography color={AppColor.transparentBlack} variant='body4' fontWeight='500'>Logo style</Typography>
                                <SizeBox height='10px'/>
                                <div className="gap_10">
                                    <AppColor.minimalist width={'20px'} height={'20px'}/>
                                    <Typography variant='body4'>Minimalist</Typography>
                                </div>  
                           </div>
                           <div>
                                <Typography color={AppColor.transparentBlack} variant='body4' fontWeight='500'>File format</Typography>
                                <SizeBox height='10px'/>
                                <div className="gap_10">
                                    <AppColor.pngBox width={'20px'} height={'20px'}/>
                                    <Typography variant='body4'>PNG</Typography>
                                    <AppColor.jpgBox width={'20px'} height={'20px'}/>
                                    <Typography variant='body4'>JPG</Typography>
                                    <AppColor.gifBox width={'20px'} height={'20px'}/>
                                    <Typography variant='body4'>GIF</Typography>
                                </div>  
                           </div>
                           <div>
                                <Typography color={AppColor.transparentBlack} variant='body4' fontWeight='500'>Tags</Typography>
                                <SizeBox height='10px'/>
                                <TagsDisplay tags={['Logos', 'Logo Design', 'Logo']} />
                           </div>
                        </div>

                        <DynamicPadding />

                        <Typography variant='body3' fontWeight='500'>Freelancer</Typography>
                        <DynamicPadding desktop='40px' mobile='20px'/>
                        <FreelancerCard  user={fakeUserConstant}/>

                        <DynamicPadding />
                        
                        <CommentTitleFilter notCount={111} textAfterTitle={<Typography variant='body4' color={AppColor.green}>95% positive reviews </Typography>} title='Reviews '/>

                        <DynamicPadding desktop='40px' mobile='20px'/>
                        <ReviewsProgramCard likes='55' money='200' text='Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to.'
                            user={fakeUserConstant}
                            addInfo={{
                                icon: <AppColor.caseIcon height={'18px'} />,
                                text: 'Musguard OMNI: Rollable Bicycle Mudguards',
                                users: [fakeUserConstant,fakeUserConstant,fakeUserConstant,fakeUserConstant,fakeUserConstant]
                            }}
                            images={[test1,test2,test3]} afterPriceNode={ <div className='gap_10'><AppColor.cart fill={AppColor.text} height={'22px'}/> <AppColor.flag height={'22px'}/></div> } />
                        <DynamicPadding desktop='20px' mobile='15px'/>
                        <ReviewsProgramCard
                            likes='90' money='200' text='Saro was very patient and willing to make all the revisions as required. Provided advice based on his knowledge and really easy to chat to.'
                            user={fakeUserConstant} afterPriceNode={ <div className='gap_10'><AppColor.cart fill={AppColor.text} height={'22px'}/> <AppColor.puzle height={'22px'}/></div> }
                            
                        />

                        <DynamicPadding />
                        <div className="gap_10">
                            <Typography variant='body3' fontWeight='500' >FAQ</Typography>
                            <div className={styles.box_black}><Typography color='white' variant='body3' fontWeight='500'>3</Typography></div>
                        </div>
                        <DynamicPadding desktop='30px' mobile='15px'/>
                        <Dropdown 
                             showLine={false}
                            title="What if your requirements does not meet any of my package?"
                            description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                        />
                        <DynamicPadding desktop='20px' mobile='10px'/>
                        <Dropdown 
                             showLine={false}
                            title="What software do you use?                            "
                            description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo."
                        />
                        <DynamicPadding />
                        <div className="flex_space_between">
                            <Link to={'/service/all'}>
                            <ChevronMoveTo onClick={() => {}}
                                text='Step back' title='catalog' variant='left'
                            />
                            </Link>
                            <Link to={'/service/selection'}>
                                <ChevronMoveTo onClick={() => {}}
                                    text='Next step' title='selection' variant='right'
                                />
                            </Link>
                        </div>
            </div>}         
                item2={
                <div style={{width: '100%'}}>
                    <div className={styles.time_box}>
                        <div className={styles.absolute_fire}>
                            <AppColor.fire/>
                        </div>
                        <div className='gap_10'>
                            <Typography variant='body4'>-20% sale for all packages till 13 Oct</Typography>
                           <HoverDotsBoxService />
                        </div>

                        <SizeBox height='15px'/>
                        <div className='flex_space_between'>
                            <div style={{display: 'flex',alignItems: 'baseline'}}>
                                <Typography variant='body3' fontWeight='500'>131</Typography>
                                <Typography variant='body5' color={AppColor.transparentBlack}>of 4000</Typography>
                            </div>
                            <Typography variant='body3' color={AppColor.orange} fontWeight='500'>22%</Typography>
                        </div>
                        <SizeBox height='10px'/>
                        <PercentBar
                            currentPercent={35}
                            height='15px'
                        />
                        <DynamicPadding desktop='20px' mobile='15px'/>
                        <div className='justify_center'>
                            <DaysLeftTimer fontWeightTextTime='500' dotsHeight='5px' dotsWidth='5px' width='65px' height='65px' borderRadius='20px' time={(new Date())}/>
                        </div>
                        
                        
                    </div>

                    <DynamicPadding desktop='30px' mobile='20px'/>
                        <div className={styles.plan_box}>
                            <SelectItem selectedPrice={selectedPricePlan} callback={(item) => {setSelectedPricePlan(item)}} lvl={3} price='1250' priceWithDiscount='1000' titleProps='Easy Start' />
                            <SelectItem selectedPrice={selectedPricePlan} callback={(item) => {setSelectedPricePlan(item)}} lvl={4} price='1750' priceWithDiscount='1500' titleProps='Easy Start' />
                            <SelectItem selectedPrice={selectedPricePlan} callback={(item) => {setSelectedPricePlan(item)}} lvl={5} price='2250' priceWithDiscount='2000' titleProps='Easy Start' />
                            <Selectbox selectedPrice={selectedPricePlan} callback={(item) => {setSelectedPricePlan(item)}} price='custom' />
                            

                            <div className={styles.plan_box_padding}>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <HorizontalLine/>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <ButtonChooseList
                                buttonPadding='4px 13px'
                                buttons={['Fixed','Milestones']}
                                callback={(item) => {setActiveBuyPlan(item)}}
                                gap='0px'
                                initValue='Fixed'
                            />
                            {
                                activeBuyPlan == 'Milestones' && 
                                <div>
                                     <DynamicPadding desktop='30px' mobile='15px'/>
                                    <div className={styles.milestone_wrapper}>
                                        <Typography variant='body4' fontWeight='500'>Milestone 1 : First draft</Typography>
                                        <SizeBox height='10px'/>
                                        <Typography variant='body4'>I'll prepare a first draft of the delivery.</Typography>
                                        <SizeBox height='15px'/>
                                        <Typography variant='subtitle' fontWeight='500'>$700</Typography>
                                        <DynamicPadding desktop='15px' mobile='10px'/>
                                        <HorizontalLine />
                                        <DynamicPadding desktop='15px' mobile='10px'/>
                                        <Typography variant='body4' fontWeight='500'>Milestone 2 : Delivery</Typography>
                                        <SizeBox height='10px'/>
                                        <Typography variant='body4'>I'll send you the final delivery.</Typography>
                                        <SizeBox height='15px'/>
                                        <Typography variant='subtitle' fontWeight='500'>$800</Typography>
                                    </div>
                                    <DynamicPadding desktop='30px' mobile='15px'/>
                                    <ButtonChooseList  buttonPadding='4px 13px'
                                        buttons={['Milestone 1','Milestone 2']}
                                        callback={(item) => {}}
                                        gap='0px'
                                        initValue='Milestone 1' />
                                </div>
                            }
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <div className={styles.dots_text_wrapper}>
                                <TextDotted
                                    fontWeightEndText='500'
                                    info={true}
                                    text='Revisions'
                                    textEnd='3'
                                />
                                 <TextDotted
                                    info={true}
                                    text='Source File'
                                    endNode={<AppColor.singTrue stroke={AppColor.green} width={'11px'} height={'9px'}/>}
                                />
                                 <TextDotted
                                    info={true}
                                    text='High Resolution'
                                    endNode={<AppColor.singTrue stroke={AppColor.green} width={'11px'} height={'9px'}/>}
                                />
                                 <TextDotted
                                    fontWeightEndText='500'
                                    info={true}
                                    text='Delivery'
                                    textEnd='4 days'
                                />
                            </div>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <HorizontalLine/>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <Typography variant='body3' fontWeight='500'>Options</Typography>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <div className={styles.benefit_wrapper}>
                                <SelectBenefitItem daysDelta='+1 day' price='25' title='Add Revisions'/>
                                <SelectBenefitItem daysDelta='-2 day' price='15' title='Reduce Delivery'/>
                                <SelectBenefitItem daysDelta='' price='3' title='Add Vector Files'/>
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
                                    initValue='Fixed'
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
                           <span onClick={() => {setShowMissionModal(true)}}> <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Missions</Typography></span>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <HorizontalLine/>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <Typography variant='body3' fontWeight='500'>Rewards</Typography>
                            <DynamicPadding desktop='30px' mobile='20px'/>

                            <div className='gap_20'>
                                <AppColor.reward30Xp />
                                <AppColor.reward10PTS />
                            </div>
                            <DynamicPadding desktop='30px' mobile='20px'/>
                            <HorizontalLine/>
                            <DynamicPadding desktop='30px' mobile='20px'/>

                            <TrustScore />
                            <DynamicPadding desktop='15px' mobile='10px'/>
                            <MyButtonOrange textTransform='uppercase' onClick={() => {}} width='100%'>Select pro $1500</MyButtonOrange>
                            <DynamicPadding desktop='15px' mobile='10px'/>
                            <MyButtonTransparentOrange textTransform='uppercase' onClick={() => {
                                setContactModal(true);
                            }} width='100%'>Contact freelancer</MyButtonTransparentOrange>
                            <DynamicPadding desktop='30px' mobile='15px' />
                            </div>
                        </div>
                    
                </div>}
            />
            {contactModal && <ModalCenterBasic desktopMaxWidth='880px' title='Join to Artem Markevych Wordpress Partnership' bottomPartPadding='30px'
                callbackClose={() => {setContactModal(false)}} 
            >
                <ContactModal callbackClose={() => {setContactModal(false)}}/>
                </ModalCenterBasic>}
        </div>
           <CardsSliderRelated />

           <div className='wrapper_page'><AskedQuestion/></div>
      </div>
    );
};


type SliderUsersProps = {
    items: React.ReactNode[];
}
export const SliderUsers = ({items}:SliderUsersProps) => {
    const [activeIndex,setActiveIndex] = useState(0);
    const [offsetMove,setOffsetMove] = useState(0);
    const activeItemRef = useRef(null);
    const [childrenNode,setChildrenNode] = useState([...items]);
    const handleClickOn = () => {
            if(activeIndex == items.length-1) {
                setChildrenNode(prev => [...prev,...items])
                setActiveIndex(prev => prev+1);
                setOffsetMove(prev => prev + activeItemRef.current.offsetWidth)
            }
            else {
                if(!activeItemRef.current) return 
                setActiveIndex(prev => prev+1);
                setOffsetMove(prev => prev + activeItemRef.current.offsetWidth)
            }
    }
    return (
        <div className={styles.user_slider_wrapper}>
            <div onClick={handleClickOn} className={styles.absolute_move_on}><AppColor.chevronRight fill='white'/></div>
            <div style={{transform: `translateX(${-offsetMove}px)`}} className={styles.overflow_slider_wrapper}>
                {childrenNode.map((item,index) =>
                    <div className={styles.user_wrapper} ref={index == activeIndex ? activeItemRef : null}>
                        {item}
                    </div>    
                )}
            </div>
        </div>
    )
}

type SelectBenefitItemProps = {
    price: string;
    daysDelta: string;
    title?: string;
}
export const SelectBenefitItem = ({daysDelta,price,title}:SelectBenefitItemProps) => {
    
    return (
        <div className={styles.select_benefit}>
            <MyCheckbox
                height='20px'
                width='20px'
            />
            <div>
                <Typography variant='body4' textLineHeight='1' color={AppColor.transparentBlack}>{title}</Typography>
                <SizeBox height='8px'/>
                <Typography variant='body4' fontWeight='500'>+{price} ${daysDelta != '' && `(${daysDelta})`}</Typography>
            </div>
        </div>
    )
}
type SelectItemProps ={
    titleProps?: string;
    priceWithDiscount?: string;
    price: string;
    lvl?: number;
    selectedPrice: string;
    callback: (item:string) => void;
    fontWeight?: fontWeight;
}

export const Selectbox = ({fontWeight,selectedPrice,titleProps,price,callback}:SelectItemProps) => {
    const title = titleProps ?? 'Custom Requirements'
    const isSelected = selectedPrice == price;
    return (
        <div onClick={() => {callback(price)}} style={{cursor: 'pointer'}} className={`gap_10 ${styles.only_select_box}`}>
            <div className={`${styles.select_box} ${isSelected ? styles.select_box_active : styles.select_box_disabled}`}></div>
            <Typography variant='body3' fontWeight={fontWeight ?? '500'}>{title}</Typography>
        </div>
    )
}
export const SelectItem = ({price,priceWithDiscount,titleProps,lvl,selectedPrice,callback}:SelectItemProps) => {  
    const [count,setCount] = useState(1);
    const isSelected = selectedPrice == price;
    
    function handleMinus() {
        if(count > 1) {
            setCount(prev => prev-1);
        }
    }
    return (
        <div style={{backgroundColor: isSelected ? AppColor.white : AppColor.transparent}} className={styles.price_plan_wrapper} onClick={() => {callback(price)}}>   
           <div className={styles.price_plan_description}>
                <div className='gap_10'>
                    <div className={`${styles.select_box} ${isSelected ? styles.select_box_active : styles.select_box_disabled}`}></div>
                    <Typography variant='body3'>{titleProps}</Typography>
                </div>
                <div className='gap_10'>
                    {lvl == 3 ? <AppColor.threeOfFive /> : lvl == 4 ? <AppColor.fourOfFive /> : <AppColor.fiveOfFive/>}
                    <Typography color={isSelected ? AppColor.orange : AppColor.text} variant='titleSmall'>${priceWithDiscount}</Typography>
                    <Typography variant='body3' textDecoration='line-through'>${price}</Typography>
                </div>
           </div>
           <div style={{opacity: isSelected ? 1 : 0,userSelect: 'none'}} className='gap_5 transition'>
                <div onClick={handleMinus} className={styles.math_box}>
                    <AppColor.minus width={'10.5px'} />
                </div>
                <Typography variant='body3'>{count}</Typography>
                <div onClick={() => {setCount(prev => prev+1)}} className={styles.math_box}>
                    <AppColor.plus width={'10.5px'} stroke={AppColor.transparentBlack}/>
                </div>
           </div>
        </div>
    )
}
export default Service;