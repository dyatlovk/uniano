
import { StepItemSolving, StepsOfPreparingEndSolving } from '@common/components/StepsOfPreparing/index';
import { BigInputOutside } from '@common/components/ui/BigInput/index';
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
import SizeBox from '@common/components/ui/SizeBox/index';
import { fakeUserConstant } from '@common/models/user';

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
  
export const StepOneButtonAddPortfolio = ({callback,value}:StepProps) => {

    return (
        <StepItemSolving solveNode={
            <InputCommon initText={value} padding='15px 30px' width='100%' callback={(item) => {callback(item)}} placeholder='Title' />
        } stepNumber='1' title={'Title'} />
    );
};

export const StepTwoButtonAddPortfolio= ({callback,value,stepOneValue,callbackStep}:StepProps) => {
    return (
        <StepsOfPreparingEndSolving 
            elements={[
                {
                    solve: 'Change title',
                    text: stepOneValue,
                    onSolveClick: () => {callbackStep(1)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <BigInputOutside initValue={value} callback={(item) => {callback(item)}}  />
                } stepNumber='2' title='Description' />
            }
        />
    )
}

export const StepThreeButtonAddPortfolio = ({callback,value,stepOneValue,stepTwoValue,callbackStep}:StepProps) => {

    const [array,setArray] = useState(value);

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
                  <div className={styles.grid_3}>
                    { 
                    skills.map(item =>
                        <SkillSelectTmp initValueProp={array.includes(item)} text={item}  callback={(text,isTrue) => {
                            if(isTrue) {
                                setArray(prev => [...prev,item])
                            } else {
                                if(array.includes(item)) {
                                    setArray(prev => prev.filter(tmp => tmp != item))
                                }
                            }
                        }} />
    )}
                  </div>
                } stepNumber='3' title='Skills' />
            }
        />
    )
}


const SkillSelectTmp = ({text,callback,initValueProp}) => {
    const [initValue,setInitValue] = useState(initValueProp ?? false);
    useEffect(() => {
        callback(text,initValue);
    },[initValue])
    return (
        <div onClick={() => {setInitValue(prev => !prev)}}>
            <SkillCheckBox initValue={initValue} text={text} callback={callback} removeDropdown={true} />
        </div>
    )
}
export const StepFourButtonAddPortfolio = ({callback,value,stepOneValue,stepTwoValue,stepThreeValue,callbackStep}:StepProps) => {

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
                {
                    solve: 'Change skills',
                    text: stepThreeValue.join(', '),
                    onSolveClick: () => {callbackStep(3)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <ImageCardsPlaceholder
                        callback={(item) => {
                            let newArray = [...item];
                            for (let i = newArray.length - 1; i >= 0; i--) {
                                if (newArray[i] === '') {
                                    newArray.splice(i, 1);
                                }
                            }
                            callback(newArray)
                        }}
                        height='350px'
                        widthTotalDesktop='730px'
                        images={['','','','']}
                    />
                } stepNumber='4' title='Images' />
            }
        />
    )
}

export const StepFiveButtonAddPortfolio = ({callback,value,stepOneValue,stepTwoValue,stepThreeValue,stepFourValue,callbackStep}:StepProps) => {
  
    const [questions,setQuestions] = useState(value);
    

    useEffect(() => {
        setQuestions(value)
    }, [value])

    const [showAskedQuestions,setShowAskedQuestions] = useState(false);
    

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
                {
                    solve: 'Change skills',
                    text: stepThreeValue.join(', '),
                    onSolveClick: () => {callbackStep(3)}
                },
                {
                    solve: 'Change images',
                    text: `${stepFourValue.length} images`,
                    onSolveClick: () => {callbackStep(4)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                   <div>
                        <div className={styles.border_item}>
                            <Typography variant='body4'>Frequently Asked Questions</Typography>
                            <SwitchButton callback={(item) => {setShowAskedQuestions(item)}} width='44px' height='24px' />
                        </div>
                        <DynamicPadding desktop='20px' mobile='10px'/>
                        {showAskedQuestions && questions.map((item,index) => <FaqItem index={index} title={item.question} text={item.answer} />)}

                   </div>
                } stepNumber='5' title='FAQ' />
            }
        />
    )
}

