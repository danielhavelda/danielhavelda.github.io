const ListElement = (props) => (
  <li>
    {props.icon}
    {
      props.href === undefined ? <p className="text-white">{props.text}</p> : <a href={props.href} className="text-white">{props.href}</a> 
    }
  </li>
);

export default ListElement;