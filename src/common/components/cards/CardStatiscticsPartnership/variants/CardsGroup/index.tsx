import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonRed from '@common/components/ui/MyButton/variants/MyButtonRed'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import SizeBox from '@common/components/ui/SizeBox/index'
import Typography from '@common/components/ui/Typography/Typography'
import UserAvatar from '@common/components/ui/UserAvatar/index'
import FiltersManager from '@common/domain/Partnership/filters'
import useUpdater from '@common/helpers/useUpdater'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useCallback, useEffect, useRef, useState } from 'react'
import CardManager from '../CardManager'
import styles from './style.module.scss'
import fakeUserImage from '@assets/images/user-fake.png'

interface Props {
  items: number[]
}

const CardsGroup = ({ items }: Props): JSX.Element => {
  const update = useUpdater()
  const cardsRef = useRef(null)
  const [stateManager, setStateManager] = useState<FiltersManager | null>(null)
  const [isBatchPopupVisible, setBatchPopupVisible] = useState<boolean>(false)
  const [cancelDialog, setCancelDialog] = useState(false)
  const [canceledPopup, setCanceledPopup] = useState<boolean>(false)
  const [hiredPopup, setHiredPopupVisible] = useState(false)
  const [usersToBatch, setUsersToBatch] = useState<number[]>([])

  useEffect(() => {
    setStateManager(new FiltersManager())
  }, [])

  const onSelect = useCallback(
    (id: number, state: boolean) => {
      if (stateManager) {
        stateManager.toggle(id)
        setBatchPopupVisible(stateManager.total() > 0)
      }
    },
    [stateManager]
  )

  return (
    <div ref={cardsRef} className={styles.wrapper}>
      {items.map((item, id: number) => (
        <CardManager
          id={id}
          key={id}
          initSelect={stateManager.isInList(id) ? true : false}
          links={['Account', 'Stats', 'Reviews']}
          showCardManagerActions={false}
          tags={['Logo', 'Logo Design', 'Logo Maker', 'Logo Create']}
          programs={
            <Typography variant="body5" fontWeight="500">
              3
            </Typography>
          }
          sales={
            <Typography variant="body5" fontWeight="500">
              450
            </Typography>
          }
          leads={
            <Typography variant="body5" fontWeight="500">
              918
            </Typography>
          }
          earned={
            <Typography variant="body5" fontWeight="500">
              $45K
            </Typography>
          }
          title=""
          user={fakeUserConstant}
          onSelect={(id: number, state: boolean) => {
            onSelect(id, state)
            update()
          }}
        />
      ))}

      {isBatchPopupVisible && (
        <BatchPopup
          onClose={() => {
            setBatchPopupVisible(false)
            setUsersToBatch([])
          }}
          onCancelModal={(selectedUsers: number[]) => {
            setCancelDialog(true)
            setBatchPopupVisible(false)
            setUsersToBatch(selectedUsers)
          }}
          onHiredModal={(selectedUsers: number[]) => {
            setHiredPopupVisible(true)
            setBatchPopupVisible(false)
            setUsersToBatch(selectedUsers)
          }}
          users={stateManager.getStorage()}
          width={cardsRef.current.clientWidth}
        />
      )}

      {cancelDialog && (
        <CancelDialogModal
          users={usersToBatch}
          onClose={(state: boolean) => {
            setCancelDialog(false)
            setCanceledPopup(state)
          }}
        />
      )}

      {hiredPopup && (
        <HiredPopup
          users={usersToBatch}
          width={cardsRef.current.clientWidth}
          onClose={() => {
            if (stateManager) stateManager.clear()
            setHiredPopupVisible(false)
            setUsersToBatch([])
          }}
        />
      )}

      {canceledPopup && (
        <CanceledPopup
          users={usersToBatch}
          width={cardsRef.current.clientWidth}
          onClose={() => {
            if (stateManager) stateManager.clear()
            setCanceledPopup(false)
            setBatchPopupVisible(false)
            setUsersToBatch([])
          }}
        />
      )}
    </div>
  )
}

