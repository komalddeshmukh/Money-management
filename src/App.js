import logo from './logo.svg';
import './App.css';
import {Button} from 'antd';
import{BrowserRouter, Route, Routes} from 'react-router-dom';
//import 'antd/dist/antd.css';
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
