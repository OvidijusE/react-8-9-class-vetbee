import css from './PetsPage.module.css';

import { useState, useEffect } from 'react';
import PetCard from '../../components/PetCard/PetCard';
import ViewLogButton from '../../UI/ViewLogButton/ViewLogButton';

const PetsPage = () => {
  const [petsArr, setPetsArr] = useState([]);
  const getPets = async () => {
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets/');
    const dataInJs = await resp.json();
    setPetsArr(dataInJs);
  };
  useEffect(() => {
    getPets();
  }, []);
  return (
    <div>
      <div className='page-title'>
        <h1>Pets Page</h1>
        <ViewLogButton>Add Pet</ViewLogButton>
      </div>
      <div className={css['pets-cards-grid']}>
        {petsArr.map((pObj) => (
          <PetCard key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
};

export default PetsPage;
