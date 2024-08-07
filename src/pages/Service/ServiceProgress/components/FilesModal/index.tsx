import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import styles from 'styles.module.scss'

interface FilesModalProps {
  onClose: () => void
}
const FilesModal = ({ onClose }: FilesModalProps): JSX.Element => {
  return (
    <ModalCenterBasic
      callbackClose={onClose}
      title={'Files'}
      bottomPartPadding={'30'}
    >
      files modal
    </ModalCenterBasic>
  )
}

export default FilesModal
