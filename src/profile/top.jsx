import Buttons from './buttons';
import HighLighted from './highLighted';
import Small from './small';
import './sort.css';

export default function Top({ role, fullName }) {
  return (
    <div className="shift-wrapper">
      <div className="shift">
        <Small />
        <HighLighted role={role} fullName={fullName} />
      </div>
      <div></div>
    </div>
  );
}
