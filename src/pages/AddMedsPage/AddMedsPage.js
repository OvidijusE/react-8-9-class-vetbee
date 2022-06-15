import { Link } from 'react-router-dom';
import Button from '../../UI/Button';
import css from './AddMedsPage.module.css';

const AddMedsPage = () => {
  return (
    <div>
      <h1>Add Meds Page</h1>
      <form className={css['add-meds-form']}>
        <h2>Add medications</h2>
        <label htmlFor='name'>Enter name: </label>
        <input type='text' name='' id='name' />
        <label htmlFor='description'>Enter description: </label>
        <input type='text' name='' id='description' />
        <div className={css['buttons']}>
          <Button main>Send</Button>
          <Link to='/'>
            <Button secondary>Go Back</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddMedsPage;
