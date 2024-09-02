import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'

interface PhotoProps {
  title: string
  imgPath: string
  imgWidth?: string
  imgHeight?: string
  status: VerifyStatus
}

const Photo = ({
  title,
  imgPath,
  status,
  imgWidth = 'auto',
  imgHeight = '115px',
}: PhotoProps): JSX.Element => {
  const findStatusColor = (status: VerifyStatus): string => {
    const found = PhotoStatuses.find(el => el.status === status)
    if (!found) return AppColor.text
    return found.color
  }

  return (
    <div className={styles.photo}>
      <Typography color={AppColor.transparentBlack}>{title}</Typography>
      <DynamicPadding desktop="5px" mobile="5px" />
      <img
        className={styles.image}
        src={imgPath}
        height={imgHeight}
        width={imgWidth}
      />
      <DynamicPadding desktop="2px" />
      <div className={styles.status}>
        <Typography
          fontWeight="500"
          variant="body4"
          color={findStatusColor(status)}
        >
          {status}
        </Typography>
      </div>
      <div className={styles.tools}>
        <div className={styles.checked}>
          <AppColor.iconChecked width={21} height={15} />
        </div>
        <div className={styles.close}>
          <AppColor.close fill={AppColor.red} width={21} height={15} />
        </div>
      </div>
    </div>
  )
}

const PhotoStatuses: StatusColorMap[] = [
  { status: 'Accepted', color: AppColor.green },
  { status: 'Checking', color: AppColor.orange },
  { status: 'NotAccepted', color: AppColor.red },
]

type VerifyStatus = 'Checking' | 'Accepted' | 'NotAccepted'
type StatusColorMap = {
  status: VerifyStatus
  color: string
}

export { Photo, PhotoStatuses }
