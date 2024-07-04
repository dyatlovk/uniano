
import { StepItemSolving, StepsOfPreparingEndSolving } from '@common/components/StepsOfPreparing/index';
import BigInput, { BigInputOutside } from '@common/components/ui/BigInput/index';
import DatePicker from '@common/components/ui/DatePicker/index';
import InfoBox from '@common/components/ui/InfoBox/index';
import Typography from '@common/components/ui/Typography/Typography';
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import AppColor from '@common/styles/variables-static';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { SkillCheckBox } from '@pages/Dashboard/pages/Account/index';
import ImageCardsPlaceholder from '@common/components/ImageCardsPlaceholder/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import SizeBox from '../../SizeBox';
import AnimateHeight from '@common/components/AnimateHeight/index';
import MyButtonOrange from '../../MyButton/variants/MyButtonOrange';
import MyButtonTransparent from '../../MyButton/variants/MyButtonTransparent';

export type StepProps = {
    callback: (item: any) => void;
    value: any;
    stepOneValue?: string;
    stepTwoValue?: string;
    stepThreeValue?: string[];
    stepFourValue?: string[];
    stepFiveValue?: any[];
    stepSixValue?: string;
    stepSevenValue?: string;
    stepEightValue?: string;
    callbackStep: (item:number) => void;
}

const skills = [
    "WordPress",
    "NFT Development",
    "Chatbots",
    "Website Builders & CMS",
    "Crypto Wallet Development",
    "Databases",
    "Crypto Coins & Tokens",
    "Trading Apps",
    "Blockchain Development",
    "Databases",
    "Windows",
    "Android",
    "E-Commerce Development",
    "Linux/Unix",
    "iOS",
    "Web Programming",
    "3D",
    "OSX",
    "Other",
    "Mobile Web",
    "2D",
    "Other"
  ]
  
export const StepOneContactUs = ({callback,value,callbackStep}:StepProps) => {

    const [selectedCategory,setSelectedCategory] = useState('Customers');

    return (
        <StepItemSolving solveNode={
            <div className='grid_15' style={{gap: '20px'}}>
               

                <DropdownContactUs activeSelect={selectedCategory} callback={(item) => {setSelectedCategory(item)}} 
                 text='Customers' dropdownNode={
                    <div className={styles.grid_3}>
                        <DropdownChild callback={(item) => {callback([selectedCategory,item]);callbackStep(2)}} 
                            icon={<AppColor.info />} text={'Getting Started'} />
                        <DropdownChild callback={(item) => {callback([selectedCategory,item]);callbackStep(2)}} 
                            icon={<AppColor.info />} text={'Getting Started'} />
                        <DropdownChild callback={(item) => {callback([selectedCategory,item]);callbackStep(2)}} 
                            icon={<AppColor.info />} text={'Getting Started'} />
                        <DropdownChild callback={(item) => {callback([selectedCategory,item]);callbackStep(2)}} 
                            icon={<AppColor.info />} text={'Getting Started'} />
                        <DropdownChild callback={(item) => {callback([selectedCategory,item]);callbackStep(2)}} 
                            icon={<AppColor.info />} text={'Getting Started'} />
                        <DropdownChild callback={(item) => {callback([selectedCategory,item]);callbackStep(2)}} 
                            icon={<AppColor.info />} text={'Getting Started'} />
                    </div>
                 }  
                />
                <DropdownContactUs activeSelect={selectedCategory} callback={(item) => {setSelectedCategory(item)}} 
                 text='no customers' dropdownNode={
                    <div className={styles.grid_3}>
                        <DropdownChild callback={(item) => {callback([selectedCategory,item]);callbackStep(2)}} 
                            icon={<AppColor.info />} text={'Getting Started'} />
                        <DropdownChild callback={(item) => {callback([selectedCategory,item]);callbackStep(2)}} 
                            icon={<AppColor.info />} text={'Getting Started'} />
                        <DropdownChild callback={(item) => {callback([selectedCategory,item]);callbackStep(2)}} 
                            icon={<AppColor.info />} text={'Getting Started'} />
                        <DropdownChild callback={(item) => {callback([selectedCategory,item]);callbackStep(2)}} 
                            icon={<AppColor.info />} text={'Getting Started'} />
                        <DropdownChild callback={(item) => {callback([selectedCategory,item]);callbackStep(2)}} 
                            icon={<AppColor.info />} text={'Getting Started'} />
                        <DropdownChild callback={(item) => {callback([selectedCategory,item]);callbackStep(2)}} 
                            icon={<AppColor.info />} text={'Getting Started'} />
                    </div>
                 }  
                />
            </div>
        } stepNumber='1' title={'What can we help you with?'} />
    );
};

const DropdownChild = ({icon,text,callback}) => {
    return (
        <div onClick={() => {callback(text)}} className={`${styles.dropdown_child} cursor`}>
            {icon}
            <Typography className={styles.hover_text_child} variant='body5'>{text}</Typography>
        </div>
    )
}
type DropdownContactUsProps = {
    text: string;
    dropdownNode: React.ReactNode;
    callback: (item: string) => void; 
    activeSelect: string;
}
const DropdownContactUs = ({callback,dropdownNode,text,activeSelect}:DropdownContactUsProps) => {
    const isActive = text == activeSelect;
    return (
       <div>
            <div onClick={() => {callback(text)}} className={`${styles.dropdown_item} cursor`} style={{opacity: isActive ? '0.73' : '1',backgroundColor: isActive ? AppColor.orange : 'transparent'}}>
                <Typography color={isActive ? 'white' : AppColor.text} variant='body5' fontWeight='500'>{text}</Typography>
                {
                    isActive 
                    ? <AppColor.chevronTop fill='white' />
                    : <AppColor.chevronBottom fill={AppColor.text} />
                }
            </div>
            <AnimateHeight show={isActive}>
                <SizeBox height='10px' />
                    {dropdownNode}
            </AnimateHeight>
       </div>
    )
}

