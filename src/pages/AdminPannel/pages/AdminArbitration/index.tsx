
import DetailsTableModerationAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableModerationAdmin/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import styles from './style.module.scss';
import DetailsTableArbitraion from '@common/components/ui/DetailsTable/variants/DetailsTableArbitraion/index';

const AdminArbitration = () => {

    return (    
        <div className={styles.wrapper}>
  
             <div className={styles.mobile_padding}>
              <DynamicPadding />
      
                 <div className={styles.top_title_part}>
                     <div className='center_mobile_text'>
                      <Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Arbitration</Typography>
                     </div>
          
                     <DynamicPadding />
          
                     <div className={styles.top_part}>
                          <div className={styles.buttons_top}>
                              <div className='gap_10'>
                                  <Typography variant='body4'>Creation</Typography>
                                  <SwitchButton startValue={true} width='44px' height='24px'/>
                              </div>
                          </div>
                     </div>
                 </div>
      
                 <DynamicPadding />
      
                 <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
      
                 <DynamicPadding />
  
                 <DetailsTableArbitraion
                      information={[
                          {
                              user: fakeUserConstant,
                                category: 'Crypto Wallet Development',
                                date: 'Feb 26, 2021 16:32 ',
                                id: '413',
                                objectProp: 'Artem Markevych Logo Design ',
                                scope: 'Order project',
                                status: 'Unsolved'
                          }
                      ]}
                 />
                  <DynamicPadding />
             </div>
        </div>
      );
  };

export default AdminArbitration;