import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import ModalButtonsSetup from '@common/components/ui/ModalButtons/index'
import {
  StepActionNode,
  StepResolverItem,
  StepsResolver,
} from '@common/components/ui/StepsResolver/index'
import useUpdater from '@common/helpers/useUpdater'
import StepsNegotiationCustomerModel from '@common/models/services/stepsNegotiationCustomerModel'
import { useEffect, useState } from 'react'

const AddTask = ({ onCancel, onSave, onClose }: Props): JSX.Element => {
  const [stepsNeedUpdate, setStepsNeedUpdate] = useState<boolean>(false)
  const [stepsModel, setStepsModel] =
    useState<StepsNegotiationCustomerModel | null>(null)
  const update = useUpdater()

  useEffect(() => {
    setStepsModel(new StepsNegotiationCustomerModel())
  }, [])

  useEffect(() => {
    if (!stepsModel) {
      update()
      return
    }
    if (stepsModel.count() === 0) update()
    stepsModel.append({
      no: 1,
      title: 'Getting started',
      isVisible: true,
      isActive: false,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div className="link_hover">
          <StepActionNode title="Change Guide" />
        </div>
      ),
      resolvingNode: <></>,
    })

    stepsModel.append({
      no: 2,
      title: 'Upload your profile picture',
      isVisible: true,
      isActive: false,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div className="link_hover">
          <StepActionNode title="Change task" />
        </div>
      ),
      resolvingNode: <></>,
    })

    stepsModel.append({
      no: 3,
      title: 'Profile link',
      isVisible: true,
      isActive: false,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div className="link_hover">
          <StepActionNode title="Change link" />
        </div>
      ),
      resolvingNode: <></>,
    })

    stepsModel.append({
      no: 4,
      title: 'Video prompt',
      isVisible: true,
      isActive: false,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div className="link_hover">
          <StepActionNode title="Change prompt" />
        </div>
      ),
      resolvingNode: <></>,
    })

    return () => {
      stepsModel.clear()
    }
  }, [stepsModel])

  return (
    <ModalCenterBasic
      title={'Add task'}
      callbackClose={() => {
        onClose()
      }}
      bottomPartPadding={'30px'}
      desktopMinWidth="792px"
      desktopMaxWidth="792px"
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
      <ModalButtonsSetup onCancel={() => onCancel()} onSave={() => onSave()} />
    </ModalCenterBasic>
  )
}

interface Props {
  onSave: () => void
  onCancel: () => void
  onClose: () => void
}

export default AddTask
