import { Toggle } from '../security/Toggle';
import Button from './Button';
import Language from './Language';
import NavbarItem from './NavbarItem';
import './general.css';

export default function General() {
  const tab = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    margin: '15px 0',
    backgroundColor: 'rgb(240,244,252)',
    textTransform: 'capitalize',
    fontWeight: '600',
  };
  const tabs = {
    display: 'flex',
    padding: '10px 20px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: 'rgb(240,244,252)',
    textTransform: 'capitalize',
    fontWeight: '600',
  };

  return (
    <div style={{ margin: '20px 50px', height: '40vh', maxWidth: '90vw' }}>
      <div style={tab}>
        <NavbarItem title={'date & time'} />
        <Button move={'edit'} />
      </div>

      <div style={tab}>
        <NavbarItem title={'dark mode'} />
        <Toggle />
      </div>

      <div style={tab}>
        <NavbarItem title={'updates'} />
      </div>

      <div style={tabs}>
        <NavbarItem title={'language'} />
        <Language placeholder="language" />
      </div>

      <div style={tab}>
        <NavbarItem title={'legal and registory'} />
      </div>

      <div style={tab}>
        <NavbarItem title={'sign out'} />
        <Button link={'/login'} move={'signout'} />
      </div>
    </div>
  );
}
