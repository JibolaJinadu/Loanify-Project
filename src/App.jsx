import Login from './login/Login';
import SignUp from './signUp/SignUp';
import ResetPassword from './passwordReset/ResetPassword';
import Settings from './security/Settings';
import Token from './tokenAuth/Token';


function App() {
  return (
    <>
      {/* <Login /> */}
      <ResetPassword />
      
      {/* <SignUp /> */}
      <Token />
    </>
  );
}

export default App;
