import {
    FETCH_ARTICLE_DATA_START,
    FETCH_ARTICLE_DATA_SUCCESS,
    FETCH_ARTICLE_DATA_FAILURE
} from '../actions/articleActions';

const initialState = {
    articles: [
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Jennings Brown",
            "title": "World's Dumbest Bitcoin Scammer Tries to Scam Bitcoin Educator, Gets Scammed in The Process",
            "description": "Ben Perrin is a Canadian cryptocurrency enthusiast and educator who hosts a bitcoin show on YouTube. This is immediately apparent after a quick a look at all his social media. Ten seconds of viewing on of his videos will show that he is knowledgeable about di…",
            "url": "https://gizmodo.com/worlds-dumbest-bitcoin-scammer-tries-to-scam-bitcoin-ed-1837032058",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/s--uLIW_Oxp--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/s4us4gembzxlsjrkmnbi.png",
            "publishedAt": "2019-08-07T16:30:00Z",
            "content": "Ben Perrin is a Canadian cryptocurrency enthusiast and educator who hosts a bitcoin show on YouTube. This is immediately apparent after a quick a look at all his social media. Ten seconds of viewing on of his videos will show that he is knowledgeable about di… [+2329 chars]"
        }
    ],
    loading: false,
    error: "",
    country: "",
    topic: "",
    mentioning: "",
    date: "",
    publishers: "",
    fetchUrl: "",
}

export const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ARTICLE_DATA_START:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_ARTICLE_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                articles: [...state.articles, action.payload]
            }
        case FETCH_ARTICLE_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}