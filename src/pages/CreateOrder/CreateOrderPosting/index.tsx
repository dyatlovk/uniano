
import HeaderSearch from '@common/components/Header/HeaderSearch/index';
import styles from './style.module.scss';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import FilterList from '@common/components/FilterList/index';
import { useEffect, useState } from 'react';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import BackgroundItem from '@pages/Settings/pages/Profile/components/BackgroundItem/index';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import InputDropdown from '@common/components/ui/inputs/InputDropdown/index';
import CenterShadowBox from '@common/components/ui/CenterShadowBox/index';
import Urgent from '@common/components/ui/Urgent/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import TitleExampleUl from '@common/components/ui/TitleExampleUl/index';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import SizeBox from '@common/components/ui/SizeBox/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import DetailsTableMultiNodes from '@common/components/ui/DetailsTable/DetailsTableMultiNodes/index';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import { Link } from 'react-router-dom';

const CreateOrderPosting = () => {

    const [selectedFilter,setSelectedFilter] = useState('Overview');

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    return (
      <div>
             <HeaderSearch 
                allItemsProgress={['Details', 'Negotiation', 'Posting']}
                currentItemProgress='Posting'
            />

            <DynamicPadding />

            <div className='wrapper_page'>
                   <div className={styles.top_wrapper_part}>
                        <div className={styles.title_wrapper}>
                                    <div className='gap_10'>
                                        <Typography textTransform='uppercase' variant='titleBig'>posting</Typography>
                                        <div className='mobile'>
                                            <div className={styles.template_icon}>
                                                <AppColor.template />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className='gap_15'>
                                <div>
                                    <img src={fakeUserConstant.image} height={'40px'} width={'40px'} alt="" />
                                    <img style={{marginLeft: '-10px'}} src={fakeUserConstant.image} height={'40px'} width={'40px'} alt="" />
                                </div>
                                <div className='desktop'>
                                    <div className={`${styles.template_icon} ${'justify_center'}`}>
                                    <AppColor.template />
                                    </div>
                                </div>
                            </div>
                   </div>

                   <DynamicPadding />

                   <FilterList
                        filters={['Overview', 'Advanced', 'Filters', 'Interview', 'FAQ', 'Complaints']}
                        activeStartItem='Overview'
                        callback={(item) => {setSelectedFilter(item)}}
                   />

                  

                   <VariantSelect activeFilter={selectedFilter}/>
            </div>

            <CardsSliderRelated secondSlider={true}/>
            <div className="wrapper_page">
                <AskedQuestion />
            </div>

            <Footer />
      </div>
    );
};

type VariantSelectProps = {
    activeFilter: string;
}
const VariantSelect = ({activeFilter}:VariantSelectProps) => {
    
    switch(activeFilter) {
        case 'Overview':
            return <OverviewBlock />
        case 'Advanced':
            return <AdvancedBlock />
        case 'Filters':
            return <FiltersBlock />
        case 'Interview':
            return <InterviewBlock />
        case 'FAQ':
            return <FAQBlock />
        case 'Complaints':
            return <ComplaintsBlock />
    }
}

