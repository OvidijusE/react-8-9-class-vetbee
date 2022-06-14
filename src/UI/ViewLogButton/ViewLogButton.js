import css from './ViewLogButton.module.css';

const ViewLogButton = (props) => {
  return <button className={css['view-log-button']}>{props.children}</button>;
};

export default ViewLogButton;
