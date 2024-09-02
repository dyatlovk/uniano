import HeaderAdmin from '@common/components/Header/HeaderAdmin/index'
import Logo from '@common/components/Logo/Logo'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index'
import SizeBox from '@common/components/ui/SizeBox/index'
import Typography from '@common/components/ui/Typography/Typography'
import AppColor from '@common/styles/variables-static'
import { createContext, useContext, useEffect, useState } from 'react'
import AdminAnalytics from '../../pages/AdminAnalytics'
import AdminArbitration from '../../pages/AdminArbitration'
import AdminCrowdfreelance from '../../pages/AdminCrowdfreelance'
import AdminFAQ from '../../pages/AdminFAQ'
import AdminForms from '../../pages/AdminForms'
import AdminList from '../../pages/AdminList'
import AdminListPages from '../../pages/AdminListPages'
import AdminMailing from '../../pages/AdminMailing'
import AdminManagerСhats from '../../pages/AdminManagerСhats'
import AdminModeration from '../../pages/AdminModeration'
import AdminModeratorsChats from '../../pages/AdminModeratorsChats'
import AdminOrder from '../../pages/AdminOrder'
import AdminPartnerships from '../../pages/AdminPartnerships'
import AdminPosts from '../../pages/AdminPosts'
import AdminService from '../../pages/AdminService'
import AdminServicesCategories from '../../pages/AdminServicesCategories'
import AdminServicesCommunity from '../../pages/AdminServicesCommunity'
import AdminServicesOrders from '../../pages/AdminServicesOrders'
import AdminServicesPartnership from '../../pages/AdminServicesPartnership'
import AdminServicesSponsorship from '../../pages/AdminServicesSponsorship'
import AdminSettings from '../../pages/AdminSettings'
import AdminSubscriptions from '../../pages/AdminSubscriptions'
import AdminTaxForm from '../../pages/AdminTaxForm'
import AdminTickets from '../../pages/AdminTickets'
import AdminTopUp from '../../pages/AdminTopUp'
import AdminVerification from '../../pages/AdminVerification'
import AdminWithdraw from '../../pages/AdminWithdraw'
import { pagesAdmin, PageType } from './content'
import styles from './style.module.scss'

const leftSidebar = {
  desktopWidth: '290px',
}

interface MenuContextType {
  selectedItem: string
  setSelectedItem: (title: string) => void
}
const MenuContext = createContext<MenuContextType>(null)

const Layout = () => {
  const [activePage, setActivePage] = useState('Global.Analytics')
  const css = {
    '--sideBarDesktopWidth': leftSidebar.desktopWidth,
  }

  return (
    /* @ts-ignore */
    <div style={css} className={styles.layout}>
      <div className="desktop">
        <div className={styles.left_bar}>
          <LeftBar
            callback={item => {
              setActivePage(item)
            }}
            activePage={activePage}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_padding}>
          <HeaderAdmin
            modalMobile={
              <LeftBar
                callback={item => {
                  setActivePage(item)
                }}
                activePage={activePage}
              />
            }
          />
          <div className="mobile"></div>
        </div>
        <HorizontalLine />
        <div className={styles.page_padding}>
          <SwitchPage activePage={activePage} />
        </div>
      </div>
    </div>
  )
}

