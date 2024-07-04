import { Navigate, Route, HashRouter as Router, Routes }  from 'react-router-dom'
import './App.scss'
import HomeNotAuth from '@pages/Home-not-auth/HomeNotAuth'
import Error from './pages/Error'
import SingUp from './pages/Authentication/SingUp'
import Onboarding from './pages/Authentication/Onboarding'
import StartGuide from './pages/Authentication/Onboarding/pages/StartGuide'
import DashboardHome from './pages/Dashboard/pages/Home'
import Account from './pages/Dashboard/pages/Account'
import Missions from './pages/Dashboard/pages/Missions'
import Rewards from './pages/Dashboard/pages/Rewards'
import Upgrades from './pages/Dashboard/pages/Upgrades'
import Activity from './pages/Dashboard/pages/Activity'
import MySubscription from './pages/Subscriptions/pages/MySubscription'
import FreelancersSubscriptions from './pages/Freelancers/pages/Subscriptions'
import SubscriptionsPlans from './pages/Subscriptions/pages/Plans'
import MyTeams from './pages/Teams/pages/MyTeams'
import TeamMembers from './pages/Team/pages/Members'
import TeamSquads from './pages/Team/pages/Squads'
import CommunityPosts from './pages/Community'
import PostPageById from './pages/Community/components/PostPage'
import SettingsProfile from './pages/Settings/pages/Profile'
import PasswordAndSecurity from './pages/Settings/pages/PasswordAndSecurity'
import Verification from './pages/Settings/pages/Verification'
import SettingsNotifications from './pages/Settings/pages/Notifications'
import PartnershipManager from './pages/Partnership/pages/PartnershipManager'
import PartnershipMyPrograms from './pages/Partnership/pages/MyPrograms'
import Program from './pages/Partnership/pages/Program'
import SelectionFreelancer from './pages/Partnership/pages/SelectionFreelancer'
import SelectionManager from './pages/Partnership/pages/SelectionManager'
import ProgressFreelancer from './pages/Partnership/pages/ProgressFreelancer'
import PartnershipCompleted from './pages/Partnership/pages/PartnershipCompleted'
import ServiceAll from './pages/Service/ServiceAll'
import ServiceMy from './pages/Service/ServiceMy'
import Service from './pages/Service/Service'
import ServiceSelection from './pages/Service/ServiceSelection'
import ServiceNegotiationFreelancer from './pages/Service/ServiceNegotiationFreelancer'
import ServiceNegotiationCustomer from './pages/Service/ServiceNegotiationCustomer'
import ServiceProgress from './pages/Service/ServiceProgress'
import ServiceCompleted from './pages/Service/ServiceCompleted'
import OrdersAll from './pages/Orders/OrdersAll'
import OrdersMy from './pages/Orders/OrdersMy'
import OrdersOrder from './pages/Orders/OrdersOrder'
import OrdersSelection from './pages/Orders/OrdersSelection'
import OrdersNegotiation from './pages/Orders/OrdersNegotiation'
import OrdersProgress from './pages/Orders/OrdersProgress'
import OrdersCompleted from './pages/Orders/OrdersCompleted'
import CrowdfreelanceAll from './pages/Crowdfreelance/CrowdfreelanceAll'
import CrowdfreelanceMy from './pages/Crowdfreelance/CrowdfreelanceMy'
import CrowdfreelanceCustomer from './pages/Crowdfreelance/CrowdfreelanceCustomer'
import CrowdfreelanceProgress from './pages/Crowdfreelance/CrowdfreelanceProgress'
import CrowdfreelanceCompleted from './pages/Crowdfreelance/CrowdfreelanceCompleted'
import UsersAll from './pages/Users/UsersAll'
import UsersMy from './pages/Users/UsersMy'
import SearchMasterCategory from './pages/SearchMaster/SearchMasterCategory'
import SearchMasterRequirements from './pages/SearchMaster/SearchMasterRequirements'
import SearchMasterSkills from './pages/SearchMaster/SearchMasterSkills'
import SearchMasterBudgetAndDelivery from './pages/SearchMaster/SearchMasterBudgetAndDelivery'
import SearchMasterResults from './pages/SearchMaster/SearchMasterResults'
import CreateOrderDetails from './pages/CreateOrder/CreateOrderDetails'
import CreateOrderNegotiation from './pages/CreateOrder/CreateOrderNegotiation'
import CreateOrderPosting from './pages/CreateOrder/CreateOrderPosting'
import CreateSponsorshipDetails from './pages/CreateSponsorship/CreateSponsorshipDetails'
import CreateSponsorshipNegotiation from './pages/CreateSponsorship/CreateSponsorshipNegotiation'
import CreateSponsorshipPosting from './pages/CreateSponsorship/CreateSponsorshipPosting'
import CreateServiceNegotiation from './pages/CreateService/CreateServiceNegotiation'
import SingIn from './pages/Authentication/SingIn'
import Recovery from './pages/Authentication/Recovery'
import Authentication from './pages/Authentication/Authentication'
import AdminPannel from './pages/AdminPannel'
import MessengerPage from './pages/Messenger/pages/MessengerPage'
import MessengerPageSolution from './pages/Messenger/pages/Solutions'
import MessengerPageDirect from './pages/Messenger/pages/Direct'
import PaymentsOperations from './pages/Payments/pages/Operations'
import AnimatedSvg from './common/components/AnimatedSvg'
import AppColor from '@common/styles/variables-static'

