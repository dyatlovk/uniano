import DetailsTableAdminCategoriesServices from '@common/components/ui/DetailsTable/variants/DetailsTableAdminCategoriesServices/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import AddOrderCatModal from '../../components/AddOrderCatModal'
import styles from './style.module.scss'

const AdminServicesSponsorship = () => {
  const [showAddOrderModal, setShowAddOrderModal] = useState<boolean>(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.mobile_padding}>
        <DynamicPadding />

        <div className={styles.top_part_flex}>
          <div className={styles.title_plus}>
            <div>
              <Typography
                variant="titleBig"
                fontWeight="600"
                textTransform="uppercase"
              >
                Sponsorships categories{' '}
              </Typography>
            </div>
            <div
              className={styles.orange}
              onClick={() => {
                setShowAddOrderModal(true)
              }}
            >
              <AppColor.plus stroke="white" width={'fit-content'} />
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
              page: 'Development',
            },
          ]}
        />
        <DynamicPadding />
      </div>

      {showAddOrderModal && (
        <AddOrderCatModal
          title="Add sponsorship category"
          onAdd={() => setShowAddOrderModal(false)}
          onCancel={() => setShowAddOrderModal(false)}
          onClose={() => setShowAddOrderModal(false)}
        />
      )}
    </div>
  )
}

export default AdminServicesSponsorship
