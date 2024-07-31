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

interface Props {
  items: number[]
}

const CardsGroup = ({ items }: Props): JSX.Element => {
  const update = useUpdater()
  const cardsRef = useRef(null)
  const [selectedManager, setSelectedManager] =
    useState<FiltersManager | null>(null)
  const [isBatchActionsVisible, setBatchActionsVisibility] =
    useState<boolean>(false)
  const [cancelDialog, setCancelDialog] = useState(false)
  const [canceledBatch, setCanceledBatch] = useState<boolean>(false)
  const [hired, setHired] = useState(false)

  useEffect(() => {
    setSelectedManager(new FiltersManager())
  }, [])

  const onSelect = useCallback(
    (id: number, state: boolean) => {
      if (selectedManager) {
        selectedManager.toggle(id)
        setBatchActionsVisibility(selectedManager.total() > 0)
      }
    },
    [selectedManager]
  )

  return (
    <div ref={cardsRef} className={styles.wrapper}>
      {items.map((item, id: number) => (
        <CardManager
          id={id}
          key={id}
          initSelect={selectedManager.isInList(id) ? true : false}
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

      {isBatchActionsVisible && (
        <BatchActions
          onClose={() => {
            setBatchActionsVisibility(false)
          }}
          onCancelModal={() => {
            setCancelDialog(true)
          }}
          onHiredModal={() => {
            setHired(true)
            setBatchActionsVisibility(false)
          }}
          width={cardsRef.current.clientWidth}
        />
      )}

      {cancelDialog && (
        <CancelDialogModal
          onClose={(state: boolean) => {
            setCancelDialog(false)
            setCanceledBatch(state)
          }}
        />
      )}

      {hired && (
        <HiredModal
          width={cardsRef.current.clientWidth}
          onClose={() => {
            if (selectedManager) selectedManager.clear()
            setHired(false)
          }}
        />
      )}

      {canceledBatch && (
        <CanceledBatch
          width={cardsRef.current.clientWidth}
          onClose={() => {
            if (selectedManager) selectedManager.clear()
            setCanceledBatch(false)
            setBatchActionsVisibility(false)
          }}
        />
      )}
    </div>
  )
}

interface BatchActionsProps {
  width: number
  onClose: () => void
  onCancelModal: () => void
  onHiredModal: () => void
}
const BatchActions = ({
  width,
  onClose,
  onCancelModal,
  onHiredModal,
}: BatchActionsProps): JSX.Element => {
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
        <UserAvatar
          name={fakeUserConstant.name}
          active={true}
          flag={<AppColor.UkraineFlagIcon />}
          role="Shortlisted"
          preventMobileNone={true}
        />
      </div>
      <div className={styles.gap_20}>
        <AppColor.speficChevronRightFilled />
        <div className={styles.gap_10 + ' ' + styles.selection_activity}>
          <AppColor.newIcon width={'22px'} />
          <Typography variant="body4">To New</Typography>
        </div>
        <div
          onClick={() => {
            onCancelModal()
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
            onHiredModal()
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

interface HiredProps {
  width: number
  onClose: () => void
}
const HiredModal = ({ onClose, width }: HiredProps): JSX.Element => {
  return (
    <div
      style={{ display: 'flex', maxWidth: width }}
      className={styles.batch_actions}
    >
      <div className={styles.gap_20}>
        <Typography variant="body3" fontWeight="500">
          Moved
        </Typography>
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
          role="Hired"
          roleColor={AppColor.green}
          preventMobileNone={true}
        />
      </div>
      <div className={styles.batch_close} onClick={onClose}>
        <AppColor.close width={10} height={10} fill={AppColor.text} />
      </div>
    </div>
  )
}

interface CancelModalProps {
  onClose: (state: boolean) => void
}
const CancelDialogModal = ({ onClose }: CancelModalProps): JSX.Element => {
  const [cancelText, setCancelText] = useState('')

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
        <UserAvatar
          variant="image"
          active={true}
          url={fakeUserConstant.image}
          name=""
        />
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

interface CanceledProps {
  width: number
  onClose: () => void
}
const CanceledBatch = ({ onClose, width }: CanceledProps): JSX.Element => {
  return (
    <div
      style={{ display: 'flex', maxWidth: width }}
      className={styles.batch_actions}
    >
      <div className={styles.gap_20}>
        <Typography variant="body3" fontWeight="500">
          Moved
        </Typography>
        <UserAvatar
          name={fakeUserConstant.name}
          active={true}
          flag={<AppColor.UkraineFlagIcon />}
          role="Shortlisted"
          preventMobileNone={true}
        />
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
