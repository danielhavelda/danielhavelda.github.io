import classes from './Navigation.module.scss';
import Link from 'next/link';

export default function Navigation(props) {
  return (
    <nav className={classes['navigation']}>
      <ul>
        <li>
          <Link href="#">
            <a className='font-medium text-gray-300'>Munkáim</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a className='font-medium text-gray-300'>Rólam</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}