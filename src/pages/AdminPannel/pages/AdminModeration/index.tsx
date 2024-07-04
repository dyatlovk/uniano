
import DetailsTableSubscriptionsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableSubscriptionsAdmin/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import DetailsTableModerationAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableModerationAdmin/index';

const AdminModeration = () => {
    return (    
        <div className={styles.wrapper}>
  
             <div className={styles.mobile_padding}>
              <DynamicPadding />
      
                 <div className={styles.top_title_part}>
                     <div className='center_mobile_text'>
                      <Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Moderation complaints</Typography>
                     </div>
          
                     <DynamicPadding />
          
                     <div className={styles.top_part}>
                          <div className={styles.buttons_top}>
                              <div className='gap_10'>
                                  <Typography variant='body4'>Create</Typography>
                                  <SwitchButton startValue={true} width='44px' height='24px'/>
                              </div>
                          </div>
                     </div>
                 </div>
      
                 <DynamicPadding />
      
                 <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
      
                 <DynamicPadding />
  
                 <DetailsTableModerationAdmin
                      information={[
                          {
                              user: fakeUserConstant,
                            complaint: 'New to Uniano, Need assistance ',
                            category: 'Registration',
                            creator: fakeUserConstant,
                            scope: 'Community posts'
                          }
                      ]}
                 />
                  <DynamicPadding />
             </div>
        </div>
      );
  };

export default AdminModeration;