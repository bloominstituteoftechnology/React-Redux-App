import './App.css';
import Images from "./images"




function App() {
  return (
    <div className="App">
      <div className="header">
          <img src="/src/dog-face_1f436.png" alt="dog-enoji"/>
          <h1>Want to see some random pics of German Sheperds cause they are so stinkin cute!</h1>
      </div>
      <div>
        <Images/>
      </div>

    </div>
  );
}

export default App;
