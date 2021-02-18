import './App.css';
import Images from "./images"




function App() {
  return (
    <div className="App">
      <div className="header-image">
          <img src="https://i.pinimg.com/originals/28/72/96/28729681636cddc44d56cb54b7931910.jpg" alt="dog-emoji"/>
        </div>
        <div className="heading">
          <h1>HERE ARE SOME RANDOM PICTURES OF GERMAN SHEPERDS BECAUSE THEY ARE SO STINKIN CUTE!</h1>
          </div>
    
      <div>
        <Images/>
      </div>

    </div>
  );
}

export default App;
