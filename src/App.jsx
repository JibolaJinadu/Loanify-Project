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
import NotificationPage from './notificationPage/NotificationPage';
import Reports from './reports/Reports';
import Message from './message/Message';
import ChatBoxPage from './support/ChatBoxPage';
import ReportIssuePage from './support/ReportIssuePage';
import ProfilePage from './pages/ProfilePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResetPasswordEmail from './passwordReset/ResetPasswordEmail';
import ResetPasswordLink from './passwordReset/ResetPasswordLink';
import ResetSuccessful from './passwordReset/ResetSuccessful';
import ResendToken from './passwordReset/ResendToken';
import ClientOverview from './clientOverview/ClientOverview';
import FAQ from './support/FAQ';
import LoanOverview from './loanOverview/LoanOverview';
import Combine from './profile/combine';
import ChangePwd from './changePassword/ChangePwd';
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import Cookies from 'js-cookie';
import LoanContract from './loanOverview/LoanContract';

function App() {
  const [signUpToken, setSignUpToken] = useState('');
  const [loginToken, setLoginToken] = useState('');

  useEffect(() => {
    const storedToken = Cookies.get('signUpToken');
    if (storedToken) {
      setSignUpToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signUpToken, setSignUpToken, loginToken, setLoginToken }}
    >
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/email-sent" element={<EmailSent />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route
            path="/forgot-password"
            element={<ResetPasswordEmail />}
          ></Route>
          <Route
            path="/submit-password"
            element={<ResetPasswordLink />}
          ></Route>
          <Route path="/resend-token" element={<ResendToken />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route>
          <Route path="/reset-successful" element={<ResetSuccessful />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/token" element={<Token />}></Route>
          <Route path="/loans" element={<Loan />}></Route>
          <Route
            path="/loans/loans-overview"
            element={<LoanOverview />}
          ></Route>
          <Route
            path="/loans/loans-overview/loans-contract"
            element={<LoanContract />}
          ></Route>
          <Route path="/profileCombine" element={<Combine />}></Route>
          <Route path="/verification" element={<Token />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/support" element={<SupportPage />}></Route>
          <Route path="/clients" element={<Client />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
          <Route path="/notification" element={<NotificationPage />}></Route>
          <Route path="/messages" element={<Message />}></Route>
          <Route path="/support/chat-box" element={<ChatBoxPage />}></Route>
          <Route
            path="/support/report-issue"
            element={<ReportIssuePage />}
          ></Route>
          <Route
            path="/clients/clients-overview"
            element={<ClientOverview />}
          ></Route>
          <Route path="/support/faq" element={<FAQ />}></Route>
          <Route
            path="/settings/change-password"
            element={<ChangePwd />}
          ></Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;