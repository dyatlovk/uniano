import ModalCenterBasic from '@common/components/ModalPopUps/ModalCenter/components/ModalCenterBasic/index'
import InputCommon from '@common/components/ui/inputs/InputCommon/index'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import MyButtonTransparent from '@common/components/ui/MyButton/variants/MyButtonTransparent'
import Typography from '@common/components/ui/Typography/Typography'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import classNames from 'classnames'
import { useState } from 'react'
import styles from './style.module.scss'

const messageWordsLimit = 300

interface ReviewModalProps {
  onClose: () => void
  onPublish: () => void
}
const ReviewModal = ({ onClose, onPublish }: ReviewModalProps): JSX.Element => {
  const [messageCounter, setMessageCounter] = useState<number>(0)

  return (
    <ModalCenterBasic
      title={'Add review'}
      callbackClose={onClose}
      bottomPartPadding={'30px'}
      desktopMinWidth={'832px'}
      topPartContentGap={'20px'}
      nodeAfterTitle={
        <div className={styles.user_top}>
          <img width={38} height={38} src={fakeUserConstant.image} />
          <Typography variant="body5" fontWeight="500">
            Artem Markevych Logo Design partnership
          </Typography>
        </div>
      }
    >
      <div className={styles.wrap}>
        <div className={styles.content}>
          <div className={styles.recommendations}>
            <div
              className={classNames(styles.recommend, styles.recommendButton)}
            >
              <AppColor.like />
              <span>Recommended</span>
            </div>
            <div
              className={classNames(
                styles.notrecommend,
                styles.recommendButton
              )}
            >
              <AppColor.like fill={AppColor.text} />
              <span>Not Recommended</span>
            </div>
          </div>
          <div className={styles.review_msg}>
            <InputCommon
              placeholder="Write your review here"
              multiLine={true}
              padding={'0 0 0 0'}
              callback={(item: string) => {
                setMessageCounter(item.length)
              }}
              maxSymbolCount={messageWordsLimit}
              boxShadowNone={true}
            />
            <div className={styles.msg_counter}>
              {messageCounter} / {messageWordsLimit}
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          <div className={styles.button_cancel}>
            <MyButtonTransparent padding="0" onClick={onClose}>
              Cancel
            </MyButtonTransparent>
          </div>
          <MyButtonOrange onClick={onPublish}>Publish Review</MyButtonOrange>
        </div>
      </div>
    </ModalCenterBasic>
  )
}

export default ReviewModal
