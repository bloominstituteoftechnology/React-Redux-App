import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spinner, Tooltip } from 'reactstrap';

import { getSoloMinion } from '../store/actions';

const MinionPage = props => {
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggle = () => setTooltipOpen(!tooltipOpen);

    const fetch = props.getSoloMinion;
    const { id } = useParams();

    useEffect(() => {
        fetch(id);
    }, [fetch, id]);

    return (
        <>
            {props.isFetching && <Spinner style={{ width: '3rem', height: '3rem' }} color='light' />}
            {!props.isFetching && props.soloMinion && (
                <div className='minion-page fade-in'>
                    <div className='minion-header'>
                        <img className='minion-page-icon' src={`https://xivapi.com${props.soloMinion.Icon}`} id='minion-icon' alt='minion icon' />
                        <Tooltip className='summon-desc' placement='bottom-start' isOpen={tooltipOpen} target='minion-icon' toggle={toggle}>
                            {props.soloMinion.Description}
                        </Tooltip>
                        <h2 className='minion-page-name'>{props.soloMinion.Name}</h2>
                    </div>
                    <div className='minion-description'>
                        <p>Behavior: {props.soloMinion.Behavior.Name}</p>
                        <p>{props.soloMinion.DescriptionEnhanced}</p>
                    </div>
                    <p className='minion-tooltip'>{props.soloMinion.Tooltip}</p>
                    <Link to='/'>Return</Link>
                </div>
            )}
        </>
    );
};

const mapStateToProps = state => {
    return {
        soloMinion: state.soloMinion,
        isFetching: state.isFetching,
        error: state.error
    }
};

export default connect(mapStateToProps, { getSoloMinion })(MinionPage);
