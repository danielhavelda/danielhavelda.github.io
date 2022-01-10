import classes from './MobileMenu.module.scss';
import { useState } from 'react';
import DecorLines from '../DecorLines/DecorLines';

const MobileMenu = ({ navigationSection }) => {
  const [navDisplay, setNavDisplay] = useState(false);

  return (
    <div className={classes["mobile-menu"]}>
      <div className={classes['mobile-menu-icon']} onClick={() => setNavDisplay((prev) => !prev)}>
        <span className={classes['line']}></span>
        <span className={classes['line']}></span>
        <span className={classes['line']}></span>
      </div>
      <div className={ 
        navDisplay ? classes['navigation-section'] : [classes['navigation-section'], [classes['closed']]].join(' ')
      }
      >
        <DecorLines />
        {navigationSection}
      </div>
    </div>
  );
};

export default MobileMenu;