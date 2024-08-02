import Header from '@common/components/Header/Header/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import { fakeUserConstant } from '@common/models/user'
import AppColor from '@common/styles/variables-static'
import DetailsMyService from '@common/components/ui/DetailsTable/variants/DetailsMyService/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import { useEffect, useState } from 'react'
import { NavigationSimpleBar } from '@common/components/NavigationBar/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import ReviewModal from './components/ReviewModal'

const ServiceMy = () => {
  const [addReviewModalShow, setAddReviewModalShow] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <Header />

      <NavigationSimpleBar
        title="Service"
        activeId={1}
        icon={<AppColor.cart fill={AppColor.white} width={26} />}
        links={[
          {
            title: 'All services',
            link: '/service/all',
          },
          {
            title: 'My services',
            link: '/service/my',
          },
        ]}
      />

      <div className={'wrapper_page'}>
        <PageDetails
          historyNode={
            <NavigationItem image={<AppColor.home />} textList={['Service']} />
          }
          pageTitle={'My services'}
        />

        <DynamicPadding desktop="35px" />
        <SearchFilterBar usePeriod={true} />
        <DynamicPadding desktop="50px" mobile="20px" />

        <DetailsMyService
          information={[
            {
              category: 'Logo design',
              date: 'Feb 26, 2021 16:32 ',
              delivery: 'avg. 3 days',
              page: 0,
              price: '200',
              queue: '35',
              userName: fakeUserConstant.name,
            },
          ]}
          informationDropdown={[
            {
              customer: fakeUserConstant,
              freelancer: fakeUserConstant,
              manager: fakeUserConstant,
              delivery: 'avg. 3 days',
              id: '352',
              negotiation: '200',
              page: 0,
              queue: '1',
              status: 'Completed',
            },
          ]}
          onAddReviewCallback={() => {
            setAddReviewModalShow(true)
          }}
        />
      </div>

      {addReviewModalShow && (
        <ReviewModal
          onPublish={() => {
            setAddReviewModalShow(false)
          }}
          onClose={() => {
            setAddReviewModalShow(false)
          }}
        />
      )}

      <CardsSliderRelated />

      <div className="wrapper_page">
        <AskedQuestion />
      </div>

      <Footer />
    </div>
  )
}

export default ServiceMy
