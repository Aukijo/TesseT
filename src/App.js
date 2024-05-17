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

const navbarRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar/>}>
      <Route index element = {<LandingSection/>}/>
      <Route path= 'About' element = {<About/>}></Route>
      <Route path= 'Contact' element={<Contact/>}></Route>
      <Route path='Products' element={<Products/>}></Route>
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