export const StepSixButtonAddPortfolio = ({callback,value,stepOneValue,stepTwoValue,stepThreeValue,stepFiveValue,stepFourValue,callbackStep}:StepProps) => {

    const [activeSelection,setActiveSelection] = useState(value);
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
                {
                    solve: 'Change skills',
                    text: stepThreeValue.join(', '),
                    onSolveClick: () => {callbackStep(3)}
                },
                {
                    solve: 'Change images',
                    text: `${stepFourValue.length} images`,
                    onSolveClick: () => {callbackStep(4)}
                },
                {
                    solve: 'Change FAQ',
                    text: `${stepFiveValue.length} FAQs`,
                    onSolveClick: () => {callbackStep(5)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <div className='gap_20'>
                        <StepSixComponent onClick={(item) => {setActiveSelection(item);callback(item)}} activeSelection={activeSelection} icon={<AppColor.internal />} title={'Internal project'} />
                        <StepSixComponent onClick={(item) => {setActiveSelection(item);callback(item)}} activeSelection={activeSelection} icon={<AppColor.external />} title={'External project'} />
                    </div>
                } stepNumber='6' title='Project design' />
                } 
            />
    )
}

const StepSixComponent = ({icon,title,onClick,activeSelection}) => {
    return (
        <div style={activeSelection == title ? {backgroundColor: '#F5F5F5'} : {}} onClick={() => {onClick(title)}} className={`${styles.step_six_component} cursor`}>
            <div className={styles.abs_info}>
                <InfoBox />
            </div>
            {icon}
            <Typography variant='body5'>{title}</Typography>
        </div>
    )
}


export const StepSevenButtonAddPortfolio = ({callback,value,stepOneValue,stepTwoValue,stepSixValue,stepThreeValue,stepFiveValue,stepFourValue,callbackStep}:StepProps) => {

    const [activeSelection,setActiveSelection] = useState(value);
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
                {
                    solve: 'Change skills',
                    text: stepThreeValue.join(', '),
                    onSolveClick: () => {callbackStep(3)}
                },
                {
                    solve: 'Change images',
                    text: `${stepFourValue.length} images`,
                    onSolveClick: () => {callbackStep(4)}
                },
                {
                    solve: 'Change FAQ',
                    text: `${stepFiveValue.length} questions`,
                    onSolveClick: () => {callbackStep(5)}
                },
                {
                    solve: 'Change project design',
                    text: `${stepSixValue}`,
                    onSolveClick: () => {callbackStep(6)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <StepSevenComponent />
                } stepNumber='7' title='Completed project' />
                } 
            />
    )
}


export const StepFinalPortfolio = ({callback,value,stepOneValue,stepTwoValue,stepSixValue,stepThreeValue,stepFiveValue,stepFourValue,callbackStep}:StepProps) => {
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
            {
                solve: 'Change skills',
                text: stepThreeValue.join(', '),
                onSolveClick: () => {callbackStep(3)}
            },
            {
                solve: 'Change images',
                text: `${stepFourValue.length} images`,
                onSolveClick: () => {callbackStep(4)}
            },
            {
                solve: 'Change FAQ',
                text: `${stepFiveValue.length} questions`,
                onSolveClick: () => {callbackStep(5)}
            },
            {
                solve: 'Change project design',
                text: `${stepSixValue}`,
                onSolveClick: () => {callbackStep(6)}
            },
            {
                solve: 'Change completed project',
                text: `$100`,
                onSolveClick: () => {callbackStep(7)}
            },
        ]}
        solvingNode={
           <></>
            } 
        />
    )
}


