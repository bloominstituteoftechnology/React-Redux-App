const characterCard = (props) => {

    return (
        <div className = 'Card-Div'>
            <img src = {props.image} alt ='character'/>
            <h2>Name: {props.name}</h2>
            <h3>Status: {props.status}</h3>
            <h3>Species Type: {props.species}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Location: {props.location.name}</h3>
            <h4> <a href ={props.episode}>Show In</a> </h4>

        </div>
    )
}

export default characterCard;