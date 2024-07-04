
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import AppColor from '@common/styles/variables-static';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import { developmentDropdown } from '@common/models/constants';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import FilterList from '@common/components/FilterList/index';
import DetailsTableMyPrograms from '@common/components/ui/DetailsTable/variants/DetailsTableMyPrograms/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant, userModel } from '@common/models/user';
import CardsSliderRelated from '@common/components/CardsSliderRelated/index';
import { ButtonDropdownSelect } from '@common/components/ui/ThreeLinesPopUp/index';

const PartnershipMyPrograms = () => {

    return (
        <div>
        <Header />

        <NavigationBarDropdowns
            title="partnership"
            navItems={developmentDropdown}
            titleIcon={<AppColor.partnership />}
        />

        <div className={styles.wrapper}>
            <PageDetails
                historyNode={
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={['Partnership']}
                    />
                }
                endNode={
                    <ButtonDropdownSelect text='My programs' variants={['My programs','2','3']} />
                }
                pageTitle="My programs  "
            />

            <DynamicPadding />
            <SearchFilterBar />

            <DynamicPadding />

          

            <DynamicPadding desktop='30px' mobile='20px'/>
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
                        rate: '5% - 10% '
                    }
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
                    }
                ]}
            />
        </div>
        <CardsSliderRelated />
            <div className={styles.wrapper}><AskedQuestion /></div>
           <Footer />
      </div>
    );
};

export default PartnershipMyPrograms;