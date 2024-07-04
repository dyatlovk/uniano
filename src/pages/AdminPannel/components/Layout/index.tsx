
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Logo from '@common/components/Logo/Logo';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import { PageType, pagesAdmin } from './content';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import SizeBox from '@common/components/ui/SizeBox/index';
import Header from '@common/components/Header/Header/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import AdminAnalytics from '../../pages/AdminAnalytics';
import HeaderAdmin from '@common/components/Header/HeaderAdmin/index';
import AdminTopUp from '../../pages/AdminTopUp';
import AdminTaxForm from '../../pages/AdminTaxForm';
import AdminWithdraw from '../../pages/AdminWithdraw';
import AdminList from '../../pages/AdminList';
import AdminVerification from '../../pages/AdminVerification';
import AdminService from '../../pages/AdminService';
import AdminOrder from '../../pages/AdminOrder';
import AdminCrowdfreelance from '../../pages/AdminCrowdfreelance';
import AdminSubscriptions from '../../pages/AdminSubscriptions';
import AdminPartnerships from '../../pages/AdminPartnerships';
import AdminForms from '../../pages/AdminForms';
import AdminPosts from '../../pages/AdminPosts';
import AdminFAQ from '../../pages/AdminFAQ';
import AdminModeration from '../../pages/AdminModeration';
import AdminArbitration from '../../pages/AdminArbitration';
import AdminManagerСhats from '../../pages/AdminManagerСhats';
import AdminModeratorsChats from '../../pages/AdminModeratorsChats';
import AdminTickets from '../../pages/AdminTickets';
import AdminMailing from '../../pages/AdminMailing';
import AdminListPages from '../../pages/AdminListPages';
import AdminServicesCategories from '../../pages/AdminServicesCategories';
import AdminSettings from '../../pages/AdminSettings';
import AdminServicesOrders from '../../pages/AdminServicesOrders';
import AdminServicesPartnership from '../../pages/AdminServicesPartnership';
import AdminServicesSponsorship from '../../pages/AdminServicesSponsorship';
import AdminServicesCommunity from '../../pages/AdminServicesCommunity';

const Layout = () => {
    const [activePage,setActivePage] = useState('Analytics');
    return (
      <div className={styles.layout}>
      <div className='desktop'>
            <div className={styles.left_bar}>
                <LeftBar callback={(item) => {setActivePage(item)}} activePage={activePage} />
            </div>
    
      </div>
        <div className={styles.content}>
            <div className={styles.content_padding}>
            <HeaderAdmin 
                modalMobile={        
                        <LeftBar callback={(item) => {setActivePage(item)}} activePage={activePage} />
                }
            />
            <div className='mobile'></div>
            </div>
            <HorizontalLine />
            <div className={styles.page_padding}>
                <SwitchPage activePage={activePage} />
            </div>
        </div>    
      </div>
    );
};

type SwitchPageProps = {
    activePage: string;
}
const SwitchPage = ({activePage}:SwitchPageProps) => {
    const pageComponents = {//Global mean that item is not child of dropdown
        'Global.Analytics': <AdminAnalytics />,
        'Finance.Operations.Top up': <AdminTopUp />,
        'Finance.Operations.Withdraw': <AdminWithdraw />,
        'Finance.Tax form': <AdminTaxForm />,
        'Users.List': <AdminList />,
        'Users.Verification': <AdminVerification />,
        'Projects.Service': <AdminService />,
        'Projects.Order': <AdminOrder />,
        'Global.Crowdfreelance': <AdminCrowdfreelance />,
        'Global.Subscriptions': <AdminSubscriptions />,
        'Global.Partnerships': <AdminPartnerships />,
        'Global.Forms': <AdminForms />,
        'Community.Posts': <AdminPosts />,
        'Community.FAQ': <AdminFAQ />,
        'Global.Moderation': <AdminModeration />,
        'Global.Arbitration': <AdminArbitration />,
        'Care service.Manager chats': <AdminManagerСhats />,
        'Care service.Moderators chats': <AdminModeratorsChats />,
        'Care service.Tickets': <AdminTickets />,
        'Care service.Mailing': <AdminMailing />,
        'Pages.List': <AdminListPages />,
        'Pages.Categories.Services': <AdminServicesCategories/>,
        'Pages.Categories.Orders': <AdminServicesOrders/>,
        'Pages.Categories.Partnerships': <AdminServicesPartnership/>,
        'Pages.Categories.Sponsorships': <AdminServicesSponsorship/>,
        'Pages.Categories.Community': <AdminServicesCommunity/>,
        'Global.Settings': <AdminSettings/>,
      };

      const component = pageComponents[activePage];
      return component || null;
}
type LeftBarProps = {
    callback: (item:string) => void;
    activePage: string;
}

