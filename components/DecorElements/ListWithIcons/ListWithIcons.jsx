import ListElement from './ListElement';
import classes from './ListWithIcons.module.scss';

const ListWithIcons = (props) => (
  <ul className={classes['list-with-icons']}>
   {
     props.listItems.map((item, index) => (
       item.href !== undefined ? 
       <ListElement icon={item.icon} text={item.text} href={item.href} key={index} /> :
      <ListElement icon={item.icon} text={item.text} key={index} /> 
     ))
   }
  </ul>
);

export default ListWithIcons;