
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar, { NavigationBarCustom } from '@common/components/NavigationBar/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import PageDetails from '@common/components/ui/PageDetails/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import ComparisonTable from '@common/components/ComparisonTable/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import SaleCard from './components/SaleCard';
import { useState } from 'react';

const FreelancersSubscriptions = () => {

    const [activePlan,setActivePlan] = useState('Start');
    return (
      <div>
          <Header /> 
          <NavigationBarCustom
            icon={<AppColor.subscriptionsWhite />}
            text="Subscriptions"
            parentRoute="freelancers"
            activeIndex={0}
            buttonsLink={[
                {
                    title: "subscriptions",
                    link: "/subscriptions",
                },
              
            ]}
        />

          <div className={styles.wrapper}>
            <PageDetails
                historyNode={<NavigationItem image={<AppColor.home/>} textList={['Users', 'Freelancers', 'Programmatis']} />}
                pageTitle='Subscriptions'
            />
            <DynamicPadding />
            <ComparisonTable 
                card1={
                    <SaleCard
                        filter='Start'
                        description='All the basics for start to work with your freelancer'
                        price={0}
                        isActive={activePlan == 'Start'}
                        callback={(item) => {setActivePlan(item)}}
                    />
                }
                card2={ <SaleCard
                    filter='Pro'
                    description='In case you need a little bit more from your freelancer'
                    price={39}
                    isActive={activePlan == 'Pro'}
                    callback={(item) => {setActivePlan(item)}}
                />}
                card3={<SaleCard
                    filter='Ultimate'
                    description='For teams and organizations to build business'
                    price={59}
                    isActive={activePlan == 'Ultimate'}
                    callback={(item) => {setActivePlan(item)}}
                />}

                rows={[
                    {
                        card1Text: 'General',
                        card2Text: 'Higher priority',
                        card3Text: 'Highest priority',
                        title: 'Queue',
                        titleInfo: 'Dolor urna augue augue leo. Elit lacus mauris non in euismod amet in tristique netus.',
                    },
                    {
                        card1Text: 'General',
                        card2Text: 'Higher priority',
                        card3Text: 'Highest priority',
                        title: 'Support',
                        titleInfo: '',
                    },
                    {
                        card1Text: 'x1',
                        card2Text: 'x1.2',
                        card3Text: 'x1.5',
                        title: 'Bonuses',
                        titleInfo: '',
                    },
                    {
                        title: 'Guarantee',
                        titleInfo: '',
                        card1Text: '7days',
                        card2Text: 'Unlimited',
                        card3Text: 'Unlimited'
                    },
                    {
                        title: 'Special Sales',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: true,
                        card3Text: true
                    },
                    {
                        title: 'Gamification',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: true,
                        card3Text: true
                    },
                    {
                        title: 'Discount System',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: '',
                        card3Text: true
                    },
                    {
                        title: 'Prime Chat',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: '',
                        card3Text: true
                    }
                ]}
            />
            <AskedQuestion />
          </div>
          <Footer/>
      </div>
    );
};

export default FreelancersSubscriptions;