
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar, { NavigationBarCustom } from '@common/components/NavigationBar/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SquadCard, { SquadCardProps } from './components/SquadCard';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import CreateSquadButton from '@common/components/ui/ButtonsPlus/CreateSquadButton/index';


const squadContent:SquadCardProps[] = [
    {
        title: 'Design',
        members: [
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },

        ]
    },
    {
        title: 'Marketing',
        members: [
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
            {
                icon: <AppColor.freelancer />,
                isOnline: true
            },
        ]
    },
    {
        members: [],
        title: 'Web'
    }
]
const TeamSquads = () => {

    return (
        <div>
        <Header />
        <NavigationBarCustom
            icon={<AppColor.teamsWhite />}
            text="Teams"
            parentRoute="team"
            activeIndex={1}
            buttonsLink={[
                {
                    title: "members",
                    link: "/members",
                },
                {
                    title: "squads",
                    link: "/squads",
                }
            ]}
        />
        <div className={styles.wrapper}>
            <PageDetails
                pageTitle="squads"
                historyNode={
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={['Team']}
                    />
                }
                endNode={
                    <div className={styles.flex_center}>
                        <CreateSquadButton />
                        <Typography
                            variant="body3"
                            fontWeight="500">
                            Create Squad
                        </Typography>
                    </div>
                }
            />

            <DynamicPadding />

            <div className={styles.squads_wrapper}>
                {squadContent.map(item =>
                    <SquadCard
                        members={item.members}
                        title={item.title}
                    />
                )}
            </div>
            <AskedQuestion/>
        </div>
        <Footer/>
    </div>
    );
};

export default TeamSquads;