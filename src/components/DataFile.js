import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { prepareData } from '../actions';
import {Alert, Button} from 'reactstrap'

const DataFile = () => {
  const data = useSelector(state => state.isFetching)
  const dispatch = useDispatch()
  return(
  <>
      {data ? ( <Alert color="success"> **The INFO is Coming** </Alert>) : (
        <Button color="info" onClick={() => dispatch(prepareData())}>Load Art</Button>
      )
      }
    

  </>
  )
}
export default DataFile

