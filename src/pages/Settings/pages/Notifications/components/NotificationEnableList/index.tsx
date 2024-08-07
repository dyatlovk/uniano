import Typography from '@common/components/ui/Typography/Typography'
import styles from './style.module.scss'
import AppColor from '@common/styles/variables-static'
import { useEffect, useState } from 'react'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'

type NotificationData = {
  projects: boolean
  crowfreelance: boolean
  messages: boolean
  newsletter: boolean
  surveys: boolean
  community: boolean
  gamification: boolean
  subscriptions: boolean
}
interface NotificationProps {
  checkAllEmails?: boolean
}

const NotificationEnableList = ({
  checkAllEmails = false,
}: NotificationProps) => {
  const [notificationData, setNotificationData] = useState<NotificationData>({
    projects: false,
    crowfreelance: false,
    messages: false,
    newsletter: false,
    surveys: false,
    community: false,
    gamification: false,
    subscriptions: false,
  })

  const handleCheckboxChange = (
    item: boolean,
    type: keyof NotificationData
  ) => {
    setNotificationData(prevData => ({
      ...prevData,
      [type]: item,
    }))
  }

  return (
    <div className={styles.list_wrapper}>
      <NotificationEnableItem
        title="Projects"
        text="We notify you about modifications and updates of projects"
        callback={item => handleCheckboxChange(item, 'projects')}
        checked={checkAllEmails}
      />
      <NotificationEnableItem
        title="Crowdfreelance"
        text="We notify you about modifications and updates of sponsorships                 "
        callback={item => handleCheckboxChange(item, 'crowfreelance')}
        checked={checkAllEmails}
      />

      <NotificationEnableItem
        title="Messages"
        text="We notify you about any messages from chats                 "
        callback={item => handleCheckboxChange(item, 'messages')}
        checked={checkAllEmails}
      />

      <NotificationEnableItem
        title="Newsletter"
        text="We notify you about news                "
        callback={item => handleCheckboxChange(item, 'newsletter')}
        checked={checkAllEmails}
      />

      <NotificationEnableItem
        title="Surveys"
        text="We notify you about surveys                "
        callback={item => handleCheckboxChange(item, 'surveys')}
        checked={checkAllEmails}
      />

      <NotificationEnableItem
        title="Community"
        text="We notify you about replies of created or followed posts"
        callback={item => handleCheckboxChange(item, 'community')}
        checked={checkAllEmails}
      />

      <NotificationEnableItem
        title="Gamification"
        text="We notify you about any account progress activity "
        callback={item => handleCheckboxChange(item, 'gamification')}
        checked={checkAllEmails}
      />

      <NotificationEnableItem
        title="Subscriptions"
        text="We notify you about scheduled payments "
        callback={item => handleCheckboxChange(item, 'subscriptions')}
        checked={checkAllEmails}
      />
    </div>
  )
}

type NotificationEnableItemProps = {
  title: string
  text: string
  callback: (item: boolean) => void
  checked: boolean
}
const NotificationEnableItem = ({
  text,
  title,
  callback,
  checked = false,
}: NotificationEnableItemProps) => {
  const [isActive, setIsActive] = useState<boolean>(checked)

  useEffect(() => {
    setIsActive(checked)
  }, [checked])

  function handleChange(item: boolean) {
    callback(item)
    setIsActive(item)
  }
  return (
    <div className={styles.item_wrapper}>
      <DynamicPadding desktop="25px" mobile="8px" />
      <div className={styles.justify_flex}>
        <div className={styles.flex_column}>
          <div className={styles.flex_center}>
            <Typography variant="body4" fontWeight="500">
              {title}
            </Typography>
            {isActive ? <AppColor.soundOn /> : <AppColor.soundMute />}
          </div>
          <Typography variant="body5" fontWeight="400">
            {text}
          </Typography>
        </div>
        <MyCheckbox
          width="20px"
          height="20px"
          basicValue={checked}
          callback={item => {
            handleChange(item)
          }}
        />
      </div>
      <DynamicPadding desktop="30px" mobile="15px" />

      <HorizontalLine />
    </div>
  )
}

export default NotificationEnableList
