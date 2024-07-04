import styles from './style.module.scss'
import NavigationBar from '@common/components/NavigationBar/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import AppColor from '@common/styles/variables-static'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import Header from '@common/components/Header/Header/index'
import DropdownNode from '@common/components/ui/Dropdown/DropdownNodes/index'
import Slider from '@common/components/ui/Slider/Slider'
import CardTime from '@common/components/cards/CardTime/CardTime'
import { fakeUserConstant, userModel } from '@common/models/user'
import CardStatistics from '@common/components/cards/CardStatistics/index'
import CardStatisticTest from '@common/components/cards/CardStatistics/variants/CardStatisticTest'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'
import { useScreenSize } from '@common/helpers/useScreenSize'
import DropdownNodeActivity from '@common/components/ui/Dropdown/DropdownNodes/variants/DropdownNodeActivity/index'
import DropdownNodeRoadmap from '@common/components/ui/Dropdown/DropdownNodes/variants/DropdownRoadmap/index'
import UserAvatar from '@common/components/ui/UserAvatar/index'
import CardsSliderRelated from '@common/components/CardsSliderRelated/index'

const fakeUser:userModel = {
    country: 'Ukraine',
    image: '',
    name: 'Artem M.',
    roles: 'Customer',
    isActive: false,
    lvl: '50',
    statistic: {
      comments_count: 55,
      sponsorship_count: 55,
      rating: 98,
      responses_count: 900
    }
  }
  
  const activityItems = [
    {
      filter: 'Service',
      image: <AppColor.freelancer />,
      percent: 39,
      present: '16 Oct - Present',
      price: '100',
      tag: ['Logo Design', 'A. Markevych'],
      title: 'Logo by sample in vector in maximum quality ',
      iconNode: (
        <div>
          <AppColor.cart height={22} fill={AppColor.text} />
          <AppColor.flag height={22} />
        </div>
      ),
    },
    {
        filter: 'Service',
        image: <AppColor.freelancer />,
        percent: 39,
        present: '16 Oct - Present',
        price: '100',
        tag: ['Logo Design', 'A. Markevych'],
        title: 'Logo by sample in vector in maximum quality ',
        iconNode: (
          <div>
            <AppColor.cart height={22} fill={AppColor.text} />
            <AppColor.flag height={22} />
          </div>
        ),
      },
      {
        filter: 'Service',
        image: <AppColor.freelancer />,
        percent: 39,
        present: '16 Oct - Present',
        price: '100',
        tag: ['Logo Design', 'A. Markevych'],
        title: 'Logo by sample in vector in maximum quality ',
        iconNode: (
          <div>
            <AppColor.cart height={22} fill={AppColor.text} />
            <AppColor.flag height={22} />
          </div>
        ),
      },
      {
        filter: 'Service',
        image: <AppColor.freelancer />,
        percent: 39,
        present: '16 Oct - Present',
        price: '100',
        tag: ['Logo Design', 'A. Markevych'],
        title: 'Logo by sample in vector in maximum quality ',
        iconNode: (
          <div>
            <AppColor.cart height={22} fill={AppColor.text} />
            <AppColor.flag height={22} />
          </div>
        ),
      },
  ];

  const roadmapItems = [
    {
      icon: <AppColor.taskCheck />,
      title: 'Entrance challenge',
      text: 'Provide complete information about yourself',
      user:<UserAvatar noWrap={true} url={fakeUserConstant.image}  preventMobileNone={true} active={true} name={fakeUserConstant.name} width='22px' height='22px' />,
      stepsCompleted: '1 of 12 completed',
      amount: '25',
      filter: 'Mission',
    },
    {
      icon: <AppColor.taskCheck />,
      title: 'Entrance challenge',
      text: 'Provide complete information about yourself',
      user: <UserAvatar noWrap={true} url={fakeUserConstant.image}  preventMobileNone={true} active={true} name={fakeUserConstant.name} width='22px' height='22px' />,
      stepsCompleted: '1 of 12 completed',
      amount: '25',
      filter: 'Mission',
    },
    {
      icon: <AppColor.taskCheck />,
      title: 'Entrance challenge',
      text: 'Provide complete information about yourself',
      user: <UserAvatar noWrap={true} url={fakeUserConstant.image}  preventMobileNone={true} active={true} name={fakeUserConstant.name} width='22px' height='22px' />,
      stepsCompleted: '1 of 12 completed',
      amount: '25',
      filter: 'Mission',
    },
    {
      icon: <AppColor.taskCheck />,
      title: 'Entrance challenge',
      text: 'Provide complete information about yourself',
      user: <UserAvatar noWrap={true} url={fakeUserConstant.image}  preventMobileNone={true} active={true} name={fakeUserConstant.name} width='22px' height='22px' />,
      stepsCompleted: '1 of 12 completed',
      amount: '25',
      filter: 'Mission',
    },
    {
      icon: <AppColor.taskCheck />,
      title: 'Entrance challenge',
      text: 'Provide complete information about yourself',
      user: <UserAvatar noWrap={true}  url={fakeUserConstant.image} preventMobileNone={true} active={true} name={fakeUserConstant.name} width='22px' height='22px' />,
      stepsCompleted: '1 of 12 completed',
      amount: '25',
      filter: 'Mission',
    }
  ]
