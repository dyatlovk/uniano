
import AppColor from '@common/styles/variables-static';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';
import { useState } from 'react';

const BigFilter = () => {

    const [filters,setFilters] = useState<string[]>(['Offer']);
    return (
      <div className={`${styles.mobile_padding}`}>
           <div className={styles.grid_10}>
                {filters.map(item => <AddedFilterItem title={item}/>)}

               <span onClick={() => {setFilters([])}}> <Typography className='cursor' variant='body5' fontWeight='500' color={AppColor.transparentBlack}>Reset all</Typography></span>
           </div>

           <div className={styles.filters_text}>
                <div className='gap_5'>
                    <AppColor.filter />
                    <Typography textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                    Filters
                    </Typography>
                </div>
                <div className='gap_5'>
                    <AppColor.recent />
                    <Typography textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                    Most recent
                    </Typography>
                </div>
           </div>
      </div>
    );
};

const AddedFilterItem = ({title}) => {
    return (
        <div className={`${styles.add_filter} cursor`}>
            <Typography variant='body5' color={AppColor.orange}>{title}</Typography>
            <AppColor.close fill={AppColor.orange} />
        </div>
    )
}

export default BigFilter;