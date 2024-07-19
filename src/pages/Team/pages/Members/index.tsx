import Header from '@common/components/Header/Header/index'
import styles from './style.module.scss'
import { NavigationBarCustom } from '@common/components/NavigationBar/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import AppColor from '@common/styles/variables-static'
import Typography from '@common/components/ui/Typography/Typography'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import DetailsTableMembers, {
  DetailsTableMembersPropsItem,
} from '@common/components/ui/DetailsTable/variants/DetailsTableMembers/index'
import CreateTeamButton from '@common/components/ui/ButtonsPlus/CreateTeamButton/index'

const teamsContent: DetailsTableMembersPropsItem[] = [
  {
    memberIcon: <AppColor.freelancer />,
    memberName: 'Artem M.',
    memberDescription: 'Senior UI Designer',
    date: 'Feb 26, 2021',
    time: '16:32 ',
    contactDescription: 'till 26 Oct 2023',
    contactTitle: 'Signed (2/2)',
    freelance: true,
    termination: false,
    squad: 'Design, Marketing',
    page: 0,
    status: 'Invited',
  },
  {
    memberIcon: <AppColor.freelancer />,
    memberName: 'Artem M.',
    memberDescription: 'Senior UI Designer',
    date: 'Feb 26, 2021',
    time: '16:32 ',
    contactDescription: 'till 26 Oct 2023',
    contactTitle: 'Signed (2/2)',
    freelance: true,
    termination: false,
    squad: 'Design, Marketing',
    page: 0,
    status: 'Invited',
  },
]
const TeamMembers = () => {
  return (
    <div>
      <Header />
      <NavigationBarCustom
        icon={<AppColor.teamsWhite />}
        text="Teams"
        parentRoute="team"
        activeIndex={0}
        buttonsLink={[
          {
            title: 'members',
            link: '/members',
          },
          {
            title: 'squads',
            link: '/squads',
          },
        ]}
      />
      <div className={styles.wrapper}>
        <PageDetails
          pageTitle="Members"
          historyNode={
            <NavigationItem
              image={<AppColor.home />}
              textList={['Team', 'Members']}
            />
          }
          endNode={
            <div className={styles.flex_center}>
              <CreateTeamButton />
              <Typography variant="body3" fontWeight="500">
                Add member
              </Typography>
            </div>
          }
        />

        <DynamicPadding />
        <SearchFilterBar />
        <DynamicPadding />

        <DetailsTableMembers information={teamsContent} />

        <AskedQuestion margin="50px 0 0 0" />
      </div>
      <Footer />
    </div>
  )
}

export default TeamMembers
