
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import { useState } from 'react';
import ModalCenterBasic from '../../ModalPopUps/ModalCenter/components/ModalCenterBasic';
import { StepItem, StepItemSolving } from '../../StepsOfPreparing';
import InputCommon from '../inputs/InputCommon';
import DynamicPadding from '../DynamicPadding';
import MyButtonTransparent from '../MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '../MyButton/variants/MyButtonOrange';
import {StepFiveButtonAdd, StepFourButtonAdd, StepOneButtonAdd,StepSevenButtonAdd,StepSixButtonAdd,StepThreeButtonAdd,StepTwoButtonAdd} from './Steps';



const AddMissionButton = () => {

    const [stepOneText,setTextOneStep] = useState('');
    const [stepTwoText,setStepTwoText] = useState('');
    const [stepThree,setStepThree] = useState('');
    const [stepFour,setStepFour] = useState('');
    const [activeStep,setActiveStep] = useState(1);
    const [stepFive,setStepFive] = useState('');
    const [stepSix,setStepSix] = useState('');

    
    
    const mapsItem = {
        1: <StepOneButtonAdd callbackStep={() => {}} value={stepOneText} callback={(item) => {setTextOneStep(item)}} />,
        2: <StepTwoButtonAdd callbackStep={(item) => {setActiveStep(item)}} stepOneValue={stepOneText} value={stepTwoText} callback={(item) => {setStepTwoText(item)}} />,
        
        3: <StepThreeButtonAdd callbackStep={(item) => {setActiveStep(item)}} value={stepThree} stepOneValue={stepOneText}
        stepTwoValue={stepTwoText}
        callback={(item) => {setStepThree(item)}} />,
        
        4: <StepFourButtonAdd callbackStep={(item) => {setActiveStep(item)}} value={stepFour} stepOneValue={stepOneText}
        stepTwoValue={stepTwoText} stepThreeValue={stepThree}
        callback={(item) => {setStepFour(item)}}/>,

        5: <StepFiveButtonAdd callbackStep={(item) => {setActiveStep(item)}} stepOneValue={stepOneText}
        stepTwoValue={stepTwoText} stepThreeValue={stepThree} stepFourValue={stepFour}
        value={stepFive} 
        callback={(item) => {setStepFive(item)}}/>,

        6: <StepSixButtonAdd callbackStep={(item) => {setActiveStep(item)}} stepOneValue={stepOneText}
        stepTwoValue={stepTwoText} stepThreeValue={stepThree} stepFourValue={stepFour} stepFiveValue={stepFive}
        value={stepSix} 
        callback={(item) => {setStepSix(item)}}/>,
        
        7: <StepSevenButtonAdd callbackStep={(item) => {setActiveStep(item)}} stepOneValue={stepOneText}
        stepTwoValue={stepTwoText} stepThreeValue={stepThree} stepFourValue={stepFour} stepFiveValue={stepFive} stepSixValue={stepSix}
        value={stepSix} 
        callback={(item) => {setStepSix(item)}}/>
    }

    const [showModal,setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => {setShowModal(true)}} className={styles.orange_plus}>
                <AppColor.plus width={20} height={20} stroke='white' />
             </div>
             {showModal && <ModalCenterBasic desktopMinWidth='620px' bottomPartPadding='30px' callbackClose={() => {setShowModal(false)}} title='Add mission'
                nodesBeforeClose={[<AppColor.template />]} 
             >

                {mapsItem[activeStep] || null}

                 <DynamicPadding desktop='30px' mobile='20px'/>

                    <div className={styles.flex_end}>
                        <MyButtonTransparent onClick={() => {
                            if(activeStep >= 1) {
                                setActiveStep(prev => prev-1)
                            } else {
                                setShowModal(false);
                            }
                        }} fontWeight='500' textTransform='uppercase'>
                        Cancel
                        </MyButtonTransparent>
                        <MyButtonOrange onClick={() => {setActiveStep(prev => prev+1)}} fontWeight='500' textTransform='uppercase'>
                        Next
                        </MyButtonOrange>
                    </div>
                </ModalCenterBasic>}
        </>
    );
};


export type StepProps = {
    callback: (item: string) => void;
    value: string;
    stepOneValue?: string;
    stepTwoValue?: string;
    stepThreeValue?: string;
    stepFourValue?: string;
    stepFiveValue?: string;
    stepSixValue?: string;
    stepSevenValue?: string;
    stepEightValue?: string;
    callbackStep: (item:number) => void;
}


export default AddMissionButton;