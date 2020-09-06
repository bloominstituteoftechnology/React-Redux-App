import React from "react"
import { connect } from "react-redux"


const MonsterList = props => {

    return (
        <div className="container">

            {props.error ? <div className="error">{props.error} </div> : props.monsters.map(card => {
                return (

                    <div className="card">
                        <div className="name" >{card.name}  </div>
                        <div> </div>
                        <img alt="img" src={`${card.imageUrl}`} />
                        <div className="types">  {card.types} </div>
                        <div className="supertypes"> card type: {card.supertype} </div>
                        <div className="rarity"> Rarity: {card.rarity} </div>
                        <div> ⚛ </div>

                    </div>
                )
            })}




        </div>


    )

}

const mapStateToProps = state => {
    console.log(state)
    return {
        monsters: state.monsters,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(MonsterList)