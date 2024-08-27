import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import DetailsTable from '@common/components/ui/DetailsTable/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import RadioButton from '@common/components/ui/RadioButton/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import styles from './style.module.scss'

interface Props {
  onClose: () => void
  onAdd: () => void
  onCancel: () => void
}
const OptionsModal = ({ onAdd, onCancel, onClose }: Props): JSX.Element => {
  const [promptInputCounter, setPromptInputCounter] = useState<number>(0)
  const promptInputCounterMax = 100

  return (
    <ModalCenterBasic
      desktopMaxWidth="600px"
      desktopMinWidth="600px"
      mobileMaxWidth="100%"
      mobileMinWidth="100%"
      prevClose={true}
      title={'Add own inclusion & option'}
      callbackClose={() => {
        onClose()
      }}
      bottomPartPadding={'30px'}
    >
      <Typography textLineHeight="1">Iclusion Title</Typography>
      <DynamicPadding desktop="30px" />
      <InputCommon
        padding="15.5px"
        placeholder={'My inclusion'}
        callback={() => {}}
      />
      <DynamicPadding desktop="30px" />

      <div className={styles.type}>
        <Typography>Type</Typography>
        <span className={styles.info_circle}>
          <AppColor.info />
        </span>
      </div>
      <DynamicPadding desktop="20px" />
      <div>
        <RadioButton key={1} text="Counter" />
        <RadioButton key={2} text="Boolean" />
      </div>
      <DynamicPadding desktop="30px" />

      <div className={styles.type}>
        <Typography>Customer Prompt</Typography>
        <span className={styles.info_circle}>
          <AppColor.info />
        </span>
      </div>
      <DynamicPadding desktop="30px" />
      <InputCommon
        multiLine={true}
        padding="15.5px"
        maxSymbolCount={promptInputCounterMax}
        placeholder={'Write cutomer prompt'}
        callback={(chars: string) => {
          setPromptInputCounter(chars.length)
        }}
      />
      <DynamicPadding desktop="10px" />
      <div className={styles.input_counter}>
        <span>{promptInputCounter}</span>
        <span>/</span>
        <span>{promptInputCounterMax}</span>
      </div>
      <DynamicPadding desktop="30px" />

      <Typography textLineHeight="1">Option title</Typography>
      <DynamicPadding desktop="30px" />
      <InputCommon
        multiLine={false}
        padding="15.5px"
        placeholder={'Add my inclusion'}
        callback={() => {}}
      />
      <DynamicPadding desktop="30px" />
      <DetailsTable
        endIcon={<></>}
        removeNavBar={true}
        removeThreeLines={true}
        details={[
          {
            title: 'Counter',
            child: <div>1</div>,
          },
          {
            title: 'Fixed&Milestone',
            child: <div className={styles.box_shadow}>+3 days</div>,
          },
          {
            title: 'Delivery',
            child: <div className={styles.box_shadow}>+$300</div>,
          },
        ]}
        filters={[]}
        callbackNav={() => {}}
      />
      <DynamicPadding desktop="30px" />

      <div className={styles.footer}>
        <div onClick={() => {}}>
          <AppColor.plusCircle />
        </div>
        <div className={styles.footer_btns}>
          <MyButtonTransparent
            textTransform="uppercase"
            fontWeight="500"
            onClick={() => {
              onCancel()
            }}
          >
            Cancel
          </MyButtonTransparent>
          <MyButtonOrange
            textTransform="uppercase"
            fontWeight="500"
            onClick={() => {
              onAdd()
            }}
          >
            Add
          </MyButtonOrange>
        </div>
      </div>
    </ModalCenterBasic>
  )
}

export default OptionsModal
