import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {fetchPlanetData} from "../fetchData";
import { getPlanetData, getPlanetDataPending, getPlanetDataError } from "../reducers";
class Planet extends Component {
    
    constructor(props) {
        super(props);
        
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }
    

    shouldComponentRender () {
        const {pending} = this.props;
        if(pending === false) return false;
        return true;
    }

    componentDidMount() {
        const {params} = this.props.match;
        const { fetchPlanetData } = this.props;
        fetchPlanetData(params.id);
    }

    render() {
        const { data, error } = this.props;
        
        if(this.shouldComponentRender()) return <span>Loading...</span>;
        return (
            <div>
                {error && <span>{error}</span>}
                {
                    data && (<div>
                        <h2>Name: {data.name}</h2>
                        <p>Gravity: {data.gravity}</p>
                        <p>Terrain: {data.terrain}</p>
                    </div>)
                }
                
            </div>
        )
    }
}


const mapStateToProps = state => {
    return ({
        error: getPlanetDataError(state.planetReducer),
        data: getPlanetData(state.planetReducer),
        pending: getPlanetDataPending(state.planetReducer)
    });
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPlanetData: fetchPlanetData
},dispatch);  

export default connect(mapStateToProps, mapDispatchToProps)(Planet);