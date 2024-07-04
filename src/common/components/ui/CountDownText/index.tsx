
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';
import AppColor from '@common/styles/variables-static';

type CountDownTextProps = {
    durationInSeconds: number;
    color?: string
}
const CountDownText = ({durationInSeconds,color}:CountDownTextProps) => {
    const [time, setTime] = useState(durationInSeconds);

    useEffect(() => {
      const interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
  
      return () => clearInterval(interval);
    }, [durationInSeconds]);
  
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
  
    return (
      <div>
        <Typography variant='body4' color={color ?? AppColor.text}>{minutes}:{seconds}</Typography>
      </div>
    );
};

export default CountDownText;