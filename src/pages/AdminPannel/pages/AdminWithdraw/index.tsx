import DetailsWithdraw from '@common/components/ui/DetailsTable/variants/DetailsWithdraw/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import WithdrawModal from '../../components/WithdrawModal'
import AddWithdrawModal from './AddWithdrawModal'
import styles from './style.module.scss'

const AdminWithdraw = () => {
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false)
  const [showAddWithdraw, setShowAddWithdraw] = useState<boolean>(false)

  return (
    <div className="admin_wrapper">
      <DynamicPadding />

      <div className={styles.top_part}>
        <div
          className={styles.gap_20_10}
          onClick={() => {
            setShowAddWithdraw(true)
          }}
        >
          <Typography
            variant="titleBig"
            fontWeight="600"
            textTransform="uppercase"
          >
            Withdraw operations
          </Typography>
          <div className={styles.orange_circle}>
            <AppColor.plus stroke="white" />
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
              setShowSettingsModal(true)
            }}
          >
            <Typography
              variant="body4"
              fontWeight="500"
              color={AppColor.transparentBlack}
              textTransform="uppercase"
            >
              Withdraw settings
            </Typography>
          </div>
        </div>
      </div>

      <DynamicPadding desktop="30px" mobile="20px" />

      <SearchFilterBar exportIcon={true} date="10/29/22 - 11/29/22" />

      <DynamicPadding />

      <DetailsWithdraw
        information={[
          {
            operation: '',
            id: '3311',
            date: 'Feb 26, 2021 16:32 ',
            amount: '-$10 353.54',
            method: 'visa',
            status: 'Pending',
            user: fakeUserConstant,
          },
        ]}
      />
      <DynamicPadding />

      {showSettingsModal && (
        <WithdrawModal
          onClose={() => {
            setShowSettingsModal(false)
          }}
        />
      )}

      {showAddWithdraw && (
        <AddWithdrawModal
          onClose={() => {
            setShowAddWithdraw(false)
          }}
          onAdd={() => {
            setShowAddWithdraw(false)
          }}
          onCancel={() => {
            setShowAddWithdraw(false)
          }}
        />
      )}
    </div>
  )
}

export default AdminWithdraw
