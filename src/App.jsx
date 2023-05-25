import Login from './login/Login';
import Settings from './settings/Settings';
import SignUp from './signUp/SignUp';
import ResetPassword from './passwordReset/ResetPassword';

function App() {
  return (
    <>
      <Login />
      <ResetPassword />

      {/* <SignUp /> */}
      <Settings />
    </>
  );
}

export default App;