const ComplaintsBlock = () => {
    return (
        <div>
            <DynamicPadding />
            <DetailsTableMultiNodes 
            titles={['ID', 'Date', 'Complaint', 'Solution', 'Status']}
            elements={[
                    {
                     
                        nodes: [
                            <div style={{whiteSpace: 'nowrap'}} className='gap_5'>
                                <div>
                                <AppColor.lightning height={'37px'} width={'37px'}/>
                                </div>
                                <Typography variant='body4' fontWeight='500'># 1413</Typography>
                            </div>,
                            <Typography variant='body4'>Feb 26, 2021 16:32 </Typography>,
                            <Typography fontStyle='italic' variant='body4'>Freelancer didn’t finish the job</Typography>,
                            <AppColor.minus />,
                            <Typography variant='body4' fontWeight='500' color={AppColor.orange}>Unsolved</Typography>
                        ]
                    },
                    {
                   
                        nodes: [
                            <div style={{whiteSpace: 'nowrap'}} className='gap_5'>
                            <div>
                            <AppColor.lightning height={'37px'} width={'37px'}/>
                            </div>
                            <Typography variant='body4' fontWeight='500'># 1413</Typography>
                        </div>,
                        <Typography variant='body4'>Feb 26, 2021 16:32 </Typography>,
                        <Typography fontStyle='italic' variant='body4'>Freelancer didn’t finish the job</Typography>,
                        <AppColor.minus />,
                        <Typography variant='body4' fontWeight='500' color={AppColor.orange}>Unsolved</Typography>
                        ]
                    },
                    {
                    
                        nodes: [
                            <div style={{whiteSpace: 'nowrap'}} className='gap_5'>
                            <div>
                            <AppColor.lightning height={'37px'} width={'37px'}/>
                            </div>
                            <Typography variant='body4' fontWeight='500'># 1413</Typography>
                        </div>,
                        <Typography variant='body4'>Feb 26, 2021 16:32 </Typography>,
                        <Typography fontStyle='italic' variant='body4'>Freelancer didn’t finish the job</Typography>,
                        <AppColor.minus />,
                        <Typography variant='body4' fontWeight='500' color={AppColor.orange}>Unsolved</Typography>
                        ]
                    },
                   
                ]}  />
        </div>
    )
}
const FAQBlock = () => {

    const [questions,setQuestions] = useState<QuestionItemProps[]>([
        {
            text:'In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo. ',
            title:'What if your requirements does not meet any of my package?', 
            titles: [],
            callbackRemove: () => {}
        },
        {
            text:'In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere.  ',
            title:'What software do you use?', 
            titles: [],
            callbackRemove: () => {}
        }
    ]);
    return (
        <div>
            <DynamicPadding />
            <ResponsiveLayoutTwo
                item1MaxWidth='730px'
                item2MaxWidth='390px'
                gap='80px'
                item1={
                    <div>
                        <div className={styles.flex_space_between_item}>
                        <Typography variant='body4'>Before bidding each freelancer should complete interview</Typography>
    
                         <SwitchButton width='44px' height='24px' disable={true} startValue={true} />
                        </div>

                        <DynamicPadding desktop='30px' mobile='20px'/>

                        {questions.map(item => <QuestionItem callbackRemove={(item) => {setQuestions(questions.filter(itemF => itemF.title != item))}} text={item.text} title={item.title} titles={questions}/>)}
                        <DynamicPadding desktop='20px' mobile='15px'/>
                        <div className='flex_space_between'>
                            <MyButtonOrange fontWeight='500' onClick={() => {}} textTransform='uppercase'> <div className={styles.white}><AppColor.plus stroke={AppColor.orange}/></div>Add question</MyButtonOrange>
                            <MyButtonTransparent fontWeight='500' textTransform='uppercase' onClick={() => {setQuestions([])}}>Delete all</MyButtonTransparent>
                        </div>


                    </div>
                }
                item2={
                    <div>
                        <div className='desktop'>
                            <TitleExampleUl />
                        </div>
                    </div>
                }
            />
        </div>
    )
}

