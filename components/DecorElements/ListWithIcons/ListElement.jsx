import classes from './ListElement.module.scss';

const ListElement = (props) => (
  <li>
    {props.icon}
    {
      props.href === undefined ? <p className={classes["list-element"]}>{props.text}</p> : <a href={props.href} className={["list-element"]}>{props.href}</a> 
    }
  </li>
);

export default ListElement;