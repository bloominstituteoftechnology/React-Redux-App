import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMinions } from '../store/actions';

import MinionCard from './MinionCard';

const MinionList = props => {
    const fetch = props.getMinions;

    useEffect(() => {
        fetch();
    }, [fetch]);

    return (
        <div className='minion-container'>
            {props.isFetching && <p>Loading...</p>}
            {props.minions && (
                <div className='minion-list'>
                    {props.minions.map(minion => {
                        if (minion.Name) {
                            return (
                                <MinionCard
                                    key={minion.ID}
                                    minion={minion}
                                />
                            )
                        } else return null;
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
