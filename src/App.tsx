import HomeNotAuth from '@pages/Home-not-auth/HomeNotAuth'
import { HashRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './App.scss'
import AdminPannel from './pages/AdminPannel'
import Authentication from './pages/Authentication/Authentication'
import Onboarding from './pages/Authentication/Onboarding'
import StartGuide from './pages/Authentication/Onboarding/pages/StartGuide'
import Recovery from './pages/Authentication/Recovery'
import SingIn from './pages/Authentication/SingIn'
import SingUp from './pages/Authentication/SingUp'
import CommunityPosts from './pages/Community'
import PostPageById from './pages/Community/components/PostPage'
import CreateOrderDetails from './pages/CreateOrder/CreateOrderDetails'
import CreateOrderNegotiation from './pages/CreateOrder/CreateOrderNegotiation'
import CreateOrderPosting from './pages/CreateOrder/CreateOrderPosting'
import CreatePartnership from './pages/CreatePartnership/Detail'
import CreatePartnershipNegotiation from './pages/CreatePartnership/Negotiation'
import CreatePartnerShipPosting from './pages/CreatePartnership/Posting'
import CreateServiceDetails from './pages/CreateService/Details'
import CreateServiceNegotiation from './pages/CreateService/Negotiation'
import CreateServicePosting from './pages/CreateService/Posting'
import CreateSponsorshipDetails from './pages/CreateSponsorship/Details'
import CreateSponsorshipNegotiation from './pages/CreateSponsorship/Negotiation'
import CreateSponsorshipPosting from './pages/CreateSponsorship/Posting'
import CrowdfreelanceAll from './pages/Crowdfreelance/CrowdfreelanceAll'
import CrowdfreelanceCompleted from './pages/Crowdfreelance/CrowdfreelanceCompleted'
import CrowdfreelanceCustomer from './pages/Crowdfreelance/CrowdfreelanceCustomer'
import CrowdfreelanceMy from './pages/Crowdfreelance/CrowdfreelanceMy'
import CrowdfreelanceProgress from './pages/Crowdfreelance/CrowdfreelanceProgress'
import Account from './pages/Dashboard/pages/Account'
import Activity from './pages/Dashboard/pages/Activity'
import DashboardHome from './pages/Dashboard/pages/Home'
import Missions from './pages/Dashboard/pages/Missions'
import Rewards from './pages/Dashboard/pages/Rewards'
import Upgrades from './pages/Dashboard/pages/Upgrades'
import Error from './pages/Error'
import FreelancersSubscriptions from './pages/Freelancers/pages/Subscriptions'
import MessengerPageDirect from './pages/Messenger/pages/Direct'
import MessengerPageSolution from './pages/Messenger/pages/Solutions'
import OrdersAll from './pages/Orders/OrdersAll'
import OrdersCompleted from './pages/Orders/OrdersCompleted'
import OrdersMy from './pages/Orders/OrdersMy'
import OrdersNegotiation from './pages/Orders/OrdersNegotiation'
import OrdersOrder from './pages/Orders/OrdersOrder'
import OrdersProgress from './pages/Orders/OrdersProgress'
import OrdersSelection from './pages/Orders/OrdersSelection'
import PartnershipMyPrograms from './pages/Partnership/pages/MyPrograms'
import PartnershipCompleted from './pages/Partnership/pages/PartnershipCompleted'
import PartnershipManager from './pages/Partnership/pages/PartnershipManager'
import Program from './pages/Partnership/pages/Program'
import ProgressFreelancer from './pages/Partnership/pages/ProgressFreelancer'
import SelectionFreelancer from './pages/Partnership/pages/SelectionFreelancer'
import SelectionManager from './pages/Partnership/pages/SelectionManager'
import PaymentsOperations from './pages/Payments/pages/Operations'
import SearchMasterBudgetAndDelivery from './pages/SearchMaster/SearchMasterBudgetAndDelivery'
import SearchMasterCategory from './pages/SearchMaster/SearchMasterCategory'
import SearchMasterRequirements from './pages/SearchMaster/SearchMasterRequirements'
import SearchMasterResults from './pages/SearchMaster/SearchMasterResults'
import SearchMasterSkills from './pages/SearchMaster/SearchMasterSkills'
import Service from './pages/Service/Service'
import ServiceAll from './pages/Service/ServiceAll'
import ServiceCompleted from './pages/Service/ServiceCompleted'
import ServiceMy from './pages/Service/ServiceMy'
import ServiceNegotiationCustomer from './pages/Service/ServiceNegotiationCustomer'
import ServiceNegotiationFreelancer from './pages/Service/ServiceNegotiationFreelancer'
import ServiceProgress from './pages/Service/ServiceProgress'
import ServiceSelection from './pages/Service/ServiceSelection'
import SettingsNotifications from './pages/Settings/pages/Notifications'
import PasswordAndSecurity from './pages/Settings/pages/PasswordAndSecurity'
import SettingsProfile from './pages/Settings/pages/Profile'
import Verification from './pages/Settings/pages/Verification'
import AboutUs from './pages/Simple/AboutUs'
import PrivacyPolicy from './pages/Simple/PrivacyPolicy'
import Releases from './pages/Simple/Releases'
import TermsConditions from './pages/Simple/TermsConditions'
import MySubscription from './pages/Subscriptions/pages/MySubscription'
import SubscriptionsPlans from './pages/Subscriptions/pages/Plans'
import TeamMembers from './pages/Team/pages/Members'
import TeamSquads from './pages/Team/pages/Squads'
import MyTeams from './pages/Teams/pages/MyTeams'
import UsersAll from './pages/Users/UsersAll'
import UsersMy from './pages/Users/UsersMy'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeNotAuth />} />
          <Route path="/error" element={<Error />} />
          <Route path="/sign-up" element={<SingUp />} />
          <Route path="/sign-in" element={<SingIn />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/start-guide" element={<StartGuide />} />
          <Route
            path="/messenger/solutions"
            element={<MessengerPageSolution />}
          />
          <Route path="/messenger/direct" element={<MessengerPageDirect />} />
          <Route path="/dashboard/home" element={<DashboardHome />} />
          <Route path="/dashboard/account" element={<Account />} />
          <Route path="/dashboard/missions" element={<Missions />} />
          <Route path="/dashboard/rewards" element={<Rewards />} />
          <Route path="/dashboard/upgrades" element={<Upgrades />} />
          <Route path="/dashboard/activity" element={<Activity />} />
          <Route
            path="/subscriptions/mysubscriptions"
            element={<MySubscription />}
          />
          <Route
            path="/freelancers/subscriptions"
            element={<FreelancersSubscriptions />}
          />
          <Route path="/subscriptions/plans" element={<SubscriptionsPlans />} />
          <Route path="/teams/my-teams" element={<MyTeams />} />
          {/* customer*/}
          <Route path="/team/members" element={<TeamMembers />} />
          <Route path="/team/squads" element={<TeamSquads />} />
          <Route path="/community/posts" element={<CommunityPosts />} />
          <Route path="/community/post" element={<PostPageById />} />
          <Route path="/settings/profile" element={<SettingsProfile />} />
          <Route
            path="/settings/password-security"
            element={<PasswordAndSecurity />}
          />
          <Route path="/settings/verification" element={<Verification />} />
          <Route
            path="/settings/notifications"
            element={<SettingsNotifications />}
          />
          <Route path="/payments/operations" element={<PaymentsOperations />} />
          <Route path="/partnership" element={<PartnershipManager />} />
          <Route
            path="/partnership/my-programs"
            element={<PartnershipMyPrograms />}
          />
          <Route path="/partnership/program" element={<Program />} />
          <Route
            path="/partnership/freelancer/selection"
            element={<SelectionFreelancer />}
          />
          <Route
            path="/partnership/manager/selection"
            element={<SelectionManager />}
          />
          <Route
            path="/partnership/freelancer/progress"
            element={<ProgressFreelancer />}
          />
          <Route
            path="/partnership/freelancer/completed"
            element={<PartnershipCompleted />}
          />
          <Route path="/service/all" element={<ServiceAll />} />
          <Route path="/service/my" element={<ServiceMy />} />
          <Route path="/service/" element={<Service />} />
          <Route path="/service/selection" element={<ServiceSelection />} />
          <Route
            path="/service/negotiation/freelancer"
            element={<ServiceNegotiationFreelancer />}
          />
          <Route
            path="/service/negotiation/customer"
            element={<ServiceNegotiationCustomer />}
          />
          <Route
            path="/service/progress/customer"
            element={<ServiceProgress />}
          />
          <Route path="/service/completed" element={<ServiceCompleted />} />
          <Route path="/orders/all" element={<OrdersAll />} />
          <Route path="/orders/myorders" element={<OrdersMy />} />
          <Route path="/orders/order" element={<OrdersOrder />} />
          <Route path="/orders/selection" element={<OrdersSelection />} />
          <Route path="/orders/negotiation" element={<OrdersNegotiation />} />
          <Route path="/orders/progress" element={<OrdersProgress />} />
          <Route path="/orders/completed" element={<OrdersCompleted />} />
          <Route path="/crowdfreelance/all" element={<CrowdfreelanceAll />} />
          <Route path="/crowdfreelance/my" element={<CrowdfreelanceMy />} />
          <Route
            path="/crowdfreelance/campaign"
            element={<CrowdfreelanceCustomer />}
          />
          <Route
            path="/crowdfreelance/progress"
            element={<CrowdfreelanceProgress />}
          />
          <Route
            path="/crowdfreelance/completed"
            element={<CrowdfreelanceCompleted />}
          />
          <Route path="/users/all" element={<UsersAll />} />
          <Route path="/users/my" element={<UsersMy />} />
          <Route
            path="/search-master/category"
            element={<SearchMasterCategory />}
          />
          <Route
            path="/search-master/requirements"
            element={<SearchMasterRequirements />}
          />
          <Route
            path="/search-master/skills"
            element={<SearchMasterSkills />}
          />
          <Route
            path="/search-master/budget-and-delivery"
            element={<SearchMasterBudgetAndDelivery />}
          />
          <Route
            path="/search-master/results"
            element={<SearchMasterResults />}
          />{' '}
          {/* is in process */}
          <Route
            path="/create-order/details"
            element={<CreateOrderDetails />}
          />
          <Route
            path="/create-order/negotiation"
            element={<CreateOrderNegotiation />}
          />
          <Route
            path="/create-order/posting"
            element={<CreateOrderPosting />}
          />
          <Route
            path="/create-sponsorship/details"
            element={<CreateSponsorshipDetails />}
          />
          <Route
            path="/create-sponsorship/negotiation"
            element={<CreateSponsorshipNegotiation />}
          />
          <Route
            path="/create-sponsorship/posting"
            element={<CreateSponsorshipPosting />}
          />
          <Route
            path="/create-service/negotiation"
            element={<CreateServiceNegotiation />}
          />
          <Route
            path="/create-service/details"
            element={<CreateServiceDetails />}
          />
          <Route
            path="/create-service/posting"
            element={<CreateServicePosting />}
          />
          <Route
            path="/create-partnership/details"
            element={<CreatePartnership />}
          />
          <Route
            path="/create-partnership/negotiation"
            element={<CreatePartnershipNegotiation />}
          />
          <Route
            path="/create-partnership/posting"
            element={<CreatePartnerShipPosting />}
          />
          <Route path="/releases" element={<Releases />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/admin" element={<AdminPannel />} />
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
