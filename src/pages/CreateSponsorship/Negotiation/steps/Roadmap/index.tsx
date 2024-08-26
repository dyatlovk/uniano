import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import styles from './style.module.scss'

interface Props {
  onReady: (title: string) => void
}

const Roadmap = ({ onReady }: Props): JSX.Element => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false)

  return (
    <ResponsiveLayoutTwo
      item1={
        <>
          <div className={styles.stage_items}>
            <StageItem
              title="New Combat Background"
              oldPrice="$5 000"
              price="$5 215"
              stepNo="1"
              percentReady={100}
              onEdit={() => {
                setShowAddModal(true)
              }}
            />
            <StageItem
              title="New Combat Background"
              oldPrice="$5 000"
              price="$3 215"
              stepNo="2"
              percentReady={50}
              onEdit={() => {
                setShowAddModal(true)
              }}
            />
          </div>
          <DynamicPadding desktop="30px" />
          <div className={styles.add_item}>
            <MyButtonOrange
              width="fit-content"
              textTransform="uppercase"
              fontWeight="500"
              padding="5px 10px"
              onClick={() => {
                setShowAddModal(true)
              }}
            >
              <AppColor.plusCircle
                width={12}
                height={12}
                fill={AppColor.white}
              />
              Add A Stage
            </MyButtonOrange>
          </div>

          {showAddModal && (
            <AddModal
              onClose={() => {
                setShowAddModal(false)
                onReady('Selected Roadmap')
              }}
              onApply={() => {}}
            />
          )}
        </>
      }
      item2={<Help />}
      gap="80px"
      item1MaxWidth="692px"
      item2MaxWidth="388px"
    />
  )
}

const Help = (): JSX.Element => {
  return (
    <div className={styles.right_text_box}>
      <Typography variant="body3" fontWeight="500">
        Title examples
      </Typography>
      <DynamicPadding desktop="18px" mobile="20px" />
      <ul className={styles.ul_wrapper}>
        <li>
          <Typography variant="body4">
            Build responsive WordPress site with booking/payment functionality
          </Typography>
        </li>
        <li>
          <Typography variant="body4">
            Graphic designer needed to design ad creative for multiple campaigns
          </Typography>
        </li>
        <li>
          <Typography variant="body4">
            Facebook ad specialist needed for product launch
          </Typography>
        </li>
      </ul>
    </div>
  )
}

interface AddModalProps {
  onClose: () => void
  onApply: () => void
}
const AddModal = ({ onClose }: AddModalProps): JSX.Element => {
  const [textreaCounter, setTextAreaCounter] = useState<number>(0)
  const [activeMoneySelection, setMoneySelection] = useState<string>('')
  const maxTextareaSymbols = 3000

  return (
    <ModalCenterBasic
      desktopMinWidth="832px"
      desktopMaxWidth="832px"
      title={'Add a stage'}
      callbackClose={() => {
        onClose()
      }}
      bottomPartPadding={'30px'}
    >
      <div>
        <Typography>Title</Typography>
        <DynamicPadding desktop="25px" />
        <InputCommon
          padding="15.5px"
          placeholder={'Easy start'}
          callback={() => {}}
        />
      </div>

      <DynamicPadding desktop="30px" />

      <div>
        <Typography>Description</Typography>
        <DynamicPadding desktop="25px" />
        <div className={styles.textarea}>
          <InputCommon
            multiLine={true}
            padding="20px"
            placeholder={''}
            callback={(item: string) => {
              setTextAreaCounter(item.length)
            }}
          />
          <DynamicPadding desktop="10px" />
          <div className={styles.counter}>
            <span>{textreaCounter}</span>
            <span>/</span>
            <span>{maxTextareaSymbols}</span>
          </div>
        </div>
      </div>

      <DynamicPadding desktop="30px" />

      <div>
        <Typography>Money Target</Typography>
        <DynamicPadding desktop="25px" />
        <div className="gap_20">
          <InputCommon
            padding="15px 30px"
            textAlingCenter={true}
            callback={item => {}}
            placeholder="Enter Target Manually"
            backgroundColor={AppColor.white}
            type="number"
            width="40%"
          />
          <MoneyTargetSection
            text="$5 500"
            activeText={activeMoneySelection}
            callback={() => {
              setMoneySelection('$5 500')
            }}
          />
          <MoneyTargetSection
            text="$6 500"
            activeText={activeMoneySelection}
            callback={() => {
              setMoneySelection('$6 500')
            }}
          />
          <MoneyTargetSection
            text="$20 500"
            activeText={activeMoneySelection}
            callback={() => {
              setMoneySelection('$20 500')
            }}
          />
        </div>
      </div>
    </ModalCenterBasic>
  )
}

interface MoneyTargetProps {
  text: string
  activeText: string
  callback: (item: string) => void
}
const MoneyTargetSection = ({
  activeText,
  callback,
  text,
}: MoneyTargetProps): JSX.Element => {
  return (
    <div
      style={{
        flexGrow: '1',
        border:
          activeText == text
            ? `1px solid ${AppColor.orange}`
            : '1px solid transparent',
      }}
      onClick={() => {
        callback(text)
      }}
      className={`${styles.select_money} cursor`}
    >
      <Typography
        variant="body4"
        fontWeight={activeText == text ? '500' : '400'}
        color={activeText == text ? AppColor.orange : AppColor.text}
      >
        {text}
      </Typography>
    </div>
  )
}

interface StageItemProps {
  stepNo: string
  title: string
  price: string
  oldPrice: string
  percentReady: number
  onEdit: () => void
}
const StageItem = ({
  oldPrice,
  price,
  stepNo,
  title,
  percentReady = 0,
  onEdit,
}: StageItemProps): JSX.Element => {
  const isReady = percentReady === 100

  return (
    <div className={styles.stage_item}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '5px',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Typography fontWeight="400" color={AppColor.transparentBlack}>
          Stage {stepNo}
        </Typography>
        {isReady && <AppColor.greenCheckTrue />}
      </div>
      <Typography>{title}</Typography>
      <DynamicPadding desktop="12px" />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '5px',
          width: '100%',
          alignItems: 'baseline',
        }}
      >
        <Typography textLineHeight="1" variant="body2">
          {price}
        </Typography>
        <Typography
          textLineHeight="1"
          color={AppColor.transparentBlack}
          variant="body4"
        >
          of {oldPrice}
        </Typography>
      </div>

      <div
        className={styles.stage_edit_icon}
        onClick={() => {
          onEdit()
        }}
      >
        <AppColor.edit fill={AppColor.text} />
      </div>

      <div
        style={{
          position: 'absolute',
          height: '2px',
          width: `${percentReady}%`,
          left: 0,
          bottom: 0,
          zIndex: 1,
          backgroundColor: isReady ? AppColor.green : AppColor.orange,
        }}
      ></div>
      <div
        style={{
          position: 'absolute',
          height: '2px',
          backgroundColor: '#A8A8AD',
          width: '100%',
          left: 0,
          bottom: 0,
        }}
      ></div>
    </div>
  )
}

export default Roadmap
