import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import ResetPassword from './passwordReset/ResetPassword';
import Settings from './settings/Settings';
import Token from './tokenAuth/Token';
import Home from './home/Home';
import SignUp from './signUp/SignUp';
import EmailSent from './signUp/EmailSent';
import Loan from './loan/Loan'

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
<<<<<<< HEAD
          <Route path="/token" element={<Token />}></Route>
          <Route path="/loan" element={<Loan />}></Route>
=======
          <Route path="/verification" element={<Token />}></Route>
>>>>>>> b20ae27e76b57362b3b9859c65a8c97a5958c45c
        </Routes>
      </Router>
    </>
  );
}

export default App;
