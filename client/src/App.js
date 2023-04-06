import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Loginpg } from './pages/Loginpg';
import { Notfound } from './pages/Notfound';
import { Signup } from './pages/Signup';
import { Menu } from './pages/Menu';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/loginpage" element={<Loginpg />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<Notfound />}></Route>
          <Route path="/faculty" element={<Menu />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
