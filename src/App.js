import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AddMedsPage from './pages/AddMedsPage/AddMedsPage';
import AddPetPage from './pages/AddPetPage/AddPetPage';
import MedicationsPage from './pages/MedicationsPage/MedicationsPage';
import PetsPage from './pages/PetsPage/PetsPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/AddMedsPage'>
          <AddMedsPage />
        </Route>
        <Route path='/AddPetsPage'>
          <AddPetPage />
        </Route>
        <Route path='/medications'>
          <MedicationsPage />
        </Route>
        <Route exact path='/'>
          <PetsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
