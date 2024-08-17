import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import HeaderDummy from '@common/components/Header/Dummy/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import StepsOfPreparing from '@common/components/StepsOfPreparing/index'
import StepsStates from '@common/components/StepsStates/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import TitleExampleUl from '@common/components/ui/TitleExampleUl/index'
import Typography from '@common/components/ui/Typography/Typography'
import StatesModel from '@common/models/createService/statesModel'
import AppColor from '@common/styles/variables-static'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

const CreateServiceDetails = (): JSX.Element => {
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
                <StepsOfPreparing
                  elements={[
                    {
                      text: 'WordPress site with booking/payment functionality',
                      solve: 'Change title',
                    },
                    {
                      text: 'WordPress',
                      solve: 'Change category',
                    },
                    {
                      text: 'Wordpress, website, new website, CMS',
                      solve: 'Change tags',
                    },
                    {
                      text: '3 images',
                      solve: 'Change images',
                    },
                    {
                      text: 'Here is my description',
                      solve: 'Change description',
                    },
                    {
                      text: 'Agreements.pdf',
                      solve: 'Change documents',
                    },
                  ]}
                />

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
                  <Link to={'/create-service/negotiation'}>
                    <ChevronMoveTo
                      variant="right"
                      onClick={() => {}}
                      text="Next step"
                      title="Negotiation"
                    />
                  </Link>
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

export default CreateServiceDetails
