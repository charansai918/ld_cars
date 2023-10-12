import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapCars from './Components/BootstrapCars';
import ProfileVerification from './Components/ProfileVerification';
import RefEarn from './Components/RefEarn';
import MyTrips from './Components/MyTrips';
import Prices from './Components/Prices';
import Offars from './Components/Offars';
import TermCond from './Components/TermCond';
import LogOut from './Components/LogOut';
import Questions from './Components/Questions';
import Cars from './Components/Cars';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<BootstrapCars/>}/>
        <Route path='/pvf' element={<ProfileVerification/>}/>
        <Route path='/ref' element={<RefEarn/>}/>
        <Route path='/myt' element={<MyTrips/>}/>
        <Route path='/pri' element={<Prices/>}/>
        <Route path='/off' element={<Offars/>}/>
        <Route path='/tcs' element={<TermCond/>}/>
        <Route path='/log' element={<LogOut/>}/>
        <Route path='/que' element={<Questions/>}/>
        <Route path='/cars' element={<Cars/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