function App() {
   
  return (
   <div className='App'>
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

            <Route path="/messenger/solutions" element={<MessengerPageSolution />} />
            <Route path="/messenger/direct" element={<MessengerPageDirect />} />

            <Route path="/dashboard/home" element={<DashboardHome />} />
            <Route path="/dashboard/account" element={<Account />} />
            <Route path="/dashboard/missions" element={<Missions />} />
            <Route path="/dashboard/rewards" element={<Rewards />} />
            <Route path="/dashboard/upgrades" element={<Upgrades />} />
            <Route path="/dashboard/activity" element={<Activity />} />

            <Route path="/subscriptions/mysubscriptions" element={<MySubscription />} />

            <Route path="/freelancers/subscriptions" element={<FreelancersSubscriptions />} />
            <Route path="/subscriptions/plans" element={<SubscriptionsPlans />} />

            <Route path="/teams/my-teams" element={<MyTeams />} />{/* customer*/}

            <Route path="/team/members" element={<TeamMembers />} />
            <Route path="/team/squads" element={<TeamSquads />} />

            <Route path="/community/posts" element={<CommunityPosts />} />
            <Route path="/community/post" element={<PostPageById />} />

            <Route path="/settings/profile" element={<SettingsProfile />} />
            <Route path="/settings/password-security" element={<PasswordAndSecurity />} />
            <Route path="/settings/verification" element={<Verification />} />
            <Route path="/settings/notifications" element={<SettingsNotifications />} />

            <Route path="/payments/operations" element={<PaymentsOperations />} />

            <Route path="/partnership" element={<PartnershipManager />} />
            <Route path="/partnership/my-programs" element={<PartnershipMyPrograms />} />
            <Route path="/partnership/program" element={<Program />} />
            <Route path="/partnership/freelancer/selection" element={<SelectionFreelancer />} />
            <Route path="/partnership/manager/selection" element={<SelectionManager />} />
            <Route path="/partnership/freelancer/progress" element={<ProgressFreelancer />} />
            <Route path="/partnership/freelancer/completed" element={<PartnershipCompleted />} />

            
            
            <Route path="/service/all" element={<ServiceAll />} />
            <Route path="/service/my" element={<ServiceMy />} />
            <Route path="/service/" element={<Service />} />
            <Route path="/service/selection" element={<ServiceSelection />} />
            <Route path="/service/negotioation/freelancer" element={<ServiceNegotiationFreelancer />} />
            <Route path="/service/negotioation/customer" element={<ServiceNegotiationCustomer />} /> 
            <Route path="/service/progress/customer" element={<ServiceProgress />} />
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
            <Route path="/crowdfreelance/campaign" element={<CrowdfreelanceCustomer />} />
            <Route path="/crowdfreelance/progress" element={<CrowdfreelanceProgress />} /> {/* is in process */}
            <Route path="/crowdfreelance/completed" element={<CrowdfreelanceCompleted />} />

            <Route path="/users/all" element={<UsersAll />} />
            <Route path="/users/my" element={<UsersMy />} />

            <Route path="/search-master/category" element={<SearchMasterCategory />} />
            <Route path="/search-master/requirements" element={<SearchMasterRequirements />} />
            <Route path="/search-master/skills" element={<SearchMasterSkills />} />
            <Route path="/search-master/budget-and-delivery" element={<SearchMasterBudgetAndDelivery />} />
            <Route path="/search-master/results" element={<SearchMasterResults />} /> {/* is in process */}

            <Route path="/create-order/details" element={<CreateOrderDetails />} /> 
            <Route path="/create-order/negotiation" element={<CreateOrderNegotiation />} /> 
            <Route path="/create-order/posting" element={<CreateOrderPosting />} /> 

            <Route path="/create-sponsorship/details" element={<CreateSponsorshipDetails />} /> 
            <Route path="/create-sponsorship/negotiation" element={<CreateSponsorshipNegotiation />} /> 
            <Route path="/create-sponsorship/posting" element={<CreateSponsorshipPosting />} /> 

            <Route path="/create-service/negotiation" element={<CreateServiceNegotiation />} /> 

            <Route path="/admin" element={<AdminPannel />} /> 

            <Route path="*" element={<Navigate to="/error" />} />
         </Routes>
      </Router>
   </div>

  )
}

export default App
