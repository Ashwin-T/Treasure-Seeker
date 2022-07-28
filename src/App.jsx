import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main.jsx';
import Download from './pages/Download.jsx';
import Guide from './pages/Guide.jsx';
import Navbar from './components/Navbar.jsx';


const App = () => {
  return (
    <div className='app'>
      <Routes>
          <Route path = '/' element={<><Navbar /><Main /></>} />
          <Route path='download' element={<><Navbar /><Download /></>} />
          <Route path = 'downloadGuide' element = {<><Navbar/><Guide /></>} />
      </Routes>
    </div>

  );
}

export default App;
