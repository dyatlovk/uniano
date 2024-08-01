import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import Typography from '@common/components/ui/Typography/Typography'
import UserAvatar from '@common/components/ui/UserAvatar/index'
import AppColor from '@common/styles/variables-static'
import { useCallback, useRef, useState } from 'react'
import styles from './style.module.scss'

interface Props {
  initState?: boolean
  users?: PartnerShip.Manager[]
  selectedUser: PartnerShip.Manager | null
  onUserCallback: (id: string) => void
}
const ManagersDropDown = ({
  initState = false,
  users = [],
  onUserCallback,
  selectedUser,
}: Props): JSX.Element => {
  const [showDropdown, setShowDropdown] = useState<boolean>(initState)
  const listRef = useRef<HTMLUListElement | null>(null)

  const userSelecteHandler = useCallback((e: any) => {
    const list = e.target.closest('li')
    if (!list) return
    setShowDropdown(false)
  }, [])

  return (
    <div className={styles.wrap}>
      <div
        className={styles.selected_area}
        onClick={() => {
          setShowDropdown(prev => !prev)
        }}
      >
        <div className={styles.selected_area_content}>
          {selectedUser && (
            <UserAvatar
              url={selectedUser.avatarUrl}
              preventMobileNone={true}
              name={selectedUser.fullName}
              flag={<img src={selectedUser.countryFlagUrl} />}
              role={selectedUser.position}
              active={selectedUser.isOnline}
            />
          )}
          {!selectedUser && (
            <Typography variant="body4">Selecte a user</Typography>
          )}
        </div>
        <div className={styles.selected_area_tools}>
          {showDropdown ? (
            <AppColor.chevronTop fill={AppColor.text} width={16} />
          ) : (
            <AppColor.chevronBottom fill={AppColor.text} width={16} />
          )}
        </div>
      </div>
      {showDropdown && (
        <div className={styles.dropdown}>
          <div className={styles.search}>
            <AppColor.searchIconBlack fill={AppColor.text} />
            <InputCommon
              width="100%"
              padding="20px 0 20px 10px"
              boxShadowNone={true}
              placeholder={'Search'}
              callback={() => {}}
            />
          </div>
          <ul ref={listRef} className={styles.list}>
            {users.map((user: PartnerShip.Manager, id: number) => (
              <li
                data-id={user.id}
                key={user.id}
                className={styles.list_item}
                onClick={e => {
                  userSelecteHandler(e)
                  onUserCallback(user.id)
                }}
              >
                <UserAvatar
                  url={user.avatarUrl}
                  preventMobileNone={true}
                  name={user.fullName}
                  flag={<img src={user.countryFlagUrl} />}
                  role={user.position}
                  active={user.isOnline}
                />
                <div className={styles.item_date}>{user.date}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ManagersDropDown
