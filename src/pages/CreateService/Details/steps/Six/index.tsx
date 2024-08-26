import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useEffect } from 'react'
import shared from '../../shared/shared.module.scss'
import styles from './style.module.scss'

interface Props {
  onReady: (title: string) => void
}

const StepSix = ({ onReady }: Props): JSX.Element => {
  useEffect(() => {
    onReady('Agreement')
  }, [onReady])
  return (
    <ResponsiveLayoutTwo
      item1={
        <div className={styles.docs}>
          <DynamicPadding desktop="10px" />
          <div className={styles.attaches}>
            <div className={styles.attached_file}>
              <div className={styles.file_close}>
                <AppColor.close fill={'rgba(1, 1, 1, 0.5)'} />
              </div>
              <div className={styles.attached_file_inner}>
                <div>
                  <AppColor.filePdf />
                </div>
                <div>
                  <Typography fontWeight="500">Freelancer co....pdf</Typography>
                </div>
                <div>
                  <Typography variant="body4" color={AppColor.text}>
                    432.1 KB
                  </Typography>
                </div>
              </div>
            </div>
            <div className={styles.attached_file}>
              <div className={styles.file_close}>
                <AppColor.close fill={'rgba(1, 1, 1, 0.5)'} />
              </div>
              <div className={styles.attached_file_inner}>
                <div>
                  <AppColor.filePdf />
                </div>
                <div>
                  <Typography fontWeight="500">Freelancer co....pdf</Typography>
                </div>
                <div>
                  <Typography variant="body4" color={AppColor.text}>
                    432.1 KB
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <DynamicPadding desktop="30px" />
          <div className={styles.dropzone}>
            <AppColor.attach width={15} />
            <Typography variant="body3">attach files (max 100 mb)</Typography>
          </div>
        </div>
      }
      item2={<Help />}
      gap="80px"
      item1MaxWidth="692px"
      item2MaxWidth="388px"
    />
  )
}

const Help = (): JSX.Element => {
  return (
    <div className={shared.right_text_box}>
      <Typography variant="body3" fontWeight="500">
        Title examples
      </Typography>
      <DynamicPadding desktop="18px" mobile="20px" />
      <ul className={shared.ul_wrapper}>
        <li>
          <Typography variant="body4">
            Build responsive WordPress site with booking/payment functionality
          </Typography>
        </li>
        <li>
          <Typography variant="body4">
            Graphic designer needed to design ad creative for multiple campaigns
          </Typography>
        </li>
        <li>
          <Typography variant="body4">
            Facebook ad specialist needed for product launch
          </Typography>
        </li>
      </ul>
    </div>
  )
}

export default StepSix
