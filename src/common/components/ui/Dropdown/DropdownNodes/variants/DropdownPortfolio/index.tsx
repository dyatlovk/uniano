
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import DropdownNode from '../..';
import styles from './style.module.scss';
import test1 from '@assets/images/test1.png';
import test2 from '@assets/images/test2.png';
import test3 from '@assets/images/test3.png';
import test4 from '@assets/images/test4.png';
import Typography from '@common/components/ui/Typography/Typography';
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index';
import ImageCardsShow from '@common/components/ImageCardsShow/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Dropdown from '../../..';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant } from '@common/models/user';
import TagsDisplay from '@common/components/TagsDisplay/index';
import FilterList from '@common/components/FilterList/index';
import TitleUnderlineActive from '@common/components/ui/TitleUnderlineActive/index';
import SliderTransparentSwiper from '@common/components/ui/SliderTransparentSwiper/index';
import SliderByRef from '@common/components/ui/SliderByRef/index';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import PopUpBottom from '@common/components/ModalPopUps/PopUpBottom/index';
import ThreeLinesPopUp, { ThreeLinesPopUpCustom } from '@common/components/ui/ThreeLinesPopUp/index';
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent';
import { StepOneButtonAddPortfolio, StepThreeButtonAddPortfolio, StepFourButtonAddPortfolio, StepFiveButtonAddPortfolio, StepSixButtonAddPortfolio, StepSevenButtonAddPortfolio, StepTwoButtonAddPortfolio, StepFinalPortfolio } from './Steps';
import SizeBox from '@common/components/ui/SizeBox/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import DarkBox from '@common/components/ui/DarkBox/index';
import ButtonChooseList from '@common/components/ButtonChooseList/index';
import { FilterTemplateDropdown } from '@common/components/ui/FiltersTemplate/index';

const dropdownItems = [
    {
        title: 'Slick Lane - Social Product Video',
        price: '$50 000'
    },
    {
        title: 'Slick Lane - Social Product Video',
        price: '$50 000'
    },
    {
        title: 'Slick Lane - Social Product Video',
        price: '$50 000'
    },
    {
        title: 'Slick Lane - Social Product Video',
        price: '$50 000'
    }
]


