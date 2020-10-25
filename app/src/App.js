import Characters from './components/characters';
import Header from './components/header';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <header>
        <Header/>
      </header>
      <div>
      <Characters />
      </div>
    </div>
  );
}

export default App;
