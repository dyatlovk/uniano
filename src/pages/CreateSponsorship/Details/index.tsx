import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import HeaderDummy from '@common/components/Header/Dummy/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import StepsStates from '@common/components/StepsStates/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import {
  StepActionNode,
  StepNav,
  StepResolverItem,
  StepsResolver,
} from '@common/components/ui/StepsResolver/index'
import TitleExampleUl from '@common/components/ui/TitleExampleUl/index'
import Typography from '@common/components/ui/Typography/Typography'
import useUpdater from '@common/helpers/useUpdater'
import StepsNegotiationCustomerModel from '@common/models/services/stepsNegotiationCustomerModel'
import StatesModel from '@common/models/sponsorship/statesModel'
import AppColor from '@common/styles/variables-static'
import { useEffect, useState } from 'react'
import StepSix from './steps/Six'
import StepFive from './steps/Five'
import StepFour from './steps/Four'
import StepOne from './steps/One'
import StepThree from './steps/Three'
import StepTwo from './steps/Two'
import styles from './style.module.scss'

const stepsModel = new StepsNegotiationCustomerModel()

const CreateSponsorshipDetails = () => {
  const update = useUpdater()
  const [stepsNeedUpdate, setStepsNeedUpdate] = useState<boolean>(false)

  useEffect(() => {
    if (stepsModel.count() === 0) update()
    stepsModel.replace({
      steps: [
        {
          no: 1,
          title: 'WordPress site with booking/payment functionality',
          isVisible: true,
          isActive: false,
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
                stepsModel.setReadyToResolve(1, true)
                stepsModel.updateResolvedTitle(1, title)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            />
          ),
        },
        {
          no: 2,
          title: 'WordPress',
          isVisible: true,
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
              <StepActionNode title="Change documents to sign" />
            </div>
          ),
          resolvingNode: (
            <StepTwo
              onReady={(title: string) => {
                if (title.length > 0) stepsModel.setReadyToResolve(2, true)
                if (title.length == 0) stepsModel.setReadyToResolve(2, false)
                stepsModel.updateResolvedTitle(2, title)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            />
          ),
        },
        {
          no: 3,
          title: 'WordPress, website, new website, CMS',
          isVisible: true,
          isActive: false,
          isResolved: false,
          isDisabled: false,
          actiondNode: (
            <div
              className={styles.link_hover}
              onClick={() => {
                stepsModel.setResolveMode(3)
                setStepsNeedUpdate(prev => !prev)
                stepsModel.setReadyToResolve(3, true)
                update()
              }}
            >
              <StepActionNode title="Change tags" />
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
          isVisible: true,
          isActive: false,
          isResolved: false,
          isDisabled: false,
          actiondNode: (
            <div
              className={styles.link_hover}
              onClick={() => {
                stepsModel.setResolveMode(4)
                stepsModel.setReadyToResolve(4, true)
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
                stepsModel.setReadyToResolve(4, true)
                stepsModel.updateResolvedTitle(4, title)
                setStepsNeedUpdate(prev => !prev)
                update()
              }}
            />
          ),
        },
        {
          no: 5,
          title: 'Here is my description',
          isVisible: true,
          isActive: false,
          isResolved: false,
          isDisabled: false,
          actiondNode: (
            <div
              className={styles.link_hover}
              onClick={() => {
                stepsModel.setResolveMode(5)
                setStepsNeedUpdate(prev => !prev)
                stepsModel.setReadyToResolve(5, false)
                update()
              }}
            >
              <StepActionNode title="Change description" />
            </div>
          ),
          resolvingNode: (
            <StepFive
              onReady={(title: string) => {
                const thisIndex = 5
                const nextItem = stepsModel.findNext(thisIndex)
                stepsModel.setReadyToResolve(thisIndex, true)
                stepsModel.updateResolvedTitle(thisIndex, title)
                stepsModel.setDisabled(nextItem.no, true)
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
                const thisIndex = 6
                stepsModel.setResolveMode(thisIndex)
                setStepsNeedUpdate(prev => !prev)
                stepsModel.setReadyToResolve(thisIndex, true)
                update()
              }}
            >
              <StepActionNode title="Change documents" />
            </div>
          ),
          resolvingNode: (
            <StepSix
              onReady={(title: string) => {
                const thisIndex = 6
                stepsModel.setReadyToResolve(thisIndex, true)
                stepsModel.updateResolvedTitle(thisIndex, title)
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
      <HeaderDummy logoText="Create Sponsorship">
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
        <ResponsiveLayoutTwo
          orderItem1Desktop={0}
          orderItem1Mobile={1}
          orderItem2Desktop={1}
          orderItem2Mobile={0}
          gap="80px"
          item1MaxWidth="732px"
          item2MaxWidth="388px"
          item1={
            <div style={{ marginTop: '-16px' }}>
              <div>
                <div className={styles.title_wrapper}>
                  <Typography textTransform="uppercase" variant="titleBig">
                    Details
                  </Typography>
                  <div className="mobile">
                    <div className={styles.template_icon}>
                      <AppColor.template />
                    </div>
                  </div>
                </div>
                <DynamicPadding desktop="36px" />

                <StepsResolver needUpdate={stepsNeedUpdate}>
                  {stepsModel.findVisible().map((item: StepsResolver.Item) => (
                    <StepResolverItem
                      key={item.no}
                      onResolved={(no: number) => {}}
                      forceUpdate={stepsNeedUpdate}
                      data={item}
                    >
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
                    </StepResolverItem>
                  ))}
                </StepsResolver>

                <DynamicPadding desktop="20px" />

                <div className={styles.text_box}>
                  <Typography variant="body4">
                    You can move to negotiation step and provide payment and
                    delivery conditions.
                  </Typography>
                </div>

                <DynamicPadding desktop="47px" />

                <div className={'flex_space_between'}>
                  <ChevronMoveTo
                    variant="left"
                    onClick={() => {}}
                    text="Step back"
                    title="cancel"
                  />
                  <ChevronMoveTo
                    variant="right"
                    onClick={() => {}}
                    text="Next step"
                    title="Negotiation"
                  />
                </div>
              </div>
            </div>
          }
          item2={
            <div>
              <div className="desktop">
                <TitleExampleUl />
              </div>
            </div>
          }
        />
        <AskedQuestion margin="50px 0 0 0" />
      </div>
      <Footer />
    </div>
  )
}

export default CreateSponsorshipDetails
