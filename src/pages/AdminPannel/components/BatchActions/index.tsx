import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'

interface BatchProps {
  width: number
  onClose: () => void
  onComplete: () => void
  onCancel: () => void
}

const BatchPopup = ({
  onClose,
  onCancel,
  onComplete,
  width,
}: BatchProps): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: `${width}px`,
      }}
      className={styles.batch_actions}
    >
      <div className={styles.gap_20}>
        <Typography variant="body3" fontWeight="500">
          Move
        </Typography>
      </div>
      <div className={styles.gap_20}>
        <AppColor.speficChevronRightFilled />
        <div
          onClick={onComplete}
          className={styles.gap_10 + ' ' + styles.selection_activity}
        >
          <Typography variant="body4" color={AppColor.green}>
            To Complete
          </Typography>
        </div>
        <div
          onClick={onCancel}
          className={styles.gap_10 + ' ' + styles.selection_activity}
        >
          <Typography variant="body4" color={AppColor.red}>
            To Cancel
          </Typography>
        </div>
      </div>
      <div className={styles.batch_close} onClick={onClose}>
        <AppColor.close width={10} height={10} fill={AppColor.text} />
      </div>
    </div>
  )
}

export default BatchPopup