const DropdownPortfolio = () => {
    const [activeCategory,setActiveCategory] = useState('All');
    const [showItemsCount,setShowItemsCount] = useState(4);
    const [showModal,setShowModal] = useState(false);
    const [showEdit,setShowEdit] = useState(false);
    const [addModal,setAddModal] = useState(false);

    const [stepOneText,setTextOneStep] = useState('');
    const [stepTwoText,setStepTwoText] = useState('');
    const [stepThree,setStepThree] = useState<string[]>([]);
    const [stepFour,setStepFour] = useState([]);
    const [activeStep,setActiveStep] = useState(1);
    const [stepFive,setStepFive] = useState<{question: string; answer: string}[]>([]);
    const [stepSix,setStepSix] = useState('');


    const [tmpStepFive,setTmpStepFive] = useState([{question: '', answer: ''}]);

    const mapsItem = {
        1: <StepOneButtonAddPortfolio callbackStep={() => {}} value={stepOneText} callback={(item) => {setTextOneStep(item)}} />,
        2: <StepTwoButtonAddPortfolio callbackStep={(item) => {setActiveStep(item)}} stepOneValue={stepOneText} value={stepTwoText} callback={(item) => {setStepTwoText(item)}} />,
        
        3: <StepThreeButtonAddPortfolio callbackStep={(item) => {setActiveStep(item)}} value={stepThree} stepOneValue={stepOneText}
        stepTwoValue={stepTwoText}
        callback={(item) => {setStepThree(item)}} />,
        
        4: <StepFourButtonAddPortfolio callbackStep={(item) => {setActiveStep(item)}} value={stepFour} stepOneValue={stepOneText}
        stepTwoValue={stepTwoText} stepThreeValue={stepThree}
        callback={(item) => {setStepFour(item)}}/>,

        5: <StepFiveButtonAddPortfolio callbackStep={(item) => {setActiveStep(item)}} stepOneValue={stepOneText}
        stepTwoValue={stepTwoText} stepThreeValue={stepThree} stepFourValue={stepFour}
        value={stepFive} 
        callback={(item) => {setStepFive(item)}}/>,

        6: <StepSixButtonAddPortfolio callbackStep={(item) => {setActiveStep(item)}} stepOneValue={stepOneText}
        stepTwoValue={stepTwoText} stepThreeValue={stepThree} stepFourValue={stepFour} stepFiveValue={stepFive}
        value={stepSix} 
        callback={(item) => {setStepSix(item)}}/>,
        
        7: <StepSevenButtonAddPortfolio callbackStep={(item) => {setActiveStep(item)}} stepOneValue={stepOneText}
        stepTwoValue={stepTwoText} stepThreeValue={stepThree} stepFourValue={stepFour} stepFiveValue={stepFive} stepSixValue={stepSix}
        value={stepSix} 
        callback={(item) => {setStepSix(item)}}/>,


        8: <StepFinalPortfolio callbackStep={(item) => {setActiveStep(item)}} stepOneValue={stepOneText}
        stepTwoValue={stepTwoText} stepThreeValue={stepThree} stepFourValue={stepFour} stepFiveValue={stepFive} stepSixValue={stepSix}
        value={stepSix} 
        callback={(item) => {setStepSix(item)}}/>
    }

    const [addQuestion,setAddQuestion] = useState(false);


    const mapsOfValues = {
        1: stepOneText,
        2: stepTwoText,
        3: stepThree,
        4: stepFour,
        5: stepFive,
        6: stepSix,
        7: 'pass',
        8: 'pass'
    }

    return (
      <>
      {addQuestion && <ModalCenterBasic
      
      desktopMinWidth='620px' bottomPartPadding='30px' callbackClose={() => {setAddQuestion(false)}} title='Add question'>
        <Typography variant='body3' fontWeight='500'>Question</Typography>
        <DynamicPadding desktop='30px' mobile='20px'/>
        <InputCommon callback={(item) => {
            setTmpStepFive(prev => [{question: item, answer: prev[0].answer}])
        }} placeholder='Question' />
        <DynamicPadding desktop='30px' mobile='20px'/>
        <Typography variant='body3' fontWeight='500'>Answer</Typography>
        <DynamicPadding desktop='30px' mobile='20px'/>
        <InputCommon padding='15px' callback={(item) => {
            setTmpStepFive(prev => [{question: prev[0].question, answer: item}])
        }} placeholder='Answer' multiLine={true} />
        <DynamicPadding desktop='30px' mobile='20px'/>

        <div className={styles.flex_end}>
            <MyButtonTransparent onClick={() => {setAddQuestion(false)}} fontWeight='500' textTransform='uppercase'>
                Cancel
            </MyButtonTransparent>
            <MyButtonOrange onClick={() => {
                setStepFive(prev => [...prev, tmpStepFive[0]])
                console.log(stepFive);
                
                setAddQuestion(false)}} fontWeight='500' textTransform='uppercase'>
            Save
            </MyButtonOrange>
        </div>
        </ModalCenterBasic>}
      {addModal && <ModalCenterBasic desktopMinWidth='830px' bottomPartPadding='30px' callbackClose={() => {setAddModal(false)}} title='Add portfolio'
                nodesBeforeClose={[<FilterTemplateDropdown />]} 
             >

                <div style={{minHeight: '300px'}}>
                    {mapsItem[activeStep] || null}
    
                     <DynamicPadding desktop='30px' mobile='20px'/>
                        <div style={{whiteSpace: 'nowrap'}} className='flex_space_between'>
                            {activeStep == 5  && <div className='gap_5 cursor' style={{marginLeft: '35px'}} onClick={() => {setAddQuestion(true)}}>
                                <Typography variant='body5' color={AppColor.orange}>
                                Add question
                                </Typography>
                                </div>}
                            <div className={styles.flex_end}>
                                <MyButtonTransparent onClick={() => {
                                    if(activeStep >= 1) {
                                        setActiveStep(prev => prev-1)
                                    } else {
                                        setAddModal(false);
                                    }
                                }} fontWeight='500' textTransform='uppercase'>
                                Cancel
                                </MyButtonTransparent>
                                {activeStep != 8 && <MyButtonOrange disabled={
                                    mapsOfValues[activeStep] == null || mapsOfValues[activeStep] == '' || mapsOfValues[activeStep].length == 0
                                } onClick={() => {setActiveStep(prev => prev+1)}} fontWeight='500' textTransform='uppercase'>
                                Next
                                </MyButtonOrange>}
                                {activeStep == 8 && <MyButtonOrange disabled={
                                    mapsOfValues[activeStep] == null || mapsOfValues[activeStep] == '' || mapsOfValues[activeStep].length == 0
                                } onClick={() => {setAddModal(false)}} fontWeight='500' textTransform='uppercase'>
                                Save
                                </MyButtonOrange>}
                            </div>
                        </div>
                </div>
                </ModalCenterBasic>}
      {showModal && <ModalCenterBasic
            desktopMaxWidth='calc(40vw + 60px)'
            bottomPartPadding='30px' callbackClose={() => {setShowModal(false)}} title='Slick Lane - Social Product Video'
            nodeAfterTitle={<Typography variant='body5' color={AppColor.transparentBlack}>16 Oct - 25 Nov (39 days)</Typography>}
            >
                <div className='flex_space_between'>
                    <div>
                        <UserTopPageInfo user={fakeUserConstant} />
                        <DynamicPadding desktop='20px' mobile='10px'/>
                        <TagsDisplay tags={['Video','Social Media']} />
                    </div>

                    <div className={styles.flex_column}>
                        <MyButtonTransparentOrange width='100%' fontWeight='500' textTransform='uppercase' onClick={() => {}} >
                            CReate
                        </MyButtonTransparentOrange>
                        <DynamicPadding desktop='20px' mobile='10px'/>
                        <div className='gap_10'>
                            <Typography variant='subtitle' fontWeight='500'>$200</Typography>
                            <AppColor.cart fill={AppColor.text} />
                            <AppColor.flag />
                            <AppColor.homeAccept />
                        </div>
                    </div>
                </div>
                <DynamicPadding desktop='30px' mobile='20px'/>
                <FilterList filters={['Description', 'Freelancer', 'FAQ (2)']} />
                <DynamicPadding desktop='30px' mobile='20px'/>
                 <ImageCardsShow
                        widthTotalDesktop='40vw'
                        images={[test1,test2,test3,test4]}
                    />                
                    

                <DynamicPadding />
                        <Typography variant='body3' fontWeight='500'>Description</Typography>
                        <DynamicPadding desktop='30px' mobile='15px'/>
                        <Typography variant='body4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tristique enim, neque, mollis at. Quam scelerisque pulvinar pellentesque phasellus. Nisl id sit tincidunt ut. Egestas ullamcorper magna mi integer elementum dictum aenean in. Ultrices convallis in sit venenatis, ut nunc pellentesque. Eu lacus sapien et eu tortor cursus dolor.
Nunc nunc, consequat porttitor sed tortor. Tempus mi sit blandit nibh fusce morbi nullam. Nunc sagittis tortor, dictum lorem quis faucibus elit. Pretium fames leo ut eget augue velit eros, pellentesque. Non quis imperdiet dui praesent at massa. Bibendum commodo eros bibendum sit cras sit venenatis, vulputate a. Et aliquet eu et tristique nibh ultrices vel amet amet. Sit facilisi pretium ut placerat sem. Sit nunc integer velit facilisi adipiscing lectus arcu. Pellentesque sapien, arcu, nulla quis magnis praesent aliquet venenatis.</Typography>
                    <DynamicPadding desktop='30px' mobile='15px'/> 

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

                        <TitleUnderlineActive title='Other Portfolio' />

                        <DynamicPadding desktop='30px' mobile='20px'/>
                        <SliderByRef buttons={false} nodes={[
                           <DropdownItem />,
                           <DropdownItem />,
                           <DropdownItem />,
                           <DropdownItem />,
                           <DropdownItem />,
                           <DropdownItem />,
                        ]} />
                        
                </ModalCenterBasic>}

            {showEdit && <ModalCenterBasic 
            desktopMinWidth='60vw'
            bottomPartPadding='30px' callbackClose={() => {setShowEdit(false)}} title='Portfolio'
            nodeAfterTitle={
                <div style={{width: '100%'}} className='gap_10'>
                    <DarkBox text='5' />

                    <div style={{marginLeft: 'auto'}}>
                    <ButtonChooseList buttonPadding='3px 14px' buttons={['All','Active','Pending']} callback={() => {}} gap='0px' initValue='All'/>
                    </div>

                    <SizeBox width='30px'/>
                </div>
            } 
             >
                <div className={styles.profile_grid}>
                    <EditPortfolio />
                    <EditPortfolio />
                </div>
                <DynamicPadding desktop='30px' mobile='20px'/>
                <div className={styles.flex_end}>
                    <MyButtonOrange onClick={() => {setAddModal(true)}} textTransform='uppercase'
                    fontWeight='500'
                    >
                        <div className={styles.white}><AppColor.plus stroke='orange'/></div>
                        Add portfolio</MyButtonOrange>
                </div>
            </ModalCenterBasic>}
          <DropdownNode
            nodeAfterTitle={
                <AppColor.edit onClick={() => {setShowEdit(true)}} fill={AppColor.text} />
            }
            countNotifications={5}
            noneIcon={<AppColor.news fill={AppColor.text}  />}
            noneText='Create something useful for the world'
            noneTitle='Portfolio'
            noneButton={<MyButtonOrange onClick={() => {}}>Create</MyButtonOrange>}
            filters={[]}
            title='Portfolio'
            callback={(item) => { setActiveCategory(item)}}
            dropnodes={
            <div>
                <div className={styles.node_wrapper}>
                    {
                    (() => {
                      const displayedItems = [];
        
                      for (let index = 0; index < dropdownItems.length && index + 1 <= showItemsCount; index++) {
        
                        displayedItems.push(<DropdownItem callback={(item) => {setShowModal(item)}} key={index} />);
                        
                      }
        
                      return displayedItems;
                    })()
                  }
                    
                </div>
                {dropdownItems.length > showItemsCount
                ? <div className={styles.absolute_show}> <MyButtonTransparentOrange onClick={() => {setShowItemsCount(prev => prev+4)}} >Show more +4</MyButtonTransparentOrange> </div>
                : <></>}
            </div>}
          />
      </>
    );
};


