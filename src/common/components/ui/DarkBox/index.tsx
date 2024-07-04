
import AppColor from '@common/styles/variables-static';
import Typography, { fontWeight } from '../Typography/Typography';
import styles from './style.module.scss';

type DarkBoxProps = {
    text: string;
    fonstSize?: string;
    onClick?: () => void;
    fontWeight?: fontWeight;
    triangleDown?: boolean;
}
const DarkBox = ({onClick,text,fonstSize,fontWeight,triangleDown}:DarkBoxProps) => {

    return (
      <div onClick={() => {
        if(onClick) {
          onClick()
        }
      }} className={styles.dark_box}>
           <Typography textTransform='uppercase' fontSizeStatic={fonstSize ?? '13px'} textLineHeight='1' variant='body4' fontWeight={fontWeight ?? '400'} color='white'>
            {text}
           </Typography>
           {
            triangleDown && <AppColor.trianleDown fill='white' />
           }
      </div>
    );
};

export default DarkBox;