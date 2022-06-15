import css from './MedCard.module.css';

const MedCard = (props) => {
  return (
    <div className={css['med-card']}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default MedCard;
