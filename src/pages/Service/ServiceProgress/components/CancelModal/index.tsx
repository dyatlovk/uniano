import ModalCenterBasic from "@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index"
import styles from 'styles.module.scss'

interface CancelModalProps {
  onClose: () => void
}
const CancelModal = ({ onClose }: CancelModalProps): JSX.Element => {
  return (
    <ModalCenterBasic
      callbackClose={onClose}
      title={'Cancel project'}
      bottomPartPadding={'30'}
    >
      Cancel project
    </ModalCenterBasic>
  )
}

export default CancelModal
