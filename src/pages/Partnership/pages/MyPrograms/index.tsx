import Header from '@common/components/Header/Header/index'
import styles from './style.module.scss'
import PageDetails from '@common/components/ui/PageDetails/index'
import AppColor from '@common/styles/variables-static'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import DetailsTableMyPrograms from '@common/components/ui/DetailsTable/variants/DetailsTableMyPrograms/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import { fakeUserConstant } from '@common/models/user'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'
import { ButtonDropdownSelect } from '@common/components/ui/ThreeLinesPopUp/index'
import { NavigationSimpleBar } from '@common/components/NavigationBar/index'

const PartnershipMyPrograms = () => {
  return (
    <div>
      <Header />

      <NavigationSimpleBar
        title="partnership"
        activeId={1}
        icon={<AppColor.partnership />}
        links={[
          {
            title: 'All programs',
            link: '/partnership',
          },
          {
            title: 'My programs',
            link: '/partnership/my-programs',
          },
        ]}
      />

      <div className={styles.wrapper}>
        <PageDetails
          historyNode={
            <NavigationItem
              image={<AppColor.home />}
              textList={['Partnership']}
            />
          }
          pageTitle="My programs"
        />

        <DynamicPadding desktop="35px" />
        <SearchFilterBar />

        <DynamicPadding desktop="50px" mobile="20px" />
        <DetailsTableMyPrograms
          informationTable={[
            {
              memberName: 'Artem Markevych Logo Design Partnership ',
              category: 'Logo design',
              CR: '10%',
              CR48Hours: '8%',
              date: 'Feb 26, 2021 16:32 ',
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
      <div className={styles.wrapper}>
        <AskedQuestion />
      </div>
      <Footer />
    </div>
  )
}

export default PartnershipMyPrograms
