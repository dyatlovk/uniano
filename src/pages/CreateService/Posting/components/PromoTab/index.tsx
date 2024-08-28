import CenterShadowBox from '@common/components/ui/CenterShadowBox/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { PropsWithChildren, ReactNode } from 'react'
import styles from './style.module.scss'

interface PropsItems {}
const PromoItems = ({
  children,
}: PropsWithChildren<PropsItems>): JSX.Element => {
  return <div className={styles.list}>{children}</div>
}

interface PromoItemProps {
  title: string
  items: ReactNode[]
  available: boolean
}
const PromoItem = ({
  available,
  items,
  title,
}: PromoItemProps): JSX.Element => {
  return (
    <div className={styles.item}>
      <div className={styles.item_pos1}>
        <CenterShadowBox
          elements={[
            <Progress />,
            <DynamicPadding desktop="20px" />,
            <Timer />,
          ]}
          gap={''}
          paddingBoxDesktop={'30px'}
        />
      </div>
      <div className={styles.item_pos2}>
        <div className={styles.promo_title}>
          <Typography>{title}</Typography>
          <SwitchButton width="44px" height="24px" />
          {!available && (
            <Typography color={AppColor.red}>
              Unavailable to activate this promo
            </Typography>
          )}
        </div>
        <DynamicPadding desktop="20px" />
        <div className={styles.items}>{items.map(item => item)}</div>
      </div>
    </div>
  )
}

const Progress = (): JSX.Element => {
  return (
    <div style={{ width: '100%' }}>
      <Typography variant="body4">
        -20% sale for all packages till 13 Oct.
      </Typography>
      <DynamicPadding desktop="10px" />
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '5px',
            width: '100%',
            alignItems: 'baseline',
          }}
        >
          <Typography textLineHeight="1" variant="body2">
            $500
          </Typography>
          <Typography
            textLineHeight="1"
            color={AppColor.transparentBlack}
            variant="body5"
          >
            of 5000
          </Typography>
          <div style={{ flexGrow: '1' }}></div>
          <Typography variant="body2" color={AppColor.orange}>
            40%
          </Typography>
        </div>
        <ProgressBar progress={40} />
      </div>
    </div>
  )
}

const Timer = (): JSX.Element => {
  return (
    <div className={styles.timer}>
      <div className={styles.timer_item}>
        <span>53</span>
        <span>days</span>
      </div>
      <div>:</div>
      <div className={styles.timer_item}>
        <span>15</span>
        <span>HR</span>
      </div>
      <div>:</div>
      <div className={styles.timer_item}>
        <span>25</span>
        <span>MIN</span>
      </div>
      <div>:</div>
      <div className={styles.timer_item}>
        <span>37</span>
        <span>SEC</span>
      </div>
    </div>
  )
}

interface ProgressBarProps {
  progress: number
}
const ProgressBar = ({ progress = 0 }: ProgressBarProps): JSX.Element => {
  return (
    <div className={styles.progressBar}>
      <div
        style={{
          width: progress + '%',
          position: 'absolute',
          left: '0',
          top: 0,
          height: '100%',
          borderRadius: '5px',
          backgroundColor: AppColor.orange,
        }}
      ></div>
    </div>
  )
}

export { PromoItem, PromoItems }
