
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar from '@common/components/NavigationBar/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import FilterList from '@common/components/FilterList/index';
import SubscriptionBox, { SubscriptionBoxProps } from './components/SubscriptionBox';
import Typography from '@common/components/ui/Typography/Typography';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import { useState } from 'react';


const box_content:SubscriptionBoxProps[] = [
  {
    daysLeft: 35,
    filter: 'Pro',
    price: 39,
    userName: 'Artem M.',
    topLeftIcon: true,
  },
  {
    daysLeft: 35,
    filter: 'Ultimate',
    price: 59,
    userName: 'Helberd B.',
    topLeftIcon: false,
  },
  {
    daysLeft: 0,
    filter: 'Start',
    price: 0,
    userName: 'Artem M.',
    topLeftIcon: false,
  },
]
const MySubscription = () => {

  const [activeFilter,setActiveFilter] = useState('All');
    return (
        <div>
            <Header />
            <NavigationBar
                activePageIndex={1}
                currentCategoryTitle="Subscriptions"
            />
            <div className={styles.wrapper}>
                <PageDetails
                    pageTitle="my Subscriptions"
                    historyNode={
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Subscriptions']}
                        />
                    }
                />
                <DynamicPadding />
                <SearchFilterBar />
                <DynamicPadding />

                <FilterList
                    callback={(item) => { setActiveFilter(item) }}
                    filters={['All', 'Start', 'Pro', 'Ultimate']}
                />

                <DynamicPadding mobile='20x' desktop='30px'/>

                <div className={styles.boxes_wrapper}>
                    {activeFilter == 'All'
                    ?
                    box_content.map((info) => (
                        <SubscriptionBox
                            topLeftIcon={info.topLeftIcon}
                            daysLeft={info.daysLeft}
                            filter={info.filter}
                            price={info.price}
                            userName={info.userName}
                        />
                    ))
                    : box_content
                    .filter(item => item.filter == activeFilter)
                    .map((info) => (
                      <SubscriptionBox
                          topLeftIcon={info.topLeftIcon}
                          daysLeft={info.daysLeft}
                          filter={info.filter}
                          price={info.price}
                          userName={info.userName}
                      />
                    ))}
                </div>

                <DynamicPadding mobile='20px' desktop='20px' />
                <Typography variant='body5'><span style={{fontWeight: '500'}}>{box_content.length}</span> subscriptions</Typography>

                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
};

export default MySubscription;