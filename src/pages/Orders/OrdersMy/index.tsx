
import Header from '@common/components/Header/Header/index';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import AppColor from '@common/styles/variables-static';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import { developmentDropdown } from '@common/models/constants';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import DetailMyOrders from '@common/components/ui/DetailsTable/variants/DetailsMyOrders/index';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';

const OrdersMy = () => {
    const arrayHistory = ['Order'] 
    const title = 'My Orders';
    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    return (
        <div>
        <Header />

        <NavigationBarDropdowns
                title="Order"
                navItems={developmentDropdown}
                titleIcon={<AppColor.goal />}
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

            <DynamicPadding />

            <SearchFilterBar date='10/29/22 - 11/29/22' />

            <DynamicPadding />

            <DetailMyOrders
                informationDropdown={[
                    {
                        page: 0,
                    }
                ]}
                informationTable={[
                    {
                        page: 0
                    }
                ]}
            />
        </div>
        <CardsSliderRelated />
        <div className='wrapper_page'>
                <AskedQuestion />
        </div>
        <Footer />
           
      </div>
    );
};

export default OrdersMy;