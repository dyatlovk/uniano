import {
  DropDownBase,
  DropDownContext,
  DropDownSimpleItem,
} from '@common/components/ui/Dropdown/Base/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import PaymentCard from '@common/components/ui/PaymentCard/index'
import Slider from '@common/components/ui/Slider/Slider'
import Typography from '@common/components/ui/Typography/Typography'
import { useScreenSize } from '@common/helpers/useScreenSize'
import AppColor from '@common/styles/variables-static'
import { ReactNode, useState } from 'react'
import styles from './style.module.scss'

const MethodStep = ({ onReady }: Props): JSX.Element => {
  const [selected, setSelected] = useState<string>('')

  const selectHandler = (type: string) => {
    setSelected(type)
    onReady(type)
  }

  return (
    <>
      <div className={styles.payments_list}>
        <Payments
          isActive={selected === 'visa'}
          callback={selectHandler}
          type={'visa'}
          priceRange={'$10 - $30 000'}
          tax={'4.35% Fee + $0.18'}
        />
        <Payments
          isActive={selected === 'payoneer'}
          callback={selectHandler}
          type={'payoneer'}
          priceRange={'$10 - $30 000'}
          tax={'4% Fee'}
        />
        <Payments
          isActive={selected === 'paypal'}
          callback={selectHandler}
          type={'paypal'}
          priceRange={'$10 - $30 000'}
          tax={'1% Fee'}
        />
      </div>
      <DynamicPadding desktop="20px" />

      <SavedCards />
      <DynamicPadding desktop="20px" />

      <Typography>Card number</Typography>
      <DynamicPadding desktop="20px" />
      <InputCommon
        type={'number'}
        padding="15.5px 20px"
        placeholder="Card number"
        callback={() => {}}
      />
      <DynamicPadding desktop="20px" />

      <div className={styles.two_one}>
        <div className={styles.card_holder}>
          <Typography>Card holder</Typography>
          <InputCommon
            type={'number'}
            width="100%"
            padding="15.5px 20px"
            placeholder="Card holder"
            callback={() => {}}
          />
        </div>
        <div className={styles.expired}>
          <Typography>Expiry date</Typography>
          <div className={styles.dates}>
            <ExpiredDaySelect onSelect={(value: number) => {}} />
            <ExpiredYearSelect onSelect={(value: number) => {}} />
          </div>
        </div>
      </div>
    </>
  )
}

type PaymentsTypes = 'visa' | 'paypal' | 'payoneer'

interface PaymentsProps {
  type: PaymentsTypes
  priceRange: string
  tax: string
  isActive: boolean
  callback: (type: string) => void
}
const Payments = ({
  priceRange,
  tax,
  type,
  callback,
  isActive,
}: PaymentsProps): JSX.Element => {
  return (
    <div
      className={
        isActive ? styles.payment_type_item_active : styles.payment_type_item
      }
      onClick={() => {
        callback(type)
      }}
    >
      {type === 'visa' && <AppColor.visa height={23} />}
      {type === 'paypal' && <AppColor.paypal height={23} />}
      {type === 'payoneer' && <AppColor.payoneer height={23} />}
      <DynamicPadding desktop="20px" />
      <Typography variant="body4">{priceRange}</Typography>
      <Typography variant="body4">{tax}</Typography>
    </div>
  )
}

const SavedCards = (): JSX.Element => {
  const { width, height } = useScreenSize()

  return (
    <>
      <Typography>Saved cards</Typography>
      <Slider
        showDots={false}
        padding="0px 0px"
        maxShowCount={5}
        swiper={true}
        paddingBottom="10px"
        paddingTop="20px"
        elementsCount={2}
        itemWidth={630}
        gap={20}
        buttonSize={'25px'}
        buttonLeft="-12px"
        buttonRight="-12px"
      >
        <PaymentCard
          vendor={'visa'}
          numberLastFour={5312}
          holder={{
            name: 'Artem',
            lastName: 'Lastname',
          }}
          expired={{
            month: '04',
            year: '27',
          }}
          onDelete={() => {}}
        />
        <PaymentCard
          vendor={'visa'}
          numberLastFour={5312}
          holder={{
            name: 'Artem',
            lastName: 'Lastname',
          }}
          expired={{
            month: '04',
            year: '27',
          }}
          onDelete={() => {}}
        />
      </Slider>
    </>
  )
}

const ExpiredDaySelect = ({ onSelect }: ExpiryDateProps): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Day')

  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ]

  return (
    <>
      <DropDownContext.Provider
        value={{
          isVisible,
          setVisible,
          selectedItem,
          setSelectedItem,
          setSelectedNode,
          selectedNode,
          placeholder,
          setPlaceholder,
        }}
      >
        <DropDownBase
          useOverlappedList={true}
          selectBoxInnerSpace={true}
          listCss={{ maxHeight: '200px', overflowY: 'auto' }}
          selectBoxCss={{
            justifyContent: 'center',
            padding: '15.5px 20px',
            height: '50px',
          }}
        >
          {days.map((day, id) => (
            <DropDownSimpleItem
              key={id}
              css={{
                padding: '15.5px 20px',
              }}
              onSelect={id => {
                onSelect(id)
              }}
              data={{
                id: id,
                listNode: <>{day}</>,
              }}
            />
          ))}
        </DropDownBase>
      </DropDownContext.Provider>
    </>
  )
}

const ExpiredYearSelect = ({ onSelect }: ExpiryDateProps): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Year')

  const years = [2024, 2025, 2026, 2027]

  return (
    <>
      <DropDownContext.Provider
        value={{
          isVisible,
          setVisible,
          selectedItem,
          setSelectedItem,
          setSelectedNode,
          selectedNode,
          placeholder,
          setPlaceholder,
        }}
      >
        <DropDownBase
          useOverlappedList={true}
          selectBoxInnerSpace={true}
          listCss={{ maxHeight: '200px', overflowY: 'auto' }}
          selectBoxCss={{
            justifyContent: 'center',
            height: '50px',
            padding: '15.5px 20px',
          }}
        >
          {years.map((year, id) => (
            <DropDownSimpleItem
              key={id}
              css={{
                padding: '15.5px 20px',
              }}
              onSelect={id => {
                onSelect(id)
              }}
              data={{
                id: id,
                listNode: <>{year}</>,
              }}
            />
          ))}
        </DropDownBase>
      </DropDownContext.Provider>
    </>
  )
}

interface Props {
  onReady: (title: string) => void
}

interface ExpiryDateProps {
  onSelect: (value: number) => void
}

export default MethodStep
