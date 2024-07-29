import States from '@common/domain/Navigation/states'
import AppColor from '@common/styles/variables-static'
import classNames from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import PercentBar from '../ui/PercentBar/PercentBar'
import Typography from '../ui/Typography/Typography'
import styles from './styles.module.scss'

interface Props {
  states: Navigation.State[]
  currentState: string
}
const StepsStates = ({ states, currentState }: Props): JSX.Element => {
  const [stateMachine, setStateMachine] = useState<States>(new States(states))
  stateMachine.current = currentState
  stateMachine.updateStates

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.mobile}>
          <Typography variant="body4" fontWeight="500" color={AppColor.white}>
            {stateMachine.getCurrent().title}
          </Typography>
          <AppColor.chevronBottom
            width={'12px'}
            height={'6px'}
            color={AppColor.white}
          />
        </div>

        <PercentBar
          currentPercent={stateMachine.getProgress()}
          height="15px"
          backgroundColor={'white'}
        />

        <div className={classNames(styles.titles_wrapper, styles.desktop)}>
          {stateMachine.updateStates.map(
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
  const [currentItem, setCurrentItem] = useState<boolean>(
    current === state && !state.disabled
  )
  const [prevItem, setPrevItem] = useState<boolean>(
    !state.disabled && current !== state
  )

  const [nextItem, setNextItem] = useState<boolean>(state.disabled)

  return (
    <div>
      {nextItem && (
        <Typography
          fontWeight="400"
          variant="body4"
          color={AppColor.transparentWhite}
        >
          {state.title}
        </Typography>
      )}

      {currentItem && (
        <Typography fontWeight="500" variant="body4" color={AppColor.white}>
          {state.title}
        </Typography>
      )}

      {prevItem && (
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
