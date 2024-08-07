import AskedQuestion from '@common/components/AskedQuestions/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import Footer from '@common/components/Footer/Footer'
import Header from '@common/components/Header/Header/index'
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import DetailMyOrders from '@common/components/ui/DetailsTable/variants/DetailsMyOrders/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import { developmentDropdown } from '@common/models/constants'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import DetailsMyFreelancers from '@common/components/ui/DetailsTable/variants/DetailsMyFreelancers/index'

const UsersMy = () => {
  const arrayHistory = ['Order']
  const title = 'My Orders'
  return (
    <div>
      <Header />

      <NavigationBarDropdowns
        title="Freelancers"
        navItems={developmentDropdown}
        titleIcon={<AppColor.freelancerWhite />}
      />

      <div className={'wrapper_page'}>
        <PageDetails
          historyNode={
            <NavigationItem image={<AppColor.home />} textList={arrayHistory} />
          }
          pageTitle={title}
        />

        <DynamicPadding />

        <SearchFilterBar date="10/29/22 - 11/29/22" />

        <DynamicPadding />

        <DetailsMyFreelancers
          informationDropdown={[
            {
              page: 0,
            },
          ]}
          informationTable={[
            {
              page: 0,
            },
          ]}
        />
      </div>
      <CardsSliderRelated />
      <div className="wrapper_page">
        <AskedQuestion />
      </div>
      <Footer />
    </div>
  )
}

export default UsersMy
