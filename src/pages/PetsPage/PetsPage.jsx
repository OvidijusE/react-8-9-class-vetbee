import css from './PetsPage.module.css';

import { useState, useEffect } from 'react';
import PetCard from '../../components/PetCard/PetCard';
import Button from '../../UI/Button';
import { Link } from 'react-router-dom';

const PetsPage = (props) => {
  const [petsArr, setPetsArr] = useState([]);

  const getPets = async () => {
    const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/pets/');
    // const resp = await fetch('db/pets.json');
    const dataInJs = await resp.json();
    setPetsArr(dataInJs);
  };
  function handleDelete(deleteId) {
    console.log('click');
    const filtered = petsArr.filter((pObj) => pObj.id !== deleteId);
    setPetsArr(filtered);
  }
  useEffect(() => {
    getPets();
  }, []);
  return (
    <div>
      <div className={css['page-title']}>
        <h1>Pets Page</h1>
        <Link to='/AddPetsPage'>
          <Button main>ADD PET</Button>
        </Link>
      </div>
      <div className={css['pets-cards-grid']}>
        {petsArr.map((pObj) => (
          <PetCard onDelete={handleDelete} key={pObj.id} {...pObj} />
        ))}
      </div>
    </div>
  );
};

export default PetsPage;
