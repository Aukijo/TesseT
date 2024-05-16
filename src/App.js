import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <section id='landing-contents'>
        <div id='ad-banner'>
          Put Ads Here
        </div>
        <LandingPage/>
      </section>
      
    </div>
  );
}

export default App;
