
import AppColor from '@common/styles/variables-static';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';

const Urgent = () => {

    return (
      <div className={styles.urgent_wrapper}>
           <Typography fontWeight='400' textTransform='uppercase' fontSizeStatic='12px' color='white' textLineHeight='1'>
           Urgent
           </Typography>
           <div className={styles.attention_red_wrapper}>
                <AppColor.attention />
            </div>
      </div>
    );
};

export default Urgent;