
import { StepItemSolving, StepsOfPreparingEndSolving } from '@common/components/StepsOfPreparing/index';
import { StepProps } from '..';
import InputCommon from '../../inputs/InputCommon';
import styles from './style.module.scss';
import BigInput, { BigInputOutside } from '../../BigInput';
import Typography from '../../Typography/Typography';
import InfoBox from '../../InfoBox';
import AppColor from '@common/styles/variables-static';
import { useEffect, useState } from 'react';
import DatePicker from '../../DatePicker';
import MyCheckbox from '../../inputs/Checkbox';

export const StepOneButtonAdd = ({callback,value}:StepProps) => {

    return (
        <StepItemSolving solveNode={
            <InputCommon initText={value} padding='15px 30px' width='100%' callback={(item) => {callback(item)}} placeholder='Title' />
        } stepNumber='1' title={value} />
    );
};

export const StepTwoButtonAdd = ({callback,value,stepOneValue,callbackStep}:StepProps) => {
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

export const StepThreeButtonAdd = ({callback,value,stepOneValue,stepTwoValue,callbackStep}:StepProps) => {

    const [active,setActive] = useState(value);
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
                    <div className='gap_20'>
                        <StepThreeItem 
                            icon={<AppColor.repeat />}
                            activeItem={active}
                            callback={(item) => {setActive(item);callback(item)}}
                            text='Repeatable'
                        />
                        <StepThreeItem 
                            icon={<AppColor.noRepeat />}
                            activeItem={active}
                            callback={(item) => {setActive(item);callback(item)}}
                            text='Not repeatable'
                        />
                    </div>
                } stepNumber='3' title='Repeatability per user' />
            }
        />
    )
}

export const StepFourButtonAdd = ({callback,value,stepOneValue,stepTwoValue,stepThreeValue,callbackStep}:StepProps) => {
    useEffect(() => {
        callback('10/29/22 - 11/29/22')
    },[])
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
                    solve: 'Change repeatability',
                    text: stepThreeValue,
                    afterTextNode: stepThreeValue == 'Repeatable' ? <AppColor.repeat width={'16px'} height={'16px'}/> : <AppColor.noRepeat width={'16px'} height={'16px'} />,
                    onSolveClick: () => {callbackStep(3)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <DatePicker />
                } stepNumber='4' title='Time period' />
            }
        />
    )
}

export const StepFiveButtonAdd = ({callback,value,stepOneValue,stepTwoValue,stepThreeValue,stepFourValue,callbackStep}:StepProps) => {
    const [tmpArray,setTmpArray] = useState(value.length > 0 ? value.split(',') : []);

    useEffect(() => {
        return () => {
            const stringNew = tmpArray.join(', ')
            callback(stringNew);     
        }   
    },[tmpArray])

    
    

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
                    solve: 'Change repeatability',
                    text: stepThreeValue,
                    afterTextNode: stepThreeValue == 'Repeatable' ? <AppColor.repeat width={'16px'} height={'16px'}/> : <AppColor.noRepeat width={'16px'} height={'16px'} />,
                    onSolveClick: () => {callbackStep(3)}
                },
                {
                    solve: 'Change time period',
                    text: stepFourValue,
                    onSolveClick: () => {callbackStep(4)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <div className='gap_20'>
                        <SelectItemFive 
                            callback={(item) => {
                                if(item) {
                                    if(!tmpArray.includes('Free') || !tmpArray.includes(' Free')) {
                                        setTmpArray(prev => [...prev,'Free'])
                                    }
                                } else {
                                    if(tmpArray.includes('Free') || tmpArray.includes(' Free')) {
                                        setTmpArray(prev => prev.filter(tmp => tmp != 'Free'))
                                    }
                                }
                            }}
                            initValue={tmpArray.includes('Free') || tmpArray.includes(' Free')}
                            text='Free (default)'
                        />
                        <SelectItemFive 
                            callback={(item) => {
                                if(item) {
                                    if(!tmpArray.includes('Pro') || !tmpArray.includes(' Pro')) {
                                        setTmpArray(prev => [...prev,'Pro'])
                                    }
                                } else {
                                    if(tmpArray.includes('Pro') || tmpArray.includes(' Pro')) {
                                        setTmpArray(prev => prev.filter(tmp => tmp != 'Pro'))
                                    }
                                }
                            }}
                            initValue={tmpArray.includes('Pro') || tmpArray.includes(' Pro')}
                            text='Pro'
                        />
                        <SelectItemFive 
                            callback={(item) => {
                                if(item) {
                                    if(!tmpArray.includes('Ultimate') || !tmpArray.includes(' Ultimate')) {
                                        setTmpArray(prev => [...prev,'Ultimate'])
                                    }
                                } else {
                                    if(tmpArray.includes('Ultimate') || tmpArray.includes(' Ultimate')) {
                                        setTmpArray(prev => prev.filter(tmp => tmp != 'Ultimate'))
                                    }
                                }
                            }}
                            initValue={tmpArray.includes('Ultimate') || tmpArray.includes(' Ultimate')}
                            text='Ultimate'
                        />
                    </div>
                } stepNumber='5' title='Subscriptions' />
            }
        />
    )
}

