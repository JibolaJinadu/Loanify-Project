import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import ResetPassword from './passwordReset/ResetPassword';
import Settings from './settings/Settings';
import Token from './tokenAuth/Token';
import Home from './home/Home';
import './index.css'
import SignUp from './signUp/SignUp';
import EmailSent from './signUp/EmailSent';
import ProfileNav from './Profile/ProfileNav';
import ProfileLoanOfficer from './Profile/ProfileLoanOfficer';
import ProfileEdit from './Profile/ProfileEdit';
import ProfilePercentage from './Profile/ProfilePercentage';
import ProfileTable from './Profile/ProfileTable';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/email-sent" element={<EmailSent />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/token" element={<Token />}></Route>
        </Routes>
      </Router>
      <ProfileNav />
      <ProfileLoanOfficer />
      <ProfileEdit />
      <ProfilePercentage />
      <ProfileTable />
      

    </>
  );
}

export default App;
