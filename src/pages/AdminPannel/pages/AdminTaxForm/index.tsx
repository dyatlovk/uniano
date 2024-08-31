import DetailsTaxForm from '@common/components/ui/DetailsTable/variants/DetailsTaxForm/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import TaxFormModal from '../../components/TaxFormModal'
import styles from './style.module.scss'

const AdminTaxForm = () => {
  const [showTaxFormModal, setShowTaxFormModal] = useState<boolean>(false)

  return (
    <div className="admin_wrapper">
      <DynamicPadding />

      <div className={styles.top_part}>
        <div className={styles.gap_20_10}>
          <Typography
            variant="titleBig"
            fontWeight="600"
            textTransform="uppercase"
          >
            tax form
          </Typography>
          <div className={styles.orange_circle}>
            <AppColor.plus style={{ flexGrow: '1' }} stroke="white" />
          </div>
        </div>
        <div className={styles.top_end_part}>
          <div className="gap_5">
            <Typography variant="body4">Active</Typography>
            <SwitchButton width="44px" height="24px" startValue={true} />
          </div>
          <div
            className="cursor"
            onClick={() => {
              setShowTaxFormModal(true)
            }}
          >
            <Typography
              variant="body4"
              fontWeight="500"
              color={AppColor.transparentBlack}
              textTransform="uppercase"
            >
              Tax form settings
            </Typography>
          </div>
        </div>
      </div>

      <DynamicPadding desktop="30px" mobile="20px" />

      <SearchFilterBar exportIcon={true} date="10/29/22 - 11/29/22" />

      <DynamicPadding />

      <DetailsTaxForm
        information={[
          {
            user: fakeUserConstant,
            date: 'Feb 26, 2023 16:32 ',
            expired: '',
            status: 'Request',
            taxForm: 'W-8BEN',
          },
        ]}
      />
      <DynamicPadding />

      {showTaxFormModal && (
        <TaxFormModal
          onSave={() => {
            setShowTaxFormModal(false)
          }}
          onCancel={() => {
            setShowTaxFormModal(false)
          }}
        />
      )}
    </div>
  )
}

export default AdminTaxForm
