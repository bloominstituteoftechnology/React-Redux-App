import * as actions from "../actions/actionCreator";


const coinReducer = (state = {has_data: false, loading: false}, action) => {
    switch(action.type) {
        case actions.FETCH_COIN_REQUEST:
            console.log("fetching");
            return {...state, loading: true};
        case actions.FETCH_COIN_SUCCESS:
            console.log("success");
            const data = action.payload
            return {
                ...state,
                has_data: true,
                loading: false,
                image:  data.image.large,
                name: data.name,
                current_price: data.market_data.current_price.usd,
                market_cap: data.market_data.market_cap.usd,
                genesis_date: data.genesis_date,
                percent24h: data.market_data.price_change_percentage_24h_in_currency.usd,
                percent7d: data.market_data.price_change_percentage_7d_in_currency.usd,
                percent30d: data.market_data.price_change_percentage_30d_in_currency.usd,
                percent200d: data.market_data.price_change_percentage_200d_in_currency.usd,
                percent1y: data.market_data.price_change_percentage_1y_in_currency.usd,
                ath: data.market_data.ath.usd,
                ath_date: data.market_data.ath_date.usd,
                atl: data.market_data.atl.usd,
                atl_date: data.market_data.atl_date.usd,
                data: data.description.en,
                error: ""                
            };
        case actions.FETCH_COIN_FAILURE: 
        console.log("fail");
            return {...state, loading: false, error: action.payload}
        default: return state;
    }
}

export default coinReducer