
import AppColor from '@common/styles/variables-static';
import Typography, { fontWeight } from '../Typography/Typography';
import styles from './style.module.scss';
import SizeBox from '../SizeBox';

type TextDottedProps = {
    text: string;
    endNode?: React.ReactNode;
    textEnd?: string;
    startTextColor?: string;
    info?: boolean;
    fontWeightEndText?: fontWeight;
}
const TextDotted = ({endNode,fontWeightEndText,text,textEnd,startTextColor,info}:TextDottedProps) => {
    const colorPass = {
      '--dotsColor': startTextColor ?? AppColor.text,
      display: 'flex',
    }
    return (
      <div style={colorPass} className={styles.wrapper}>
           <Typography color={startTextColor ?? AppColor.text} textLineHeight='0.9' variant='body4'>{text}</Typography>
           <SizeBox width='5px'/>
           {info && <><div className={styles.info_box}><AppColor.info/></div><SizeBox width='5px'/></>}
           <div className={styles.dots}></div>
           <SizeBox width='5px'/>
           {textEnd && <Typography fontWeight={fontWeightEndText ?? '400'} textLineHeight='0.9' variant='body4'>{textEnd}</Typography>}
           {endNode}
      </div>
    );
};

export default TextDotted;