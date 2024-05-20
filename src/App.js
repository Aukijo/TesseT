import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar';
import { createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider ,Outlet} from 'react-router-dom';
import About from './components/Aboutus'
import Contact from './components/Contact'
import Products from './components/Products'
import LandingSection from './components/LandingSection';
import Category3 from './components/ProductCategory/Category3';
import Category2 from './components/ProductCategory/Category2';
import Category1 from './components/ProductCategory/Category1';
import Category4 from './components/ProductCategory/Category4';
import Category5 from './components/ProductCategory/Category5';
import Login from './components/Login';
import UserAuth from './components/UserAuth';

const navbarRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route index element = {<LandingSection/>}/>
      <Route path= 'About' element = {<About/>}></Route>
      <Route path= 'Contact' element={<Contact/>}></Route>
      <Route path= 'Login' element={<Login/>}></Route>
      <Route path= 'Auth' element={<UserAuth/>}></Route>
      <Route path='Products' element={<Products/>}>
        <Route path='Category1' element={<Category1/>}></Route>
        <Route path='Category2' element={<Category2/>}></Route>
        <Route path='Category3' element={<Category3/>}></Route>
        <Route path='Category4' element={<Category4/>}></Route>
        <Route path='Category5' element={<Category5/>}></Route>

      </Route>
    </Route>
  )

)

function App() {
  return (
    <div className="App">
      <header>
        <RouterProvider router={navbarRouter}/>
      </header>
     
    </div>
  );
}

export default App;