const StepSevenComponent = () => {


    return (
        <div className={styles.seven_component}>
            <StepSevenComponentChoose firstItem={true} />
            <HorizontalLine />
            <InputCommon padding='16px 50px' rightPadding={40} callback={() => {}} placeholder='Search' borderRadius='0px' boxShadowNone={true} icon={<AppColor.search />} />
            <HorizontalLine />

            <div className={styles.scroll_seven}>
                <DynamicPadding desktop='20px' mobile='15px' />
                <div className={styles.seven_padding}>
                        <Typography textLineHeight='1' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                        Services
                        </Typography>
                </div>
                <DynamicPadding desktop='20px' mobile='15px' />
                <StepSevenComponentChoose />
                <StepSevenComponentChoose />
                <StepSevenComponentChoose />
    
                <DynamicPadding desktop='20px' mobile='15px' />
                <div className={styles.seven_padding}>
                        <Typography textLineHeight='1' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                        Orders
                        </Typography>
                </div>
                <DynamicPadding desktop='20px' mobile='15px' />
                <StepSevenComponentChoose />
                <StepSevenComponentChoose />
                <StepSevenComponentChoose />
            </div>

        </div>
    )
}


const StepSevenComponentChoose = ({firstItem}: {firstItem?: boolean}) => {
    return (
        <div style={firstItem ? {backgroundColor: 'transparent'} : {}} className={styles.seven_choose_item}>
            <img src={fakeUserConstant.image} width={'38px'} height={'38px'} alt="" />

            <div className={styles.flex_column}>
                <Typography variant='body4' fontWeight='500'>Logo by sample in vector in maximum quality </Typography>
                <div className='gap_5'>
                    <Typography variant='body5' className={styles.hover_text}>A. Markevych</Typography>
                    <Typography variant='body5' className={styles.hover_text}>• 16 Oct - 25 Nov (39 days)</Typography>
                </div>
            </div>

            <div className={'gap_10'} style={{marginLeft: 'auto'}}>
                <Typography variant='subtitle' fontWeight='500'>$100</Typography>
                <AppColor.boxIcon />
                <AppColor.flag />
            </div>
        </div>
    )
}

type FagItemProps = {
    title: string;
    text: string;
    index: number;
}
const FaqItem = ({text,title,index}:FagItemProps) => {
    return (
        <div>
            {index != 0 && <SizeBox height='20px' />}
            <div className={styles.faq_item}>
                <AppColor.arrowFour />
    
                <div>
                    <Typography variant='body4' fontWeight='500'>{title}</Typography>
                    <DynamicPadding desktop='15px' mobile='10px'/>
                    <Typography variant='body4'>{text}</Typography>
                </div>
    
                <div className='gap_10'>
                    <AppColor.close width={'16px'} height={'16px'} fill={AppColor.red} />
                    <AppColor.edit fill={AppColor.text}/>
                </div>
            </div>
            <DynamicPadding desktop='20px' mobile='10px'/>
            <HorizontalLine />
        </div>
    )
}
type SelectItemSixProps = {
    text: string;
    activeText: string;
    callback: (item:string) => void;
}
export const SelectItemSix = ({activeText,callback,text}:SelectItemSixProps) => {
    return (
        <div style={{border: activeText == text ? `1px solid ${AppColor.orange}` : '1px solid transparent'}} onClick={() => {callback(text)}} className={`${styles.select_six} cursor`}>
            <Typography variant='body4' fontWeight='500' color={activeText == text ? AppColor.orange : AppColor.text}>
                {text}
            </Typography>
        </div>
    )
}

type SelectItemFiveProps = {
    text: string;
    callback: (item:boolean) => void;
    initValue: boolean;
}
const SelectItemFive = ({callback,initValue,text}:SelectItemFiveProps) => {
    const [isSelected,setIsSelected] = useState(initValue);
    return (
        <div className='gap_10'>
            <MyCheckbox width='20px' height='20px' basicValue={initValue} callback={(item) => {
                callback(item);
                }} />
            <Typography variant='body4' fontWeight={initValue ? '500' : '400'}>
                {text}
            </Typography>
        </div>
    )
}

type StepThreeItemProps = {
    icon: React.ReactNode;
    text: string;
    activeItem: string;
    callback: (item:string) => void;
}
const StepThreeItem = ({activeItem,callback,icon,text}:StepThreeItemProps) => {
    return (
        <div style={activeItem == text ? {backgroundColor: AppColor.white} : {}} onClick={() => {callback(text)}} 
        className={`${styles.step_three} cursor`}> 
            <div className={styles.info_absolute}>
                <InfoBox />
            </div>
            {icon}
            <Typography variant='body5'>{text}</Typography>
        </div>
    )
}