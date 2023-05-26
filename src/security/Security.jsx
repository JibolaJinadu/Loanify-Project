import { Toggle } from './Toggle';
import './security.css';
import { Link } from 'react-router-dom';

function Security() {
  const logState = (state) => {
    console.log('Toggled:', state);
  };

  return (
    <div className="settings">
      <div className="card">
        <div className="text-holder">
          <h4>Email Address</h4>
          <p>The email address associated with your account.</p>
        </div>
        <div className="btn-holder">
          <a href="#" className="s-btn btn--blue btn--right">
            Edit
          </a>
          <p>jamesbond@gmail.com</p>
        </div>
      </div>
      <div className="card">
        <div className="text-holder">
          <h4>Password</h4>
          <p>Set a unique password to protect your account.</p>
        </div>
        <div className="btn-holder">
          <a href="#" className="s-btn btn--blue">
            Change Password
          </a>
        </div>
      </div>
      <div className="card">
        <div className="text-holder">
          <h4>2-Step Verification</h4>
          <p>Make your account extra secure.</p>
        </div>
        <div className="btn-holder">
          <Toggle label="Toggle me" toggled={true} onClick={logState} />
        </div>
      </div>
      <div className="card">
        <div className="text-holder">
          <h4>Deactivate my account</h4>
          <p>Stay away for some time.</p>
        </div>
      </div>
      <div className="card">
        <div className="text-holder">
          <h4>Delete Account</h4>
          <p>Permanently delete your account.</p>
        </div>
        <div className="btn-holder">
          <Link href="#" className="s-btn btn--red">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Security;
