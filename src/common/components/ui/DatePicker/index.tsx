
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';

const DatePicker = () => {

    return (
      <div className='gap_5 cursor'>
        <AppColor.calendar />
        <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>10/29/22 - 11/29/22</Typography>
      </div>
    );
};

export default DatePicker;