import States from '@common/domain/Navigation/states'
import AppColor from '@common/styles/variables-static'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PercentBar from '../ui/PercentBar/PercentBar'
import Typography from '../ui/Typography/Typography'
import styles from './styles.module.scss'

interface Props {
  states: Navigation.State[]
  currentState: string
  maxWidth?: string
  padding?: string
  useBg?: boolean
}
const StepsStates = ({
  states,
  currentState,
  maxWidth = '100%',
  padding = '33px 10px',
  useBg = true,
}: Props): JSX.Element => {
  const [stateMachine, setStateMachine] = useState<States | null>(null)

  useEffect(() => {
    const st = new States(states)
    st.current = currentState
    st.updateStates
    setStateMachine(st)
  }, [currentState])

  return (
    <div
      style={{ maxWidth: maxWidth }}
      className={useBg ? styles.wrapp_bg : styles.wrapper}
      data-stepsstate
    >
      <div
        style={{ padding: padding }}
        className={styles.content}
        data-stepstate="content"
      >
        <div className={styles.mobile}>
          <Typography variant="body4" fontWeight="500" color={AppColor.white}>
            {stateMachine && stateMachine.getCurrent().title}
          </Typography>
          <AppColor.chevronBottom
            width={'12px'}
            height={'6px'}
            color={AppColor.white}
          />
        </div>

        <PercentBar
          currentPercent={stateMachine && stateMachine.getProgress()}
          height="15px"
          backgroundColor={'white'}
        />

        <div className={classNames(styles.titles_wrapper, styles.desktop)}>
          {stateMachine &&
            stateMachine.updateStates.map(
              (state: Navigation.State, id: number) => (
                <StepLabel
                  key={id}
                  state={state}
                  current={stateMachine.getCurrent()}
                />
              )
            )}
        </div>
      </div>
    </div>
  )
}

interface StepItemProps {
  state: Navigation.State
  current: Navigation.State
}
const StepLabel = ({ state, current }: StepItemProps): JSX.Element => {
  const isCurrentItem = current === state && !state.disabled
  const isPrevItem = !state.disabled && current !== state
  const isNextItem = state.disabled

  return (
    <div>
      {isNextItem && (
        <Typography
          fontWeight="400"
          variant="body4"
          color={AppColor.transparentWhite}
        >
          {state.title}
        </Typography>
      )}

      {isCurrentItem && (
        <Typography fontWeight="500" variant="body4" color={AppColor.white}>
          {state.title}
        </Typography>
      )}

      {isPrevItem && (
        <Link to={state.url} className={styles.link}>
          <Typography fontWeight="500" variant="body4" color={AppColor.orange}>
            {state.title}
          </Typography>
        </Link>
      )}
    </div>
  )
}

export default StepsStates
