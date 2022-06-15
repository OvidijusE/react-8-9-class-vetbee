import { Link } from 'react-router-dom';
import DeleteButton from '../../UI/DeleteButton/DeleteButton';
import ViewLogButton from '../../UI/ViewLogButton/ViewLogButton';
import css from './AddPetPage.module.css';

const AddPetPage = () => {
  return (
    <div>
      <h1>Add Pet Page</h1>
      <form className={css['add-pet-form']}>
        <h2>Add your pet</h2>
        <label htmlFor='name'>Enter name</label>
        <input type='text' name='' id='name' />
        <label htmlFor='dob'>Enter date of birth: </label>
        <input type='number' name='' id='dob' />
        <label htmlFor='email'>Enter email: </label>
        <input type='email' name='' id='email' />
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

export default AddPetPage;