export const StepTwoContactUs= ({callback,value,stepOneValue,callbackStep}:StepProps) => {
    return (
        <StepsOfPreparingEndSolving 
            elements={[
                {
                    solve: 'Change title',
                    text: '',
                    afterTextNode: <div className='gap_5'>
                        <Typography variant='body4'>{stepOneValue[0]}</Typography>
                        <AppColor.chevronRight width={'6px'} height={'12px'} fill={'#A8A8AD'} />
                        <Typography variant='body4'>{stepOneValue[1]}</Typography>
                    </div>,
                    onSolveClick: () => {callbackStep(1)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <div className='grid_15'>
                        <SecondStepItem callback={(item) => {callback(item);callbackStep(3)}} text='
                        Password, security question and two-factor authentication' />
                        <SecondStepItem callback={(item) => {callback(item);callbackStep(3)}} text='
                        How do I update my billing info for past purchases?' />
                        <SecondStepItem callback={(item) => {callback(item);callbackStep(3)}} text='
                        How do I update an invoice with more/less information?' />
                        <SecondStepItem callback={(item) => {callback(item);callbackStep(3)}} text={
                            `Why wasn't my promo code applied to my purchase?`
                        } />
                    </div>
                } stepNumber='2' title='Description' />
            }
        />
    )
}

const SecondStepItem = ({text,callback}) => {
    return (
        <div onClick={() => {callback(text)}}>
            <Typography variant='body4' className='underline_appearance'>{text}</Typography>
        </div>
    )
}
export const StepThreeContactUs = ({callback,value,stepOneValue,stepTwoValue,callbackStep}:StepProps) => {

    const [array,setArray] = useState(value);

    const [contactUs,setContactUs] = useState(false);

    useEffect(() => {
        callback(array);
    },[array])
    
    return (
        <StepsOfPreparingEndSolving 
            elements={[
                {
                    solve: 'Change title',
                    text: stepOneValue,
                    onSolveClick: () => {callbackStep(1)}
                },
                {
                    solve: 'Change description',
                    text: stepTwoValue,
                    onSolveClick: () => {callbackStep(2)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                  <>
                    {
                        !contactUs
                        ? <div>
                            <Typography variant='body4' fontWeight='400'>
                            OLorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tristique enim, neque, mollis at. Quam scelerisque pulvinar pellentesque phasellus. 
                            </Typography>

                            <DynamicPadding desktop='20px' mobile='10px' />
                            <RelatedTopics />
                            <Typography variant='body4'>Still need help?</Typography>
                            <SizeBox height='10px' />
                            <div className='gap_5'>
                                <MyButtonOrange onClick={() => {
                                    setContactUs(true);
                                }} fontWeight='500' textTransform='uppercase'>
                                Contact Us
                                </MyButtonOrange>
                                <MyButtonTransparent onClick={() => {}} fontWeight='500' >
                                Ask Community
                                </MyButtonTransparent>
                            </div>
                        </div>
                        : <div>
                            <BigInputOutside callback={() => {}} />

                            <DynamicPadding desktop='10px' mobile='0px' />
                  
                            <MyButtonOrange onClick={() => {
                             
                                }} fontWeight='500' textTransform='uppercase'>
                                Create a ticket
                            </MyButtonOrange>
                            <DynamicPadding desktop='30px' mobile='20px' />
                            <RelatedTopics />
                        </div>
                    }
                  </>
                } stepNumber='3' title={!contactUs ? 'Try the following:' : 'Describe the issue'} />
            }
        />
    )
}

export const RelatedTopics = () => {
    const tmp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const [showCount,setShowCount] = useState(4);
    return (
        <div>
            <Typography variant='body4' fontWeight='500'>
            Related Topics
            </Typography>
            <SizeBox height='10px' />
            <div className={styles.related_topics}>
                {tmp.slice(0,showCount).map((item) => <div className='gap_5'>
                    <AppColor.questionFaq />
                    <Typography className='underline_appearance' variant='body4'>What is Uniano?</Typography>
                </div>)}
            </div>
            <SizeBox height='20px' />
           {showCount < tmp.length &&  <div onClick={() => {setShowCount(prev => prev+4)}} className={`${styles.border_cehvron} cursor`}>
                <AppColor.chevronBottom fill={AppColor.text} />
            </div>}
            {showCount < tmp.length && <SizeBox height='20px' />}
        </div>
    )
}


type TopicsComponentProps = {
    title: string;
}
export const TopicsComponent = ({title}:TopicsComponentProps) => {
    const tmp = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    const [showCount,setShowCount] = useState(4);
    return (
        <div>
            <Typography variant='body4' fontWeight='500'>
            {title}
            </Typography>
            <SizeBox height='20px' />
            <div className={styles.related_topics}>
                {tmp.slice(0,showCount).map((item) => <div className='gap_5'>
                    <AppColor.questionFaq />
                    <Typography className='underline_appearance' variant='body4'>What is Uniano?</Typography>
                </div>)}
            </div>
            <SizeBox height='20px' />
           {showCount < tmp.length &&  <div onClick={() => {setShowCount(prev => prev+4)}} className={`${styles.border_cehvron} cursor`}>
                <AppColor.chevronBottom fill={AppColor.text} />
            </div>}
            {showCount < tmp.length && <SizeBox height='20px' />}
        </div>
    )
}