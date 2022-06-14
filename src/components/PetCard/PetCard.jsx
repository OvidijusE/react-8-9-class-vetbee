import DeleteButton from '../../UI/DeleteButton/DeleteButton';
import ViewLogButton from '../../UI/ViewLogButton/ViewLogButton';

import css from './PetCard.module.css';

const PetCard = (props) => {
  return (
    <div className={css['pet-card']}>
      <h3>{props.name}</h3>
      <p>{props.dob}</p>
      <p>{props.client_email}</p>
      <div className='buttons'>
        <ViewLogButton>VIEW LOG</ViewLogButton>
        <DeleteButton>DELETE</DeleteButton>
      </div>
    </div>
  );
};

export default PetCard;
