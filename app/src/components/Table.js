import React from 'react';
import MaterialTable from 'material-table';

import { useSelector, useDispatch } from 'react-redux';
import { selectCountry } from '../actions/covidTracker';

const Table = () => {
    const dispatch = useDispatch();
    const table = {
        data: useSelector(state => state.data.Countries),
        columns: [
            { title: 'Country', field: 'Country' },
            { title: 'Confirmed cases', field: 'TotalConfirmed', type: 'numeric' }
        ]
    }

    return (
        <MaterialTable
            title='Cases by country' 
            columns={table.columns}
            data={table.data} 
            onRowClick={(e, data) => dispatch(selectCountry(data))}
            options={{
                paging: false
            }}
        />
    )
}

export default Table
