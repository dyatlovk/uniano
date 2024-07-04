
import DetailsTableTicketsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableTicketsAdmin/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import DetailsTableAdminCategoriesServices from '@common/components/ui/DetailsTable/variants/DetailsTableAdminCategoriesServices/index';

const AdminServicesCommunity = () => {

    return (    
        <div className={styles.wrapper}>
             <div className={styles.mobile_padding}>
              <DynamicPadding />
      
  
                 <div className={styles.top_part_flex}>
                      <div className={styles.title_plus}>
                          <div><Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Community categories       </Typography></div>
                          <div className={styles.orange}>
                              <AppColor.plus stroke='white' width={'fit-content'}/>
                          </div>
                      </div>
                     
                 </div>
   
      
                 <DynamicPadding />
      
                 <SearchFilterBar />
      
                 <DynamicPadding />
  
                 <DetailsTableAdminCategoriesServices
                      information={[
                          {
                              user: fakeUserConstant,
                              group: 'Orders',
                              link: '/projects/orders/development',
                              page: 'Development'
                          }
                      ]}
                 />
                  <DynamicPadding />
             </div>
        </div>
      );
};

export default AdminServicesCommunity;