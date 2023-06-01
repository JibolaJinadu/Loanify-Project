import { Link } from 'react-router-dom';

export default function Button(props) {
  return (
    <Link
      to={props.link}
      style={{
        marginInline: '10px',
        padding: '12px',
        borderRadius: '8px',
        border: 'none',
        textTransform: 'capitalize',
        color: 'white',
        backgroundColor: 'blue',
        width: '80px',
        fontSize: '12px',
        textAlign: 'center',
        fontWeight: '700',
      }}
    >
      {props.move}
    </Link>
  );
}
