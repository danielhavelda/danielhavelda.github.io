import classes from './Header.module.scss';

export default function Header(props) {
  return (
    <header className={
      [classes['header'], 'container'].join(' ')
    }>
      {props.children}
    </header>
  );
}