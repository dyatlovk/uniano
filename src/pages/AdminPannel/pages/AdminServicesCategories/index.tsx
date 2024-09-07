import DetailsTableAdminCategoriesServices from '@common/components/ui/DetailsTable/variants/DetailsTableAdminCategoriesServices/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Preloader from '@common/components/ui/Preloader/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useState, useTransition } from 'react'
import AddOrderCatModal from '../../components/AddOrderCatModal'
import styles from './style.module.scss'

const AdminServicesCategories = () => {
  const [showAddOrderModal, setShowAddOrderModal] = useState<boolean>(false)
  const [isAddModalPending, startAddModalTransition] = useTransition()

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
                Services categories{' '}
              </Typography>
            </div>
            <div
              className={styles.orange}
              onClick={() => {
                startAddModalTransition(() => {
                  setShowAddOrderModal(true)
                })
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

      {isAddModalPending && !showAddOrderModal && <Preloader />}
      {showAddOrderModal && (
        <AddOrderCatModal
          title="Add service category"
          onAdd={() => setShowAddOrderModal(false)}
          onCancel={() => setShowAddOrderModal(false)}
          onClose={() => setShowAddOrderModal(false)}
        />
      )}
    </div>
  )
}

export default AdminServicesCategories
