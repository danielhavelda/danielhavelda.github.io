import classes from './MobileMenu.module.scss';
import { useState } from 'react';
import DecorLines from '../DecorLines/DecorLines';
import { GitHub, Send } from 'react-feather';

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
        <div className={classes['social-section']}>
          <div className='flex align-items-start space-between'>
            <div className={classes['social-block']}>
              <a href="#"></a>
              <Send width={36} height={36} strokeWidth={1} />
            </div>

            <div className={classes['social-block']}>
              <a href="#"></a>
              <GitHub width={36} height={36} strokeWidth={1}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;