import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useCallback, useState } from 'react'
import styles from './style.module.scss'
import AdsBannersProvider from '@common/models/ads/banners'
import HtmlCodeModal from '../HtmlCode'

interface BannerProps {
  data?: PartnerShip.AdsBanner[]
  onModalClose?: () => void
}

const BannersModal = ({ data = [], onModalClose }: BannerProps) => {
  const [showHtmlCode, setShowHtmlCode] = useState<boolean>(false)
  const [activeHtmlCodeId, setActiveHtmlCodeId] = useState<number>(-1)

  const htmlCodeBtnHandler = useCallback((id: number) => {
    setShowHtmlCode(true)
    setActiveHtmlCodeId(id)
  }, [])

  return (
    <div>
      <ModalCenterBasic
        desktopMaxWidth="830px"
        desktopMinWidth="771px"
        desktopMinHeight="344px"
        bottomPartPadding="30px"
        callbackClose={() => {
          if (onModalClose) onModalClose()
        }}
        nodesBeforeClose={[<SearchFilterBar useSearch={false} />]}
        title="banners"
      >
        <div className={styles.wrapper}>
          <div className="">
            <Typography variant="body3" fontWeight="500">
              120x600
            </Typography>
          </div>

          <div className={styles.items}>
            {data.map((item: PartnerShip.AdsBanner, id: number) => (
              <div key={id} className={styles.item}>
                <div className={styles.img_type}>{item.imgType}</div>
                <div className={styles.img}>
                  <img src={item.imgUrl} alt="img" />
                </div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.code}>
                  <MyButtonOrange
                    padding="5px 14px"
                    width="fit-content"
                    fontWeight="500"
                    onClick={() => htmlCodeBtnHandler(id)}
                    children={
                      <>
                        <AppColor.code
                          width={'27px'}
                          height={'22px'}
                          fill="#fff"
                        />
                        Code
                      </>
                    }
                    textTransform="uppercase"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </ModalCenterBasic>
      {showHtmlCode && (
        <HtmlCodeModal
          data={AdsBannersProvider.findOneById(activeHtmlCodeId)}
          onClose={() => setShowHtmlCode(false)}
        />
      )}
    </div>
  )
}

export default BannersModal
