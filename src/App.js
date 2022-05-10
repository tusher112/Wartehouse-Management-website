
import './App.css';
import Header from './components/shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/shared/Footer/Footer';
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import ManageProduct from './components/ManageProduct/ManageProduct';
import ProductDetails from './components/ProductDetails/ProductDetails';
import AddItems from './components/AddItems/AddItems';
import RequireAuth from './components/Auth/requireAuth/requireAuth';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}> </Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/signup" element={<Signup></Signup>}> </Route>
        <Route path="/manage" element={
          <RequireAuth>
            <ManageProduct></ManageProduct>
          </RequireAuth>
      
      }> </Route>
        <Route path="/product/:productId" element={<ProductDetails></ProductDetails>}> </Route>
        <Route path='/additem' element={<RequireAuth>
          < AddItems></AddItems>
        </RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
