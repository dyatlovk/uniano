import { levelMap } from '@common/components/Footer/Footer'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import RadioButton from '@common/components/ui/RadioButton/index'
import SizeBox from '@common/components/ui/SizeBox/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import classNames from 'classnames'
import { useState } from 'react'
import styles from './style.module.scss'

interface Props {
  onAnySelectCallback: () => void
}
const PaymentOptions = ({ onAnySelectCallback }: Props): JSX.Element => {
  const [selectedSkillsLevel, setSelectedSkillsLevel] = useState<string[]>([])
  const [activePaymentMethod, setActivePaymentMethod] = useState<string>('')
  const [activeDeliveryMethod, setActiveDeliveryMethod] = useState<string>('')

  return (
    <div className={classNames(styles.container, styles.shadow_box)}>
      <div className={styles.container_head}>
        <div className={styles.payment}>
          <Typography variant="body4" fontWeight="500">
            What payment option would you like to choose?
          </Typography>
          <DynamicPadding desktop="20px" mobile="20px" />
          <div className={styles.first_grid}>
            <SelectItem
              activeItem={activePaymentMethod}
              callback={item => {
                setActivePaymentMethod(item)
                onAnySelectCallback()
              }}
              title="A fixed amount"
            />
            <SelectItem
              activeItem={activePaymentMethod}
              callback={item => {
                setActivePaymentMethod(item)
              }}
              title="Negotiable budget"
              isNegotiation={true}
            />
          </div>
        </div>
        <div className={styles.vertical_line}></div>
        <div className={styles.time}>
          <Typography variant="body4" fontWeight="500">
            What is your desired project time delivery?
          </Typography>
          <DynamicPadding desktop="20px" mobile="20px" />
          <div className={styles.first_grid}>
            <SelectItem
              activeItem={activeDeliveryMethod}
              callback={item => {
                setActiveDeliveryMethod(item)
                onAnySelectCallback()
              }}
              title="A fixed delivery"
              placeholder="* days"
            />
            <SelectItem
              activeItem={activeDeliveryMethod}
              callback={item => {
                setActiveDeliveryMethod(item)
                onAnySelectCallback()
              }}
              title="Negotiable delivery"
              isNegotiation={true}
              placeholder="* days"
            />
          </div>
        </div>
      </div>
      <div className={styles.container_footer}>
        <DynamicPadding desktop="30px" mobile="20px" />
        <Typography variant="body4">
          You will see results with{' '}
          <span style={{ fontWeight: '500', color: AppColor.orange }}>
            2 skill levels
          </span>{' '}
          only
        </Typography>
        <SizeBox height="5px" />
        <div className={styles.level_wrapper}>
          <LevelChoose
            activeSelected={selectedSkillsLevel}
            callback={item => {
              setSelectedSkillsLevel(item)
              onAnySelectCallback()
            }}
            lvl={1}
            priceRange="$30-$50"
            title="Beginner"
            titleColor="#B6DE59"
          />
          <LevelChoose
            activeSelected={selectedSkillsLevel}
            callback={item => {
              setSelectedSkillsLevel(item)
              onAnySelectCallback()
            }}
            lvl={2}
            priceRange=" $51 - $100"
            title="Junior"
            titleColor="#219653"
          />
          <LevelChoose
            activeSelected={selectedSkillsLevel}
            callback={item => {
              setSelectedSkillsLevel(item)
              onAnySelectCallback()
            }}
            lvl={3}
            priceRange="$101 - $300"
            title="Middle"
            titleColor="#F2C94C"
          />
          <LevelChoose
            activeSelected={selectedSkillsLevel}
            callback={item => {
              setSelectedSkillsLevel(item)
              onAnySelectCallback()
            }}
            lvl={4}
            priceRange="$301 - $500"
            title="Senior"
            titleColor="#F4A72A"
          />
          <LevelChoose
            activeSelected={selectedSkillsLevel}
            callback={item => {
              setSelectedSkillsLevel(item)
              onAnySelectCallback()
            }}
            lvl={5}
            priceRange=" starting at $501"
            title="Lead"
            titleColor="#EB5757"
          />
        </div>
      </div>
    </div>
  )
}

type SelectItemProps = {
  title: string
  isNegotiation?: boolean
  callback: (item: string) => void
  activeItem: string
  onlyText?: string
  placeholder?: string
}
const SelectItem = ({
  placeholder,
  activeItem,
  callback,
  title,
  isNegotiation,
  onlyText,
}: SelectItemProps) => {
  return (
    <div
      className={styles.select_item_input}
      onClick={() => {
        callback(title)
      }}
    >
      <RadioButton activeSelection={activeItem == title} text={title} />
      <SizeBox height="15px" />
      {onlyText ? (
        <Typography variant="body4" color={AppColor.transparentBlack}>
          {onlyText}
        </Typography>
      ) : !isNegotiation ? (
        <InputCommon
          width="115px"
          placeholder={placeholder ?? '$000'}
          callback={item => {
            callback(title)
          }}
        />
      ) : (
        <div className={styles.negotiation_box}>
          <InputCommon
            width="115px"
            placeholder={placeholder ?? '$000'}
            callback={item => {
              callback(title)
            }}
          />
          <div className={styles.line}></div>
          <InputCommon
            width="115px"
            placeholder={placeholder ?? '$000'}
            callback={item => {
              callback(title)
            }}
          />
        </div>
      )}
    </div>
  )
}

type LevelChooseProps = {
  title: string
  lvl: number
  priceRange: string
  titleColor: string
  activeSelected: string[]
  callback: (item: string[]) => void
}
const LevelChoose = ({
  titleColor,
  lvl,
  priceRange,
  title,
  activeSelected,
  callback,
}: LevelChooseProps) => {
  const levelItem = levelMap[lvl]

  const handleClick = () => {
    if (activeSelected.includes(title)) {
      const filtered = activeSelected.filter(item => item != title)
      callback(filtered)
      return
    }
    callback([...activeSelected, title])
  }
  return (
    <div
      style={{
        backgroundColor: activeSelected.includes(title)
          ? AppColor.white
          : 'white',
      }}
      className={styles.level_choose}
      onClick={handleClick}
    >
      {levelItem}
      <Typography color={titleColor} variant="body4" fontWeight="500">
        {title}
      </Typography>
      <Typography variant="body4">{priceRange}</Typography>
    </div>
  )
}

export default PaymentOptions
