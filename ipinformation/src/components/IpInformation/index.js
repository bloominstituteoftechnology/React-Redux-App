import React, { useEffect } from 'react';

import { asyncGetIp, asyncGetData } from '../../store/actions';

import { connect } from 'react-redux';

const IpInformation = ({ asyncGetData, asyncGetIp, ip, ipData, isFetchingIp, isFetchingData, error, dataPopulated }) => {
    useEffect(() => {
        asyncGetIp();
    },[asyncGetIp])

    const getIpData = () => {
        asyncGetData(ip);
    };

    if (ip) {
        console.log(ipData);
        return (
            <div className='IpInformation'>
                <p className='ip'>
                    {ip}
                </p>
                {dataPopulated ? null : (<button onClick={getIpData}>
                    Populate Data
                </button>)}
                {isFetchingData ? <p>Fetching your data...</p> : null}
                {dataPopulated ? (
                    <div className='ipData'>
                        <p>City: <span className='data'>{ipData.city.names.en}</span></p>
                        <p>Continent: <span className='data'>{ipData.continent.names.en}</span></p>
                        <p>Country: <span className='data'>{ipData.country.names.en}</span></p>
                        <p>State: <span className='data'>{ipData.subdivisions[0].iso_code}</span></p>
                        <p>Time Zone: <span className='data'>{ipData.location.time_zone}</span></p>
                    </div>
                ) : <p>Click button and wait a few seconds for API to respond</p>}
            </div>
        );
    } else {
        return <p>Fetching Your Public IP Address...</p>
    }
    
};

const mapStateToProps = state => {
    return {
        ip: state.ip,
        ipData: state.ipData,
        isFetchingIp: state.isFetchingIp,
        isFetchingData: state.isFetchingData,
        error: state.error,
        dataPopulated: state.dataPopulated
    }
}

export default connect(
    mapStateToProps,
{
    asyncGetIp,
    asyncGetData
})(IpInformation);