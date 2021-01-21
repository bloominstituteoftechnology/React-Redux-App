import '../styles/App.css';
import Header from './Header';
import Joke from './Joke';

function App() {
  return (
    <div className="App">
        <div className='container'>
        <Header />
        <Joke />
        <div className='attribution'>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    </div>
  );
}

export default App;
