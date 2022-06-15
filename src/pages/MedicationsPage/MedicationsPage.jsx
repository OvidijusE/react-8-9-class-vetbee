import css from './MedicationsPage.module.css';

import { useState, useEffect } from 'react';

import ViewLogButton from '../../UI/ViewLogButton/ViewLogButton';
import Button from '../../UI/Button';
import MedCard from '../../components/MedCard/MedCard';

const MedicationsPage = () => {
  const [medsArr, setMedsArr] = useState([]);
  const getMeds = async () => {
    // const resp = await fetch('https://glittery-dull-snickerdoodle.glitch.me/v1/meds/');
    const resp = await fetch('db/medications.json');
    const dataInJs = await resp.json();
    setMedsArr(dataInJs);
  };
  useEffect(() => {
    getMeds();
  }, []);
  return (
    <div>
      <div className={css['page-title']}>
        <h1>Medications Page</h1>
        {/* <ViewLogButton>Add Pet</ViewLogButton> */}
        {/* <Button className={css['orange-button']}>Add Pet</Button> */}
        <Button orange>Add Medication</Button>
      </div>
      <div className={css['medications-cards-grid']}>
        {medsArr.map((mObj) => (
          <MedCard key={mObj.id} {...mObj} />
        ))}
      </div>
    </div>
  );
};

export default MedicationsPage;