type SwitchPageProps = {
  activePage: string
}
const SwitchPage = ({ activePage }: SwitchPageProps) => {
  const pageComponents = {
    //Global mean that item is not child of dropdown
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
    'Pages.Categories.Services': <AdminServicesCategories />,
    'Pages.Categories.Orders': <AdminServicesOrders />,
    'Pages.Categories.Partnerships': <AdminServicesPartnership />,
    'Pages.Categories.Sponsorships': <AdminServicesSponsorship />,
    'Pages.Categories.Community': <AdminServicesCommunity />,
    'Global.Settings': <AdminSettings />,
  }

  const component = pageComponents[activePage]
  return component || null
}
type LeftBarProps = {
  callback: (item: string) => void
  activePage: string
}
const LeftBar = ({ activePage, callback }: LeftBarProps) => {
  const [history, setHistory] = useState<string[]>([])
  const [clickOnSingleItem, setClickOnSingleItem] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<string>('')

  function hasChildren(item: PageType): boolean {
    return item.dropdownTitles.length !== 0
  }

  return (
    <div>
      <div className={styles.desktop_left_bar_wrapper}>
        <div className="desktop">
          <div className={styles.logo}>
            <Logo alignItems="start" color="white" />
          </div>
        </div>
        <DynamicPadding />

        <div className={styles.pages_scroll}>
          {pagesAdmin.map(item => {
            if (!hasChildren(item)) {
              return (
                <MenuContext.Provider value={{ selectedItem, setSelectedItem }}>
                  <div
                    onClick={() => {
                      callback(`Global.${item.title}`)
                      setHistory([])
                      setSelectedItem(item.title)
                    }}
                    className={styles.page_link}
                  >
                    <Typography
                      textLineHeight="1"
                      variant="body3"
                      fontWeight="500"
                      color={
                        activePage == `Global.${item.title}`
                          ? 'white'
                          : '#A8A8AD'
                      }
                    >
                      {item.title}
                    </Typography>
                  </div>
                </MenuContext.Provider>
              )
            }

            if (hasChildren(item)) {
              return (
                <MenuContext.Provider value={{ selectedItem, setSelectedItem }}>
                  <DropdownLink
                    localHistory={[]}
                    history={history}
                    callbackHistoryClear={() => {
                      setHistory([])
                    }}
                    callbackHistory={item => {
                      setHistory(prev => [...item])
                    }}
                    depth={0}
                    activePage={activePage}
                    callback={item => {
                      callback(item)
                      setSelectedItem(item)
                    }}
                    page={item}
                    isActive={false}
                  />
                </MenuContext.Provider>
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
  activePage: string
  callback: (item: string) => void
  depth?: number
  callbackHistory: (item: string[]) => void
  history: string[]
  callbackHistoryClear: () => void
  localHistory: string[]
  isActive: boolean
}

const DropdownLink = ({
  page,
  activePage,
  callback,
  depth,
  callbackHistory,
  callbackHistoryClear,
  history,
  localHistory,
  isActive = false,
}: DropdownLinkProps) => {
  const { selectedItem, setSelectedItem } =
    useContext<MenuContextType>(MenuContext)
  const [showDropdown, setShowDropdown] = useState(isActive)
  const isInHistory = history.includes(page.title)
  const hasChildren = page.dropdownTitles.length !== 0

  const isParent = depth === 0
  const isChildren = depth > 0

  const getHistoryTitle = () => {
    //make unique path for SwitchPage component
    let item = ''
    if (localHistory.length > 0) {
      for (let i = 0; i < localHistory.length; i++) {
        item += `${localHistory[i]}.`
      }
    }

    return item
  }

  const historyTitle = getHistoryTitle()

  useEffect(() => {
    setShowDropdown(selectedItem.includes(page.title))
  }, [page.title, selectedItem])

  return (
    <div>
      <div
        onClick={() => {
          if (hasChildren) {
            setShowDropdown(prev => !prev)
          } else {
            callback(`${historyTitle}${page.title}`)
            callbackHistory(localHistory)
          }
          setSelectedItem(`${historyTitle}${page.title}`)
        }}
        className={styles.page_link}
      >
        <Typography
          textLineHeight="1"
          variant="body3"
          fontWeight={depth < 2 ? '500' : '400'}
          color={
            isInHistory
              ? 'white'
              : activePage == `${historyTitle}${page.title}`
                ? 'white'
                : showDropdown
                  ? 'white'
                  : activePage != page.title
                    ? AppColor.transparentWhite
                    : '#A8A8AD'
          }
        >
          {isChildren && '•'} <span>{page.title}</span>
        </Typography>
        {page.count && (
          <Typography variant="body4" color={AppColor.orange}>
            {page.count}
          </Typography>
        )}
        {page.hasEvent && <div className={styles.event_indicator}></div>}
        <div style={{ flexGrow: '1' }}></div>
        {hasChildren ? (
          showDropdown ? (
            <AppColor.chevronTop fill={'white'} />
          ) : (
            <AppColor.chevronBottom fill={'#A8A8AD'} />
          )
        ) : (
          <></>
        )}
      </div>

      {isParent && showDropdown && <SizeBox height="20px" />}

      {hasChildren && showDropdown && (
        <div className={styles.background_color}>
          <div>
            <div
              className={styles.dropdown_link}
              style={{
                display: showDropdown ? 'grid' : 'none',
                paddingLeft: `${20 * depth}px`,
                paddingBottom: depth === 0 ? '20px' : '0',
                paddingTop: '20px',
              }}
            >
              {page.dropdownTitles.map((item, index) => {
                return (
                  <DropdownLink
                    key={index}
                    localHistory={[...localHistory, page.title]}
                    history={history}
                    callbackHistoryClear={callbackHistoryClear}
                    callbackHistory={callbackHistory}
                    depth={depth + 1}
                    activePage={activePage}
                    callback={dropdown => {
                      callback(dropdown)
                      setSelectedItem(dropdown)
                    }}
                    page={item}
                    isActive={showDropdown}
                  />
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Layout
