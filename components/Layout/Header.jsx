import classes from './Header.module.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ChevronLeft } from 'react-feather';
import Link from 'next/link';

export default function Header(props) {
  const router = useRouter();

  const { status } = props;

  useEffect(() => console.log(router.pathname));
  return (
    <header className={status ? [classes['header'], classes['is-scrolled']].join(' ') : classes['header'] }>
      <div className={classes["container"]}>
        {
          router.pathname !== '/' && 
          (
            <Link href='/'>
              <a className="flex align-center">
                <ChevronLeft color="#5A5A5A" className='icon back-icon' width={22} height={22} />
              </a>
            </Link>
          )
        }
        {props.children}
      </div>

    </header>
  );
}