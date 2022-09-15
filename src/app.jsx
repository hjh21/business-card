import styles from './app.module.css';
import Login from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maker from './components/maker/maker';

function App({FileInput, authService, cardRepository}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' exect element={<Login authService={authService} />}/>
          <Route path='/maker' exect  element={<Maker authService={authService}　FileInput={FileInput} cardRepository={cardRepository} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
