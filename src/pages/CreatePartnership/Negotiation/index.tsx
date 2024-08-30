import AskedQuestion from '@common/components/AskedQuestions/index'
import ButtonChooseList from '@common/components/ButtonChooseList/index'
import Footer from '@common/components/Footer/Footer'
import HeaderDummy from '@common/components/Header/Dummy/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import StepsStates from '@common/components/StepsStates/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import TitleExampleUl from '@common/components/ui/TitleExampleUl/index'
import Typography from '@common/components/ui/Typography/Typography'
import StatesModel from '@common/models/partnership/createModel'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

const CreatePartnershipNegotiation = (): JSX.Element => {
  const [useOrders, setUseOrders] = useState<boolean>(false)

  return (
    <div>
      <HeaderDummy logoText="Create Partnership">
        <StepsStates
          maxWidth="824px"
          states={StatesModel.getAll()}
          currentState={'Negotiation'}
          useBg={false}
          padding="0"
        />
      </HeaderDummy>

      <DynamicPadding desktop="50px" />

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
            <div>
              <div className={styles.title_wrapper}>
                <Typography
                  textTransform="uppercase"
                  variant="titleBig"
                  textLineHeight="1"
                >
                  Negotiation
                </Typography>
              </div>
              <DynamicPadding desktop="45px" />
              <ButtonChooseList
                callback={() => {}}
                buttons={['Service', 'Orders', 'Subscriptions']}
                initValue="Service"
                buttonPadding={'5px 13px'}
                gap={''}
              />
              <DynamicPadding desktop="30px" mobile="20px" />

              <div className={styles.orders_switch}>
                <SwitchButton
                  height="24px"
                  width="44px"
                  startValue={useOrders}
                  callback={(state: boolean) => {
                    setUseOrders(state)
                  }}
                />
                User orders
              </div>

              <DynamicPadding desktop="30px" mobile="20px" />

              <List isOrdersActive={useOrders} />

              <DynamicPadding desktop="50px" />

              <div className={styles.text_box}>
                <Typography variant="body4">
                  You can move to negotiation step and provide payment and
                  delivery conditions.
                </Typography>
              </div>

              <DynamicPadding desktop="50px" />

              <div className={'flex_space_between'}>
                <ChevronMoveTo
                  variant="left"
                  onClick={() => {}}
                  text="Step back"
                  title="cancel"
                />
                <Link to={'/create-partnership/posting'}>
                  <ChevronMoveTo
                    variant="right"
                    onClick={() => {}}
                    text="Next step"
                    title="Posting"
                  />
                </Link>
              </div>
            </div>
          }
          item2={
            <div>
              <div className={styles.top_image_wrapper}>
                <div className="gap_15">
                  <div className="desktop">
                    <div className={styles.template_icon}>
                      <AppColor.template />
                    </div>
                  </div>
                </div>
              </div>

              <DynamicPadding />

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

interface ListProps {
  isOrdersActive: boolean
}
const List = ({ isOrdersActive }: ListProps): JSX.Element => {
  return (
    <div className={styles.list}>
      <div className={styles.list_item}>
        <MyCheckbox width={'22px'} height={'22px'} />
        <TextDotted
          text={'Orders Referal Rate'}
          startTextColor={AppColor.transparentBlack}
          endNode={<AppColor.iconChecked color={AppColor.green} />}
          fontWeightEndText="500"
        />
      </div>
      <div className={styles.list_item}>
        <MyCheckbox width={'22px'} height={'22px'} />
        <TextDotted
          text={'Orders Manager Rate'}
          startTextColor={AppColor.transparentBlack}
          endNode={<AppColor.iconChecked color={AppColor.green} />}
          fontWeightEndText="500"
        />
      </div>
      <div
        className={
          isOrdersActive ? styles.list_item : styles.list_item_disabled
        }
      >
        <MyCheckbox width={'22px'} height={'22px'} disabled={!isOrdersActive} />
        <TextDotted
          text={'Access to chat with customers'}
          startTextColor={AppColor.transparentBlack}
          endNode={<AppColor.iconChecked color={AppColor.green} />}
          fontWeightEndText="500"
        />
      </div>
      <div
        className={
          isOrdersActive ? styles.list_item : styles.list_item_disabled
        }
      >
        <MyCheckbox width={'22px'} height={'22px'} disabled={!isOrdersActive} />
        <TextDotted
          text={'Access to "Selection" stage'}
          startTextColor={AppColor.transparentBlack}
          endNode={<AppColor.iconChecked color={AppColor.green} />}
          fontWeightEndText="500"
        />
      </div>
      <div
        className={
          isOrdersActive ? styles.list_item : styles.list_item_disabled
        }
      >
        <MyCheckbox width={'22px'} height={'22px'} disabled={!isOrdersActive} />
        <TextDotted
          text={'Access to "Negotiation" stage'}
          startTextColor={AppColor.transparentBlack}
          endNode={<AppColor.iconChecked color={AppColor.green} />}
          fontWeightEndText="500"
        />
      </div>
      <div
        className={
          isOrdersActive ? styles.list_item : styles.list_item_disabled
        }
      >
        <MyCheckbox width={'22px'} height={'22px'} disabled={!isOrdersActive} />
        <TextDotted
          text={'Access to "Progress" stage'}
          startTextColor={AppColor.transparentBlack}
          endNode={<AppColor.iconChecked color={AppColor.green} />}
          fontWeightEndText="500"
        />
      </div>
      <div
        className={
          isOrdersActive ? styles.list_item : styles.list_item_disabled
        }
      >
        <MyCheckbox width={'22px'} height={'22px'} disabled={!isOrdersActive} />
        <TextDotted
          text={'Access to "Completed" stage'}
          startTextColor={AppColor.transparentBlack}
          endNode={<AppColor.iconChecked color={AppColor.green} />}
          fontWeightEndText="500"
        />
      </div>
    </div>
  )
}

export default CreatePartnershipNegotiation
