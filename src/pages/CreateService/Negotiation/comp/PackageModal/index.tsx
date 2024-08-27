import ButtonChooseList from '@common/components/ButtonChooseList/index'
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import {
  DropDownBase,
  DropDownContext,
  DropDownOverlapped
} from '@common/components/ui/Dropdown/Base/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { ReactNode, useState } from 'react'
import styles from './style.module.scss'

interface Props {
  onCancel: () => void
  onSave: () => void
  onAddOptionsClick: () => void
}
const PackageModal = ({
  onCancel,
  onSave,
  onAddOptionsClick,
}: Props): JSX.Element => {
  return (
    <ModalCenterBasic
      title={'Add package'}
      callbackClose={() => {
        onCancel()
      }}
      desktopMaxWidth={'439px'}
      desktopMinWidth={'439px'}
      bottomPartPadding={'30px'}
    >
      <Typography textLineHeight="1">Title</Typography>
      <DynamicPadding desktop="30px" />
      <InputCommon
        placeholder={'Easy Start'}
        callback={() => {}}
        padding="15.5px"
      />
      <DynamicPadding desktop="30px" />
      <ButtonChooseList
        initValue="Fixed"
        callback={() => {}}
        buttons={['Fixed', 'Milestones']}
        buttonPadding={'2px 12px'}
        gap={''}
      />
      <DynamicPadding desktop="30px" />
      <div className={styles.fixed_milestones}>
        <Typography variant="body4">Use fixed milestones</Typography>
        <SwitchButton width="44px" height="24px" />
        <div className={styles.info_circle}>
          <AppColor.info />
        </div>
      </div>
      <DynamicPadding desktop="30px" />
      <ButtonChooseList
        initValue="Milestones 1"
        callback={() => {}}
        buttons={['Milestones 1', 'Milestones 2']}
        buttonPadding={'2px 12px'}
        gap={''}
      />
      <DynamicPadding desktop="30px" />

      <Typography textLineHeight="1">Milestone Title</Typography>
      <DynamicPadding desktop="30px" />
      <InputCommon
        placeholder={'First draft'}
        callback={() => {}}
        padding="15.5px"
      />
      <DynamicPadding desktop="30px" />

      <Typography textLineHeight="1">Milestone Description</Typography>
      <DynamicPadding desktop="30px" />
      <InputCommon
        placeholder={''}
        multiLine={true}
        callback={() => {}}
        padding="15.5px"
      />
      <DynamicPadding desktop="30px" />

      <Typography textLineHeight="1">Milestone Price</Typography>
      <DynamicPadding desktop="20px" />
      <div className={styles.list_dot}>
        <Typography variant="body4">
          Your skill is{' '}
          <span style={{ color: AppColor.red, fontWeight: '500' }}>Lead</span>.
          You will lose rewards if you work with this price.
        </Typography>
      </div>
      <DynamicPadding desktop="20px" />
      <PriceDropDown />
      <DynamicPadding desktop="30px" />

      <IncludesSection />
      <DynamicPadding desktop="30px" />

      <OptionsSection />
      <DynamicPadding desktop="30px" />

      <div className={styles.add_package_footer}>
        <div
        className={styles.open_option_modal}
          onClick={() => {
            onAddOptionsClick()
          }}
        >
          <Typography variant="body5" fontWeight="500" color={AppColor.orange}>
            Add own inclusion & option
          </Typography>
        </div>
        <div className={styles.add_package_btns}>
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
              onSave()
            }}
          >
            Save
          </MyButtonOrange>
        </div>
      </div>
    </ModalCenterBasic>
  )
}

const PriceDropDown = (): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select Value')

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
          selectBoxInnerSpace={false}
          useOverlappedList={true}
          selectBoxCss={{ justifyContent: 'center' }}
        >
          <DropDownOverlapped
            key={1}
            data={{
              id: 1,
              listNode: <span>$350</span>,
            }}
          />
          <DropDownOverlapped
            key={2}
            data={{
              id: 2,
              listNode: <span>$250</span>,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </>
  )
}

