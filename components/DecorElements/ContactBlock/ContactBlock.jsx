import classes from './ContactBlock.module.scss';

const ContactBlock = (props) => {
  return (
    <div className={classes['contact-block']}>
      {props.children}
    </div>
  );
};

export default ContactBlock;