const EditPortfolio = () => {
    return (
     <div className={styles.edit_profile}>
        <div className='gap_20'>
            <AppColor.arrowFour />
            <div className='gap_10'>
            <UserAvatar active={true} variant='image' name='Artem M.' url={fakeUserConstant.image} />
                <div className={styles.flex_column} style={{alignItems: 'start'}}>
                    <Typography variant='body4' fontWeight='500' className='underline_appearance'>Logo by sample in vector in maximum quality </Typography>
                    <div className='gap_5'>
                        <Typography variant='body5' className={`${styles.hover_dark} cursor`}>Logo Design</Typography>
                        <Typography variant='body5' className={`${styles.hover_dark} cursor`}>• 16 Oct - 25 Nov (39 days)</Typography>
                    </div>
                </div>
            </div>
        </div>
        <Typography variant='body3' fontWeight='500' >$200</Typography>
        <PopUpBottom
            positionRight='-10px'
            showBackgroundHover={true}
            showNodeHover={
               <div className='cursor'> <AppColor.threeLinesActive /></div>
            }                           
            showNode={
               <div className='cursor'> <AppColor.threeLines /></div>
            }
            popUpNode={<ThreeLinesPopUpCustom 
                positionRight='25px'
                items={[
                    { icon: <AppColor.share />, title: 'Share' },
                    { icon: <AppColor.report />, title: 'Report' },
                    { icon: <AppColor.edit fill={AppColor.text} />, title: 'Edit' },
                    { icon: <AppColor.playGreen />, title: 'Resume', color: AppColor.green },
                    { icon: <AppColor.close fill={AppColor.red} />, title: 'Delete', color: AppColor.red },
                ]}
            />}
            topPaddingFromNode='27px'
        />
     </div>
        )
}


type DropdownItemProps = {

    callback?: (item: boolean) => void;
}
export const DropdownItem = ({callback}:DropdownItemProps) => {
    return (      
           <div style={{paddingTop: '10px'}}>
                <div onClick={() => {callback(true)}} className={`${styles.port_dropdown_item} cursor`}>
                    <img src={test1} width={'100%'} height={'160px'} className={styles.image} alt="" />
                    <div className={styles.bottom_abs}>
                        <Typography variant='body5' fontWeight='500' color='white'>
                        Slick Lane - Social Product Video
                        </Typography>
                    </div>
                    <div className={styles.top_abs}>
                   <div className={styles.black_box}>
                        <Typography variant='body5' fontWeight='500' color='white'>
                        $50 000
                        </Typography>
                   </div>
                    </div>
                </div>
           </div>
    )
}

export default DropdownPortfolio;