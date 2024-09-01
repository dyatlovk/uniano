import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import ModalButtonsSetup from '@common/components/ui/ModalButtons/index'
import {
  StepActionNode,
  StepsResolver,
  StepResolverItem,
} from '@common/components/ui/StepsResolver/index'
import useUpdater from '@common/helpers/useUpdater'
import StepsNegotiationCustomerModel from '@common/models/services/stepsNegotiationCustomerModel'
import { useCallback, useEffect, useState } from 'react'
import AmountStep from '../AddWithrawalSteps/Amount'
import MethodStep from '../AddWithrawalSteps/Method'
import OperationStep from '../AddWithrawalSteps/Operation'
import Status from '../AddWithrawalSteps/Status'
import UserStep from '../AddWithrawalSteps/User'

const AddWithdrawModal = ({ onAdd, onCancel, onClose }: Props): JSX.Element => {
  const [nextLabel, setNextLabel] = useState<string>('Next')
  const [stepsNeedUpdate, setStepsNeedUpdate] = useState<boolean>(false)
  const [nextDisabled, setNextDisabled] = useState<boolean>(true)
  const [stepsModel, setStepsModel] =
    useState<StepsNegotiationCustomerModel | null>(null)
  const update = useUpdater()

  useEffect(() => {
    setStepsModel(new StepsNegotiationCustomerModel())
  }, [])

  const onSaveOrNextCallack = useCallback(() => {
    if (!stepsModel) return
    const current = stepsModel.findActive()
    if (!current) return

    const next = stepsModel.findNext(current.no)
    const last = stepsModel.findLast()

    if (current === last) {
      onAdd()
      return
    }

    if (last === next) {
      setNextLabel('Add')
    }

    if (last !== next) {
      setNextLabel('Next')
    }

    setNextDisabled(true)
    if (current !== last) {
      stepsModel.goToNext(current)
    }
    update()
  }, [stepsModel, update])

  useEffect(() => {
    if (!stepsModel) {
      update()
      return
    }
    if (stepsModel.count() === 0) update()

    stepsModel.append({
      no: 1,
      title: 'User',
      isVisible: true,
      isActive: true,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div
          className={'link_hover'}
          onClick={() => {
            if (!stepsModel) return
            const index = 1
            stepsModel.setResolveMode(index)
            setNextLabel('Next')
            setNextDisabled(true)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        >
          <StepActionNode title="Change User" />
        </div>
      ),
      resolvingNode: (
        <UserStep
          onReady={(title: string) => {
            if (!stepsModel) return
            const index = 1
            if (title.length > 0) stepsModel.setReadyToResolve(index, true)
            if (title.length == 0) stepsModel.setReadyToResolve(index, false)
            stepsModel.updateResolvedTitle(index, title)
            setNextDisabled(false)
            setStepsNeedUpdate(prev => !prev)
          }}
        />
      ),
    })
    stepsModel.append({
      no: 2,
      title: 'Operation',
      isVisible: false,
      isActive: false,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div
          className={'link_hover'}
          onClick={() => {
            if (!stepsModel) return
            const index = 2
            stepsModel.setResolveMode(index)
            setNextLabel('Next')
            setNextDisabled(true)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        >
          <StepActionNode title="Change Operation" />
        </div>
      ),
      resolvingNode: (
        <OperationStep
          onReady={(title: string) => {
            if (!stepsModel) return
            const index = 2
            if (title.length > 0) stepsModel.setReadyToResolve(index, true)
            if (title.length == 0) stepsModel.setReadyToResolve(index, false)
            stepsModel.updateResolvedTitle(index, title)
            setNextDisabled(false)
            setStepsNeedUpdate(prev => !prev)
          }}
        />
      ),
    })

    stepsModel.append({
      no: 3,
      title: 'Method',
      isVisible: false,
      isActive: false,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div
          className={'link_hover'}
          onClick={() => {
            if (!stepsModel) return
            const index = 3
            stepsModel.setResolveMode(index)
            setNextLabel('Next')
            setNextDisabled(true)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        >
          <StepActionNode title="Change Method" />
        </div>
      ),
      resolvingNode: (
        <MethodStep
          onReady={(title: string) => {
            if (!stepsModel) return
            const index = 3
            if (title.length > 0) stepsModel.setReadyToResolve(index, true)
            if (title.length == 0) stepsModel.setReadyToResolve(index, false)
            stepsModel.updateResolvedTitle(index, title)
            setNextDisabled(false)
            setStepsNeedUpdate(prev => !prev)
          }}
        />
      ),
    })
    stepsModel.append({
      no: 4,
      title: 'Amount',
      isVisible: false,
      isActive: false,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div
          className={'link_hover'}
          onClick={() => {
            if (!stepsModel) return
            const index = 4
            stepsModel.setResolveMode(index)
            setNextLabel('Next')
            setNextDisabled(true)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        >
          <StepActionNode title="Change Amount" />
        </div>
      ),
      resolvingNode: (
        <AmountStep
          onReady={(title: string) => {
            if (!stepsModel) return
            const index = 4
            if (title.length > 0) stepsModel.setReadyToResolve(index, true)
            if (title.length == 0) stepsModel.setReadyToResolve(index, false)
            stepsModel.updateResolvedTitle(index, title)
            setNextDisabled(false)
            setStepsNeedUpdate(prev => !prev)
          }}
        />
      ),
    })
    stepsModel.append({
      no: 5,
      title: 'Status',
      isVisible: false,
      isActive: false,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div
          className={'link_hover'}
          onClick={() => {
            if (!stepsModel) return
            const index = 5
            stepsModel.setResolveMode(index)
            setNextLabel('Next')
            setNextDisabled(true)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        >
          <StepActionNode title="Change Status" />
        </div>
      ),
      resolvingNode: (
        <Status
          onReady={(title: string) => {
            if (!stepsModel) return
            const index = 5
            if (title.length > 0) stepsModel.setReadyToResolve(index, true)
            if (title.length == 0) stepsModel.setReadyToResolve(index, false)
            stepsModel.updateResolvedTitle(index, title)
            setNextDisabled(false)
            setStepsNeedUpdate(prev => !prev)
          }}
        />
      ),
    })

    return () => stepsModel.clear()
  }, [stepsModel])

  return (
    <ModalCenterBasic
      desktopMinWidth="735px"
      bottomPartPadding="30px"
      callbackClose={() => {
        onClose()
      }}
      title="Add withdrawal operation"
    >
      <StepsResolver needUpdate={stepsNeedUpdate}>
        {stepsModel &&
          stepsModel
            .findVisible()
            .map((item: StepsResolver.Item) => (
              <StepResolverItem
                key={item.no}
                onResolved={(no: number) => {}}
                forceUpdate={stepsNeedUpdate}
                data={item}
              ></StepResolverItem>
            ))}
      </StepsResolver>

      <ModalButtonsSetup
        isSaveDisabled={nextDisabled}
        onCancel={onCancel}
        onSave={() => {
          onSaveOrNextCallack()
        }}
        saveLabel={nextLabel}
      />
    </ModalCenterBasic>
  )
}

interface Props {
  onClose: () => void
  onAdd: () => void
  onCancel: () => void
}

export default AddWithdrawModal
