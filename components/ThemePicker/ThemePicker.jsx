import { useContext } from 'react';
import { Sun, Moon } from 'react-feather';
import GlobalContext from '../../context/GlobalContext';
import classes from './ThemePicker.module.scss';

export default function ThemePicker(props) {
  const { currentTheme } = useContext(GlobalContext);

  function setCurrentTheme() {
    currentTheme === 'dark' ? props.changeThemeFn('light') : props.changeThemeFn('dark');
  }

  return (
    <button className={classes['theme-picker-button']}>
      {
        currentTheme === 'dark' ? 
        <Sun color="#5A5A5A" onClick={() => setCurrentTheme()} className="icon" width={22} height={22} /> :
        <Moon color="#5A5A5A" onClick={() => setCurrentTheme()} className="icon" width={20} height={20}/> 
      }
    </button>
  );
}