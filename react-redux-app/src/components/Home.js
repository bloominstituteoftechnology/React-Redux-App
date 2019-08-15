import React, {Component} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import {fetchData} from "../fetchData";
import { getData, getDataPending, getDataError } from "../reducers";

class Home extends Component {
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
        const { fetchData } = this.props;
        fetchData();
    }

    getParamPath(url) {
        var number = url.match(/\d+/g).map(Number)[0];
        
        return number;
    }

    render() {
        const { data, error, pending } = this.props;
        console.log(data);
        
        if(this.shouldComponentRender()) return <span>Loading...</span>;
        return (
            <div>
                {error && <span>{error}</span>}
                <ul>{
                        data && data.map((result) => {
                            let url = this.getParamPath(result.url);
                            return (
                                <li key={result.name}>
                                <Link to = {`/planet/${url}`} >{result.name}</Link>
                            </li>
                            )
                        })
                    }
                </ul>
                    
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        error: getDataError(state.dataReducer),
        data: getData(state.dataReducer),
        pending: getDataPending(state.dataReducer)
    });
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData: fetchData
},dispatch);  



export default connect(mapStateToProps, mapDispatchToProps)(Home);