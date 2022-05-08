import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/shared/Footer/Footer';
import Login from './components/Auth/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
