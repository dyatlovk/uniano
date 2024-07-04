import Header from '@common/components/Header/Header/index'
import styles from './style.module.scss'
import NavigationBar from '@common/components/NavigationBar/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import AppColor from '@common/styles/variables-static'
import Typography from '@common/components/ui/Typography/Typography'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import DetailsTableActivity from '@common/components/ui/DetailsTable/variants/DetailsTableActivity/index'
import DetailsTableMyTeams, { DetailsTableMyTeamsPropsItem } from '@common/components/ui/DetailsTable/variants/DetailsTableMyTeams/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import AddMissionButton from '@common/components/ui/AddMisionButton/index'
import CreateTeamButton from '@common/components/ui/ButtonsPlus/CreateTeamButton/index'


const teamsContent:DetailsTableMyTeamsPropsItem[] = [
    {
        teamIcon: <AppColor.freelancer />,
        teamName: 'Tugas Virtual Solutions',
        teamMembers: 322,
        date: 'Feb 26, 2021 16:32 ',
        contactDescription: 'till 26 Oct 2023',
        contactTitle: 'Signed (2/2)',
        freelance: true,
        termination: false,
        position: 'Senior UI Designer',
        page: 0,
        status: 'Member'
    },
    {
        teamIcon: <AppColor.freelancer />,
        teamName: 'Tugas Virtual Solutions',
        teamMembers: 322,
        date: 'Feb 26, 2021 16:32 ',
        contactDescription: 'till 26 Oct 2023',
        contactTitle: 'Signed (2/2)',
        freelance: true,
        termination: false,
        position: 'Senior UI Designer',
        page: 1,
        status: 'Member'
    }
    , {
        teamIcon: <AppColor.freelancer />,
        teamName: 'Tugas Virtual Solutions',
        teamMembers: 322,
        date: 'Feb 26, 2021 16:32 ',
        contactDescription: 'till 26 Oct 2023',
        contactTitle: 'Signed (2/2)',
        freelance: true,
        termination: false,
        position: 'Senior UI Designer',
        page: 2,
        status: 'Member'
    }
]
const MyTeams = () => {
    return (
        <div>
            <Header />
            <NavigationBar
                activePageIndex={0}
                currentCategoryTitle="Teams"
            />
            <div className={styles.wrapper}>
                <PageDetails
                    pageTitle="my Teams"
                    historyNode={
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Teams']}
                        />
                    }
                    endNode={
                        <div className={styles.flex_center}>
                            <CreateTeamButton />
                            <Typography
                                variant="body3"
                                fontWeight="500">
                                Create Team
                            </Typography>
                        </div>
                    }
                />

                <DynamicPadding />
                <SearchFilterBar date='10/29/22 - 11/29/22' />
                <DynamicPadding />

                <DetailsTableMyTeams information={teamsContent}  />

                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
}

export default MyTeams