interface BatchPopupProps {
  width: number
  onClose: () => void
  onCancelModal: (selectedUsers: number[]) => void
  onHiredModal: (selectedUsers: number[]) => void
  users: number[]
  visibleAvatarsLimit?: number
}
const BatchPopup = ({
  width,
  onClose,
  onCancelModal,
  onHiredModal,
  users,
  visibleAvatarsLimit = 3,
}: BatchPopupProps): JSX.Element => {
  const showSingleUser = users.length == 1
  const avatarsUsersTreshold = visibleAvatarsLimit - 1
  const counterUsersTreshodl = users.length > visibleAvatarsLimit

  return (
    <div
      style={{
        display: 'flex',
        maxWidth: `${width}px`,
      }}
      className={styles.batch_actions}
    >
      <div className={styles.gap_20}>
        <Typography variant="body3" fontWeight="500">
          Move
        </Typography>
        {showSingleUser && (
          <UserAvatar
            name={fakeUserConstant.name}
            active={true}
            flag={<AppColor.UkraineFlagIcon />}
            role="Shortlisted"
            preventMobileNone={true}
          />
        )}
        {!showSingleUser && (
          <div className={styles.users_list}>
            {users.map((user, id: number) => (
              <>
                {id <= avatarsUsersTreshold && (
                  <img
                    key={id}
                    width="38px"
                    height="38px"
                    src={fakeUserImage}
                    alt=""
                  />
                )}
              </>
            ))}
            {counterUsersTreshodl && (
              <span className={styles.users_counter}>
                +{users.length - visibleAvatarsLimit}
              </span>
            )}
          </div>
        )}
      </div>
      <div className={styles.gap_20}>
        <AppColor.speficChevronRightFilled />
        <div className={styles.gap_10 + ' ' + styles.selection_activity}>
          <AppColor.newIcon width={'22px'} />
          <Typography variant="body4">To New</Typography>
        </div>
        <div
          onClick={() => {
            onCancelModal(users)
          }}
          className={styles.gap_10 + ' ' + styles.selection_activity}
        >
          <AppColor.close fill={AppColor.red} width={'25px'} height={'25px'} />
          <Typography variant="body4" color={AppColor.red}>
            To Cancel
          </Typography>
        </div>
        <div
          onClick={() => {
            onHiredModal(users)
          }}
          className={styles.gap_10 + ' ' + styles.selection_activity}
        >
          <AppColor.hired width={'18px'} />
          <Typography variant="body4" color={AppColor.green}>
            To Hire
          </Typography>
        </div>
      </div>
      <div className={styles.batch_close} onClick={onClose}>
        <AppColor.close width={10} height={10} fill={AppColor.text} />
      </div>
    </div>
  )
}

interface HiredPopupProps {
  width: number
  users: number[]
  visibleAvatarsLimit?: number
  onClose: () => void
}
const HiredPopup = ({
  onClose,
  width,
  users,
  visibleAvatarsLimit = 3,
}: HiredPopupProps): JSX.Element => {
  const showSingleUser = users.length === 1
  const avatarsUsersTreshold = visibleAvatarsLimit - 1
  const counterUsersTreshodl = users.length > visibleAvatarsLimit

  return (
    <div
      style={{ display: 'flex', maxWidth: width }}
      className={styles.batch_actions}
    >
      <div className={styles.gap_20}>
        <Typography variant="body3" fontWeight="500">
          Moved
        </Typography>
        {showSingleUser && (
          <>
            <UserAvatar
              name={fakeUserConstant.name}
              active={true}
              flag={<AppColor.UkraineFlagIcon />}
              role="Shortlisted"
              preventMobileNone={true}
            />
            <AppColor.speficChevronRightFilled />
            <UserAvatar
              name={fakeUserConstant.name}
              active={true}
              flag={<AppColor.UkraineFlagIcon />}
              role="Shortlisted"
              preventMobileNone={true}
            />
          </>
        )}

        {!showSingleUser && (
          <>
            <div className={styles.users_list}>
              {users.map((user, id: number) => (
                <>
                  {id <= avatarsUsersTreshold && (
                    <img
                      key={id}
                      width="38px"
                      height="38px"
                      src={fakeUserImage}
                      alt=""
                    />
                  )}
                </>
              ))}
              {counterUsersTreshodl && (
                <span className={styles.users_counter}>
                  +{users.length - visibleAvatarsLimit}
                </span>
              )}
            </div>
            <AppColor.speficChevronRightFilled />
            <UserAvatar
              name={fakeUserConstant.name}
              active={true}
              flag={<AppColor.UkraineFlagIcon />}
              role="Shortlisted"
              preventMobileNone={true}
            />
          </>
        )}
      </div>
      <div className={styles.batch_close} onClick={onClose}>
        <AppColor.close width={10} height={10} fill={AppColor.text} />
      </div>
    </div>
  )
}

