import React from "react";
import { connect } from "react-redux";

import { fetchChars } from "../actions/action";

const CharList = (props) => {
	const fetchChar = (e) => {
		e.preventDefault();
		props.fetchChars();
	};

	return (
		<div>
			<h1>Rick and Morty</h1>
			<div>
				{props.char.map((person) => (
					<h4 key={person.id}>{person.name}</h4>
				))}
			</div>
			{props.error && <p>{props.error}</p>}
			<button onClick={(e) => fetchChar(e)}>Fetch Characters!</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	char: state.char,
	error: state.error,
});

export default connect(mapStateToProps, { fetchChars })(CharList);
