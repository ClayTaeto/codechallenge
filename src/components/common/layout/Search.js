import React from "react";
import { Debounce } from 'react-throttle';

//we'll be able to initiate api calls without knowing the service or destination.
//decoupled through events instead of straight-forward calls. 
import dispatcher from "../dispatcher";


export default class SearchBox extends React.Component {
	handleChange(event) {
		if(!event.target.value.length)
			return false;

		//so super cool, can resuse this. 
		//all I would have to do is set the type of event
		//to a property passed down to changeup who's listening
		dispatcher.dispatch({
			type: "SEND_QUERY",
			query: event.target.value,
		});

	}

	ignoreChange(event){
		if (event.key === 'Enter') {
			event.preventDefault();
		}
	}	    
	
	render() {
		return (
			<form class={this.props.inNav ? "navbar-form navbar-right inNav" : "navbar-form"}>
			    <div class="form-group">
				    <Debounce  time="400" handler="onChange">
				        <input type="text" 
				        	class="form-control" 
				        	placeholder="Search" 
				        	onChange={(event) => this.handleChange(event)}
				        	onKeyPress ={(event) => this.ignoreChange(event)}
			        	/>
		        	</Debounce >
			    </div>
			</form>
		);
	}
}

