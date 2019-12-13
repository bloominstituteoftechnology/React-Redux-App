import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMinions } from '../store/actions';
import { Spinner } from 'reactstrap';

import MinionCard from './MinionCard';

const MinionList = props => {
    const fetch = props.getMinions;
    const minions = props.minions;

    useEffect(() => {
        !minions && fetch();
    }, [fetch, minions]);

    return (
        <div className='minion-container'>
            {props.isFetching && <Spinner style={{ width: '3rem', height: '3rem' }} color='light' />}
            {props.minions && (
                <div className='minion-list fade-in'>
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
