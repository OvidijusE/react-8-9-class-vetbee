import Button from '../../UI/Button';
import css from './PetCard.module.css';

const PetCard = (props) => {
  return (
    <div className={css['pet-card']}>
      <h3>{props.name}</h3>
      <p>{props.dob}</p>
      <p>{props.client_email}</p>
      <div className='buttons'>
        <Button>VIEW LOG</Button>
        <Button>DELETE</Button>
      </div>
    </div>
  );
};

export default PetCard;
