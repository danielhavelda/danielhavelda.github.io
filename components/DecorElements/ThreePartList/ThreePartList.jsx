import classes from './ThreePartList.module.scss';
import ThreePartListItem from './ThreePartListItem';

const ThreePartList = ({ list }) => {
  const { firstList, secondList, thirdList } = list;

  return (
    <div style={{ width: '100%', display: 'flex', flexFlow: 'row wrap', margin: '25px 0' }} className={classes['three-part-list-container']}>
      <div>
        <ul className={classes['three-part-list']}>
          {
            firstList.map((item, index) => (
              <ThreePartListItem text={item.text} key={`first-list-${index}`} />
            ))
          }
        </ul>
      </div>

      <div>
        <ul className={classes['three-part-list']} style={{ columnCount: 2 }}>
          {
            secondList.map((item, index) => (
              <ThreePartListItem text={item.text} key={`second-list-${index}`} />
            ))
          }
        </ul>
      </div>

      <ul className={[classes['three-part-list'], classes['max-width-list']].join(' ')}>
          {
            thirdList.map((item, index) => (
              <ThreePartListItem text={item.text} key={`third-list-${index}`} />
            ))
          }
      </ul>
    </div>

  );
};

export default ThreePartList;