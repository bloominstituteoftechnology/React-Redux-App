
import './App.css';
import Enterprise from './components/Enterprise';


function App() {
  return (

    // welcome page
    <div className="App">
      <header>
        <p>
          Oh hello.
        </p>
      </header>
      <img src="https://media.giphy.com/media/2uIbZbkAQB2N0JCc6P/giphy-downsized.gif"  alt="Star Trek's Captain Michael Burnham, scanning the area. Caption below: Oh hello." className="gif-card"/>
      <Enterprise />
      {/* <Loading /> */}
    </div>


  );
}

export default App;
