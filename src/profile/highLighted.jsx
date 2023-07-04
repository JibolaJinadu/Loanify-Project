import Big from './Big';
import './sort.css';

export default function HighLighted({ role, fullName }) {
  return (
    <div className="dev">
      <div>
        <Big bold={fullName} />
      </div>
      <div className="move">
        <div>
          <Big tiny={'role:'} />
        </div>
        <div>
          <Big tiny={role} />
        </div>
      </div>
      <div className="move">
        <div>
          <Big tiny={'Status:'} />
        </div>
        <div style={{ color: 'green' }}>
          <Big tiny={'Active'} />
        </div>
      </div>
    </div>
  );
}
