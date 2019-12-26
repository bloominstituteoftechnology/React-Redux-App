
import {getData} from './fetchActions';
export const CHECK_AWN_CORRECT = 'CHECK_AWN_CORRECT';
export const CHECK_AWN_WRONG = 'CHECK_AWN_WRONG';



export const checkAwnser = (awn, correct) => dispatch => {
    if (awn === correct){
        console.log(`${awn} and ${correct}`);
        
        dispatch({ type: CHECK_AWN_CORRECT });
        dispatch(getData());
        
        
    }else{
        console.log(`${awn} and ${correct}`);
        
        dispatch({ type: CHECK_AWN_WRONG });
        dispatch(getData());
        
    }


}