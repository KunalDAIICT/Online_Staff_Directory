import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Loginpg } from './pages/Loginpg';
import { Notfound } from './pages/Notfound';
import { Signup } from './pages/Signup';
import { Menu } from './pages/Menu';
import { Universitypg } from './pages/Universitypg';
import { UnivAbout } from './pages/UnivAbout';
import { Myprofile } from './pages/Myprofile';
import { EditMyProfile } from './pages/EditMyProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/loginpage" element={<Loginpg />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="*" element={<Notfound />}></Route>
          <Route path="/university/faculties" element={<Menu />}> </Route>
          <Route path="/university" element={<Universitypg />} />
          <Route path="/university/about" element={<UnivAbout />} />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/editmyprofile" element={<EditMyProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
