import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Header from './Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <Header />
        <h1>Welcome to React JS Classes !</h1>
        <button>Click Me</button>

        <BrowserRouter>
        <Routes>
          <Route path='/welcome' element={<Welcome />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
