import css from './DeleteButton.module.css';

const DeleteButton = (props) => {
  return <button className={css['delete-button']}>{props.children}</button>;
};

export default DeleteButton;
