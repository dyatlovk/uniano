import AppColor from '@common/styles/variables-static'
import { PropsWithChildren } from 'react'
import DynamicPadding from '../DynamicPadding'
import MyButton from '../MyButton/MyButton'
import MyButtonOrange from '../MyButton/variants/MyButtonOrange'
import SizeBox from '../SizeBox'
import Typography from '../Typography/Typography'
import styles from './style.module.scss'

type Collection = StepsResolver.Collection
type Item = StepsResolver.Item

interface Props {
  needUpdate?: boolean
}

const StepsResolver = ({
  children,
  needUpdate = false,
}: PropsWithChildren<Props>): JSX.Element => {
  return <div className={styles.steps}>{children}</div>
}

interface ItemProps {
  data: Item
  onResolveMode?: (no: number) => void
  onResolved: (no: number) => void
  forceUpdate?: boolean
}
const StepResolverItem = ({
  data,
  forceUpdate = false,
  children,
}: PropsWithChildren<ItemProps>): JSX.Element => {
  return (
    <div className={styles.item}>
      <div className={styles.item_verical_wrapper}>
        <div className={styles.item_no}>
          {!data.isResolved && (
            <Typography variant="body4" fontWeight="500">
              {data.no}
            </Typography>
          )}
          {data.isResolved && <AppColor.iconChecked />}
        </div>
        <div className={styles.item_vert_line}></div>
      </div>

      <div className={styles.item_content}>
        <SizeBox height="8px" />
        <Typography textLineHeight="1" fontWeight="500" variant="body4">
          {data.isResolved && data.titleResolved}
          {!data.isResolved && data.title}
        </Typography>

        <DynamicPadding desktop="11px" />

        {!data.isActive && data.actiondNode}
        {data.isActive && data.resolvingNode}

        <DynamicPadding desktop="30px" />

        {data.isActive && children}
      </div>
    </div>
  )
}

interface StepActionProps {
  title: string
}
const StepActionNode = ({ title }: StepActionProps): JSX.Element => {
  return (
    <div className={styles.action_node}>
      <AppColor.edit fill={AppColor.orange} />
      <Typography variant="body5" color={AppColor.orange}>
        {title}
      </Typography>
    </div>
  )
}

interface StepsNavProps {
  onNext: () => void
  onPrev: () => void
  nextDisable: boolean
  prevDisable: boolean
  nextVisible?: boolean
  prevVisible?: boolean
}
const StepNav = ({
  onNext,
  onPrev,
  prevDisable,
  nextDisable = true,
  prevVisible = true,
  nextVisible = true,
}: StepsNavProps): JSX.Element => {
  return (
    <div style={{ justifyContent: 'end' }} className="gap_5">
      {prevVisible && (
        <MyButton
          disabled={prevDisable}
          onClick={() => {
            onPrev()
          }}
          fontWeight="500"
          textTransform="uppercase"
        >
          Prev
        </MyButton>
      )}

      {nextVisible && (
        <MyButtonOrange
          onClick={() => {
            onNext()
          }}
          fontWeight="500"
          textTransform="uppercase"
          disabled={nextDisable}
        >
          Next
        </MyButtonOrange>
      )}
    </div>
  )
}

export { StepsResolver, StepResolverItem, StepActionNode, StepNav }
