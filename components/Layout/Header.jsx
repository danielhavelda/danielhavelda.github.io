import classes from './Header.module.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ChevronLeft } from 'react-feather';
import Link from 'next/link';

export default function Header(props) {
  const router = useRouter();

  useEffect(() => console.log(router.pathname));
  return (
    <header className={
      [classes['header'], 'container'].join(' ')
    }>
      {
        router.pathname !== '/' && 
        (
          <Link href='/'>
            <a>
              <ChevronLeft color="#5A5A5A" className='icon back-icon' />
            </a>
          </Link>
        )
      }
      {props.children}
    </header>
  );
}