type QuestionItemProps = {
    title: string;
    text: string;
    titles: QuestionItemProps[];
    callbackRemove: (item:string) => void;
}
const QuestionItem = ({text,title,titles,callbackRemove}:QuestionItemProps) => {
    return (
      <div>
            <div className={styles.question_item}>
                <div><AppColor.arrowFour width={'15px'} height={'15px'} /></div>
                <div>
                    <Typography textLineHeight='1' variant='body4' fontWeight='500'>{title}</Typography>
                    <DynamicPadding desktop='15px' mobile='10px'/>
                    <Typography variant='body4'>{text}</Typography>
                </div>
    
                    <div className={styles.flex_gap}>
                        <div style={{cursor: 'pointer'}} onClick={() => {callbackRemove(title)}}><AppColor.close  height={'16px'} fill={AppColor.red}/></div>
                        <AppColor.edit fill={AppColor.text} height={'16px'}/>
                    </div>
            </div>
            <DynamicPadding desktop='30px' mobile='20px'/>
            <HorizontalLine />
            <DynamicPadding desktop='30px' mobile='20px'/>
      </div>
    )
}
const InterviewBlock = () => {
    return (
        <div>
            <DynamicPadding />
            <ResponsiveLayoutTwo
                item1MaxWidth='730px'
                item2MaxWidth='390px'
                gap='80px'
                item1={
                    <div>
                        <div className={styles.flex_space_between_item}>
                        <Typography variant='body4'>Before bidding each freelancer should complete interview</Typography>
    
                         <SwitchButton width='44px' height='24px' disable={true} startValue={true} />
                        </div>

                        <SizeBox height='20px'/>
                        <div className='gap_5'>
                            <div className={styles.orange}>
                                <AppColor.interview />
                            </div>
                            <Typography variant='body5' fontWeight='500' textTransform='uppercase' color={AppColor.transparentBlack}>Interview</Typography>
                        </div>
                    </div>
                }
                item2={
                    <div>
                        <div className='desktop'>
                            <TitleExampleUl />
                        </div>
                    </div>
                }   
            />
        </div>
    )
}
const FiltersBlock =() => {

    const [selectedUsers,setSelectedUsers] = useState([fakeUserConstant.name]);

    const [selectedCountries,setSelectedCountrues] = useState([]);
    return (
       <>
       <DynamicPadding />
            <ResponsiveLayoutTwo
            gap='120px'
            item1MaxWidth='730px'
            item2MaxWidth='330px'
            item1={
                <div>
                   <Typography variant='body3' fontWeight='500'>
                   Access
                   </Typography>
                   <DynamicPadding desktop='30px' mobile='20px'/>
                   <InputDropdown
                        marginLeft={true}
                        dropdownVariants={['Only personal invitations','Only for filtered freelancers']}
                        initText='Only personal invitations'
                        labelIcon={<></>}
                        callback={() => {}}
                        iconHeight='12px'
                   />   
    
                   <DynamicPadding desktop='20px' mobile='15px'/>
                   {selectedUsers.map(item => <SelectUser activeSelected={selectedUsers} callbackRemove={() => {setSelectedUsers([])}} />)}
                   <DynamicPadding desktop='30px' mobile='20px'/>
                    <MyButtonOrange textTransform='uppercase' onClick={() => {}}> <div className={styles.white}><AppColor.plus stroke={AppColor.orange}/></div> Add Freelancer</MyButtonOrange>
                   <DynamicPadding desktop='30px' mobile='20px'/>
                   <DynamicPadding />   
                   
                       <Typography variant='body3' fontWeight='500'>
                       Need To Hire
                       </Typography>
                       <DynamicPadding desktop='30px' mobile='20px'/>
                       <InputDropdown
                            marginLeft={true}
                            dropdownVariants={['1 freelancers','2 freelancers','3 freelancers']}
                            initText='2 freelancers'
                            labelIcon={<></>}
                            callback={() => {}}
                            iconHeight='12px'
                       />   
        
                       <DynamicPadding />
                       <div style={{opacity: '0.5',userSelect: 'none'}}>
                       <div className={styles.positive_wrapper}>
                            <div>
                                <Typography variant='body3' fontWeight='500'>Positive Reviews</Typography>
                                <DynamicPadding desktop='30px' mobile='20px'/>
                                <SelectionItem  icon={<AppColor.starColored fill={AppColor.green}/>} text='90% and Up ' color={AppColor.green}/>
                            </div>
                            <div>
                                <Typography variant='body3' fontWeight='500'>Freelancers</Typography>
                                <DynamicPadding desktop='30px' mobile='20px'/>
                                <SelectionItem  icon={<AppColor.teams fill={AppColor.text}/>} text='Teams Only'/>
                            </div>
                            <div>
                                <Typography variant='body3' fontWeight='500'>Account Level</Typography>
                                <DynamicPadding desktop='30px' mobile='20px'/>
                                <SelectionItem  icon={<></>} text='No Preference'/>
                            </div>
                       </div>
                       <DynamicPadding />
                       <Typography variant='body3' fontWeight='500'>
                       Cooperation
                       </Typography>
                       <DynamicPadding desktop='30px' mobile='20px'/>
        
                       <div className={styles.wrapper_campaign}>
                            
                            <Typography variant='body4'>Were previous projects with freelancers</Typography>
        
                            <SwitchButton width='44px' height='24px' disable={true} startValue={true} />
                        </div>
                        <DynamicPadding />
                       <Typography variant='body3' fontWeight='500'>
                       Location
                       </Typography>
                       <DynamicPadding desktop='30px' mobile='20px'/>
                       <InputDropdown
                            marginLeft={true}
                            dropdownVariants={['Ukraine','Congo','England']}
                            initText='Add regions, countries or cities'
                            labelIcon={<></>}
                            callback={() => {}}
                            iconHeight='12px'
                       />  
                       <DynamicPadding />
                    <Typography variant='body3' fontWeight='500'>
                    Languages 
                       </Typography>
                       <DynamicPadding desktop='30px' mobile='20px'/>
                       <InputDropdown
                            marginLeft={true}
                            dropdownVariants={['Ukraine','Congo','England']}
                            initText='Add languages'
                            labelIcon={<></>}
                            callback={() => {}}
                            iconHeight='12px'
                       />    
                    <DynamicPadding />
                    <Typography variant='body3' fontWeight='500'>
                    Other Filters
                       </Typography>
                       <DynamicPadding desktop='30px' mobile='20px'/>
                       <InputDropdown
                            marginLeft={true}
                            dropdownVariants={['Ukraine','Congo','England']}
                            initText='Add regions, countries or cities'
                            labelIcon={<></>}
                            callback={() => {}}
                            iconHeight='12px'
                       />   
                   </div>
                </div>
            }
            item2={
                <div className='desktop'>
                    <TitleExampleUl />
                </div>
            }
        />
       </>
)
}
type SelectUserProps = {
    activeSelected: string[];
    callbackRemove: (item:string) => void;
}

