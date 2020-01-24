import React, {useState, useEffect} from 'react';

function App() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(x => 
      x.json().then(response => setTemplates(response.data.memes))
    );
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      {templates.map(template => {
        return (
          <img style={{width: 200}} 
          key={template.id} 
          src={template.url} 
          alt={template.name} 
          />
        );
      })}
    </div>
  );
}

export default App;
