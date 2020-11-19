import React from 'react'
import { connect } from 'react-redux'


const AnimeList = (props) => {
    return (
        <>
          {
            /*
            ifFetching? showFetching message (not animeList)
            ifError? showError message (not animeList)
            if not fetching or error? show animeList
          */
            props.isFetching ? (
              <div>***FETCHING DATA***</div>
            ) : props.error ? (
              <div style={{ color: "red" }}>{props.error}</div>
            ) : (
              props.animeList.map((anime) => {
                return <div className="animefacts">{anime.title}</div>;
              })
            )
          }
        </>
      );
}

const mapStateToProps =(state)=> {
    return {
        isFetching: state.is_fetching,
        animeList:state.animeList,
        error:state.error
    }
}

export default connect (mapStateToProps,{})(AnimeList);
//AnimeList wants to know what the existing state is so we can update properly