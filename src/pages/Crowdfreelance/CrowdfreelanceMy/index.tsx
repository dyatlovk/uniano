import AskedQuestion from '@common/components/AskedQuestions/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import Footer from '@common/components/Footer/Footer'
import Header from '@common/components/Header/Header/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import AppColor from '@common/styles/variables-static'
import { useEffect, useState } from 'react'
import { NavigationSimpleBar } from '@common/components/NavigationBar/index'
import DetailsMyService from '@common/components/ui/DetailsTable/variants/DetailsMyService/index'
import { fakeUserConstant } from '@common/models/user'
import ReviewModal from '@pages/Service/ServiceMy/components/ReviewModal/index'
import DetailsCrowdfreelanceAdmin from '@common/components/ui/DetailsTable/variants/DetailsCrowdfreelanceAdmin/index'
import DetailCrowdfreelanceMy from '@common/components/ui/DetailsTable/variants/DetailsCrowdfreelancerMy/index'

const CrowdfreelanceMy = () => {
  const [addReviewModalShow, setAddReviewModalShow] = useState<boolean>(false)
  const arrayHistory = ['Crowdfreelance']
  const title = 'My Campaigns'

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <div>
      <Header />

      <NavigationSimpleBar
        title="Crowdfreelance"
        activeId={1}
        icon={<AppColor.partnership />}
        links={[
          {
            title: 'All campaigns',
            link: '/crowdfreelance/all',
          },
          {
            title: 'My campaigns',
            link: '/crowdfreelance/my',
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
        <DynamicPadding desktop="50px" mobile="20px" />

        <DetailCrowdfreelanceMy
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
        <AskedQuestion margin='50px 0 0 0' />
      </div>
      <Footer />

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
    </div>
  )
}

export default CrowdfreelanceMy