const IncludesSection = (): JSX.Element => {
  return (
    <>
      <Typography>Includes</Typography>
      <DynamicPadding desktop="30px" />

      <div className={styles.include_items}>
        <div className={styles.include_item}>
          <MyCheckbox width={'22px'} height={'22px'} />
          <TextDotted
            text={'Revisions'}
            info={true}
            endNode={
              <div className={styles.item_tools}>
                <span>2</span>
                <span className={styles.item_tool}>
                  <AppColor.close fill={AppColor.red} width={16} height={16} />
                </span>
                <span className={styles.item_tool}>
                  <AppColor.edit
                    width={16}
                    height={16}
                    fill={AppColor.transparentBlack}
                  />
                </span>
              </div>
            }
            startTextColor={AppColor.transparentBlack}
          />
        </div>
        <div className={styles.include_item}>
          <MyCheckbox width={'22px'} height={'22px'} />
          <TextDotted
            text={'Source file'}
            info={true}
            endNode={
              <div className={styles.item_tools}>
                <span>2</span>
                <span className={styles.item_tool}>
                  <AppColor.close fill={AppColor.red} width={16} height={16} />
                </span>
                <span className={styles.item_tool}>
                  <AppColor.edit
                    width={16}
                    height={16}
                    fill={AppColor.transparentBlack}
                  />
                </span>
              </div>
            }
            startTextColor={AppColor.transparentBlack}
          />
        </div>
        <div className={styles.include_item}>
          <MyCheckbox width={'22px'} height={'22px'} />
          <TextDotted
            text={'High resolution'}
            info={true}
            endNode={
              <div className={styles.item_tools}>
                <span>
                  <AppColor.iconChecked
                    width={10}
                    height={8}
                    fill={AppColor.green}
                    path={AppColor.green}
                  />
                </span>
                <span className={styles.item_tool}>
                  <AppColor.close fill={AppColor.red} width={16} height={16} />
                </span>
                <span className={styles.item_tool}>
                  <AppColor.edit
                    width={16}
                    height={16}
                    fill={AppColor.transparentBlack}
                  />
                </span>
              </div>
            }
            startTextColor={AppColor.transparentBlack}
          />
        </div>
        <div className={styles.include_item}>
          <MyCheckbox width={'22px'} height={'22px'} />
          <TextDotted
            text={'Delivery'}
            info={true}
            endNode={
              <div className={styles.item_tools}>
                <span>
                  <AppColor.iconChecked
                    width={10}
                    height={8}
                    fill={AppColor.green}
                    path={AppColor.green}
                  />
                </span>
                <span className={styles.item_tool}>
                  <AppColor.close fill={AppColor.red} width={16} height={16} />
                </span>
                <span className={styles.item_tool}>
                  <AppColor.edit
                    width={16}
                    height={16}
                    fill={AppColor.transparentBlack}
                  />
                </span>
              </div>
            }
            startTextColor={AppColor.transparentBlack}
          />
        </div>
        <div className={styles.include_item}>
          <MyCheckbox width={'22px'} height={'22px'} />
          <TextDotted
            text={'My inclusion'}
            info={true}
            endNode={
              <div className={styles.item_tools}>
                <span>
                  <AppColor.iconChecked
                    width={10}
                    height={8}
                    fill={AppColor.green}
                    path={AppColor.green}
                  />
                </span>
                <span className={styles.item_tool}>
                  <AppColor.close fill={AppColor.red} width={16} height={16} />
                </span>
                <span className={styles.item_tool}>
                  <AppColor.edit
                    width={16}
                    height={16}
                    fill={AppColor.transparentBlack}
                  />
                </span>
              </div>
            }
            startTextColor={AppColor.transparentBlack}
          />
        </div>
      </div>
    </>
  )
}

const OptionsSection = (): JSX.Element => {
  return (
    <>
      <Typography>Options</Typography>
      <DynamicPadding desktop="30px" />

      <div className={styles.include_items}>
        <div className={styles.include_item}>
          <MyCheckbox width={'22px'} height={'22px'} />
          <Typography variant="body4" color={AppColor.transparentBlack}>
            Add Revisions
          </Typography>
          <div style={{ flexGrow: '1' }}></div>
          <div className={styles.item_tools}>
            <span>2</span>
            <span className={styles.item_tool}>
              <AppColor.close fill={AppColor.red} width={16} height={16} />
            </span>
            <span className={styles.item_tool}>
              <AppColor.edit
                width={16}
                height={16}
                fill={AppColor.transparentBlack}
              />
            </span>
          </div>
          <div style={{ width: '100%', paddingLeft: '32px' }}>
            <Typography>+$5 (+1 day)</Typography>
          </div>
        </div>
        <div className={styles.include_item}>
          <MyCheckbox width={'22px'} height={'22px'} />
          <Typography variant="body4" color={AppColor.transparentBlack}>
            Add High Resolution
          </Typography>
          <div style={{ flexGrow: '1' }}></div>
          <div className={styles.item_tools}>
            <span>2</span>
            <span className={styles.item_tool}>
              <AppColor.close fill={AppColor.red} width={16} height={16} />
            </span>
            <span className={styles.item_tool}>
              <AppColor.edit
                width={16}
                height={16}
                fill={AppColor.transparentBlack}
              />
            </span>
          </div>
          <div style={{ width: '100%', paddingLeft: '32px' }}>
            <Typography>+$5 (+1 day)</Typography>
          </div>
        </div>
        <div className={styles.include_item}>
          <MyCheckbox width={'22px'} height={'22px'} />
          <Typography variant="body4" color={AppColor.transparentBlack}>
            Decrease Delivery
          </Typography>
          <div style={{ flexGrow: '1' }}></div>
          <div className={styles.item_tools}>
            <span>2</span>
            <span className={styles.item_tool}>
              <AppColor.close fill={AppColor.red} width={16} height={16} />
            </span>
            <span className={styles.item_tool}>
              <AppColor.edit
                width={16}
                height={16}
                fill={AppColor.transparentBlack}
              />
            </span>
          </div>
          <div style={{ width: '100%', paddingLeft: '32px' }}>
            <Typography>+$5 (+1 day)</Typography>
          </div>
        </div>
      </div>
    </>
  )
}

export default PackageModal
