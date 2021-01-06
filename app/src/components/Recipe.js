import React from "react";
import { connect } from "react-redux";
import { fetchRecipe } from "../actions";

const Recipe = (props) => {

	const getRecipe = () => {
		props.fetchRecipe();
	}

	return (
		<>
			<h1>Lets start</h1>
			<h2>Name : {props.name}</h2>
			<p>Description: {props.description}</p>
			<button onClick={getRecipe}>Get some booze</button>
		</>
	)
};

const mapStateToProps = (state) => {
	return {
		name: state.name,
		description: state.description,
		isFetching: state.isFetching,
		error: state.error
	}
}

const mapDispatchToProp = {fetchRecipe};

export default connect(mapStateToProps, mapDispatchToProp)(Recipe);

