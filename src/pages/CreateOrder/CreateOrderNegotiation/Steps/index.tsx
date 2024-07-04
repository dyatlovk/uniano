
import { StepItemSolving, StepsOfPreparingEndSolving } from '@common/components/StepsOfPreparing/index';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import styles from './style.module.scss';


type StepProps = {
    callback: (item: string) => void;
    value: string;
    stepOneValue?: string;
    stepTwoValue?: string;
    stepThreeValue?: string;
    stepFourValue?: string;
    callbackStep: (item:number) => void;
}


const StepOrderNegotiationOne = ({callback,value,stepOneValue,callbackStep}:StepProps) => {

    return (
        <StepItemSolving solveNode={
            <InputCommon initText={value} padding='15px 30px' width='100%' callback={(item) => {callback(item)}} placeholder='Title' />
        } stepNumber='1' title={'Payment Way'} />
    );
};

export const StepOrderNegotiationTwo = ({callback,value,stepOneValue,callbackStep}:StepProps) => {

    return (
        <StepsOfPreparingEndSolving 
        elements={[
            {
                solve: 'Change payment way',
                text: stepOneValue,
                onSolveClick: () => {callbackStep(1)}
            },
        ]}
        solvingNode={
            <StepItemSolving solveNode={
                <InputCommon initText={value} padding='15px 30px' width='100%' callback={(item) => {callback(item)}} placeholder='Category' />
            } stepNumber='2' title='Details' />
        }
    />
    );
};

export const StepOrderNegotiationThree = ({callback,value,stepOneValue,stepTwoValue,callbackStep}:StepProps) => {

    return (
        <StepsOfPreparingEndSolving 
        elements={[
            {
                solve: 'Change payment way',
                text: stepOneValue,
                onSolveClick: () => {callbackStep(1)}
            },
            {
                solve: 'Change details',
                text: stepTwoValue,
                onSolveClick: () => {callbackStep(2)}
            },
        ]}
        solvingNode={
            <StepItemSolving  solveNode={
                <InputCommon initText={value} padding='15px 30px' width='100%' callback={(item) => {callback(item)}} placeholder='Skills' />
            } stepNumber='3' title='Specification' />
        }
    />
    );
};


export const StepOrderNegotiationFour = ({callback,value,stepOneValue,stepFourValue,stepThreeValue,stepTwoValue,callbackStep}:StepProps) => {

    return (
        <StepsOfPreparingEndSolving 
        elements={[
            {
                solve: 'Change payment way',
                text: stepOneValue,
                onSolveClick: () => {callbackStep(1)}
            },
            {
                solve: 'Change details',
                text: stepTwoValue,
                onSolveClick: () => {callbackStep(2)}
            },
            {
                solve: 'Change specification',
                text: stepThreeValue,
                onSolveClick: () => {callbackStep(3)}
            },
        ]}
        solvingNode={
            <StepItemSolving drawLine={false}  solveNode={
                <InputCommon initText={value} padding='15px 30px' width='100%' callback={(item) => {callback(item)}} placeholder='Skills' />
            } stepNumber='4' title='Documents to sign' />
        }
    />
    );
};


export const StepOrderNegotiationFive = ({callback,value,stepFourValue,stepThreeValue,stepTwoValue,stepOneValue,callbackStep}:StepProps) => {

    return (
        <StepsOfPreparingEndSolving 
        elements={[
            {
                solve: 'Change payment way',
                text: stepOneValue,
                onSolveClick: () => {callbackStep(1)}
            },
            {
                solve: 'Change details',
                text: stepTwoValue,
                onSolveClick: () => {callbackStep(2)}
            },
            {
                solve: 'Change specification',
                text: stepThreeValue,
                onSolveClick: () => {callbackStep(3)}
            },
            {
                solve: 'Change documents to sign',
                text: stepFourValue,
                onSolveClick: () => {callbackStep(4)},
                drawLine: false,
            },
           
        ]}
        solvingNode={
           <></>
        }
    />
    );
};


export default StepOrderNegotiationOne;