export const StepSixButtonAdd = ({callback,value,stepOneValue,stepTwoValue,stepThreeValue,stepFiveValue,stepFourValue,callbackStep}:StepProps) => {

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
                    solve: 'Change repeatability',
                    text: stepThreeValue,
                    afterTextNode: stepThreeValue == 'Repeatable' ? <AppColor.repeat width={'16px'} height={'16px'}/> : <AppColor.noRepeat width={'16px'} height={'16px'} />,
                    onSolveClick: () => {callbackStep(3)}
                },
                {
                    solve: 'Change time period',
                    text: stepFourValue,
                    onSolveClick: () => {callbackStep(4)}
                },
                {
                    solve: 'Change subscriptions',
                    text: stepFiveValue,
                    onSolveClick: () => {callbackStep(5)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <div className='gap_20'>
                        <InputCommon padding='15px 30px' textAlingCenter={true} callback={(item) => {setActiveSelection(item);callback(item)}}
                            placeholder='Enter Manually' type='number' width='100%'
                        />
                        <SelectItemSix activeText={activeSelection} callback={(item) => {setActiveSelection(item);callback(item)}} 
                            text='5'
                        />
                        <SelectItemSix activeText={activeSelection} callback={(item) => {setActiveSelection(item);callback(item)}} 
                            text='10'
                        />
                        <SelectItemSix activeText={activeSelection} callback={(item) => {setActiveSelection(item);callback(item)}} 
                            text='20'
                        />
                    </div>
                } stepNumber='6' title='Limits' />
                } 
            />
    )
}


export const StepSevenButtonAdd = ({callback,value,stepOneValue,stepTwoValue,stepSixValue,stepThreeValue,stepFiveValue,stepFourValue,callbackStep}:StepProps) => {

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
                    solve: 'Change repeatability',
                    text: stepThreeValue,
                    afterTextNode: stepThreeValue == 'Repeatable' ? <AppColor.repeat width={'16px'} height={'16px'}/> : <AppColor.noRepeat width={'16px'} height={'16px'} />,
                    onSolveClick: () => {callbackStep(3)}
                },
                {
                    solve: 'Change time period',
                    text: stepFourValue,
                    onSolveClick: () => {callbackStep(4)}
                },
                {
                    solve: 'Change subscriptions',
                    text: stepFiveValue,
                    onSolveClick: () => {callbackStep(5)}
                },
                {
                    solve: 'Change limit',
                    text: `${stepSixValue} - ${stepSixValue} limit`,
                    onSolveClick: () => {callbackStep(6)}
                },
            ]}
            solvingNode={
                <StepItemSolving solveNode={
                    <div className='gap_20'>
                      
                    </div>
                } stepNumber='7' title='Purpose' />
                } 
            />
    )
}

type SelectItemSixProps = {
    text: string;
    activeText: string;
    callback: (item:string) => void;
}
const SelectItemSix = ({activeText,callback,text}:SelectItemSixProps) => {
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