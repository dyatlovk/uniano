import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import Typography from '@common/components/ui/Typography/Typography'
import styles from './style.module.scss'

interface Props {
  onReady: (title: string) => void
}

const StepOne = ({ onReady }: Props): JSX.Element => {
  return (
    <ResponsiveLayoutTwo
      item1={
        <InputCommon
          callback={(item: string) => {
            onReady(item)
          }}
          placeholder={''}
        />
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
    <div className={styles.right_text_box}>
      <Typography variant="body3" fontWeight="500">
        Title examples
      </Typography>
      <DynamicPadding desktop="18px" mobile="20px" />
      <ul className={styles.ul_wrapper}>
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

export default StepOne
