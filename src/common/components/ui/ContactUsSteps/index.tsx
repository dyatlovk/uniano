
import { useState } from 'react';
import styles from './style.module.scss';
import { StepOneContactUs, StepThreeContactUs, StepTwoContactUs } from './Steps';

const ContactUsSteps = () => {

    const [stepOneText,setTextOneStep] = useState('');
    const [stepTwoText,setStepTwoText] = useState('');
    const [stepThree,setStepThree] = useState<string[]>([]);
    const [stepFour,setStepFour] = useState([]);
    const [activeStep,setActiveStep] = useState(1);
    const [stepFive,setStepFive] = useState<{question: string; answer: string}[]>([]);
    const [stepSix,setStepSix] = useState('');

    const mapsItem = {
        1: <StepOneContactUs callbackStep={(item) => {setActiveStep(item)}} value={stepOneText} callback={(item) => {setTextOneStep(item)}} />,
        
        2: <StepTwoContactUs callbackStep={(item) => {setActiveStep(item)}} stepOneValue={stepOneText} value={stepTwoText} callback={(item) => {setStepTwoText(item)}} />,
        
        3: <StepThreeContactUs callbackStep={(item) => {setActiveStep(item)}} value={stepThree} stepOneValue={stepOneText}
        stepTwoValue={stepTwoText}
        callback={(item) => {setStepThree(item)}} />,
    }

    return (
      <div>
           {mapsItem[activeStep] || null}
      </div>
    );
};

export default ContactUsSteps;