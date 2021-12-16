import classes from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={classes['footer']}>
      <div className={
        [classes['footer-container'], 'container'].join(' ')
      }>
        <div>
          <p className='text-gray-500'>© 2021 - All Rights Reserved</p>
        </div>

        <div>
          <p className='text-gray-500'>Made with love, and 🍺.</p>
        </div>

        <div>
          <a href="https://github.com/danielhavelda/danielhavelda.github.io" className='text-gray-500'>
            View Source
          </a>
        </div>
      </div>
    </footer>
  );
}