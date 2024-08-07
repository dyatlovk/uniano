import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import styles from 'styles.module.scss'

interface NegotiationsModalProps {
  onClose: () => void
}
const NegotiationsModal = ({
  onClose,
}: NegotiationsModalProps): JSX.Element => {
  return (
    <ModalCenterBasic
      callbackClose={onClose}
      title={'Change Negotiations'}
      bottomPartPadding={'30'}
    >
      Change Negotiations
    </ModalCenterBasic>
  )
}

export default NegotiationsModal
