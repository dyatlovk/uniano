
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar from '@common/components/NavigationBar/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import { useState } from 'react';
import DetailsTable from '@common/components/ui/DetailsTable/index';
import DetailsTableMissions from '@common/components/ui/DetailsTable/variants/DetailsTableMissions/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import { ButtonDropdownSelect } from '@common/components/ui/ThreeLinesPopUp/index';

const missionContent = [
    {
        date: 'Feb 26, 2021 16:32',
        userName: 'Artem M.',
        deadline: ' 22 days left',
        reward: '25',
        status: 'Progress',
        missionText: 'Entrance challenge',
        page: 1,
        missionCompleted: '1 of 10 completed ',
        limitsCurrent: 4,
        limitsMax: 9
    },
    {
        date: 'Feb 26, 2021 16:32',
        userName: 'Artem M.',
        deadline: ' 22 days left',
        reward: '25',
        status: 'Progress',
        missionText: 'Entrance challenge',
        page: 2,
        missionCompleted: '1 of 10 completed ',
        limitsCurrent: 4,
        limitsMax: 9
    },
    {
        date: 'Feb 26, 2021 16:32',
        userName: 'Artem M.',
        deadline: ' 22 days left',
        reward: '25',
        status: 'Progress',
        missionText: 'Entrance challenge',
        page: 3,
        missionCompleted: '1 of 10 completed ',
        limitsCurrent: 4,
        limitsMax: 9
    }
]
const Missions = () => {

    return (
        <div>
            <Header />
            <NavigationBar
                activePageIndex={2}
                currentCategoryTitle="Dashboard"
            />

            <div className={styles.wrapper}>
                <DynamicPadding />
                <div className={styles.top_section}>
                    <div className={styles.top_flex}>
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Dashboard']}
                        />
                        <Typography
                            variant="titleBig"
                            textTransform="uppercase"
                            fontWeight="600">
                            <div className={styles.flex_center}>
                                missions{' '}
                            </div>
                        </Typography>
                    </div>
                    <ButtonDropdownSelect text='Customer' variants={['Customer','2','3']} />
                </div>

                <DynamicPadding />
                <SearchFilterBar recent={true} date='10/29/22 - 11/29/22'/>

                <DynamicPadding />

                <div>
                    <DetailsTableMissions information={missionContent} />
                </div>
          
                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
};

export default Missions;