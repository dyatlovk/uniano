import Header from '@common/components/Header/Header/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import AppColor from '@common/styles/variables-static'
import { useEffect } from 'react'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import DetailMyOrders from '@common/components/ui/DetailsTable/variants/DetailsMyOrders/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import { NavigationSimpleBar } from '@common/components/NavigationBar/index'
import DetailsTableMyPrograms from '@common/components/ui/DetailsTable/variants/DetailsTableMyPrograms/index'
import { fakeUserConstant } from '@common/models/user'

const OrdersMy = () => {
  const arrayHistory = ['Order']
  const title = 'My Orders'
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])
  return (
    <div>
      <Header />

      <NavigationSimpleBar
        title="Order"
        activeId={1}
        icon={<AppColor.partnership />}
        links={[
          {
            title: 'All orders',
            link: '/orders/all',
          },
          {
            title: 'My order',
            link: '/orders/myorders',
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

        <DynamicPadding desktop="35px" />

        <SearchFilterBar usePeriod={true} />

        <DynamicPadding />

        <DetailsTableMyPrograms
          informationTable={[
            {
              memberName: 'Artem Markevych Logo Design Partnership ',
              category: 'Logo design',
              CR: '10%',
              CR48Hours: '8%',
              date: 'Feb 26, 2021',
              time: '16:32',
              EPC: '5$',
              page: 0,
              rate: '5% - 10% ',
            },
          ]}
          informationDropdown={[
            {
              id: '352',
              freelancer: fakeUserConstant,
              manager: fakeUserConstant,
              CTR: '5',
              eCPC: '5',
              CR: '2',
              Clicks: '1521',
              Leads: '373',
              Sales: '64',
              Earned: '50321',
              Duration: '3',
              status: 'Progress',
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

export default OrdersMy
