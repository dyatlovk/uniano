
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

const AdminFAQ = () => {
    const [selectedCategory,setSelectedCategory] = useState('Development');
    return (    
      <div className={styles.wrapper}>
           <div className={styles.scroll_bar}>
                <div className={styles.top_gap_30_15}>
                <div className='mobile'>
                        <SizeBox height='5px' width='20px'/>
                    </div>
                    <Typography style={{whiteSpace: 'nowrap'}} variant='body4'>Getting Started</Typography>
                    <Typography style={{whiteSpace: 'nowrap'}} variant='body4'>Subscription</Typography>
                    <Typography style={{whiteSpace: 'nowrap'}} variant='body4'>Projects</Typography>
                    <Typography style={{whiteSpace: 'nowrap'}} variant='body4'>Crowdfreelance</Typography>
                    <Typography style={{whiteSpace: 'nowrap'}} variant='body4'>Partnership</Typography>
                    <Typography style={{whiteSpace: 'nowrap'}} variant='body4'>Gamification</Typography>
                        <div className='mobile'>
                        <SizeBox height='5px' width='20px'/>
                        </div>
                </div>
           </div>

           <div className={styles.mobile_padding}>
            <DynamicPadding />
    
               <div className='center_mobile_text'>
                <div className={styles.title_plus}>
                    <div><Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>FAQ</Typography></div>
                    <div className={styles.orange}>
                        <AppColor.plus stroke='white' width={'fit-content'}/>
                    </div>
                </div>
               </div>
    
               <DynamicPadding />
    
               <div className={styles.top_part}>
                    <div className={styles.buttons_top}>
                        <div className='gap_10'>
                            <Typography variant='body4'>Create</Typography>
                            <SwitchButton startValue={true} width='44px' height='24px'/>
                        </div>
                        <div className='gap_10'>
                            <Typography variant='body4'>Active</Typography>
                            <SwitchButton startValue={true} width='44px' height='24px'/>
                        </div>
                    </div>
    
                    <Typography variant='body4' fontWeight='500' textTransform='uppercase' color={AppColor.transparentBlack}>FAQ settings</Typography>
               </div>
    
               <DynamicPadding />
    
               <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
    
               <DynamicPadding />

               <DetailsTablePostsAdmin
                    information={[
                        {
                            user: fakeUserConstant,
                            post: 'New to Uniano, Need assistance ',
                            date: 'Feb 26, 2021 16:32 ',
                            category: 'Registration',
                            creator: fakeUserConstant,
                            replies: '531',
                            status: 'Active'
                        }
                    ]}
               />
                <DynamicPadding />
           </div>
      </div>
    );
};

export default AdminFAQ;