type SelectionItemProps = {
    text: string;
    color?: string;
    icon: React.ReactNode;
}
const SelectionItem = ({icon,text,color}:SelectionItemProps) => {
    return (
        <div className={styles.select_item}>
            {icon}
            <Typography variant='body4' color={color ?? AppColor.text}>{text}</Typography>
            <AppColor.chevronBottom fill={AppColor.text} height={'12px'}/>
        </div>
    )
}
const SelectUser = ({activeSelected,callbackRemove}:SelectUserProps) => {
    return (
        <div className='gap_10'>
            <UserAvatar active={true} name='Artem M.' flag={<AppColor.UkraineFlagIcon/>} role='Freelancer' />
            <div style={{cursor: 'pointer'}} onClick={() => {callbackRemove(fakeUserConstant.name)}}>
            <AppColor.close width={'15px'} height={'15px'} fill={AppColor.red} />
            </div>
        </div>
    )
}
const OverviewBlock = () => {
    const [isPosted,setIsPosted] = useState(false);
    return (
        <>
        <DynamicPadding />
        {isPosted
        ? <ResponsiveLayoutTwo
        gap='120px'
        item1MaxWidth='730px'
        item2MaxWidth='330px'
        item1={
            <div>
                <Typography variant='body3' fontWeight='500'>Order stages</Typography>

                <DynamicPadding desktop='30px' mobile='20px'/>

                <PercentBar currentPercent={35} height='13px' />
                <DynamicPadding desktop='20px' mobile='15px'/>
                <div className='flex_space_between desktop'>
                    <Typography variant='body4' fontWeight='500' color={AppColor.orange}>Order</Typography>
                    <Typography variant='body4' fontWeight='500' color={AppColor.orange}>Selection</Typography>
                    <Typography variant='body4' fontWeight='500'>Negotiation</Typography>
                    <Typography variant='body4' color={AppColor.transparentBlack}>Progress</Typography>
                    <Typography variant='body4'color={AppColor.transparentBlack} >Completed</Typography>
                </div>
                <div className='mobile'>
                <Typography variant='body4' fontWeight='500'>Negotiation</Typography>
                </div>
                <DynamicPadding />

                <div className={styles.details_grid}>
                    <DetailsItem icon={<AppColor.playTriangle />} text='Running' title='Status' />
                    <DetailsItem icon={<AppColor.timelapse />}  absolute={true} text='5 days left' title='Lifetime' />
                    <DetailsItem icon={<AppColor.orderPlace />} absolute={true}  text='55' title='Order Place' />
                </div>

                <DynamicPadding />

                <div className='text_box'>
                    <Typography variant='body4'>Your project has entered the <span style={{fontWeight: '500'}}>negotiation stage</span>, which means you have hired freelancers and are ready to proceed.</Typography>
                </div>

                <DynamicPadding />

                <div className={'flex_space_between'}>
                   <Link to={'/create-order/negotiation'}>
                   <ChevronMoveTo variant='left' onClick={() => {}} text='Step back' title='Negotiation' />
                   </Link>
                    <ChevronMoveTo variant='right' preview={true} onClick={() => {}} text='Before posting' title='Preview' />
                    <ChevronMoveTo variant='right' onClick={() => {setIsPosted(true)}} text='For free' disabled={true} title='update' />
                </div>

            </div>
        }
        item2={
            <div className='desktop'>
                <BackgroundItem image='' />
            </div>
        }
    />
        : <ResponsiveLayoutTwo
        gap='120px'
        item1MaxWidth='730px'
        item2MaxWidth='330px'
        item1={
            <div>
                <div className='justify_center'>
                <AppColor.reachingFlag width={'fit-content'} style={{maxHeight: '245px',maxWidth: '470px'}}/>
                </div>
                <DynamicPadding />
                <div className='text_box'>
                    <Typography variant='body4'>Almost done. Preview your order before posting and <span style={{fontWeight: '500'}}>2 freelancers</span> will see your project.</Typography>
                </div>
                <DynamicPadding />
                <div className='mobile'>
                    <BackgroundItem image='' />
                    <DynamicPadding />
                </div>
                <div className={'flex_space_between'}>
                <Link to={'/create-order/negotiation'}>
                   <ChevronMoveTo variant='left' onClick={() => {}} text='Step back' title='Negotiation' />
                   </Link>
                    <ChevronMoveTo variant='right' preview={true} onClick={() => {}} text='Before posting' title='Preview' />
                    <ChevronMoveTo variant='right' onClick={() => {setIsPosted(true)}} text='For free' title='Post' />
                </div>
            </div>
        }
        item2={
            <div className='desktop'>
                <BackgroundItem image='' />
            </div>
        }
    />}
        </>
    )
}

