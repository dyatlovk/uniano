import AskedQuestion from '@common/components/AskedQuestions/index'
import ButtonChooseList from '@common/components/ButtonChooseList/index'
import Footer from '@common/components/Footer/Footer'
import HeaderDummy from '@common/components/Header/Dummy/index'
import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index'
import StepsStates from '@common/components/StepsStates/index'
import CenterShadowBox from '@common/components/ui/CenterShadowBox/index'
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index'
import {
  DropDownBase,
  DropDownContext,
  DropDownOverlapped,
  DropDownSimpleItem,
} from '@common/components/ui/Dropdown/Base/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import MyButtonTransparentBlack from '@common/components/ui/MyButton/variants/MyButtonTransparentBlack'
import MyButtonTransparentRed from '@common/components/ui/MyButton/variants/MyButtonTransparentRed'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import TextDotted from '@common/components/ui/TextDotted/index'
import Typography from '@common/components/ui/Typography/Typography'
import StatesModel from '@common/models/createService/statesModel'
import AppColor from '@common/styles/variables-static'
import { MouseEvent, ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

const CreateServiceNegotiation = () => {
  const [packageModalShow, setPackageModalShow] = useState<boolean>(false)

  return (
    <div>
      <HeaderDummy logoText="Create Service">
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

                <DynamicPadding />
                <div style={{ maxWidth: '480px' }}>
                  <CenterShadowBox
                    elements={[
                      <Typography variant="body3" fontWeight="500">
                        Custom requirements
                      </Typography>,
                      <Typography variant="body4">
                        Negotiate all technical and financial questions in
                        private messages and start the project.
                      </Typography>,
                    ]}
                    gap="20px"
                    paddingBoxDesktop="20px"
                    align="start"
                  />
                </div>

                <DynamicPadding desktop="20px" mobile="15px" />

                <MyButtonOrange
                  fontWeight="500"
                  onClick={() => {
                    setPackageModalShow(true)
                  }}
                  textTransform="uppercase"
                  padding="5px 10px"
                >
                  <div className={styles.white}>
                    <AppColor.plusCircle
                      stroke={AppColor.orange}
                      width={12}
                      height={12}
                      fill={AppColor.white}
                    />
                  </div>
                  Add package
                </MyButtonOrange>

                <DynamicPadding />

                <div className={styles.text_box}>
                  <Typography variant="body4">
                    You can move to negotiation step and provide payment and
                    delivery conditions.
                  </Typography>
                </div>

                <DynamicPadding />

                <div className={'flex_space_between'}>
                  <Link to="/create-service/details">
                    <ChevronMoveTo
                      variant="left"
                      onClick={() => {}}
                      text="Step back"
                      title="cancel"
                    />
                  </Link>
                  <Link to="/create-service/posting">
                    <ChevronMoveTo
                      variant="right"
                      onClick={() => {}}
                      text="Next step"
                      title="posting"
                    />
                  </Link>
                </div>
              </div>
            </div>
          }
          item2={
            <div>
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

                <DynamicPadding desktop="50px" />

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
        <AskedQuestion />
      </div>
      <Footer />

      {packageModalShow && (
        <PackageModal
          onCancel={() => {
            setPackageModalShow(false)
          }}
          onSave={() => {
            setPackageModalShow(false)
          }}
        />
      )}
    </div>
  )
}

interface Props {
  onCancel: () => void
  onSave: () => void
}
const PackageModal = ({ onCancel, onSave }: Props): JSX.Element => {
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
        <Typography variant="body5" fontWeight="500" color={AppColor.orange}>
          Add own inclusion & option
        </Typography>
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

export default CreateServiceNegotiation
