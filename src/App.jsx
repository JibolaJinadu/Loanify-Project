import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import ResetPassword from './passwordReset/ResetPassword';
import Token from './tokenAuth/Token';
import Home from './home/Home';
import SignUp from './signUp/SignUp';
import EmailSent from './signUp/EmailSent';
import Dashboard from './dashboard/DashBoard';
import Settings from './settings/Settings';

// import OverviewPage from "./overview/OverviewPage";
// import SupportPage from "./support/SupportPage";


function App() {
  return (
    <>
      {/* <OverviewPage/> */}
      {/* <SupportPage/> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/email-sent" element={<EmailSent />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/verification" element={<Token />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
