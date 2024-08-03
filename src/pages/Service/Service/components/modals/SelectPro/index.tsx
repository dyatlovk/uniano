import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { useState } from 'react'
import Suggestions from '../../Suggestions'
import styles from './style.module.scss'

interface Props {
  onClose: () => void
}

const SelectPro = ({ onClose }: Props): JSX.Element => {
  const [onAttachDocClick, setAttachDocClick] = useState<boolean>(false)

  return (
    <ModalCenterBasic
      desktopMaxWidth="880px"
      desktopMinWidth="747px"
      title="Milestones"
      bottomPartPadding="30px"
      callbackClose={onClose}
    >
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.suggestions}>
            <Typography variant="body4" textLineHeight="1">
              Explore tailored suggestions of comprehensive solutions
            </Typography>
            <Suggestions
              items={[
                {
                  title: 'Custom text',
                  description: 'With attachments',
                  icon: <AppColor.squares width={28} />,
                },
                {
                  title: 'Specification forms',
                  description: '3 522 Avaliable',
                  icon: <AppColor.layers width={26} height={28} />,
                },
              ]}
            />
          </div>

          <div className={styles.padding_shadow}>
            <div className="gap_10">
              <div className={styles.orange}>
                <AppColor.layers width={15} height={16} />
              </div>
              <Typography
                variant="body5"
                fontWeight="500"
                textTransform="uppercase"
                color={AppColor.text}
              >
                Minimal logo for website
              </Typography>
            </div>
            <Typography variant="body4" fontWeight="500">
              3 522 Avaliable
            </Typography>
          </div>

          {onAttachDocClick && <DocSection />}
        </div>
        <div className={styles.actions}>
          <div className={styles.action_first}>
            <div
              className={styles.attach_docs}
              onClick={() => {
                setAttachDocClick(prev => !prev)
              }}
            >
              <MyCheckbox
                width={'20px'}
                height={'20px'}
                basicValue={onAttachDocClick}
              />
              <Typography textLineHeight="1" variant="body5">
                Attach documents to sign
              </Typography>
            </div>
          </div>
          <div className={styles.action_second}>
            <div className={styles.cancel_btn}>
              <MyButtonTransparent
                onClick={() => {
                  onClose()
                }}
              >
                Cancel
              </MyButtonTransparent>
            </div>
            <div className={styles.confirm_btn}>
              <MyButtonOrange onClick={() => {}}>Confirm</MyButtonOrange>
            </div>
          </div>
          <div className={styles.action_description}>
            You won’t be charged yet
          </div>
        </div>
      </div>
    </ModalCenterBasic>
  )
}

const DocSection = (): JSX.Element => {
  return (
    <div className={styles.docs}>
      <Typography fontSizeStatic="18px" variant="body3" textLineHeight="1">
        Documents
      </Typography>
      <DynamicPadding desktop="8px" />
      <div className={styles.attaches}>
        <div className={styles.attached_file}>
          <div className={styles.file_close}>
            <AppColor.close fill={'rgba(1, 1, 1, 0.5)'} />
          </div>
          <div className={styles.attached_file_inner}>
            <div>
              <AppColor.filePdf />
            </div>
            <div>
              <Typography fontWeight="500">Freelancer co....pdf</Typography>
            </div>
            <div>
              <Typography variant="body4" color={AppColor.text}>
                432.1 KB
              </Typography>
            </div>
          </div>
          <p className={styles.attached_file_sign}>Signed 16 Oct 2023 13:15</p>
        </div>
        <div className={styles.attached_file}>
          <div className={styles.file_close}>
            <AppColor.close fill={'rgba(1, 1, 1, 0.5)'} />
          </div>
          <div className={styles.attached_file_inner}>
            <div>
              <AppColor.filePdf />
            </div>
            <div>
              <Typography fontWeight="500">Freelancer co....pdf</Typography>
            </div>
            <div>
              <Typography variant="body4" color={AppColor.text}>
                432.1 KB
              </Typography>
            </div>
          </div>
          <p className={styles.attached_file_sign}>Signed 16 Oct 2023 13:15</p>
        </div>
      </div>
      <DynamicPadding desktop="30px" />
      <div className={styles.dropzone}>
        <AppColor.attach width={15} />
        <Typography variant="body3">attach files (max 100 mb)</Typography>
      </div>
    </div>
  )
}

export default SelectPro
