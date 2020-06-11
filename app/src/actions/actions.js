import axios from "axios";

export const DATA_GET = "DATA_GET";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";

export const getData = () => (dispatch) => {
  dispatch({ type: DATA_GET });
  setTimeout(() => {
    axios
      .get("https://api.covid19api.com/countries")

      .then((response) => {
        // console.log(
        //   response.data.map(country => {
        //     return country.ISO2;
        //   })
        // );
        dispatch({
          type: DATA_SUCCESS,
          payload: response.data.map((country) => {
            // return country.Country;
            return { Name: country.Country, ISO: country.ISO2 };
          }),
        });
      })
      .catch((error) => {
        dispatch({ type: DATA_ERROR, payload: error });
      });
  }, 500);
};

// export const SEARCH_IMAGES = "SEARCH_IMAGES";

// const API_TOKEN = "16954247-b3d29ac9ac8ba57afa0aacc2e";

// export const getData = (queryAttributes) => (dispatch) => {
//   dispatch({ type: DATA_GET });

//   axios
//     .get(
//       `https://pixabay.com/api/?key=${API_TOKEN}&q=${queryAttributes
//         .split(" ")
//         .join("+")}&image_type=photo&pretty=true&per_page=15`
//     )

//     .then((response) =>
//       dispatch({ type: SEARCH_IMAGES, payload: response.data.hits })
//     )
//     .catch((error) => console.error(error));
// };
