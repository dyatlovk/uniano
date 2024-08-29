import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import {
  DropDownBase,
  DropDownContext,
  DropDownSimpleItem,
} from '@common/components/ui/Dropdown/Base/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import TextDotted from '@common/components/ui/TextDotted/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { MouseEvent, ReactNode, useState } from 'react'
import RewardDropDownItem from './RewardDropDownItem'

interface Props {
  onCancel: () => void
  onAdd: () => void
}

const AddPromoModal = ({ onAdd, onCancel }: Props): JSX.Element => {
  return (
    <ModalCenterBasic
      desktopMinWidth="488px"
      desktopMaxWidth="488px"
      title={'Add promo'}
      callbackClose={() => {
        onCancel()
      }}
      bottomPartPadding={'30px'}
    >
      <div>
        <Typography textLineHeight="1">Title</Typography>
        <DynamicPadding desktop="25px" />
        <InputCommon
          placeholder={'Easy start'}
          callback={() => {}}
          padding={'15.5px'}
        />
        <DynamicPadding desktop="30px" />
      </div>

      <div>
        <Typography textLineHeight="1">Description</Typography>
        <DynamicPadding desktop="25px" />
        <InputCommon
          multiLine={true}
          placeholder={''}
          padding={'20px'}
          callback={() => {}}
        />
        <DynamicPadding desktop="30px" />
      </div>

      <ConditionSection />
      <DynamicPadding desktop="30px" />

      <RewardSection />
      <DynamicPadding desktop="30px" />

      <SalesSection />
      <DynamicPadding desktop="30px" />

      <TimeSection />
      <DynamicPadding desktop="30px" />

      <SummarySection />
      <DynamicPadding desktop="30px" />

      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <MyButtonTransparent
          fontWeight="500"
          textTransform="uppercase"
          onClick={() => {
            onCancel()
          }}
        >
          Cancel
        </MyButtonTransparent>
        <MyButtonOrange
          fontWeight="500"
          textTransform="uppercase"
          onClick={() => {
            onAdd()
          }}
        >
          Proceed $35 000
        </MyButtonOrange>
      </div>
    </ModalCenterBasic>
  )
}

const ConditionSection = (): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Value')

  return (
    <div>
      <Typography textLineHeight="1">Condition</Typography>
      <DynamicPadding desktop="25px" />
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
          selectBoxCss={{
            padding: '13px 20px',
          }}
        >
          <DropDownSimpleItem
            key={1}
            css={{ padding: '10px 20px' }}
            data={{
              id: 1,
              listNode: <>Minimum service purchase from $500</>,
            }}
          />
          <DropDownSimpleItem
            key={2}
            css={{ padding: '10px 20px' }}
            data={{
              id: 2,
              listNode: <>Purchase from $345</>,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </div>
  )
}

const RewardSection = (): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Value')

  return (
    <div>
      <Typography textLineHeight="1">Reward</Typography>
      <DynamicPadding desktop="25px" />
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
          selectBoxCss={{
            padding: '13px 20px',
          }}
        >
          <RewardDropDownItem
            key={1}
            css={{ padding: '10px 20px' }}
            data={{
              id: 1,
              listNode: <>35 bonuses</>,
            }}
          />
          <RewardDropDownItem
            key={2}
            css={{ padding: '10px 20px' }}
            data={{
              id: 2,
              listNode: <>20 bonuses</>,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </div>
  )
}

const SalesSection = (): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Value')

  return (
    <div>
      <Typography textLineHeight="1">Sales</Typography>
      <DynamicPadding desktop="25px" />
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
          selectBoxCss={{
            padding: '13px 20px',
          }}
        >
          <DropDownSimpleItem
            key={1}
            css={{ padding: '10px 20px' }}
            data={{
              id: 1,
              listNode: <>1000</>,
            }}
          />
          <DropDownSimpleItem
            key={2}
            css={{ padding: '10px 20px' }}
            data={{
              id: 2,
              listNode: <>2000</>,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </div>
  )
}

const TimeSection = (): JSX.Element => {
  return (
    <div>
      <Typography textLineHeight="1">Time Period</Typography>
      <DynamicPadding desktop="25px" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <AppColor.calendar fill={AppColor.transparentBlack} />
        <Typography color={AppColor.transparentBlack}>
          10/29/22 - 11/29/22
        </Typography>
      </div>
      <DynamicPadding desktop="20px" />
      <HorizontalLine />
    </div>
  )
}

const SummarySection = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography textLineHeight="1">Summary</Typography>
      <DynamicPadding desktop="25px" />

      <TextDotted
        text={'35000 bonuses'}
        startTextColor={AppColor.transparentBlack}
        endNode={'$35 000 (35x1000)'}
      />

      <TextDotted
        text={'Total To Pay'}
        startTextColor={AppColor.orange}
        endNode={'$35 000'}
      />
    </div>
  )
}

export default AddPromoModal
