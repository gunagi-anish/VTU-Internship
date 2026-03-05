import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Header from './Header';
import Blog from './Blog';
import Home from './Home';
import Services from './Services';
import Login from './Login';
import CreateEnquiry from './CreateEnquiry';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <Header />

        <BrowserRouter>
        <Routes>
          <Route path='/createenquiry' element={<CreateEnquiry/>}/>
          <Route path='/welcome' element={<Welcome />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/services' element={<Services />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<h2>Page Not Found</h2>} />
          <Route path='/login' element={<Login />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
