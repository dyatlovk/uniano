import ComparisonTable from "@common/components/ComparisonTable/index";
import SaleCard from "@pages/Freelancers/pages/Subscriptions/components/SaleCard/index";
import { useState } from "react";

const SubscriptionsModal = () => {
    const [activePlan,setActivePlan] = useState('Start');
    return (
      <>
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
      </>
    );
};

export default SubscriptionsModal;