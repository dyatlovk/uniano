
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import styles from './style.module.scss';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { fakeUserConstant } from '@common/models/user';
import SizeBox from '@common/components/ui/SizeBox/index';
import DropdownNumber from '@common/components/ui/SearchFilterBar/components/DropdownNumber/index';

const topFilters = [
    'Notifications','Messages', 'Required Actions'
]
const SoundPopUp = () => {

    const [filterTop,setFilterTop] = useState('Roadmap');

    return (
      <div className={styles.news_wrapper}>
            <div className={styles.top_filter}>
                {topFilters.map(item => 
                   <div className={`${styles.filter_item} cursor`} onClick={() => {setFilterTop(item)}}>
                     <Typography variant='body4' fontWeight={item == filterTop ? '500' : '400'}
                        color={item == filterTop ? AppColor.orange : AppColor.text}>{item}</Typography>    
                   </div>
                )}
            </div>
  
            <div className={styles.mid_grid}>
                        <NotifictaionUser /> 
                        <NotificationCommon />
                        <NotificationCommon />
            </div> 
         
            <div className={styles.bottom_part}>
              <div className={styles.bottom_part_padding}>
                  <AppColor.doubleTrue />
                  <div className='gap_5'>
                        <div className='cursor'>
                            <Typography variant='body5' color={AppColor.transparentBlack} fontWeight='500'>
                            Mark all as read
                            </Typography>
                        </div>
                        <div className='cursor'>
                            <Typography variant='body5' color={AppColor.orange} fontWeight='500'>
                            Messenger
                            </Typography>
                        </div>  
                  </div>
                    
                  <div style={{marginLeft: 'auto'}}><DropdownNumber /></div>
              </div>
            </div>
      </div>
    );
};


const NotifictaionUser = () => {
    return (
        <div className={styles.notification_user}>
            <div className='flex_space_between'>
                <UserAvatar active={true} name={fakeUserConstant.name} activeAgoRole='1 min ago' url={fakeUserConstant.image} flag={<AppColor.UkraineFlagIcon/>}
                    preventMobileNone={true}/>
                <div className={styles.orage}>
                    <Typography variant='body5' fontWeight='500' color='white'>
                        3 
                    </Typography>
                </div>
            </div>
            <SizeBox height='10px'/>
            <Typography variant='body5'>
            Odio purus ac ac sem vitae pulvinar viverra lacus, lectus. Cure pa lactus.
            </Typography>
        </div>
    )
}

const NotificationCommon = () => {
    return (
        <div className={styles.notification_user}>
            <div className='flex_space_between'>
                <div className='gap_10' style={{alignItems: 'stretch'}}>
                    <AppColor.CbutLikeJava height={'38px'} width={'38px'} />

                    <div className={styles.flex_column}>
                        <Typography variant='body5' fontWeight='500'>Partners & Co</Typography>
                        <Typography variant='body5' color={AppColor.transparentBlack}>2 days ago</Typography>
                    </div>
                </div>
                <AppColor.singTrue width={'10px'} height={'9px'} stroke={AppColor.text} />
            </div>
            <SizeBox height='10px'/>
            <Typography variant='body5'>
            Odio purus ac ac sem vitae pulvinar viverra lacus, lectus.
            </Typography>
        </div>
    )
}
export default SoundPopUp;