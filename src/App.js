import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Navigate,
  Outlet,
  Link
} from "react-router-dom";
import SignIn from "./components/SigninAndSignup/SignInComponent";
import SignInForm from "./components/SigninAndSignup/SignInFormComponent";
import SignUpForm from "./components/SigninAndSignup/SignUpFormComponent";
import DashboardComponent from "./components/Dashboard/DashboardComponent";
import DashboardPanelComponent from "./components/DashboardPanel/DashboardPanelComponent";
import SidebarComponent from "./components/Sidebar/SidebarComponent";
import AnalyticsComponent from "./components/Analytics/AnalyticsComponent";
import CreateQuizComponent from "./components/CreateQuiz/CreateQuizComponent";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/dashboard-panel" element={<SidebarComponent />}>
          <Route path="dashboard" element={<DashboardComponent />} />
          <Route path="analytics" element={<AnalyticsComponent />} />
          <Route path="create-quiz" element={<CreateQuizComponent />} />
        </Route>
        {/*  */}
        {/* <Route path="*" element={<SignIn/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
