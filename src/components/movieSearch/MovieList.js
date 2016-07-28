import React from "react";
import MovieResult from "./MovieResult"
import movieService from "./movieService"
import SearchBox from "../common/layout/Search";

require("./movieList.less")
export default class MovieList extends React.Component {
	constructor() {
		super();
		this.getMovieData = this.getMovieData.bind(this);
		this.state = {
			movies: movieService.get(),
		};
	}

	componentWillMount(){
		movieService.on("change", this.getMovieData);
		this.state = {
			movies: movieService.get(),
		};
	}

	componentDidMount(){
		this.timer = setInterval(this.tick, 500);
	}

	componentWillUnmount() {
		//will eventually move to redux >.>
		movieService.removeListener("change", this.getMovieData);
		clearInterval(this.timer);
	}

	tick(){		
        var percentScrolled = (document.body.scrollTop + window.innerHeight) / document.body.scrollHeight * 100
        if(this.percentScrolled == percentScrolled){
        	return;
        }

        if(percentScrolled > 90){
        	//get next page hambre
        	movieService.getNext();
        }

        this.percentScrolled = percentScrolled
    }



	getMovieData(){
		this.setState({
			movies: movieService.get()
		});
	}
	render() {  	
	  	var movieBits = [];

		//let - of allows you to iterate without having to use list[i]
		for (let movie of this.state.movies) { 
			//drop all props into element. "..." Is awesome
			movieBits.push(<MovieResult key={movie.id} {... movie} />)
		}
		return (	
			<div>
				<div class="mobile-search navbar-default">
					<SearchBox />
				</div>		
				<div class="row movie-container">
					
					{movieBits}
				</div>
			</div>
		);
	}
}
