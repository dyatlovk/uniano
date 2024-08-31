import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import ModalButtonsSetup from '@common/components/ui/ModalButtons/index'
import {
  StepActionNode,
  StepResolverItem,
  StepsResolver,
} from '@common/components/ui/StepsResolver/index'
import useUpdater from '@common/helpers/useUpdater'
import StepsNegotiationCustomerModel from '@common/models/services/stepsNegotiationCustomerModel'
import { useCallback, useEffect, useState } from 'react'
import Status from '../AddTaxSteps/Status'
import TaxForm from '../AddTaxSteps/Tax'
import UserStep from '../AddTaxSteps/User'
import styles from './style.module.scss'

const AddModal = ({ onAdd, onCancel, onClose }: Props): JSX.Element => {
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
      title: 'Tax Form',
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
            setNextLabel('Next')
            setNextDisabled(true)
            stepsModel.setResolveMode(index)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        >
          <StepActionNode title="Change Tax Form" />
        </div>
      ),
      resolvingNode: (
        <TaxForm
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
            const index = 3
            setNextLabel('Add')
            setNextDisabled(true)
            stepsModel.setResolveMode(index)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        >
          <StepActionNode title="Status" />
        </div>
      ),
      resolvingNode: (
        <Status
          onReady={(title: string) => {
            if (!stepsModel) return
            const index = 3
            stepsModel.setResolveMode(index)
            setNextDisabled(false)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        />
      ),
    })

    return () => {
      stepsModel.clear()
    }
  }, [stepsModel])

  return (
    <ModalCenterBasic
      desktopMinWidth="735px"
      bottomPartPadding="30px"
      callbackClose={() => {
        onClose()
      }}
      title="Add user tax form"
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

export default AddModal
