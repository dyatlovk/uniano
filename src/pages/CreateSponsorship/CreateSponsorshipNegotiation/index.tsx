import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import HeaderDummy from '@common/components/Header/Dummy/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import StepsOfPreparing from '@common/components/StepsOfPreparing/index'
import StepsStates from '@common/components/StepsStates/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import { FilterTemplateDropdown } from '@common/components/ui/FiltersTemplate/index'
import Typography from '@common/components/ui/Typography/Typography'
import StatesModel from '@common/models/sponsorship/statesModel'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'

const CreateSponsorshipNegotiation = () => {
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
                    Negotiation
                  </Typography>
                  <div className="mobile">
                    <div className={styles.template_icon}>
                      <FilterTemplateDropdown />
                    </div>
                  </div>
                </div>
                <DynamicPadding desktop="36px" />
                <StepsOfPreparing
                  elements={[
                    {
                      text: 'Without reward,Easy start,Pro version',
                      solve: 'Change reward',
                    },
                    {
                      text: '3 stages',
                      solve: 'Change roadmap',
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
                  <ChevronMoveTo
                    variant="right"
                    onClick={() => {}}
                    text="Next step"
                    title="posting"
                  />
                </div>
              </div>
            </div>
          }
          item2={
            <div>
              <div>
                <div className={styles.top_image_wrapper}>
                  <div className="gap_15">
                    <img
                      src={fakeUserConstant.image}
                      height={'40px'}
                      width={'40px'}
                      alt=""
                    />
                    <AppColor.longChevronRight />
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

                <DynamicPadding />

                <div className={styles.right_text_box}>
                  <Typography variant="body3" fontWeight="500">
                    Title examples
                  </Typography>
                  <DynamicPadding desktop="30px" mobile="20px" />
                  <ul className={styles.ul_wrapper}>
                    <li>
                      <Typography variant="body4">
                        Build responsive WordPress site with booking/payment
                        functionality
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body4">
                        Graphic designer needed to design ad creative for
                        multiple campaigns
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body4">
                        Facebook ad specialist needed for product launch
                      </Typography>
                    </li>
                  </ul>
                </div>
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

export default CreateSponsorshipNegotiation
