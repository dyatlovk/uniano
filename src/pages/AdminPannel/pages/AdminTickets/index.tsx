
import DetailsTablePostsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTablePostsAdmin/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import styles from './style.module.scss';
import DetailsTableTicketsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableTicketsAdmin/index';

const AdminTickets = () => {
    const [selectedCategory,setSelectedCategory] = useState('Development');
    return (    
      <div className={styles.wrapper}>
           <div className={styles.mobile_padding}>
            <DynamicPadding />
    

               <div className={styles.top_part_flex}>
                    <div className={styles.title_plus}>
                        <div><Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Tickets</Typography></div>
                        <div className={styles.orange}>
                            <AppColor.plus stroke='white' width={'fit-content'}/>
                        </div>
                    </div>
                    <Typography textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                    Tickets settings
                    </Typography>
               </div>
 
    
               <DynamicPadding />
    
               <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
    
               <DynamicPadding />

               <DetailsTableTicketsAdmin
                    information={[
                        {
                            user: fakeUserConstant,
                            date: 'Feb 26, 2021 16:32 ',
                            emails: '30 195',
                            recipients: 'Freelancer',
                            status: 'Scheduled',
                            unsubscribes: '5%'
                        }
                    ]}
               />
                <DynamicPadding />
           </div>
      </div>
    );
};

export default AdminTickets;