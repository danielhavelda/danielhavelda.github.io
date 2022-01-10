import { useContext } from 'react';
import { Sun, Moon } from 'react-feather';
import ThemeContext from '../../context/ThemeContext';
import classes from './ThemePicker.module.scss';

export default function ThemePicker(props) {
  const currentTheme = useContext(ThemeContext);

  function setCurrentTheme() {
    if (currentTheme === 'dark') {
      props.changeThemeFn('light');
    } else {
      props.changeThemeFn('dark');
    }
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