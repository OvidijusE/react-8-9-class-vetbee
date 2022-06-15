import Button from '../../UI/Button';
import css from './PetCard.module.css';

const PetCard = (props) => {
  return (
    <div className={css['pet-card']}>
      <h3>{props.name}</h3>
      <p>{new Date(props.dob).toLocaleString('lt-LT').split(' ')[0]}</p>
      <p>{props.client_email}</p>
      <div className='buttons'>
        <Button main>VIEW LOG</Button>
        <Button secondary>DELETE</Button>
      </div>
    </div>
  );
};

export default PetCard;
