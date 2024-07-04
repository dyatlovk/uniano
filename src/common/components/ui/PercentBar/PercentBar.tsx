import styles from './styles.module.scss';

type PercentBarProps = {
    color?: string;
    currentPercent: number;
    backgroundColor?: string;
    width?: string;
    height?: string;
}
const PercentBar = ({color,currentPercent,backgroundColor,width,height}:PercentBarProps) => {
    
    return (
      <div style={{width: width,backgroundColor: backgroundColor,height: height}} className={styles.bar_wrapper}>
           <div style={{width: `${currentPercent}%`,backgroundColor: color}} className={styles.bar}></div>
      </div>
    );
};

export default PercentBar;