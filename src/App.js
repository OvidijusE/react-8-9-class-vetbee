import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import MedicationsPage from './pages/MedicationsPage';
import PetsPage from './pages/PetsPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/medications'>
          <MedicationsPage />
        </Route>
        <Route path='/'>
          <PetsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