const LeftBar = ({activePage,callback}:LeftBarProps) => {
    const [history,setHistory] = useState<string[]>([]);
    
    return (
        <div>
                <div className={styles.desktop_left_bar_wrapper}>
                   <div className='desktop'>
                        <div className={styles.logo}>
                        <Logo alignItems='start' color='white' />
                        </div>
                   </div>
                    <DynamicPadding />

                    <div className={styles.pages_scroll}>
                        {pagesAdmin.map(item => {
                            
                            if(item.dropdownTitles.length == 0) {
                                return (
                                    <div onClick={() => {callback(`Global.${item.title}`);setHistory([])}} className={styles.page_link}>
                                        <Typography textLineHeight='1' variant='body3' fontWeight='500' color={activePage == `Global.${item.title}` ? 'white' : '#A8A8AD'}>{item.title}</Typography>
                                    </div>
                                )
                            } else {
                                return (
                                    <DropdownLink localHistory={[]} history={history} callbackHistoryClear={() => {setHistory([])}} callbackHistory={(item) => {setHistory(prev => [...item])}} depth={0} activePage={activePage} callback={(item) => {callback(item)}}  page={item}/>
                                )
                            }
                            
                        })}
                    </div>
                </div>
        </div>
    )
}

type DropdownLinkProps = {
    page: PageType
    activePage: string;
    callback: (item:string) => void;
    depth?: number;
    callbackHistory: (item:string[]) => void;
    history: string[];
    callbackHistoryClear: () => void;
    localHistory: string[];
}

const DropdownLink = ({page,activePage,callback,depth,callbackHistory,callbackHistoryClear,history,localHistory}:DropdownLinkProps) => {
    const [showDropdown,setShowDropdown] = useState(false);

    const isInHistory = history.includes(page.title);

    // useEffect(() => {
    //     if(!showDropdown &&)
    // },[showDropdown])

  

    const getHistoryTitle = () => {//make unique path for SwitchPage component
        let item = ''
        if(localHistory.length > 0) {
            for(let i = 0;i<localHistory.length;i++) {
                item += `${localHistory[i]}.`
            }
        }

        return item;
    }

    const historyTitle = getHistoryTitle();

    return (
      <div>
            <div onClick={() => {
                if(page.dropdownTitles.length != 0) {
                    setShowDropdown(prev => !prev)
                }
                else {
                    
                    
                    callback(`${historyTitle}${page.title}`);
                    callbackHistory(localHistory);
                }
            }} className={styles.page_link}>
                <Typography textLineHeight='1' variant='body3' fontWeight={depth < 2 ? '500' : '400'} color={isInHistory ? 'white' :  activePage == `${historyTitle}${page.title}` ? 'white' : showDropdown ? 'white' : activePage != page.title ? AppColor.transparentWhite : '#A8A8AD'}>{depth != 0 && '•'} {page.title}</Typography>
                {
                    page.dropdownTitles.length != 0 
                    ? showDropdown
                    ? <AppColor.chevronTop fill={'white'} />
                    : <AppColor.chevronBottom fill={'#A8A8AD'} />
                    : <></>
                }
            </div>
            {depth == 0 && showDropdown && <SizeBox height='20px' />}
         <div className={styles.background_color}>
             {page.dropdownTitles.length != 0 && showDropdown &&
               <div>
                   <div className={styles.dropdown_link} style={{display: showDropdown ? 'grid' : 'none',paddingLeft: `${20*depth}px`}}>
                       <SizeBox height='15px'/>
                       {page.dropdownTitles.map((item,index) => {
                           
                           return (
                               <DropdownLink localHistory={[...localHistory,page.title]} history={history} callbackHistoryClear={callbackHistoryClear} callbackHistory={callbackHistory} depth={depth+1} activePage={activePage} callback={(dropdown) => {callback(dropdown)}} page={item} />
                           )
                           
                       })}
                       <SizeBox height='15px'/>
                   </div>
              </div>
              }
         </div>
      </div>
    )
}
export default Layout;