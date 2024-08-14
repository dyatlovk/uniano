import AskedQuestion from '@common/components/AskedQuestions/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import Footer from '@common/components/Footer/Footer'
import Header from '@common/components/Header/Header/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import DetailsMyFreelancers from '@common/components/ui/DetailsTable/variants/DetailsMyFreelancers/index'
import { NavigationSimpleBar } from '@common/components/NavigationBar/index'

const UsersMy = () => {
  const arrayHistory = ['Users']
  const title = 'My Freelancers'
  return (
    <div>
      <Header />

      <NavigationSimpleBar
        title="Users"
        activeId={1}
        icon={<AppColor.partnership />}
        links={[
          {
            title: 'All customers',
            link: '/users/all',
          },
          {
            title: 'My customers',
            link: '/users/my',
          },
        ]}
      />

      <div className={'wrapper_page'}>
        <PageDetails
          historyNode={
            <NavigationItem image={<AppColor.home />} textList={arrayHistory} />
          }
          pageTitle={title}
        />

        <DynamicPadding desktop="37px" />

        <SearchFilterBar usePeriod={true} />

        <DynamicPadding desktop="50px" mobile="20px" />

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
