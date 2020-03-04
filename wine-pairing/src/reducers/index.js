import { FETCH_WINES_REQUEST, FETCH_WINES_SUCCESS, FETCH_WINES_ERROR } from '../actions';

export const initialState = {
    // pairedWines: {},
    // pairingText: "",
    // productMatches: [{
    //     id: 428445,
    //     title: "Director's Merlot",
    //     description: "Our 2014 Director's Merlot offers lushness and a round, full palate. Its fragrance demonstrates red and black fruit with hints of anise and spiced wood. Juicy upon entry, the wine broadens and becomes velvety on the palate with flavors of plum, loganberry and black cherry accentuated by subtle spice notes of espresso bean and toasted vanilla. Medium tannins support the body of this wine, offering sophistication in its finish. Pairs nicely with brisket, grilled pork chops and linguine with pesto.",
    //     price: "$21.0",
    //     imageUrl: "https://spoonacular.com/productImages/428445-312x231.jpg",
    //     averageRating: 1,
    //     ratingCount: 1,
    //     score: 0.75,
    //     link: "https://www.amazon.com/2014-Directors-Merlot-750-mL/dp/B073XVS4MB?tag=spoonacular-20"
    // }],
    isFetching: false,
    error: '',
    wine:[{
        pairedWines:[],
        pairingText: "",
        productMatches:[],
    }],

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case FETCH_WINES_REQUEST:
        //     return Object.assign({}, state, {

        //         isFetching: true
        //     })


        case FETCH_WINES_SUCCESS:
            const x = { 
                ...state,
                 wine: action.payload
            }
          
            return x;


            // return Object.assign({}, state, {
            //     wine: [...state.wine, ...action.payload],
            //     isFetching: false
            // })
        // pairedWines: action.payload,
        // pairingText: action.payload,
        // productMatches: action.payload,
        // isFetching: false,
        // error: ''



        // case FETCH_WINES_ERROR:
        //     return Object.assign({}, state, {

        //         isFetching: false,
        //         error: "Error fetching wines"
        //     })

        default:
            return state;


    }

};
