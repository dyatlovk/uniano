import { PreviewItem } from '../partnershipModal'
import styles from './style.module.scss'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import DropDownCommon from '@common/components/ui/Dropdown/DropdownCommon/index'
import DarkBox from '@common/components/ui/DarkBox/index'
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import SizeBox from '@common/components/ui/SizeBox/index'
import FreelancerStats from '@common/domain/Partnership/stats'

interface Props {
  onClose: () => void
}
const StatsModal = ({ onClose }: Props) => {
  return (
    <ModalCenterBasic
      nodeAfterTitle={
        <div className={styles.flex_node}>
          <DarkBox fonstSize="18px" text="3" />
          <div style={{ flexGrow: '1' }}></div>
          <DropDownCommon
            items={['Projects', 'Projects1']}
            callback={() => {}}
          />
          <SizeBox width="0px" />
        </div>
      }
      desktopMaxWidth="820px"
      bottomPartPadding="30px"
      topPartPadding="17px 30px"
      callbackClose={() => {
        onClose()
      }}
      title="Statistics"
    >
      <div className={styles.flex_row}>
        <PreviewItem />
        <PreviewItem />
        <PreviewItem />
      </div>
      <DynamicPadding desktop="30px" mobile="20px" />
      <div className={styles.statistic_text_wrapper}>
        {FreelancerStats.regroupByTwo(FreelancerStats.getAll()).map(
          (items: PartnerShip.Stats[], idx: number) => {
            return (
              <div className={styles.group}>
                {items.map((item: PartnerShip.Stats, id: number) => (
                  <div className={styles.group_item}>
                    <div className={styles.group_title}>{item.title}</div>
                    <div className={styles.group_text}>{item.text}</div>
                  </div>
                ))}
              </div>
            )
          }
        )}
      </div>
    </ModalCenterBasic>
  )
}

export default StatsModal
