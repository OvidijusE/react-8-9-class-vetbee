import { Link } from 'react-router-dom';
import DeleteButton from '../../UI/DeleteButton/DeleteButton';
import ViewLogButton from '../../UI/ViewLogButton/ViewLogButton';
import css from './AddMedsPage.module.css';

const AddMedsPage = () => {
  return (
    <div>
      <h1>Add Meds Page</h1>
      <form className={css['add-meds-form']}>
        <h2>Add meds</h2>
        <label htmlFor='name'>Enter name: </label>
        <input type='text' name='' id='name' />
        <label htmlFor='description'>Enter description: </label>
        <input type='text' name='' id='description' />
        <div className={css['buttons']}>
          <ViewLogButton>Send</ViewLogButton>
          <Link to='/'>
            <DeleteButton>Go Back</DeleteButton>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddMedsPage;
