import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Loginpg } from './pages/Loginpg';
import { Notfound } from './pages/Notfound';
import { Signup } from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/loginpage" element={<Loginpg />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
