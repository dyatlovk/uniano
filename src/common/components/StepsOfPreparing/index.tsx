
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../ui/Typography/Typography';
import SizeBox from '../ui/SizeBox';
import DynamicPadding from '../ui/DynamicPadding';
import React from 'react';

type StepsOfPreparingProps ={
   elements: {
    text: string;
    solve: string; 
   }[];
}
const StepsOfPreparing = ({elements}:StepsOfPreparingProps) => {

    return (
      <div className={styles.steps_grid}>
           {elements.map((item,index) =>
                <StepItem drawLine={elements.length-1 != index} solve={item.solve} text={item.text}/>
            )}
      </div>
    );
};

type StepItemProps = {
    text: string;
    solve: string;
    drawLine: boolean;
    onSolveClick?: () => void;
    afterTextNode?: React.ReactNode;
}
export const StepItem = ({solve,text,drawLine,onSolveClick,afterTextNode}:StepItemProps) => {
    return (
        <div className={styles.step_item}>
            <div className={styles.step_verical_wrapper_solving}>
                <div className={styles.box_true}><AppColor.singTrue width={'14px'} height={'10px'} stroke={AppColor.orange} /></div>
                {drawLine && <div className={styles.vertical_line}></div>}
            </div>
            <div className={styles.solve_part}>
                <SizeBox height='5px'/>
                <div className={styles.text_part}>
                <div className='gap_5'>
                <Typography textLineHeight='1' variant='body4'>{text}</Typography>
                {afterTextNode}
                </div>
                </div>
                <SizeBox height='20px'/>
                <div onClick={onSolveClick} style={{marginLeft: '5px'}} className="gap_10 cursor">
                    <AppColor.edit fill={AppColor.orange} />
                    <Typography variant='body5' className={styles.step_item_hover_text} color={AppColor.orange}>{solve}</Typography>
                </div>
                <DynamicPadding desktop='30px' mobile='20px'/>
            </div>
        </div>
    )
}

type StepItemSolvingProps = {
    title: string;
    stepNumber: string;
    solveNode: React.ReactNode;
    drawLine?: boolean;
    removeHeight?: boolean;
}
export const StepItemSolving = ({solveNode,stepNumber,title,drawLine=true,removeHeight}:StepItemSolvingProps) => {
    return (
        <div className={styles.step_item}>
            <div className={styles.step_verical_wrapper_solving}>
                <div className={styles.box_true}><Typography variant='body4' fontWeight='500'>{stepNumber}</Typography></div>
                <div style={{opacity: drawLine ? '1' : '0'}} className={styles.vertical_line}></div>
            </div>
            <div style={{width: '100%'}}>
                <SizeBox height='5px'/>
                <Typography textLineHeight='1' fontWeight='500' variant='body4'>{title}</Typography>
                <SizeBox height='20px'/>
                {solveNode}
            </div>
        </div>
    )
}


type StepsOfPreparingEndSolvingProps ={
    elements: {
     text: string;
     solve: string; 
     onSolveClick: () => void;
     afterTextNode?: React.ReactNode;
     drawLine?: boolean;
    }[];
    solvingNode: React.ReactNode;
 }
export const StepsOfPreparingEndSolving = ({elements,solvingNode}:StepsOfPreparingEndSolvingProps) => {
 
     return (
       <div className={styles.steps_grid}>
            {elements.map((item,index) =>
                 <StepItem afterTextNode={item.afterTextNode} drawLine={item.drawLine ?? true} solve={item.solve} onSolveClick={item.onSolveClick} text={item.text}/>
             )}
             {solvingNode}
       </div>
     );
 };

export default StepsOfPreparing;