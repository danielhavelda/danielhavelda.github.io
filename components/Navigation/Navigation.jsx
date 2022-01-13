import classes from './Navigation.module.scss';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import GlobalContext from '../../context/GlobalContext';
import { useContext } from 'react';

export default function Navigation(props) {
  const { screen: { width } } = useContext(GlobalContext);
  
  const navigationContent = (
    <ul>
      <li>
        <Link href="#">
          <a className='font-medium text-gray-300'>Munkáim</a>
        </Link>
      </li>
      <li>
        <Link href="/about-me">
          <a className='font-medium text-gray-300'>Bemutatkozás</a>
        </Link>
      </li>
    </ul>
  );

  return (
      <nav className={classes['navigation']}>
        {
          width > 768 ? navigationContent : <MobileMenu navigationSection={navigationContent} changeBodyOverflowFn={props.changeBodyOverflowFn}/>
        }
      </nav>
  );
}