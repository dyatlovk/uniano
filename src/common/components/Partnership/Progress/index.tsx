import PercentBar from '@common/components/ui/PercentBar/PercentBar'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { DetailsDropdownItem } from '@pages/Partnership/pages/ProgressFreelancer/index'
import classNames from 'classnames'
import DynamicPadding from '../../ui/DynamicPadding'
import HorizontalLine from '../../ui/Lines/HorizontalLine'
import SwitchButton from '../../ui/SwitchButton'
import TextDotted from '../../ui/TextDotted'
import styles from './style.module.scss'

interface Props {
  className?: string
  statusLabel: string
  statusColor: string
  percent: number
}
const Progress = ({
  className,
  statusLabel,
  statusColor,
  percent,
}: Props): JSX.Element => {
  return (
    <div className={classNames(className, 'box_shadow', styles.box)}>
      <DetailsDropdownItem
        title="Partnership"
        text="Fab 27, 2023 23:55 - current"
        initState={true}
        node={
          <div>
            <DynamicPadding desktop="20px" mobile="15px" />
            <div className="flex_space_between">
              <Typography variant="body4" color={AppColor.transparentBlack}>
                Duration
              </Typography>
              <Typography variant="body4" fontWeight="500">
                2 weeks 2 days
              </Typography>
            </div>
            <DynamicPadding desktop="9px" mobile="5px" />
            <PercentBar
              currentPercent={percent}
              color={statusColor}
              height="5px"
            />
            <DynamicPadding desktop="10px" mobile="5px" />
            <div className="flex_space_between">
              <Typography variant="body4" color={AppColor.transparentBlack}>
                Status
              </Typography>
              <Typography variant="body4" fontWeight="500" color={statusColor}>
                {statusLabel}
              </Typography>
            </div>

            <DynamicPadding desktop="25px" mobile="20px" />
            <HorizontalLine />
            <DynamicPadding desktop="24px" mobile="20px" />
            <Typography variant="body3" fontWeight="500">
              Statistics
            </Typography>
            <DynamicPadding desktop="21px" mobile="20px" />

            <div className={styles.text_dotted_wrapper}>
              <TextDotted
                startTextColor={AppColor.transparentBlack}
                text="CTR"
                fontWeightEndText="500"
                textEnd="5%"
              />
              <TextDotted
                startTextColor={AppColor.transparentBlack}
                text="eCPC"
                fontWeightEndText="500"
                textEnd="$5"
              />
              <TextDotted
                startTextColor={AppColor.transparentBlack}
                text="CR"
                fontWeightEndText="500"
                textEnd="3%"
              />
              <TextDotted
                startTextColor={AppColor.transparentBlack}
                text="Clicks"
                fontWeightEndText="500"
                textEnd="4178%"
              />
              <TextDotted
                startTextColor={AppColor.transparentBlack}
                text="Leads"
                fontWeightEndText="500"
                textEnd="643"
              />
              <TextDotted
                startTextColor={AppColor.transparentBlack}
                text="Sales"
                fontWeightEndText="500"
                textEnd="75"
              />
              <TextDotted
                startTextColor={AppColor.transparentBlack}
                text="Earned"
                fontWeightEndText="500"
                textEnd="$3 231"
              />
            </div>
            <DynamicPadding desktop="20px" mobile="15px" />
            <div className="gap_5">
              <Typography variant="body4">Public Financial Details </Typography>
              <SwitchButton width="44px" height="24px" startValue={true} />
              <div className="circle_shadow" style={{ padding: '3px 6px' }}>
                <AppColor.info />
              </div>
            </div>
            <DynamicPadding desktop="5px" mobile="5px" />
          </div>
        }
      />
    </div>
  )
}

export default Progress
