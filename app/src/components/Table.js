import React from 'react';
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';

const Table = () => {
    const table = {
        data: useSelector(state => state.data.Countries),
        columns: [
            { title: 'Country', field: 'Country' },
            { title: 'Confirmed cases', field: 'TotalConfirmed', type: 'numeric' }
        ]
    }
    
    return (
        <MaterialTable title='Cases by country' columns={table.columns} data={table.data} />
    )
}

export default Table
