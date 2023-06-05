import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import SignUp from './signUp/SignUp';
import ResetPassword from './passwordReset/ResetPassword';
import Settings from './settings/Settings';
import Token from './tokenAuth/Token';
import Record from './records/record';


function App() {
  return (
    <>
      {/* <Login /> 
      <ResetPassword />
      <SignUp />
      <Token />
      <Settings /> */}
      <Record />
      
    </>
  );
}

export default App;
