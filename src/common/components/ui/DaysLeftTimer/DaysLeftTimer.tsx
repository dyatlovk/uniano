import Typography, { fontWeight } from "../Typography/Typography";
import { useState,useEffect } from "react";
import styles from './style.module.scss';
type DaysLeftTimerProps = {
    time: Date;
    width?: string;
    height?: string;
    borderRadius?: string;
    dotsWidth?: string;
    dotsHeight?: string;
    fontWeightTextTime?: fontWeight;
}
const DaysLeftTimer = ({time,borderRadius,height,width,dotsHeight,dotsWidth,fontWeightTextTime='500'}: DaysLeftTimerProps) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = time.getTime() - now.getTime();
        if(isNaN(difference)) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        
    
        if (difference <= 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
    
        return { days, hours, minutes, seconds };
    };
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    useEffect(() => {
        const timerInterval = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => {
          clearInterval(timerInterval);
        };
      }, [time]);

    return (
      <div className={styles.timer_wrapper}>
           <span style={{borderRadius: borderRadius,width: width,height:height}} className={styles.timer_box}>
               <div>
                     <Typography fontWeight={fontWeightTextTime ?? '400'} variant="body5">
                         {timeLeft.days}
                     </Typography>
                     <p className={styles.date_text}>Days</p>
               </div>
           </span>
           <div className={styles.timer_dots}>
                <span style={{width: dotsWidth,height:dotsHeight}}></span>
                <span style={{width: dotsWidth,height:dotsHeight}}></span>
           </div>
           <span style={{borderRadius: borderRadius,width: width,height:height}} className={styles.timer_box}>
               <div>
                     <Typography fontWeight={fontWeightTextTime ?? '400'} variant="body5">
                         {timeLeft.hours}
                     </Typography>
                     <p className={styles.date_text}>HR</p>
               </div>
           </span>
           <div className={styles.timer_dots}>
                <span style={{width: dotsWidth,height:dotsHeight}}></span>
                <span style={{width: dotsWidth,height:dotsHeight}}></span>
           </div>
           <span style={{borderRadius: borderRadius,width: width,height:height}} className={styles.timer_box}>
               <div>
                     <Typography fontWeight={fontWeightTextTime  ?? '400'} variant="body5">
                         {timeLeft.minutes}
                     </Typography>
                     <p className={styles.date_text}>min</p>
               </div>
           </span>
           <div className={styles.timer_dots}>
                <span style={{width: dotsWidth,height:dotsHeight}}></span>
                <span style={{width: dotsWidth,height:dotsHeight}}></span>
           </div>
           <span style={{borderRadius: borderRadius,width: width,height:height}} className={styles.timer_box}>
                <div>
                     <Typography fontWeight={fontWeightTextTime ?? '400'} variant="body5">
                         {timeLeft.seconds}
                     </Typography>
                     <p className={styles.date_text}>sec</p>
                </div>
           </span>
      </div>
    );
};

export default DaysLeftTimer;