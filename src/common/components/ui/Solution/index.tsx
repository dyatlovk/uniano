
import AppColor from '@common/styles/variables-static';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';

const Solution = () => {

    return (
      <div className={styles.solution}>
            <Typography variant='body3' fontWeight='500' color={AppColor.green}>Solution</Typography>
            <AppColor.greenCheckTrue/>
      </div>
    );
};

export default Solution;