import React, { useState, useEffect } from "react";
import { Meme } from "./components/Meme";

const objectToQueryParam = (obj) => {
  const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
  return '?' + params.join('&')
}

function App() {
  const [templates, setTemplates] = useState([]);
  const [template, setTemplate] = useState(null);

  const [topText, setTopText] = useState('');
  const {bottomText, setBottomText} = useState('');

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes").then(x =>
      x.json().then(response => setTemplates(response.data.memes))
    );
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      {template && (
        <form onSubmit={async e => {
          e.preventDefault()
          //add logic to create meme from the api
          const params = {
            template_id: template.id,
            text0: topText,
            text1: bottomText,
            username: process.env.REACT_APP_IMGFLIP_USERNAME,
            password: process.env.REACT_APP_IMGFLIP_PASSWORD
          }
          const response = await fetch(`
            https://api.imgflip.com/caption_image${objectToQueryParam(
              params
            )}`
          );
          const data = await response.json()
          console.log(data);
        }}>
          <Meme template={template} />
          <input 
            placeholder="top text" 
            value={topText} 
            onChange={e => setTopText(e.target.value)} 
          />
          <input 
            placeholder="bottom text" 
            value={bottomText}
            onChange={e => setBottomText(e.target.value)}  
          />
          <button type="submit">create meme</button>
        </form>
      )} 
      {!template && (//we are displaying a list of templates until the user clicks on a meme => that will update the state and it will set the template/meme
        <>
          <h1>Pick a Meme</h1>
          {templates.map(template => {
          //if not template/meme selected show them the options
            return (
              <Meme //basically we extracted the image logic into its own component that way we can use that twice <Meme/>. 
                template={template}
                onClick={() => {
                  setTemplate(template);
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default App;
