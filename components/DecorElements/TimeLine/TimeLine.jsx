import classes from './TimeLine.module.scss';
import TimeLineBlock from './TimeLineBlock';

const TimeLine = (props) => {
  return (
    <div className={classes['timeline']}>
      {
        props.timelineData.map((data, index) => 
          <TimeLineBlock
            years={data.years}
            companyName={data.companyName}
            roleTitle={data.roleTitle}
            jobLocation={data.jobLocation}
            jobDescription={data.jobDescription}
            key={index}
          />
        )
      }
    </div>
  );
};

export default TimeLine;