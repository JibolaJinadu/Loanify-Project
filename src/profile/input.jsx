import Big from './big';
import './sort.css';

export default function Input() {
  return (
    <div>
      <div>
        <div className="profile-input">
          <div className="up">
            <div>
              <Big tiny={'Firstname'} />
            </div>
            <div className="mine">
              <Big tiny={'Olufemi'} />
            </div>
          </div>
          <div className="up">
            <div>
              <Big tiny={'Last name'} />
            </div>
            <div className="mine">
              <Big tiny={'Ayo'} />
            </div>
          </div>
        </div>
        <div className="profile-input">
          <div className="up">
            <div>
              <Big tiny={'Email Address'} />
            </div>
            <div className="mine">
              <Big tiny={'Olufemilayo@gmail.com'} />
            </div>
          </div>
          <div className="up">
            <div>
              <Big tiny={'Phone Number'} />
            </div>
            <div className="mine">
              <Big tiny={'0802222222'} />
            </div>
          </div>
        </div>
        <div className="profile-input">
          <div className="up">
            <div>
              <Big tiny={'Address'} />
            </div>
            <div className="mine">
              <Big tiny={'NO 10 superman lane infinity street OZ'} />
            </div>
          </div>
          <div className="up">
            <div>
              <Big tiny={'Role'} />
            </div>
            <div className="mine">
              <Big tiny={'Senior loan officer'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
