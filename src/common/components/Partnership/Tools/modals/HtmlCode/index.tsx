import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import ModalCenter from '@common/components/ModalPopUps/ModalCenter/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useCallback, useState } from 'react'
import styles from './style.module.scss'

interface HtmlCodeModalProps {
  data: PartnerShip.AdsBanner | null
  onClose: () => void
}
const HtmlCodeModal = ({ data, onClose }: HtmlCodeModalProps): JSX.Element => {
  const [showCopiedModal, setShowCopiedModal] = useState<boolean>(false)

  const onCopyHandler = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(res => {
      setShowCopiedModal(true)
    })
  }, [])

  if (!data) return <>Not found</>

  return (
    <div className={styles.wrapper}>
      <ModalCenterBasic
        desktopMinWidth="832px"
        prevClose={true}
        title={`Code of the ad banner ${data.title}`}
        callbackClose={() => {
          if (onClose) onClose()
        }}
        bottomPartPadding={''}
      >
        <div className={styles.sections}>
          <div className={styles.link_section}>
            <Typography variant="body3">
              Insert the link to the service or another page on the advertiser's
              website
            </Typography>
            <DynamicPadding desktop="21px" />
            <Typography variant="body4">
              Users will be transferred to this page via the deeplink.
            </Typography>
            <DynamicPadding desktop="7px" />
            <div className={styles.link_input}>
              <InputCommon
                multiLine={false}
                placeholder={''}
                callback={() => {}}
              />
            </div>
          </div>
          <div className={styles.code_section}>
            <Typography variant="body3">HTML code</Typography>
            <DynamicPadding desktop="21px" />
            <Typography variant="body4">
              Use this link on your website.
            </Typography>
            <DynamicPadding desktop="7px" />
            <InputCommon
              multiLine={true}
              placeholder={''}
              disabled={true}
              initText={data.htmlCode}
              callback={() => {}}
              backgroundColor={'#F5F5F5'}
              textColor={'#01010180'}
            />
          </div>
          <div className={styles.footer}>
            <MyButtonTransparent
              onClick={() => {
                if (onClose) onClose()
              }}
              children={'Cancel'}
              textTransform="uppercase"
              fontWeight="500"
            />
            <MyButtonOrange
              onClick={() => {
                onCopyHandler(data.htmlCode)
              }}
              children={'Copy'}
              textTransform="uppercase"
              fontWeight="500"
            />
          </div>
        </div>
      </ModalCenterBasic>
      {showCopiedModal && (
        <CopiedModal
          onClose={() => {
            setShowCopiedModal(false)
          }}
        />
      )}
    </div>
  )
}

interface CopyProps {
  onClose: () => void
}
const CopiedModal = ({ onClose }: CopyProps): JSX.Element => {
  return (
    <ModalCenter
      children={
        <div className={styles.copied} onClick={() => onClose()}>
          <AppColor.singTrue
            width={'30px'}
            height={'25px'}
            stroke={AppColor.green}
          />
          <div>Done</div>
        </div>
      }
      onClickHandler={() => {
        onClose()
      }}
    />
  )
}

export default HtmlCodeModal
