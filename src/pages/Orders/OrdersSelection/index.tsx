import AskedQuestion from '@common/components/AskedQuestions/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import Footer from '@common/components/Footer/Footer'
import Header from '@common/components/Header/Header/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import StepsStates from '@common/components/StepsStates/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import MyButtonTransparentBlack from '@common/components/ui/MyButton/variants/MyButtonTransparentBlack'
import NavBarLineBlack from '@common/components/ui/NavBarLineBlack/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import DropdownNumber from '@common/components/ui/SearchFilterBar/components/DropdownNumber/index'
import Typography from '@common/components/ui/Typography/Typography'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import { useScreenSize } from '@common/helpers/useScreenSize'
import StatesModel from '@common/models/orders/statesModel'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardsGroup from './components/CardsGroup'
import styles from './style.module.scss'

const OrdersSelection = () => {
  const { width, height } = useScreenSize()
  const arrayHistory = ['Order', 'Development ', 'Web Development', 'WordPress']
  const title = 'Logo by sample in vector in maximum quality'
  const [activeSelection, setActiveSelection] = useState('New')
  const [itemsToshow, setItemsToShow] = useState([])

  useEffect(() => {
    const arrayLengthStart = width <= 768 ? 4 : 9

    setItemsToShow(
      Array.from({ length: arrayLengthStart }, (a, index) => index)
    )
  }, [width])

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <Header />

      <div className={styles.steps_wrap}>
        <div className="wrapper">
          <StepsStates
            useBg={false}
            maxWidth="100%"
            states={StatesModel.getAll()}
            currentState={'Selection'}
          />
        </div>
      </div>

      <div className={'wrapper_page'}>
        <PageDetails
          historyNode={
            <NavigationItem image={<AppColor.home />} textList={arrayHistory} />
          }
          pageTitle={title}
        />
        <DynamicPadding desktop="14px" mobile="20px" />
        <UserTopPageInfo settings={true} user={fakeUserConstant} />
        <DynamicPadding desktop="51px" />

        <div className={styles.main_part}>
          <div className={styles.left_part}>
            <InputCommon placeholder="Search" callback={() => {}} />
            <DynamicPadding desktop="40px" />

            <div className={styles.selection_wrapper}>
              <SelectionItem
                icon={<AppColor.newIcon width={'34px'} />}
                text="New"
                count="4"
                color={AppColor.text}
                onClick={item => {
                  setActiveSelection(item)
                }}
                activeItem={activeSelection}
              />
              <SelectionItem
                icon={<AppColor.shortlisted width={'34px'} />}
                text="Shortlisted"
                count="4"
                color={'#01010150'}
                onClick={item => {
                  setActiveSelection(item)
                }}
                activeItem={activeSelection}
              />
              <SelectionItem
                icon={
                  <AppColor.close
                    width={'34px'}
                    height={'32px'}
                    fill={AppColor.red}
                  />
                }
                text="Cancelled"
                count="0"
                color={'#01010150'}
                onClick={item => {
                  setActiveSelection(item)
                }}
                activeItem={activeSelection}
              />

              {width > 768 && (
                <div>
                  <DynamicPadding desktop="10px" mobile="0px" />
                  <HorizontalLine />
                  <DynamicPadding desktop="10px" mobile="0px" />
                </div>
              )}
              <SelectionItem
                icon={<AppColor.hired width={'34px'} />}
                text="Hired"
                count="4"
                color={AppColor.green}
                onClick={item => {
                  setActiveSelection(item)
                }}
                activeItem={activeSelection}
              />
            </div>
          </div>
          <div className={styles.right_part}>
            <div className={styles.justify_flex}>
              <Typography variant="body4">
                <span style={{ fontWeight: '500' }}>4</span>{' '}
                {activeSelection.toLowerCase()} freelancers
              </Typography>
              <div className={styles.flex_center}>
                <div className={styles.gap_5}>
                  <AppColor.filter />
                  <Typography
                    variant="body4"
                    fontWeight="500"
                    color={AppColor.transparentBlack}
                    textTransform="uppercase"
                  >
                    Filters
                  </Typography>
                </div>
                <div className={styles.gap_5}>
                  <AppColor.recent />
                  <Typography
                    variant="body4"
                    fontWeight="500"
                    color={AppColor.transparentBlack}
                    textTransform="uppercase"
                  >
                    Most recent
                  </Typography>
                </div>
                <DropdownNumber />
              </div>
            </div>
            <DynamicPadding />

            <CardsGroup items={itemsToshow} />

            <DynamicPadding desktop="30px" mobile="20px" />
            <div className={styles.justify_center}>
              <MyButtonTransparentBlack
                textTransform="uppercase"
                fontWeight="500"
                onClick={() => {
                  setItemsToShow(prev => [...prev, 1, 2, 3])
                }}
              >
                Show more +3
              </MyButtonTransparentBlack>
            </div>
            <DynamicPadding desktop="30px" mobile="20px" />
            <div className={styles.justify_center}>
              <NavBarLineBlack callback={() => {}} maxCountPage={100} />
            </div>
            <DynamicPadding desktop='49px' />
            <div className={styles.justify_flex}>
              <Link to={'/partnership/program'}>
                <ChevronMoveTo
                  variant="left"
                  onClick={() => {}}
                  text="Step back"
                  title="program"
                />
              </Link>
              <Link to={'/partnership/freelancer/progress'}>
                <ChevronMoveTo
                  variant="right"
                  onClick={() => {}}
                  text="Next step"
                  title="progress"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CardsSliderRelated secondSlider={true} />
      <div className="wrapper_page">
        <AskedQuestion />
      </div>
      <Footer />
    </div>
  )
}

type SelectionItemProps = {
  icon: any
  text: string
  count: string
  color: string
  onClick: (item: string) => void
  activeItem: string
}
export const SelectionItem = ({
  icon,
  text,
  color,
  count,
  onClick,
  activeItem,
}: SelectionItemProps) => {
  return (
    <div
      style={{
        backgroundColor: activeItem == text ? AppColor.white : 'white',
      }}
      onClick={() => {
        onClick(text)
      }}
      className={styles.selection_item}
    >
      {icon}
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <Typography
          variant="body4"
          color={activeItem === text ? AppColor.text : '#01010150'}
          fontWeight={activeItem === text ? '500' : '400'}
        >
          {text}
        </Typography>
        <Typography
          color={activeItem === text ? AppColor.text : '#01010150'}
          fontWeight={activeItem === text ? '500' : '400'}
          variant="body4"
        >
          ({count})
        </Typography>
      </div>
    </div>
  )
}

export default OrdersSelection