interface CancelDialogModalProps {
  users: number[]
  visibleAvatarsLimit?: number
  onClose: (state: boolean) => void
}
const CancelDialogModal = ({
  onClose,
  users,
  visibleAvatarsLimit = 3,
}: CancelDialogModalProps): JSX.Element => {
  const [cancelText, setCancelText] = useState('')

  const showSingleUser = users.length == 1
  const avatarsUsersTreshold = visibleAvatarsLimit - 1
  const counterUsersTreshodl = users.length > visibleAvatarsLimit

  return (
    <ModalCenterBasic
      desktopMinWidth="830px"
      bottomPartPadding="30px"
      topPartPadding="15px 30px"
      callbackClose={() => {
        onClose(false)
      }}
      title="Move to cancelled"
      nodeAfterTitle={
        <>
          {showSingleUser && (
            <UserAvatar
              name={fakeUserConstant.name}
              active={true}
              flag={<AppColor.UkraineFlagIcon />}
              role="Shortlisted"
              preventMobileNone={true}
            />
          )}

          {!showSingleUser && (
            <div className={styles.users_list}>
              {users.map((user, id: number) => (
                <>
                  {id <= avatarsUsersTreshold && (
                    <img
                      key={id}
                      width="38px"
                      height="38px"
                      src={fakeUserImage}
                      alt=""
                    />
                  )}
                </>
              ))}
              {counterUsersTreshodl && (
                <span className={styles.users_counter}>
                  +{users.length - visibleAvatarsLimit}
                </span>
              )}
            </div>
          )}
        </>
      }
    >
      <InputCommon
        maxSymbolCount={300}
        placeholder="Please write reason of cancel (optional)"
        padding="15px 20px"
        callback={item => {
          setCancelText(item)
        }}
      />
      <SizeBox height="10px" />
      <div className="flex_end">
        <Typography variant="body4" color={AppColor.transparentBlack}>
          {cancelText.length} / 300
        </Typography>
      </div>
      <SizeBox height="25px" />

      <div className={styles.cancel_actions}>
        <div className={styles.cancel_btn}>
          <MyButtonTransparent
            onClick={() => {
              onClose(false)
            }}
            fontWeight="500"
            textTransform="uppercase"
          >
            Close
          </MyButtonTransparent>
        </div>
        <MyButtonRed
          onClick={() => {
            onClose(true)
          }}
          fontWeight="500"
          textTransform="uppercase"
        >
          Cancel
        </MyButtonRed>
      </div>
    </ModalCenterBasic>
  )
}

interface CanceledPopupProps {
  width: number
  users: number[]
  visibleAvatarsLimit?: number
  onClose: () => void
}
const CanceledPopup = ({
  onClose,
  width,
  users,
  visibleAvatarsLimit = 3,
}: CanceledPopupProps): JSX.Element => {
  const showSingleUser = users.length == 1
  const avatarsUsersTreshold = visibleAvatarsLimit - 1
  const counterUsersTreshodl = users.length > visibleAvatarsLimit
  console.log(users)

  return (
    <div
      style={{ display: 'flex', maxWidth: width }}
      className={styles.batch_actions}
    >
      <div className={styles.gap_20}>
        <Typography variant="body3" fontWeight="500">
          Moved
        </Typography>
        {showSingleUser && (
          <UserAvatar
            name={fakeUserConstant.name}
            active={true}
            flag={<AppColor.UkraineFlagIcon />}
            role="Shortlisted"
            preventMobileNone={true}
          />
        )}
        {!showSingleUser && (
          <div className={styles.users_list}>
            {users.map((user, id: number) => (
              <>
                {id <= avatarsUsersTreshold && (
                  <img
                    key={id}
                    width="38px"
                    height="38px"
                    src={fakeUserImage}
                    alt=""
                  />
                )}
              </>
            ))}
            {counterUsersTreshodl && (
              <span className={styles.users_counter}>
                +{users.length - visibleAvatarsLimit}
              </span>
            )}
          </div>
        )}
        <AppColor.speficChevronRightFilled />
        <Typography variant="body5" fontWeight="500" color={AppColor.red}>
          Cancelled
        </Typography>
      </div>
      <div className={styles.batch_close} onClick={onClose}>
        <AppColor.close width={10} height={10} fill={AppColor.text} />
      </div>
    </div>
  )
}

export default CardsGroup
