import Buttons from './buttons';
import HighLighted from './highLighted';
import Small from './small';
import './sort.css';

export default function Top() {
  return (
    <div className="shift-wrapper">
      <div className="shift">
        <Small />
        <HighLighted />
      </div>
      <div>
        <button
          style={{
            backgroundColor: 'white',
            color: '#010E2A',
            fontSize: '14px',
            fontWeight: '700',
            borderRadius: '8px',
            padding: '7px',
          }}
        >
          Edit Image
        </button>
      </div>
    </div>
  );
}
