import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import HeaderDummy from '@common/components/Header/Dummy/index'
import StepsStates from '@common/components/StepsStates/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import { FilterTemplateDropdown } from '@common/components/ui/FiltersTemplate/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import Typography from '@common/components/ui/Typography/Typography'
import StatesModel from '@common/models/createOrder/statesModel'
import { fakeUserConstant } from '@common/models/user'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import StepOrderNegotiationOne, {
  StepOrderNegotiationThree, StepOrderNegotiationTwo
} from './Steps'
import styles from './style.module.scss'

const CreateOrderNegotiation = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <HeaderDummy logoText="Create Order">
        <StepsStates
          maxWidth="824px"
          states={StatesModel.getAll()}
          currentState={'Negotiation'}
          useBg={false}
          padding="0"
        />
      </HeaderDummy>

      <DynamicPadding desktop="33px" />

      <div className="wrapper_page">
        <Header />
        <DynamicPadding desktop="35px" />
        <Steps />
        <DynamicPadding desktop="48px" />
        <Nav nextDisabled={true} />
        <AskedQuestion margin="50px 0 0 0" />
      </div>
      <Footer />
    </div>
  )
}

const Header = (): JSX.Element => {
  return (
    <div className={styles.title_wrapper}>
      <Typography textTransform="uppercase" variant="titleBig">
        Negotiation
      </Typography>
      <div className="mobile">
        <div className={styles.template_icon}>
          <FilterTemplateDropdown />
        </div>
      </div>
      <div className={styles.top_image_wrapper}>
        <div className="gap_15">
          <div>
            <img
              src={fakeUserConstant.image}
              height={'40px'}
              width={'40px'}
              alt=""
            />
            <img
              style={{ marginLeft: '-10px' }}
              src={fakeUserConstant.image}
              height={'40px'}
              width={'40px'}
              alt=""
            />
          </div>
          <div className="desktop">
            <div className={styles.template_icon}>
              <FilterTemplateDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface NavProps {
  nextDisabled: boolean
}
const Nav = ({ nextDisabled }: NavProps): JSX.Element => {
  return (
    <div className={'flex_space_between'}>
      <Link to={'/create-order/details'}>
        <ChevronMoveTo
          variant="left"
          onClick={() => {}}
          text="Step back"
          title="cancel"
        />
      </Link>
      <Link
        to={'/create-order/negotiation'}
        style={{ pointerEvents: nextDisabled ? 'none' : 'auto' }}
      >
        <ChevronMoveTo
          disabled={nextDisabled}
          variant="right"
          onClick={() => {}}
          text="Next step"
          title="Posting"
        />
      </Link>
    </div>
  )
}

const Steps = (): JSX.Element => {
  const [stepOneText, setTextOneStep] = useState('')
  const [stepTwoText, setStepTwoText] = useState('')
  const [stepThree, setStepThree] = useState('')
  const [stepFour, setStepFour] = useState('')
  const [stepFive, setStepFive] = useState('')
  const [activeStep, setActiveStep] = useState<number>(1)

  const mapsStepsValues = {
    1: stepOneText,
    2: stepTwoText,
    3: stepThree,
    4: stepFour,
    5: stepFive,
  }

  const mapsItem = {
    1: (
      <StepOrderNegotiationOne
        callbackStep={item => {
          setActiveStep(item)
        }}
        value={stepOneText}
        callback={item => {
          setTextOneStep(item)
        }}
        help={
          <>
            <Typography variant="body3" fontWeight="500">
              Title examples
            </Typography>
            <DynamicPadding desktop="18px" mobile="20px" />
            <ul className={styles.ul_wrapper}>
              <li>
                <Typography variant="body4">
                  Build responsive WordPress site with booking/payment
                  functionality
                </Typography>
              </li>
              <li>
                <Typography variant="body4">
                  Graphic designer needed to design ad creative for multiple
                  campaigns
                </Typography>
              </li>
              <li>
                <Typography variant="body4">
                  Facebook ad specialist needed for product launch
                </Typography>
              </li>
            </ul>
          </>
        }
      />
    ),
    2: (
      <StepOrderNegotiationTwo
        callbackStep={item => {
          setActiveStep(item)
        }}
        stepOneValue={stepOneText}
        value={stepTwoText}
        callback={item => {
          setStepTwoText(item)
          console.log(item)
        }}
        help={
          <>
            <Typography variant="body3" fontWeight="500">
              Title 2 examples
            </Typography>
            <DynamicPadding desktop="18px" mobile="20px" />
            <ul className={styles.ul_wrapper}>
              <li>
                <Typography variant="body4">
                  Build responsive WordPress site with booking/payment
                  functionality
                </Typography>
              </li>
              <li>
                <Typography variant="body4">
                  Graphic designer needed to design ad creative for multiple
                  campaigns
                </Typography>
              </li>
              <li>
                <Typography variant="body4">
                  Facebook ad specialist needed for product launch
                </Typography>
              </li>
            </ul>
          </>
        }
      />
    ),
    3: (
      <StepOrderNegotiationThree
        callbackStep={item => {
          setActiveStep(item)
        }}
        value={stepThree}
        stepOneValue={stepOneText}
        stepTwoValue={stepTwoText}
        callback={item => {
          setStepThree(item)
        }}
        help={
          <>
            <Typography variant="body3" fontWeight="500">
              Title 3 examples
            </Typography>
            <DynamicPadding desktop="18px" mobile="20px" />
            <ul className={styles.ul_wrapper}>
              <li>
                <Typography variant="body4">
                  Build responsive WordPress site with booking/payment
                  functionality
                </Typography>
              </li>
              <li>
                <Typography variant="body4">
                  Graphic designer needed to design ad creative for multiple
                  campaigns
                </Typography>
              </li>
              <li>
                <Typography variant="body4">
                  Facebook ad specialist needed for product launch
                </Typography>
              </li>
            </ul>
          </>
        }
      />
    ),
  }

  const isLastStep = activeStep === Object.keys(mapsItem).length
  const isFirstStep = activeStep === 1
  const isNoActiveStep = mapsStepsValues[activeStep] === ''

  return (
    <div>
      {mapsItem[activeStep]}
      {!isLastStep && <DynamicPadding desktop="30px" mobile="20px" />}
      {!isLastStep && (
        <div style={{ justifyContent: 'end' }} className="gap_5">
          <MyButtonTransparent
            disabled={true}
            onClick={() => {
              setActiveStep(prev => prev - 1)
            }}
            fontWeight="500"
            textTransform="uppercase"
          >
            Prev
          </MyButtonTransparent>
          <MyButtonOrange
            disabled={isNoActiveStep}
            onClick={() => {
              setActiveStep(prev => prev + 1)
            }}
            fontWeight="500"
            textTransform="uppercase"
          >
            Next
          </MyButtonOrange>
          <div style={{ width: 'calc(70px + 388px)' }}></div>
        </div>
      )}

      {isLastStep && <DynamicPadding desktop="30px" mobile="20px" />}
      <div
        style={{
          display: isLastStep ? 'block' : 'none',
          transition: '0.2s',
        }}
        className={styles.text_box}
      >
        <Typography variant="body4">
          You can move to negotiation step and provide payment and delivery
          conditions.
        </Typography>
      </div>
    </div>
  )
}

export default CreateOrderNegotiation
