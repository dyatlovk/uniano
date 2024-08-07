import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparentGrey from '@common/components/ui/MyButton/variants/MyButtonTransparentGrey'
import SizeBox from '@common/components/ui/SizeBox/index'
import Typography from '@common/components/ui/Typography/Typography'
import UserAvatar from '@common/components/ui/UserAvatar/index'
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import styles from './style.module.scss'

interface CancelModalProps {
  onClose: () => void
}
const CancelModal = ({ onClose }: CancelModalProps): JSX.Element => {
  return (
    <ModalCenterBasic
      callbackClose={onClose}
      title={'Cancel project'}
      topPartPadding={'22px 30px'}
      topPartContentGap="15px"
      bottomPartPadding={'30px'}
      desktopMaxWidth="792px"
      desktopMinWidth="792px"
      nodeAfterTitle={
        <div className={styles.title_items}>
          <div className={styles.title_item}>
            <AppColor.earn />
            <Typography>$100</Typography>
          </div>
          <div className={styles.title_item}>
            <AppColor.moneyHummer />
            <Typography>$40</Typography>
          </div>
        </div>
      }
    >
      <div className={styles.content}>
        <CallCheckbox callback={() => {}} />
        <DynamicPadding desktop="40px" mobile="20px" />

        <ProgressBox state={5} />
        <DynamicPadding desktop="25px" mobile="20px" />

        <Users />
        <DynamicPadding desktop="26px" mobile="20px" />

        <Reason />
        <DynamicPadding desktop="30px" mobile="20px" />

        <div className={styles.notify}>
          <Typography variant="body4">
            <span>Notice !</span> You will not able to cancel the arbitration
            process after confirmation.
          </Typography>
        </div>
        <DynamicPadding desktop="30px" mobile="20px" />

        <div className={styles.footer}>
          <MyButtonTransparentGrey
            fontWeight="500"
            textTransform="uppercase"
            padding="7.5px 16px"
            onClick={onClose}
          >
            Cancel
          </MyButtonTransparentGrey>
          <MyButtonOrange
            textTransform="uppercase"
            fontWeight="500"
            padding="7.5px 16px"
            onClick={onClose}
          >
            Confirm
          </MyButtonOrange>
        </div>
      </div>
    </ModalCenterBasic>
  )
}

interface CallCheckboxProps {
  callback: () => void
}
const CallCheckbox = ({ callback }: CallCheckboxProps): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0',
        flexDirection: 'row',
      }}
    >
      <MyCheckbox
        width={'20px'}
        height={'20px'}
        callback={() => {
          callback()
        }}
      />
      <SizeBox width="10px" />
      <Typography>Call for arbitration if you have a dispute</Typography>
      <SizeBox width="10px" />
      <AppColor.discount />
      <SizeBox width="5px" />
      <Typography color={AppColor.transparentBlack}>-$2</Typography>
      <SizeBox width="5px" />
      <div className={styles.discount_label}>
        <Typography color={AppColor.white} variant="body5">
          2%
        </Typography>
      </div>
    </div>
  )
}

interface ProgressBoxProps {
  state: number
}
const ProgressBox = ({ state }: ProgressBoxProps): JSX.Element => {
  const position = `${state}%`
  return (
    <div style={{ position: 'relative' }}>
      <div className={styles.progress_line}>
        <div style={{ left: '25%' }}></div>
        <div style={{ left: '50%' }}></div>
        <div style={{ left: '75%' }}></div>
      </div>
      <div className={styles.scales_percent}>
        <div className={styles.scale_item}>100%</div>
        <div className={styles.scale_item}>25%</div>
        <div className={styles.scale_item}>50%</div>
        <div className={styles.scale_item}>75%</div>
        <div className={styles.scale_item}>100%</div>
      </div>
      <div style={{ left: position }} className={styles.progress_current}></div>
    </div>
  )
}

const Users = (): JSX.Element => {
  return (
    <div className={styles.users}>
      <div className={styles.user1}>
        <UserTopPageInfo user={fakeUserConstant} showTools={false} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AppColor.earn />
            <Typography color={AppColor.green}>+$95</Typography>
            <div className={styles.discount_label_green}>
              <Typography color={AppColor.white} variant="body5">
                95%
              </Typography>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AppColor.moneyHummer />
            <Typography color={AppColor.green}>+$38</Typography>
            <div className={styles.discount_label_green}>
              <Typography color={AppColor.white} variant="body5">
                2%
              </Typography>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AppColor.discount />
            <Typography color={AppColor.text}>-$15.96</Typography>
            <div className={styles.discount_label}>
              <Typography color={AppColor.white} variant="body5">
                2%
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.user2}>
        <UserTopPageInfo user={fakeUserConstant} showTools={false} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AppColor.earn />
            <Typography color={AppColor.green}>+$95</Typography>
            <div className={styles.discount_label_green}>
              <Typography color={AppColor.white} variant="body5">
                95%
              </Typography>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AppColor.moneyHummer />
            <Typography color={AppColor.green}>+$38</Typography>
            <div className={styles.discount_label_green}>
              <Typography color={AppColor.white} variant="body5">
                2%
              </Typography>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <AppColor.discount />
            <Typography color={AppColor.text}>-$15.96</Typography>
            <div className={styles.discount_label}>
              <Typography color={AppColor.white} variant="body5">
                2%
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ReasonProps {
  maxSymbols?: number
}
const Reason = ({ maxSymbols = 3000 }: ReasonProps): JSX.Element => {
  const [symbolsCount, setSymbolsCount] = useState<number>(0)

  return (
    <div className={styles.reason}>
      <Typography textLineHeight="1">Reason</Typography>
      <DynamicPadding desktop="27px" />
      <InputCommon
        callback={item => {
          setSymbolsCount(item.length)
        }}
        multiLine={true}
        placeholder={''}
        padding="20px"
        maxSymbolCount={maxSymbols}
      />
      <DynamicPadding desktop="10px" mobile="10px" />
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ flexGrow: 1 }}></div>
        <span style={{ color: '#01010180' }}>{symbolsCount}</span>
        <span style={{ color: '#01010180' }}>&nbsp;/&nbsp;</span>
        <span style={{ color: '#01010180' }}>{maxSymbols}</span>
      </div>
    </div>
  )
}

export default CancelModal
