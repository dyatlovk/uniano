import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import HeaderDummy from '@common/components/Header/Dummy/index'
import StepsStates from '@common/components/StepsStates/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import {
  StepsResolver,
  StepActionNode,
  StepNav,
  StepResolverItem,
} from '@common/components/ui/StepsResolver/index'
import useUpdater from '@common/helpers/useUpdater'
import StatesModel from '@common/models/createService/statesModel'
import StepsNegotiationCustomerModel from '@common/models/services/stepsNegotiationCustomerModel'
import { useEffect, useState } from 'react'
import StepFive from './steps/Five'
import StepFour from './steps/Four'
import StepOne from './steps/One'
import StepSix from './steps/Six'
import StepThree from './steps/Three'
import StepTwo from './steps/Two'
import styles from './style.module.scss'

const stepsModel = new StepsNegotiationCustomerModel()

const CreateServiceDetails = (): JSX.Element => {
  const [stepsNeedUpdate, setStepsNeedUpdate] = useState<boolean>(false)
  const update = useUpdater()

  useEffect(() => {
    if (stepsModel.count() === 0) update()
    stepsModel.replace({
      steps: [
        {
          no: 1,
          title: 'WordPress site with booking/payment functionality',
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
              <StepActionNode title="Change Title" />
            </div>
          ),
          resolvingNode: (
            <StepOne
              onReady={(title: string) => {
                const curIndex = 1
                if (title.length > 0)
                  stepsModel.setReadyToResolve(curIndex, true)
                if (title.length == 0)
                  stepsModel.setReadyToResolve(curIndex, false)
                stepsModel.updateResolvedTitle(curIndex, title)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            />
          ),
        },
        {
          no: 2,
          title: 'WordPress',
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
              <StepActionNode title="Change Category" />
            </div>
          ),
          resolvingNode: (
            <StepTwo
              onReady={(title: string) => {
                const curIndex = 2
                if (title.length > 0)
                  stepsModel.setReadyToResolve(curIndex, true)
                if (title.length == 0)
                  stepsModel.setReadyToResolve(curIndex, false)
                stepsModel.updateResolvedTitle(curIndex, title)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            />
          ),
        },
        {
          no: 3,
          title: 'Select Attributes',
          isVisible: false,
          isActive: false,
          isResolved: false,
          isDisabled: false,
          actiondNode: (
            <div
              className={styles.link_hover}
              onClick={() => {
                stepsModel.setResolveMode(3)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            >
              <StepActionNode title="Change attribute" />
            </div>
          ),
          resolvingNode: (
            <StepThree
              id={3}
              onReady={(title: string) => {
                if (title.length > 0) stepsModel.setReadyToResolve(3, true)
                if (title.length == 0) stepsModel.setReadyToResolve(3, false)
                stepsModel.updateResolvedTitle(3, title)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            />
          ),
        },
        {
          no: 4,
          title: '3 images',
          isVisible: false,
          isActive: false,
          isResolved: false,
          isDisabled: false,
          actiondNode: (
            <div
              className={styles.link_hover}
              onClick={() => {
                stepsModel.setResolveMode(4)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            >
              <StepActionNode title="Change images" />
            </div>
          ),
          resolvingNode: (
            <StepFour
              onReady={title => {
                const curIndex = 4
                if (title.length > 0)
                  stepsModel.setReadyToResolve(curIndex, true)
                if (title.length == 0)
                  stepsModel.setReadyToResolve(curIndex, false)
                stepsModel.updateResolvedTitle(curIndex, title)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            />
          ),
        },
        {
          no: 5,
          title: 'Here is my description',
          isVisible: false,
          isActive: false,
          isResolved: false,
          isDisabled: false,
          actiondNode: (
            <div
              className={styles.link_hover}
              onClick={() => {
                stepsModel.setResolveMode(5)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            >
              <StepActionNode title="Change description" />
            </div>
          ),
          resolvingNode: (
            <StepFive
              onReady={(title: string) => {
                const curIndex = 5
                if (title.length > 0)
                  stepsModel.setReadyToResolve(curIndex, true)
                if (title.length == 0)
                  stepsModel.setReadyToResolve(curIndex, false)
                stepsModel.updateResolvedTitle(curIndex, title)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
              onAttach={(state: boolean) => {
                const thisIndex = 5
                const nextItem = stepsModel.findNext(thisIndex)
                if (state) {
                  stepsModel.setVisible(nextItem.no, true)
                  stepsModel.setReadyToResolve(thisIndex, true)
                  stepsModel.setDisabled(nextItem.no, false)
                }
                if (!state) {
                  stepsModel.setVisible(nextItem.no, false)
                  stepsModel.setReadyToResolve(thisIndex, false)
                  stepsModel.setDisabled(nextItem.no, true)
                }
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            />
          ),
        },
        {
          no: 6,
          title: 'Agreements.pdf',
          isVisible: false,
          isActive: false,
          isResolved: false,
          isDisabled: true,
          actiondNode: (
            <div
              className={styles.link_hover}
              onClick={() => {
                stepsModel.setResolveMode(6)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            >
              <StepActionNode title="Change documents" />
            </div>
          ),
          resolvingNode: (
            <StepSix
              onReady={(title: string) => {
                const curIndex = 6
                if (title.length > 0)
                  stepsModel.setReadyToResolve(curIndex, true)
                if (title.length == 0)
                  stepsModel.setReadyToResolve(curIndex, false)
                stepsModel.updateResolvedTitle(curIndex, title)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            />
          ),
        },
      ],
    })
  }, [])

  return (
    <div>
      <HeaderDummy logoText="Create Service">
        <StepsStates
          maxWidth="824px"
          states={StatesModel.getAll()}
          currentState={'Details'}
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
              <div style={{ width: '692px' }} key={item.no}>
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

export default CreateServiceDetails
