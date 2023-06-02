import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import ResetPassword from './passwordReset/ResetPassword';
import Token from './tokenAuth/Token';
import Home from './home/Home';
import SignUp from './signUp/SignUp';
import EmailSent from './signUp/EmailSent';
import Dashboard from './dashboard/DashBoard';
import Settings from './settings/Settings';
import SupportPage from './support/SupportPage';
import Client from './client/Client';
import Loan from './loan/Loan';

function App() {
  return (
    <>
      {/* <SupportPage/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/email-sent" element={<EmailSent />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/token" element={<Token />}></Route>
          <Route path="/loans" element={<Loan />}></Route>
          <Route path="/verification" element={<Token />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/support" element={<SupportPage />}></Route>
          <Route path="/clients" element={<Client />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
