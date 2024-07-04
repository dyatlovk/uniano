import Header from '@common/components/Header/Header/index'
import styles from './style.module.scss'
import NavigationBar from '@common/components/NavigationBar/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import AppColor from '@common/styles/variables-static'
import Typography from '@common/components/ui/Typography/Typography'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import DetailsTableMissions from '@common/components/ui/DetailsTable/variants/DetailsTableMissions/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import DetailsTableActivity, { DetailsTableActivityPropsItem } from '@common/components/ui/DetailsTable/variants/DetailsTableActivity/index'
import { ButtonDropdownSelect } from '@common/components/ui/ThreeLinesPopUp/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'


const missionContent:DetailsTableActivityPropsItem[] = [
    {
        date: 'Feb 26, 2021 16:32',
        userName: 'Artem M.',
        actionImage: <AppColor.freelancer width={'38px'} height={'38px'} />,
        actionText: 'Convert an Indicator Signal and an EA Signal into a Metatrader 5 Expert...',
        category: 'Logo design',
        rewardAmount: '25',
        rewardEx: '30',
        rewardPointsPlus: '10',
        page: 1,
    },
]
const Activity = () => {
    return (
        <div>
            <Header />
            <NavigationBar
                currentCategoryTitle="Dashboard"
                activePageIndex={5}
            />
            <div className={styles.wrapper}>
                <DynamicPadding desktop="50px" mobile="30px" />
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
                            Activity
                        </Typography>
                    </div>
                    <ButtonDropdownSelect text='Customer' variants={['Customer','2','3']} />
                </div>
                <DynamicPadding />
               <SearchFilterBar date='10/29/22 - 11/29/22' />

                <DynamicPadding />

                <div>
                    <DetailsTableActivity information={missionContent} />
                </div>
          
                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
}

export default Activity
