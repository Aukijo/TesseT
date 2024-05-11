import Header from './components/Header'
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <header>
        <div className='container'>
          <Header></Header>
        </div>
      </header>
      <Landing/>
    </div>
  );
}

export default App;
