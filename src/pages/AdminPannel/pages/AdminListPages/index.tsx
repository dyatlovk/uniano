
import DetailsTableTicketsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableTicketsAdmin/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import { useState } from 'react';
import styles from './style.module.scss';
import DetailsTableArbitraion from '@common/components/ui/DetailsTable/variants/DetailsTableArbitraion/index';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import DetailsTablePagesList from '@common/components/ui/DetailsTable/variants/DetailsTablePagesList/index';

const AdminListPages = () => {
    const [selectedCategory,setSelectedCategory] = useState('Development');
    return (    
        <div className={styles.wrapper}>
  
             <div className={styles.mobile_padding}>
              <DynamicPadding />
      
                 <div className={styles.top_title_part}>
                     <div className='center_mobile_text'>
                      <Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Pages list       </Typography>
                     </div>
          
                     <DynamicPadding />
          
                     <div className={styles.top_part}>
                          <div className={styles.buttons_top}>
                              <div className='gap_10'>
                                  <Typography variant='body4'>Indexing</Typography>
                                  <SwitchButton startValue={true} width='44px' height='24px'/>
                              </div>
                          </div>
                     </div>
                 </div>
      
                 <DynamicPadding />
      
                 <SearchFilterBar />
      
                 <DynamicPadding />
  
                 <DetailsTablePagesList
                      information={[
                          {
                              user: fakeUserConstant,
                               group: 'no group',
                               link: '/',
                               page: 'Main'
                               
                          }
                      ]}
                 />
                  <DynamicPadding />
             </div>
        </div>
      );
};

export default AdminListPages;