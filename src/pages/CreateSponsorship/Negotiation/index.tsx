import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import HeaderDummy from '@common/components/Header/Dummy/index'
import StepsStates from '@common/components/StepsStates/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import {
  StepActionNode,
  StepNav,
  StepResolverItem,
  StepsResolver,
} from '@common/components/ui/StepsResolver/index'
import useUpdater from '@common/helpers/useUpdater'
import StepsNegotiationCustomerModel from '@common/models/services/stepsNegotiationCustomerModel'
import StatesModel from '@common/models/sponsorship/statesModel'
import { useEffect, useState } from 'react'
import Rewards from './steps/Rewards'
import Roadmap from './steps/Roadmap'
import styles from './style.module.scss'

const stepsModel = new StepsNegotiationCustomerModel()

const CreateSponsorshipNegotiation = () => {
  const update = useUpdater()
  const [stepsNeedUpdate, setStepsNeedUpdate] = useState<boolean>(false)

  useEffect(() => {
    if (stepsModel.count() === 0) update()
    stepsModel.append({
      no: 1,
      title: 'Select Rewards',
      isVisible: true,
      isActive: true,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div
          className={styles.link_hover}
          onClick={() => {
            stepsModel.setResolveMode(1)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        >
          <StepActionNode title="Change Rewards" />
        </div>
      ),
      resolvingNode: (
        <Rewards
          onReady={(title: string) => {
            const curIndex = 1
            if (title.length > 0) stepsModel.setReadyToResolve(curIndex, true)
            if (title.length == 0) stepsModel.setReadyToResolve(curIndex, false)
            stepsModel.updateResolvedTitle(curIndex, title)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        />
      ),
    })

    stepsModel.append({
      no: 2,
      title: 'Select Roadmap',
      isVisible: false,
      isActive: false,
      isResolved: false,
      isDisabled: false,
      actiondNode: (
        <div
          className={styles.link_hover}
          onClick={() => {
            stepsModel.setResolveMode(2)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        >
          <StepActionNode title="Change Roadmap" />
        </div>
      ),
      resolvingNode: (
        <Roadmap
          onReady={(title: string) => {
            const curIndex = 2
            if (title.length > 0) stepsModel.setReadyToResolve(curIndex, true)
            if (title.length == 0) stepsModel.setReadyToResolve(curIndex, false)
            stepsModel.updateResolvedTitle(curIndex, title)
            setStepsNeedUpdate(prev => !prev)
            update()
          }}
        />
      ),
    })

    return () => {
      stepsModel.clear()
    }
  }, [])

  return (
    <div>
      <HeaderDummy logoText="Create Sponsorship">
        <StepsStates
          maxWidth="824px"
          states={StatesModel.getAll()}
          currentState={'Negotiation'}
          useBg={false}
          padding="0"
        />
      </HeaderDummy>

      <DynamicPadding />

      <div className="wrapper_page">
        <StepsResolver needUpdate={stepsNeedUpdate}>
          {stepsModel.findVisible().map((item: StepsResolver.Item) => (
            <StepResolverItem
              key={item.no}
              onResolved={(no: number) => {}}
              forceUpdate={stepsNeedUpdate}
              data={item}
            >
              <div style={{ width: '692px' }}>
                <StepNav
                  onNext={() => {
                    stepsModel.goToNext(item)
                    update()
                  }}
                  onPrev={() => {
                    stepsModel.goToPrev(item)
                    update()
                  }}
                  nextVisible={true}
                  prevVisible={!stepsModel.isFirstItem(item.no)}
                  nextDisable={!stepsModel.isReadyToResolve(item.no)}
                  prevDisable={stepsModel.isFirstItem(item.no)}
                />
              </div>
            </StepResolverItem>
          ))}
        </StepsResolver>

        <AskedQuestion margin="50px 0 0 0" />
      </div>
      <Footer />
    </div>
  )
}

export default CreateSponsorshipNegotiation
