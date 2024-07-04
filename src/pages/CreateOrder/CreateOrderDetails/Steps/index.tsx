
import { StepItemSolving, StepsOfPreparingEndSolving } from '@common/components/StepsOfPreparing/index';
import styles from './style.module.scss';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';

type StepProps = {
    callback: (item: string) => void;
    value: string;
    stepOneValue?: string;
    stepTwoValue?: string;
    stepThreeValue?: string;
    callbackStep: (item:number) => void;
}

const StepOneOrder = ({callback,value,stepOneValue,callbackStep}:StepProps) => {

    return (
      <>
        <StepItemSolving solveNode={
            <InputCommon initText={value} padding='15px 30px' width='100%' callback={(item) => {callback(item)}} placeholder='Title' />
        } stepNumber='1' title={'Title'} />
      </>
    );
};

export const StepTwoOrder = ({callback,value,stepOneValue,callbackStep}:StepProps) => {

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
                <InputCommon initText={value} padding='15px 30px' width='100%' callback={(item) => {callback(item)}} placeholder='Category' />
            } stepNumber='2' title='Category' />
        }
    />
    );
};


export const StepThreeOrder = ({callback,value,stepOneValue,stepTwoValue,callbackStep}:StepProps) => {

    return (
        <StepsOfPreparingEndSolving 
        elements={[
            {
                solve: 'Change title',
                text: stepOneValue,
                onSolveClick: () => {callbackStep(1)}
            },
            {
                solve: 'Change category',
                text: stepTwoValue,
                onSolveClick: () => {callbackStep(2)}
            },
        ]}
        solvingNode={
            <StepItemSolving drawLine={false}  solveNode={
                <InputCommon initText={value} padding='15px 30px' width='100%' callback={(item) => {callback(item)}} placeholder='Skills' />
            } stepNumber='3' title='Skills' />
        }
    />
    );
};

export const StepFourOrder = ({callback,value,stepOneValue,stepThreeValue,stepTwoValue,callbackStep}:StepProps) => {

    return (
        <StepsOfPreparingEndSolving 
        elements={[
            {
                solve: 'Change title',
                text: stepOneValue,
                onSolveClick: () => {callbackStep(1)}
            },
            {
                solve: 'Change category',
                text: stepTwoValue,
                onSolveClick: () => {callbackStep(2)}
            },
            {
                solve: 'Change skills',
                text: stepThreeValue,
                drawLine: false,
                onSolveClick: () => {callbackStep(3)}
            },
        ]}
        solvingNode={
           <></>
        }
    />
    );
};

export default StepOneOrder;