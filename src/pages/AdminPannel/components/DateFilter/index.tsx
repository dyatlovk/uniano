
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import ButtonChooseList from '@common/components/ButtonChooseList/index';
import AppColor from '@common/styles/variables-static';

const DateFilter = () => {

    return (
      <div className={styles.wrapper_date}>
           <div className='desktop'>
                <Typography variant='body4' color={AppColor.transparentBlack}><span style={{color: AppColor.text,fontWeight: '500'}}>Data</span> 01 Mar 2021 - 02 Mar 2021</Typography>
           </div>
           <div className={styles.desktop_details}>
                <ButtonChooseList buttonPadding='3px 14px' gap='10px' buttons={[
                    'Day', 'Week', 'Month', 'Year', 'All Time'
                ]} initValue='Day' callback={() => {}}/>
                <div style={{cursor: 'pointer'}}><AppColor.calendar /></div>
           </div>
           <div className='mobile gap_5'>
               <AppColor.calendar />
               <Typography variant='body4' color={AppColor.text}>10/29/22 - 11/29/22</Typography>
           </div>
      </div>
    );
};

export default DateFilter;