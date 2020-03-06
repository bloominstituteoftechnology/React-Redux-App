import React from 'react';

export const Meme = ({template, onClick}) => {
    return (
        <img
            style={{ width: "15%", padding:"2%", border: "2px solid yellow", display:"flex-row", flexWrap:"wrap", margin: "2%" }}
            key={template.id}
            src={template.url}
            alt={template.name}
            onClick={onClick}
        />
    );
}
//this component was created with the purpose to hold the data that is being fetch intead of having everything in apps.js,
//the onClick function is in app.js that is why is being called onClick={onClick}