type DetailsItemProps = {
    title: string;
    text: string;
    icon: React.ReactNode;
    absolute?: boolean
}
const DetailsItem = ({icon,text,title,absolute}:DetailsItemProps) => {
    return (
        <div className={styles.details_wrapper}>
            {absolute && <div className={styles.absolute_details}><AppColor.upCirlcle /></div>}
            <div className={styles.details_padding}>
                {icon}
                <div>
                    <Typography variant='body5' color={AppColor.transparentBlack} textLineHeight='1' >{title}</Typography>
                    <SizeBox height='10px' />
                    <Typography variant='body4' fontWeight='500'  textLineHeight='1' >{text}</Typography>
                </div>
            </div>
            <div className={styles.orange_line}></div>
        </div>
    )
}

const AdvancedBlock = () => {
    return (
       <>
       <DynamicPadding />
            <ResponsiveLayoutTwo
                gap='120px'
                item1MaxWidth='730px'
                item2MaxWidth='330px'
                item1={
                    <div>
                       <Typography variant='body3' fontWeight='500'>
                       Visibility
                       </Typography>
                       <DynamicPadding desktop='30px' mobile='20px'/>
                       <InputDropdown
                            marginLeft={true}
                            dropdownVariants={['All users and search engines', 'All registered users and search engines', 'All users, all registered users']}
                            initText='All users and search engines'
                            labelIcon={<></>}
                            callback={() => {}}
                            iconHeight='12px'
                       />   
    
                       <DynamicPadding />
                       <Typography variant='body3' fontWeight='500'>
                       Sponsorship Campaign
                       </Typography>
                       <DynamicPadding desktop='30px' mobile='20px'/>
                       <div className={styles.wrapper_campaign}>
                            <div className='gap_10'>
                                <div className={styles.orange}>
                                        <AppColor.caseWhite />
                                </div>
                                    <Typography variant='body5' fontWeight='500' textTransform='uppercase' color={AppColor.transparentBlack}>Change a campaign</Typography>
                            </div>
                            <div className='gap_10'>
                                <AppColor.workClub />
                                    <Typography variant='body4' fontWeight='500'>WorkClub</Typography>
                            </div>
                       </div>
    
                       <DynamicPadding />
                      <div className='gap_10'>
                           <Typography variant='body3' fontWeight='500'>
                           Urgent Order
                           </Typography>
                           <AppColor.upCirlcle />
                      </div>
                       <DynamicPadding desktop='30px' mobile='20px'/>
    
                       <div style={{opacity: '0.5'}} className={styles.wrapper_campaign}>
                            <div className='gap_15'>
                                <Urgent />
                                <Typography variant='body4'>you will have a special badge about urgent order</Typography>
                            </div>
    
                            <SwitchButton width='44px' height='24px' disable={true}  />
                        </div>
                    </div>
                }
                item2={
                    <div className='desktop'>
                        <TitleExampleUl />
                    </div>
                }
            />
       </>
    )
}

export default CreateOrderPosting;