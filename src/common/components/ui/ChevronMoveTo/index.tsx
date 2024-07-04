
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';
import { useState } from 'react';

type ChevronMoveToProps = {
    variant: 'right' | 'left';
    cancel?: boolean;
    title: string;
    preview?: boolean
    text: string;
    onClick: () => void;
    disabled?: boolean;
}
const ChevronMoveTo = ({preview,variant,onClick,text,title,disabled,cancel=false}:ChevronMoveToProps) => {

    switch(variant) {
        case 'right': 
            return <ChevronMoveToRight preview={preview} cancel={cancel} disabled={disabled} onClick={onClick} text={text} title={title} variant='right'/>
        case 'left':
            return <ChevronMoveToLeft preview={preview} cancel={cancel} disabled={disabled} onClick={onClick} text={text} title={title} variant='right'/>
        }
};

const ChevronMoveToRight = ({variant,onClick,text,title,disabled,cancel,preview}:ChevronMoveToProps) => {

    const [hovered, setHovered] = useState(false);

    return (
        <div 
        style={{opacity: disabled ? 0.5 : 1}} className={styles.wrapper}>
            <div className={styles.text + ' ' + styles.right_text}> 
                <Typography variant='body4' fontWeight='500' textTransform='uppercase'>{title}</Typography>
                <Typography variant='body5'>{text}</Typography>
            </div>
            <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            
            style={disabled ? {backgroundColor: 'white'} : {}} onClick={!disabled ? onClick : () => {}} className={`${styles.chevron} cursor`}>
                {cancel
                ? !hovered
                    ? <AppColor.close fill={AppColor.text} width={'17px'} height={'17px'}/>
                    : <AppColor.close fill={'white'} width={'17px'} height={'17px'}/>
                : preview 
                ? !hovered
                    ? <AppColor.preview fill={AppColor.transparentBlack} width={'24px'} />
                    : <AppColor.preview fill='white' width={'24px'} />
                : hovered
                ? <AppColor.longRightWhite width={'24px'} />
                : <AppColor.longChevronRight width={'24px'} />}
            </div>
        </div>
    )
}

const ChevronMoveToLeft = ({variant,onClick,text,title,disabled,cancel}:ChevronMoveToProps) => {

    const [hovered, setHovered] = useState(false);
    
    return (
        <div 

        style={{opacity: disabled ? 0.5 : 1}} className={styles.wrapper}>
            <div 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            
            style={disabled ? {backgroundColor: 'white',order:1} : {order:1}} onClick={!disabled ? onClick : () => {}} className={`${styles.chevron} cursor`}>
                {cancel
                ? <AppColor.close fill={AppColor.text} width={'17px'} height={'17px'}/>
                : hovered 
                ? <AppColor.longLeftWhite width={'24px'} />
                : <AppColor.longChevronLeft width={'24px'} />}
            </div>
            <div className={styles.text + ' ' + styles.left_text}> 
                <Typography variant='body4' fontWeight='500' textTransform='uppercase'>{title}</Typography>
                <Typography variant='body5'>{text}</Typography>
            </div>
        </div>
    )
}

export default ChevronMoveTo;