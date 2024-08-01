import styles from './style.module.scss'
import Typography from '@common/components/ui/Typography/Typography'
import SizeBox from '../../ui/SizeBox'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import AdsBannersProvider from '@common/models/ads/banners'
import ModalCenterBasic from '../../ModalPopUps/ModalCenter/components/ModalCenterBasic'
import BannersModal from './modals/banners'
import DeeplinkModal from './modals/deeplink'

const ToolsCommon = (): JSX.Element => {
  const [deeplinkModal, setDeeplinkModal] = useState<boolean>(false)
  const [bannersModal, setBannersModal] = useState<boolean>(false)

  return (
    <div className={styles.tools_wrapper}>
      <ToolItem
        icon={<AppColor.deeplink />}
        title="Deeplink"
        text="Sale Links"
        onClick={() => {
          setDeeplinkModal(true)
        }}
      />
      <ToolItem
        icon={<AppColor.banners />}
        title="Banners"
        text="Advertising Images"
        onClick={() => {
          setBannersModal(true)
        }}
      />

      {deeplinkModal && (
        <ModalCenterBasic
          desktopMaxWidth="830px"
          bottomPartPadding="30px"
          callbackClose={() => {
            setDeeplinkModal(false)
          }}
          title="Deeplink"
        >
          <DeeplinkModal />
        </ModalCenterBasic>
      )}
      {bannersModal && (
        <BannersModal
          data={AdsBannersProvider.getAll()}
          onModalClose={() => setBannersModal(false)}
        />
      )}
    </div>
  )
}

type ToolsItemProps = {
  icon: any
  title: string
  text: string
  onClick?: () => void
}
const ToolItem = ({ icon, text, title, onClick }: ToolsItemProps) => {
  return (
    <div
      onClick={() => {
        if (onClick) {
          onClick()
        }
      }}
      className={`${styles.tool_item} cursor`}
    >
      {icon}
      <SizeBox height="15px" />
      <Typography textLineHeight="1" variant="body3" fontWeight="500">
        {title}
      </Typography>
      <SizeBox height="15px" />
      <Typography
        textLineHeight="1"
        variant="body5"
        fontWeight="500"
        color="#01010150"
        textTransform="uppercase"
      >
        {text}
      </Typography>
    </div>
  )
}

export { ToolsCommon, ToolItem }
