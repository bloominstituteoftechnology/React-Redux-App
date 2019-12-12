import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMinions } from '../store/actions';

const MinionList = props => {
    useEffect(() => {
        props.getMinions();
    }, []);
    return (
        <div>
            {props.isFetching && <p>Loading...</p>}
            {props.minions && (
                <div>
                    {props.minions.map(minion => {
                        if (minion.Name) {return (
                            <div key={minion.ID}>
                                <img src={`https://xivapi.com${minion.Icon}`} />
                                <h3>{minion.Name}</h3>
                            </div>
                        )          }              
                    })}
                </div>
            )}
        </div>    
    );
}

const mapStateToProps = state => {
    return {
        minions: state.minions,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(mapStateToProps, { getMinions })(MinionList);
