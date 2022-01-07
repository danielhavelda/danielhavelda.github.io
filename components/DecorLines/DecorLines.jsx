import classes from './DecorLines.module.scss';

export default function DecorLines() {
  return (
    <div className={classes['decor-lines']}>
      <div className={classes["line"]}></div>
      <div className={classes["line"]}></div>
      <div className={classes["line"]}></div>
    </div>
  );
}