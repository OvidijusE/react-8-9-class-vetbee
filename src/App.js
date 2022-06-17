import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ThemeContext from './components/store/themeContext';
import AddMedsPage from './pages/AddMedsPage/AddMedsPage';
import AddPetPage from './pages/AddPetPage/AddPetPage';
import MedicationsPage from './pages/MedicationsPage/MedicationsPage';
import PetsPage from './pages/PetsPage/PetsPage';
import ViewLogsPage from './pages/ViewLogsPage/ViewLogsPage';

function App() {
  const [nightMode, setNightMode] = useState(false);

  function nightTheme() {
    setNightMode(true);
  }

  const ctx = {
    nightTheme,
    nightMode,
  };

  return (
    <ThemeContext.Provider value={ctx}>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/ViewLogsPage'>
            <ViewLogsPage />
          </Route>
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
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
