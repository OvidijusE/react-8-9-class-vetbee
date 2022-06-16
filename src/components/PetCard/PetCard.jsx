import Button from '../../UI/Button';
import css from './PetCard.module.css';

const PetCard = (props) => {
  // function handleDelete(deleteId) {
  //   console.log('click', deleteId);
  //   // const filtered = petsArr.filter((pObj) => pObj.id !== deleteId);
  //   const filtered = petsArr.id;
  //   console.log('filtered ===', filtered);
  //   setPetsArr(filtered);
  // }

  return (
    <div className={css['pet-card']}>
      <h3>{props.name}</h3>
      <p>{new Date(props.dob).toLocaleString('lt-LT').split(' ')[0]}</p>
      <p>{props.client_email}</p>
      <div className='buttons'>
        <Button main>VIEW LOG</Button>
        {/* <Button onClick={() => onDelete(id)} secondary>
          DELETE
        </Button> */}
        <Button onClick={() => props.onDelete(props.id)} secondary>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default PetCard;
