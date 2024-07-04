
import DetailsTableArbitraion from '@common/components/ui/DetailsTable/variants/DetailsTableArbitraion/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import styles from './style.module.scss';
import DetailsTableManagerChatAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableManagerChatAdmin/index';

const AdminManagerСhats = () => {

    return (    
        <div className={styles.wrapper}>
  
             <div className={styles.mobile_padding}>
              <DynamicPadding />
      
                 <div className={styles.top_title_part}>
                     <div className='center_mobile_text'>
                      <Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Manager chats</Typography>
                     </div>
          
                     <DynamicPadding />
          
                     <div className={styles.top_part}>
                          <div className={styles.buttons_top}>
                              <div className='gap_10'>
                                  <Typography variant='body4'>Active</Typography>
                                  <SwitchButton startValue={true} width='44px' height='24px'/>
                              </div>
                          </div>
                     </div>
                 </div>
      
                 <DynamicPadding />
      
                 <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
      
                 <DynamicPadding />
  
                 <DetailsTableManagerChatAdmin
                      information={[
                          {
                              user: fakeUserConstant,
                               date: 'Feb 26, 2021 16:32 ',
                               description: 'Freelancer didn’t ',
                               id: '4242',
                               manager: fakeUserConstant,
                               status: 'Opened'
                          }
                      ]}
                 />
                  <DynamicPadding />
             </div>
        </div>
      );
  };

export default AdminManagerСhats;