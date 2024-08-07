import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import MyButtonTransparentGrey from '@common/components/ui/MyButton/variants/MyButtonTransparentGrey'
import SizeBox from '@common/components/ui/SizeBox/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import classNames from 'classnames'
import { useState } from 'react'
import styles from './style.module.scss'

interface FilesModalProps {
  onClose: () => void
}
const FilesModal = ({ onClose }: FilesModalProps): JSX.Element => {
  const [activeButton, setActiveButton] = useState<string>('Customer')

  return (
    <ModalCenterBasic
      callbackClose={onClose}
      title={'Files'}
      bottomPartPadding={'30px'}
      desktopMinWidth="744px"
      desktopMaxWidth="744px"
      nodeAfterTitle={
        <div style={{ width: '100%', display: 'flex' }}>
          <div style={{ flexGrow: '1' }}></div>
          <div className={styles.buttons_top}>
            <div
              className={
                activeButton === 'Customer' ? styles.button_top_active : ''
              }
            >
              <MyButtonTransparent
                padding="6.5px 12px"
                onClick={() => {
                  setActiveButton('Customer')
                }}
              >
                Customer
              </MyButtonTransparent>
            </div>
            <div
              className={
                activeButton === 'Freelancer' ? styles.button_top_active : ''
              }
            >
              <MyButtonTransparent
                padding="6.5px 12px"
                onClick={() => {
                  setActiveButton('Freelancer')
                }}
              >
                Freelancer
              </MyButtonTransparent>
            </div>
          </div>
          <SizeBox width="15px" />
        </div>
      }
    >
      <div className={styles.content}>
        <InputCommon callback={() => {}} placeholder="Test" width="40%" />
        <Tabs />
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
            Download All
          </MyButtonOrange>
        </div>
      </div>
    </ModalCenterBasic>
  )
}

interface TabsProps {
  active?: string
}
const Tabs = ({ active = 'All' }: TabsProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>(active)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.tabs}>
        <div
          onClick={() => {
            setActiveTab('All')
          }}
          className={classNames(
            activeTab === 'All' ? styles.tab_active : styles.tab
          )}
        >
          <Typography textLineHeight="1">All</Typography>
        </div>
        <div
          onClick={() => {
            setActiveTab('PDF')
          }}
          className={classNames(
            activeTab === 'PDF' ? styles.tab_active : styles.tab
          )}
        >
          <Typography textLineHeight="1">PDF</Typography>
        </div>
        <div
          onClick={() => {
            setActiveTab('JPG')
          }}
          className={classNames(
            activeTab === 'JPG' ? styles.tab_active : styles.tab
          )}
        >
          <Typography textLineHeight="1">JPG</Typography>
        </div>
      </div>
      <div className={styles.tab_content}>
        <div className={styles.attaches}>
          <div className={styles.attached_file}>
            <div className={styles.file_tools}>
              <div className={styles.file_tool}>
                <AppColor.lightning
                  width={16}
                  height={16}
                  fill={AppColor.white}
                />
              </div>
              <div className={styles.file_tool}>
                <AppColor.iconFileDownload
                  width={16}
                  height={16}
                  fill={AppColor.white}
                />
              </div>
            </div>
            <div className={styles.attached_file_inner}>
              <div>
                <AppColor.filePdf />
              </div>
              <div>
                <Typography fontWeight="500">requirements1.pdf</Typography>
              </div>
              <div>
                <Typography variant="body4" color={AppColor.text}>
                  432.1 KB
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.attached_file}>
            <div className={styles.file_tools}>
              <div className={styles.file_tool}>
                <AppColor.lightning
                  width={16}
                  height={16}
                  fill={AppColor.white}
                />
              </div>
              <div className={styles.file_tool}>
                <AppColor.iconFileDownload
                  width={16}
                  height={16}
                  fill={AppColor.white}
                />
              </div>
            </div>
            <div className={styles.attached_file_inner}>
              <div>
                <AppColor.filePdf />
              </div>
              <div>
                <Typography fontWeight="500">requirements1.pdf</Typography>
              </div>
              <div>
                <Typography variant="body4" color={AppColor.text}>
                  432.1 KB
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilesModal
