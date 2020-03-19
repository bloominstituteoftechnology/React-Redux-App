import React from 'react';

function dataList(props) {
  return (
    <div className="data-list">
        {props.data.map(character=>{
          return <p key={character.name}>{character.name}</p>
        })}
    </div>
  );
}

export default dataList;
