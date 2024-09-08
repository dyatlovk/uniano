import DetailsTableAdminCategoriesServices from '@common/components/ui/DetailsTable/variants/DetailsTableAdminCategoriesServices/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Preloader from '@common/components/ui/Preloader/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useState, useTransition } from 'react'
import AddOrderCatModal from '../../components/AddOrderCatModal'
import FilterSettingsModal from '../../components/FilterSettingsModal'
import styles from './style.module.scss'

const AdminServicesOrders = () => {
  const [showAddOrderModal, setShowAddOrderModal] = useState<boolean>(false)
  const [isAddModalPending, startAddModalTransition] = useTransition()
  const [showFilterSettings, setShowFilterSettings] = useState<boolean>(false)

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
                Orders categories{' '}
              </Typography>
            </div>
            <div
              onClick={() => {
                setShowAddOrderModal(true)
              }}
              className={styles.orange}
            >
              <AppColor.plus stroke="white" width={'fit-content'} />
            </div>
          </div>
        </div>

        <DynamicPadding />

        <SearchFilterBar />

        <DynamicPadding />

        <DetailsTableAdminCategoriesServices
          onFilterSettingsClick={() => setShowFilterSettings(true)}
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
          title="Add order category"
          onAdd={() => setShowAddOrderModal(false)}
          onCancel={() => setShowAddOrderModal(false)}
          onClose={() => setShowAddOrderModal(false)}
        />
      )}

      {showFilterSettings && (
        <FilterSettingsModal
          onCancel={() => setShowFilterSettings(false)}
          onClose={() => setShowFilterSettings(false)}
          onSave={() => setShowFilterSettings(false)}
        />
      )}
    </div>
  )
}

export default AdminServicesOrders
