import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import DarkBox from '@common/components/ui/DarkBox/index'
import DetailsTablePostsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTablePostsAdmin/index'
import {
  DropDownBase,
  DropDownContext,
  DropDownSimpleItem
} from '@common/components/ui/Dropdown/Base/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import ModalButtonsSetup from '@common/components/ui/ModalButtons/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import RadioButton from '@common/components/ui/RadioButton/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import SwitchButton from '@common/components/ui/SwitchButton/index'
import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { ReactNode, useState } from 'react'
import { YesNoTable } from '../AdminPartnerships'
import styles from './style.module.scss'

const AdminPosts = () => {
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [selectedVariant, setSelectedVariant] = useState(1)

  return (
    <div className={styles.wrapper}>
      {showSettingsModal && (
        <ModalCenterBasic
          desktopMinWidth="800px"
          bottomPartPadding="30px"
          callbackClose={() => {
            setShowSettingsModal(false)
          }}
          title="Posts settings"
          nodeAfterTitle={
            <div style={{ width: '100%' }} className="gap_20">
              <DarkBox
                triangleDown={true}
                fonstSize="13px"
                text={'Logo design'.toUpperCase()}
              />
              <div className="gap_10">
                <Typography variant="body4">Create</Typography>
                <SwitchButton startValue={true} width="44px" height="24px" />
              </div>
              <div className="gap_10">
                <Typography variant="body4">Active</Typography>
                <SwitchButton startValue={true} width="44px" height="24px" />
              </div>
            </div>
          }
        >
          <>
            <div className={styles.top_grid_2}>
              <div>
                <Visibility />
              </div>
              <div>
                <CanReply />
              </div>
            </div>

            <DynamicPadding desktop="30px" mobile="20px" />

            <YesNoTable
              title="Modules"
              items={[
                {
                  text: ' Add poll',
                  initValue: true,
                },
              ]}
            />

            <DynamicPadding desktop="30px" mobile="20px" />
            <Typography textLineHeight="1" variant="body3" fontWeight="500">
              Affect on
            </Typography>

            <DynamicPadding desktop="30px" mobile="20px" />

            <div className="gap_20">
              <RadioButton
                activeSelection={selectedVariant == 1}
                callback={item => {
                  setSelectedVariant(item)
                }}
                indexItem={1}
                text=" New programs"
              />

              <RadioButton
                activeSelection={selectedVariant == 2}
                callback={item => {
                  setSelectedVariant(item)
                }}
                indexItem={2}
                text="  All programs          "
              />
            </div>

            <DynamicPadding desktop="30px" mobile="20px" />
            <Typography textLineHeight="1" variant="body3" fontWeight="500">
              Copy to other categories
            </Typography>

            <DynamicPadding desktop="30px" mobile="20px" />

            <MyButtonOrange
              fontWeight="500"
              textTransform="uppercase"
              onClick={() => {}}
            >
              <div className={styles.white_box}>
                <AppColor.plus stroke={AppColor.orange} />
              </div>
              Add category
            </MyButtonOrange>

            <DynamicPadding desktop="30px" mobile="20px" />

            <ModalButtonsSetup
              onCancel={() => {
                setShowSettingsModal(false)
              }}
              onSave={() => {
                setShowSettingsModal(false)
              }}
            />
          </>
        </ModalCenterBasic>
      )}
      <div className={styles.mobile_padding}>
        <DynamicPadding />

        <div className="center_mobile_text">
          <div className={styles.title_plus}>
            <div>
              <Typography
                variant="titleBig"
                fontWeight="600"
                textTransform="uppercase"
              >
                Posts
              </Typography>
            </div>
            <div className={styles.orange}>
              <AppColor.plus stroke="white" width={'fit-content'} />
            </div>
          </div>
        </div>

        <DynamicPadding />

        <div className={styles.top_part}>
          <div className={styles.buttons_top}>
            <div className="gap_10">
              <Typography variant="body4">Create</Typography>
              <SwitchButton startValue={true} width="44px" height="24px" />
            </div>
            <div className="gap_10">
              <Typography variant="body4">Active</Typography>
              <SwitchButton startValue={true} width="44px" height="24px" />
            </div>
          </div>

          <div
            className="cursor"
            onClick={() => {
              setShowSettingsModal(true)
            }}
          >
            <Typography
              variant="body4"
              fontWeight="500"
              textTransform="uppercase"
              className={styles.hover_text}
            >
              Posts settings
            </Typography>
          </div>
        </div>

        <DynamicPadding />

        <SearchFilterBar date="10/29/22 - 11/29/22" exportIcon={true} />

        <DynamicPadding />

        <DetailsTablePostsAdmin
          information={[
            {
              user: fakeUserConstant,
              post: 'New to Uniano, Need assistance ',
              date: 'Feb 26, 2021 16:32 ',
              category: 'Registration',
              creator: fakeUserConstant,
              replies: '531',
              status: 'Active',
            },
          ]}
        />
        <DynamicPadding />
      </div>
    </div>
  )
}

const Visibility = (): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>({
    id: 3,
    listNode: 'All users',
  })
  const [selectedNode, setSelectedNode] = useState<ReactNode>('All users')
  const [placeholder, setPlaceholder] = useState<ReactNode>('')

  return (
    <>
      <Typography variant="body3" fontWeight="500">
        Visibility
      </Typography>
      <DynamicPadding desktop="30px" mobile="20px" />
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
            justifyContent: 'center',
            padding: '13px 20px',
          }}
        >
          <DropDownSimpleItem
            key={1}
            css={{ padding: '13px 20px' }}
            data={{
              id: 1,
              listNode: 'All users and search engines',
            }}
          />
          <DropDownSimpleItem
            key={2}
            css={{ padding: '12px 20px' }}
            data={{
              id: 2,
              listNode: 'All registered users and search engines',
            }}
          />
          <DropDownSimpleItem
            key={3}
            css={{ padding: '12px 20px' }}
            data={{
              id: 3,
              listNode: 'All users',
            }}
          />
          <DropDownSimpleItem
            key={4}
            css={{ padding: '12px 20px' }}
            data={{
              id: 4,
              listNode: 'All registered users',
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </>
  )
}

const CanReply = (): JSX.Element => {
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>({
    id: 1,
    listNode: 'All',
  })
  const [selectedNode, setSelectedNode] = useState<ReactNode>('All')
  const [placeholder, setPlaceholder] = useState<ReactNode>('')

  return (
    <>
      <Typography variant="body3" fontWeight="500">
        Can Reply
      </Typography>
      <DynamicPadding desktop="30px" mobile="20px" />
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
            justifyContent: 'center',
            padding: '13px 20px',
          }}
        >
          <DropDownSimpleItem
            key={1}
            css={{ padding: '13px 20px' }}
            data={{
              id: 1,
              listNode: 'All',
            }}
          />
          <DropDownSimpleItem
            key={2}
            css={{ padding: '12px 20px' }}
            data={{
              id: 2,
              listNode: 'None',
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </>
  )
}

export default AdminPosts
