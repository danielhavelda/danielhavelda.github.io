import classes from './Navigation.module.scss';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import useWindowSize from '../../hooks/useWindowSize';

export default function Navigation(props) {
  const [screenWidth, screenHeight] = useWindowSize(500);

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
          screenWidth > 768 ? navigationContent : <MobileMenu navigationSection={navigationContent} changeBodyOverflowFn={props.changeBodyOverflowFn}/>
        }
      </nav>
  );
}