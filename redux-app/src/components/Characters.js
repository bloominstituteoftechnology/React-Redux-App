import axios from "axios";




export default function Characters(props) {
    return(
        <div>
            {props.characters.map(char => {
                return(
                    <div className='character'>
                        <p>{char.name}</p>
                        <img src={char.image}></img>
                        <p>{char.species}</p>
                    </div>
                )
            })}
        </div>
    )
}