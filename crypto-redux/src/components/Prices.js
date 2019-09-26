import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getPrice } from '../actions';
import Price from './Price';
import MarketCap from './MarketCap';

const Prices = ({ getPrice, getMarketCap, prices, isFetching, error }) => {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(25)

  useEffect(() => {
    //run action creator
    getPrice()
  }, [getPrice])


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  if (isFetching) {
    return <h2>Fetching Prices...</h2>
  }
  return (
    <div className="prices-container">
      {prices.map(price => (
        <Price price={price} key={price.id} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    prices: state.prices,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getPrice })(Prices);