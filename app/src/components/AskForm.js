import react from 'react';


function AskForm(){

    return(
        <div>
            <input
            className="askQuestion"
            type="text"
            name="askQuestion"
             />
            <button>Ask!</button>
        </div>

    )
}

export default AskForm;