import HeaderNothAuthorized from '@common/components/Header/Header-not-authorized/Header-not-authorized'
import { NavigationSimpleBar } from '@common/components/NavigationBar/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'

const PrivacyPolicy = (): JSX.Element => {
  return (
    <>
      <HeaderNothAuthorized />
      <NavigationSimpleBar
        title=""
        activeId={1}
        links={[
          {
            title: 'About us',
            link: '/about-us',
          },
          {
            title: 'Privacy policy',
            link: '/privacy-policy',
          },
          {
            title: 'Terms and conditions',
            link: '/terms-conditions',
          },
          {
            title: 'Releases',
            link: '/releases',
          },
        ]}
      />

      <div className={styles.breadcrumbs}>
        <DynamicPadding desktop="50px" />
        <NavigationItem
          image={<AppColor.home />}
          textList={['Privacy Policy']}
        />
        <DynamicPadding desktop="30px" />
      </div>

      <div className={styles.title}>
        <Typography
          variant="titleBig"
          textTransform="uppercase"
          fontWeight="600"
        >
          Privacy Policy
        </Typography>
        <DynamicPadding desktop="18px" />
      </div>
    </>
  )
}

export default PrivacyPolicy
