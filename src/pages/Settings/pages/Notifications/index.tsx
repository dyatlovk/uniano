import Header from '@common/components/Header/Header/index'
import styles from './style.module.scss'
import { NavigationBarCustom } from '@common/components/NavigationBar/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import AppColor from '@common/styles/variables-static'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index'
import NotificationEnableList from './components/NotificationEnableList'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import { useCallback, useState } from 'react'

const SettingsNotifications = () => {
  const [isAllEmailsChecked, setAllEmailsChecked] = useState<boolean>(false)
  const allEmailsCheckedHandler = useCallback((state: boolean) => {
    setAllEmailsChecked(state)
  }, [])

  return (
    <div>
      <Header />
      <NavigationBarCustom
        icon={<AppColor.settings />}
        text="settings"
        parentRoute="settings"
        activeIndex={3}
        buttonsLink={[
          {
            title: 'profile',
            link: '/profile',
          },
          {
            title: 'password & security',
            link: '/password-security',
          },
          {
            title: 'verification',
            link: '/verification',
          },
          {
            title: 'notifications',
            link: '/notifications',
          },
        ]}
      />
      <div className={styles.wrapper}>
        <PageDetails
          historyNode={
            <NavigationItem image={<AppColor.home />} textList={['Settings']} />
          }
          pageTitle="notifications"
        />

        <DynamicPadding desktop="37px" />

        <div className={styles.notif_main_wrapper}>
          <div className={styles.top_bar}>
            <Typography variant="body4" fontWeight="500">
              Event
            </Typography>
            <div className={styles.flex_center}>
              <Typography variant="body4" fontWeight="500">
                Email
              </Typography>
              <MyCheckbox
                height="20px"
                width="20px"
                callback={allEmailsCheckedHandler}
              />
            </div>
          </div>
          <NotificationEnableList checkAllEmails={isAllEmailsChecked} />
        </div>

        <AskedQuestion />
      </div>

      <Footer />
    </div>
  )
}

export default SettingsNotifications
