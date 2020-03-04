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
    wine:[
        {"pairedWines":["merlot","cabernet sauvignon","pinot noir"],
        "pairingText":"Merlot, Cabernet Sauvignon, and Pinot Noir are my top picks for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. The Franciscan Estate Merlot with a 4.3 out of 5 star rating seems like a good match. It costs about 25 dollars per bottle.",
        "productMatches":[{"id":443286,
        "title":"Franciscan Estate Merlot",
        "description":"Our Oakville estate produces distinctive, supple Merlot characterized by flavors of cherries and plums. This wine shows rich, lush and velvety fruit flavors of cherries, plums and blackberries that merge with light toasted oak. Blended with a samll percentage of Cabernet Sauvignon and Cabernet Franc this wine is well balanced and structured with a lingering finish.Alcohol: 13.5%","price":"$25.49","imageUrl":"https://spoonacular.com/productImages/443286-312x231.jpg","averageRating":0.86,"ratingCount":5.0,"score":0.7975,"link":"https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Ffranciscan-estate-merlot-1998%2F7308"}]}
    ],

};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // case FETCH_WINES_REQUEST:
        //     return Object.assign({}, state, {

        //         isFetching: true
        //     })


        case FETCH_WINES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                 wine: action.payload,
                 error: ''
            };


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
