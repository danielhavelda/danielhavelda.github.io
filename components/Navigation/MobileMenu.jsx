import classes from './MobileMenu.module.scss';
import { useState } from 'react';
import DecorLines from '../DecorLines/DecorLines';

const MobileMenu = ({ navigationSection, changeBodyOverflowFn }) => {
  const [navDisplay, setNavDisplay] = useState(false);

  const onClickFn = () => {
    setNavDisplay((prev) => !prev);
    changeBodyOverflowFn((prev) => !prev);
  };

  return (
    <div className={classes["mobile-menu"]}>
      <div className={classes['mobile-menu-icon']} onClick={() => onClickFn()}>
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