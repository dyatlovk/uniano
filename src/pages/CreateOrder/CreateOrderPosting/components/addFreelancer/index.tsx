import uaFlag from '@assets/svg/flags/ukraine-flag.svg'
import {
  DropDownBase,
  DropDownContext
} from '@common/components/ui/Dropdown/Base/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import UserAvatar from '@common/components/ui/UserAvatar/index'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { ReactNode, useContext, useEffect, useState } from 'react'
import styles from './style.module.scss'

const AddFreelancer = (): JSX.Element => {
  const [selectedUsers, setSelectedUsers] = useState([fakeUserConstant.name])
  const [isVisible, setVisible] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<DropDown.Item>(null)
  const [selectedNode, setSelectedNode] = useState<ReactNode>(<></>)
  const [placeholder, setPlaceholder] = useState<ReactNode>('Select User')

  return (
    <>
      {selectedUsers.map(item => (
        <SelectUser
          activeSelected={selectedUsers}
          callbackRemove={() => {
            setSelectedUsers([])
          }}
        />
      ))}
      <DynamicPadding desktop="10px" mobile="20px" />

      <MyButtonOrange
        padding="7px 14px"
        textTransform="uppercase"
        fontWeight="500"
        onClick={() => {
          setVisible(prev => !prev)
        }}
      >
        <div className={styles.white}>
          <AppColor.plus stroke={AppColor.orange} width={12} height={12} />
        </div>
        Add Freelancer
      </MyButtonOrange>

      <DynamicPadding desktop="20px" />

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
          css={{
            width: '200px',
            boxShadow: 'none',
          }}
          useOverlappedList={true}
          selectBoxInnerSpace={false}
          selectBoxCss={{
            justifyContent: 'center',
            padding: '18px 20px',
            boxShadow: 'none',
            display: 'none',
          }}
        >
          <div className={styles.search}>
            <AppColor.searchIconBlack fill={AppColor.text} />
            <InputCommon
              boxShadowNone={true}
              width="100%"
              padding="20px 0 20px 10px"
              placeholder={'Search'}
              callback={() => {}}
            />
          </div>
          <DropdownItem
            key={1}
            data={{
              id: 2,
              listNode: <></>,
              avatar: <UserAvatar active={false} name={''} />,
              name: 'Artem',
              position: 'Freelancer',
              countryFlag: uaFlag,
              isOnline: true,
            }}
          />
          <DropdownItem
            key={2}
            data={{
              id: 2,
              listNode: <></>,
              avatar: <UserAvatar active={false} name={''} />,
              name: 'Artem',
              position: 'Freelancer',
              countryFlag: uaFlag,
              isOnline: true,
            }}
          />
        </DropDownBase>
      </DropDownContext.Provider>
    </>
  )
}

type SelectUserProps = {
  activeSelected: string[]
  callbackRemove: (item: string) => void
}

const SelectUser = ({ activeSelected, callbackRemove }: SelectUserProps) => {
  return (
    <div className="gap_10">
      <UserAvatar
        active={true}
        name="Artem M."
        flag={<AppColor.UkraineFlagIcon />}
        role="Freelancer"
      />
      <div
        style={{ cursor: 'pointer' }}
        onClick={() => {
          callbackRemove(fakeUserConstant.name)
        }}
      >
        <AppColor.close width={'15px'} height={'15px'} fill={AppColor.red} />
      </div>
    </div>
  )
}

interface DropDownItem {
  data: DropDown.UserItem
}
const DropdownItem = ({ data }: DropDownItem): JSX.Element => {
  const { setSelectedItem, setVisible, setSelectedNode, selectedItem } =
    useContext<DropDown.Context>(DropDownContext)
  const [isActive, setIsActive] = useState<boolean>(false)

  useEffect(() => {
    if (!selectedItem) return
    setIsActive(selectedItem.id === data.id)
  }, [data.id, selectedItem])

  return (
    <div
      className={styles.dropdown_item}
      onClick={() => {
        setSelectedItem(data)
        setVisible(false)
        setSelectedNode(data.listNode)
      }}
    >
      <UserAvatar
        preventMobileNone={true}
        name={data.name}
        flag={<img src={data.countryFlag} />}
        role={data.position}
        active={data.isOnline}
      />
      <MyButtonTransparent fontWeight="500" onClick={() => {}}>
        Add
      </MyButtonTransparent>
    </div>
  )
}

export default AddFreelancer
