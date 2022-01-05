import classes from './TimeLineBlock.module.scss';

const TimeLineBlock = (props) => (
  <div className={classes['block']}>
    <div className={classes['years']}>
      <h5>{props.years}</h5>
    </div>

    <div className={classes["work"]}>
      <h4>{props.companyName}</h4>
      <p className={classes["work__role"]}>{props.roleTitle}</p>
      <p className={classes["work__city"]}>{props.jobLocation}</p>

      <p>{props.jobDescription}</p>
    </div>
  </div>
);

export default TimeLineBlock;