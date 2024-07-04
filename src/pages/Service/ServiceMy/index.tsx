
import Header from '@common/components/Header/Header/index';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import DetailsMyService from '@common/components/ui/DetailsTable/variants/DetailsMyService/index';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import { useEffect } from 'react';

const ServiceMy = () => {
    const arrayHistory = ['Service', 'Development', 'Web Development', 'WordPress'] 
    const title = 'Artem Markevych WordPress Partnership';

    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    
    return (
        <div>
        <Header />

        <NavigationBarSelection
           allItemsProgress={['Program', 'Selection', 'Progress', 'Completed']}
           currentItemProgress='Program'
        />

        <div className={'wrapper_page'}>
            <PageDetails
                historyNode={
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={arrayHistory}
                    />
                }
                pageTitle={title}
            />

            <DynamicPadding desktop='30px' mobile='20px'/>
            <UserTopPageInfo user={fakeUserConstant}
                nodeAfter={
                            <AppColor.refreshA/>
                }
            />

            <DynamicPadding/>

            <DetailsMyService
                information={[
                    {
                        category: 'Logo design',
                        date: 'Feb 26, 2021 16:32 ',
                        delivery: 'avg. 3 days',
                        page: 0,
                        price: '200',
                        queue: '35',
                        userName: fakeUserConstant.name
                    }
                ]}
                informationDropdown={[
                    {
                        customer: fakeUserConstant,
                        freelancer: fakeUserConstant,
                        manager: fakeUserConstant,
                        delivery: 'avg. 3 days',
                        id:'352',
                        negotiation: '200',
                        page: 0,
                        queue: '1',
                        status: 'Completed'
                    }
                ]}
            />

        </div>
        <CardsSliderRelated />
        <div className='wrapper_page'>
            <AskedQuestion/>
        </div>
        <Footer/>
      </div>
    );
};

export default ServiceMy;