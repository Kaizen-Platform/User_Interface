
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Login from './containers/Login';
import TopNav from './components/top_nav';

import Dashboard from './containers/Dashboard';
import Profile from './containers/profile';
import NewIdeas from './containers/New_ideas';
import Myideas from './components/MyIdeas';
import Profilemyideas from './components/ProfileMyideas';
import Profileapproved from './components/ProfileApproved';
import Profileongoing from './components/ProfileOngoing';
import EditIdeas from './containers/EditIdeas';


function App() {
  return (
    <div className="App">
      
      
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create' element={<NewIdeas />} />
          <Route path='/create/MyIdeas' element={<Myideas />} />
          <Route path='/create/MyIdeas/EditIdeas/:id' element={<EditIdeas />} />
          <Route path='/MyIdeas' element={<Myideas />} />
          <Route path='/MyIdeas/EditIdeas/:id' element={<EditIdeas />} />
          <Route path='/profile/MyIdeas' element={<Profilemyideas />} />
          <Route path='/profile/Approved' element={<Profileapproved />} />
          <Route path='/profile/Ongoing' element={<Profileongoing />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
