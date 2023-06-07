import { Link } from 'react-router-dom';

export default function Button(props) {
  return (
    <Link
      to={props.link}
      style={{
        padding: '5px 10px',
        borderRadius: '8px',
        border: 'none',
        textTransform: 'capitalize',
        color: 'white',
        backgroundColor: '#3969dc',
        width: '80px',
        fontSize: '14px',
        fontWeight: '400',
        textAlign: 'center',
      }}
    >
      {props.move}
    </Link>
  );
}
