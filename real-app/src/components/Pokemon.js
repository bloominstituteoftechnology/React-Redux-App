import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import { connect } from 'react-redux'

//fun stuff
import Loader from 'react-loader-spinner'
import { TextField, Button } from '@material-ui/core';

import { fetchJobs } from '../store/action/pokeAction'
import './Pokemon.css'

function Pokemon(props) {
   
   const { fetchJobs } = props
   const [search, setSearch] = useState('')
   const [url, setUrl] = useState('')

   useEffect(() => {

      fetchJobs(url)

   }, [fetchJobs, url])

   const handleSubmit = e => {
      e.preventDefault()
      setUrl(`https://api.pokemontcg.io/v1/cards?name=${search}`)

   }

   const handleChange = e => {
      setSearch(e.target.value)
   }

   const renderLoader = () => {

      return (
      <> 
         <Loader 
           type='Puff'
           color='#00BFFF'
           height={100}
           width={100}
           style={{display:'block', width:'100%'}}
         />
      </>
      )
   }
console.log(props.pokemonList)
   return (
      <div className='pokemon'>
         <form onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Pokemon Name" value={search} onChange={handleChange} />
            <Button type='submit' size='small' variant='contained' color='secondary'>Search</Button>
         </form>
         <div className='pokemon__cards'>
         {
            props.isFetching ? renderLoader() :
            props.pokemonList.map((eachPokemon) => { 
               return <PokemonCard key={eachPokemon.id} eachPokemon={eachPokemon}/>
            })
         }
         <div className='none'>
            {
               props.pokemonList.length === 0 && <h2>No cards to display</h2>
            }
         </div>
         </div>
      </div>
   )
}

const mapStateToProps = state => {
   return {
      isFetching: state.isFetching,
      pokemonList: state.pokemonList ? state.pokemonList : [],
   }
}

export default connect(mapStateToProps, { fetchJobs })(Pokemon)
