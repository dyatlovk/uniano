
import AppColor from '@common/styles/variables-static';
import PercentBar from '../ui/PercentBar/PercentBar';
import Typography from '../ui/Typography/Typography';
import styles from './style.module.scss';

type NavigationBarSelectionProps = {
        allItemsProgress: string[];
        currentItemProgress: string;
}
const NavigationBarSelection = ({allItemsProgress,currentItemProgress}:NavigationBarSelectionProps) => {
    const itemIndex = allItemsProgress.findIndex(item => item === currentItemProgress);
    const percent = currentItemProgress == allItemsProgress[allItemsProgress.length-1] ? 100 : 100/(allItemsProgress.length -1)/2*(itemIndex+1+(itemIndex))
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.mobile}>
                    <Typography variant='body4' color={percent == 100 ? AppColor.orange : 'white'}>{currentItemProgress}</Typography> <AppColor.chevronBottom fill={percent == 100 ? AppColor.orange : 'white'} width={'12px'} height={'6px'}/>
                </div>
                <PercentBar
                    currentPercent={percent}
                    height='15px'
                    backgroundColor={'white'}
                />
                <div className={styles.titles_wrapper + " " + styles.desktop}>
                    {allItemsProgress.map((item,index) =>
                        <Typography variant='body4'
                        color={percent == 100 ? AppColor.orange : index == itemIndex ? 'white' : index < itemIndex ? AppColor.orange : AppColor.transparentWhite}
                        >{item}</Typography>    
                    )}
                </div>
            </div>   
      </div>
    );
};

export default NavigationBarSelection;