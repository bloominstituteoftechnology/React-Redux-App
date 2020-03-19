import React from 'react';
import MaterialTable from 'material-table';
import { Scrollbars } from 'react-custom-scrollbars';

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
        <Scrollbars>
            <MaterialTable
                columns={table.columns}
                data={table.data} 
                onRowClick={(e, data) => dispatch(selectCountry(data))}
                style={{height: '100%'}}
                options={{
                    paging: false,
                    showTitle: false,
                    searchFieldAlignment: 'left'
                }}
            />
        </Scrollbars>
    )
}

export default Table