const DashboardHome = () => {
    const {width,height} = useScreenSize();
    
    return (
        <div>
            <Header />
            <NavigationBar
                currentCategoryTitle="Dashboard"
                activePageIndex={0}
            />
            <div className={styles.wrapper}>
                <DynamicPadding desktop="50px" mobile="30px" />
                <div className={styles.first_section}>
                    <div className={styles.section_details}>
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Dashboard']}
                        />
                        <DynamicPadding
                            desktop='20px'
                            mobile='15px'
                        />
                        <Typography
                            variant="titleBig"
                            textTransform="uppercase">
                            Home
                        </Typography>
                        <DynamicPadding 
                          desktop='0px'
                          mobile='30px'
                        />
                    </div>
                    <div className={styles.income_wrapper}>
  
                     <div className={styles.icome_flex_box}>
                        <div className={styles.green_circle}>
                            <AppColor.wallet />
                        </div>
                          <div>
                            <Typography color={AppColor.transparentBlack}  variant='body9'>
                            Avaliable Balance
                            </Typography>
                            <Typography fontWeight='500' variant='body4'>
                            $35 032.93
                            </Typography>
                        </div>
                     </div>
            
                      <div className={styles.vertical_grey}></div>
              
                       <div className={styles.icome_flex_box}>
                          <div className={styles.orange_circle}>
                              <AppColor.caseWhite />
                          </div>
                          <div>
                            <Typography color={AppColor.transparentBlack} variant='body9'>
                            Sponsorhip Balance
                            </Typography>
                            <Typography fontWeight='500' variant='body4'>
                            $15 031.00
                            </Typography>
                          </div>  
                       </div>
                    
                      <div className={styles.vertical_grey}></div>

           
                       <div className={styles.flex_center_money_green}>
                          <AppColor.moneyGreen />
                          <Typography textLineHeight='80%' fontWeight='500' variant='body5' color={AppColor.green} textTransform='uppercase'>
                            Top up
                          </Typography>
                       </div>
             
               
                       <div className={styles.vertical_grey}></div>
                        <div className={styles.flex_center_money_red}>
                            
                            <AppColor.moneyRed />
                            <Typography textLineHeight='80%' fontWeight='500' variant='body5' color={AppColor.red} textTransform='uppercase'>
                            Withdraw
                            </Typography>
                        </div>
                  
          
                    </div>
                </div>
                <DynamicPadding
                 
                />
                <section className={styles.second_section}>
                   <div className={styles.dropdown_first}>
                        <DropdownNodeRoadmap countNotification={roadmapItems.length}  filters={[{
                            title: 'All',
                            hasChildren: true
                        },
                        {
                            title: 'Guide',
                            hasChildren: false
                        },
                        {
                            title: 'Mission',
                            hasChildren: true
                        },
                       ]} roadmapItems={roadmapItems} />
                       <DropdownNodeActivity filters={[{
                            title: 'All',
                            hasChildren: true
                        },
                        {
                            title: 'Service',
                            hasChildren: true
                        },
                        {
                            title: 'Sponsorship',
                            hasChildren: false
                        },
                       ]}  countNotification={activityItems.length} activityItems={activityItems} />;
                   </div>
                   <div className={styles.dropdown_second}>
                        <DropdownNode
                            countNotifications={0}
                            dropnodes={null}
                            noneIcon={<AppColor.sound />}
                            noneText='Begin the actions on the site to view notifications'
                            noneTitle='No Notifications Yet'
                            noneButton={<></>}
                            filters={[]}
                            title='Notifications'
                        />
                        <DropdownNode
                            countNotifications={0}
                            dropnodes={null}
                            noneIcon={<AppColor.sound />}
                            noneText='Message someone on Messenger'
                            noneTitle='No Messages Yet'
                            noneButton={<MyButtonOrange onClick={() => {}}>Messenger</MyButtonOrange>}
                            filters={[]}
                            title='Messages'
                        />
                   </div>
                </section>
                <DynamicPadding
                    desktop='50px'
                    mobile='30px'
                />
                
            </div>
            <CardsSliderRelated />

                <section className={styles.wrapper}><AskedQuestion /></section>

                <Footer />
        </div>
    )
}

export default DashboardHome
