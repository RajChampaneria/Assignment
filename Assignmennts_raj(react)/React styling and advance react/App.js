
import './App.css';

import Header from './pages/Header';
import Footer from './pages/footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Testi from './pages/Testi';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SingleProduct from './pages/SingleProduct';
import LoginPage from './pages/LoginPage';
import Crud from './pages/Crud';
import SignUp from './pages/SignUp';
import AddUser from './pages/AddUser';
function App() {


  return (
    <>

    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<Product/>} />
      <Route path="/testimonials" element={<Testi />} />
      <Route path="/About" element={<About />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Contacts" element={<Contact />} />
      <Route path="/SingleProduct/:id" element={<SingleProduct /> }/>
      <Route path="/LoginPage" element={<LoginPage/> }/>
      <Route path="/Crud" element={<Crud/> }/>
      <Route path="/SignUp" element={<SignUp/>  }/>
      <Route path="/AddUser" element={<AddUser/>} />
      <Route path="/EditUser/:id" element={<AddUser/>} />

 
      



    </Routes>
    </BrowserRouter>


    </>







  );
}


export default App;
