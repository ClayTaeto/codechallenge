import React from "react";
import moment from 'moment';
require("../../img/emptyPoster.png")

export default class MovieResult extends React.Component {
  render(){
  	var imgPath = this.props.poster_path? "http://image.tmdb.org/t/p/w300/"+ this.props.poster_path +"?adult=false&api_key=42b3e60b6636f50062f6d3579100d83f": '/img/emptyPoster.png'
    var formatDate = function formatDate(time){
      if(time.length){
        return moment(time).format("MMM d, YYYY")  
      } 
      return "Unknown"      
    }
    var formatRating = function formatRating(rating){
      if(rating != null){
        return parseFloat(rating).toFixed(1); 
      } 
      return "N/A"      
    }
    return (            	
		<a href="" class="movie-result">
      <div class="posterWrap">
      	<img src={imgPath} />
      </div>
			<h4 class="label-title" title={this.props.title}>
				<span aria-hidden="true">{this.props.title}</span>
			</h4>
            <div class="caption">
            	<h2 class="vote-average"><span class="sr-only">Rated</span>{formatRating(this.props.vote_average)}<span class="sr-only">out of 10</span></h2>
            	<h5 class="released-date" ><span class="sr-only">Released on</span>{formatDate(this.props.release_date)}</h5>
            </div>
            
       	</a>
      );
   }
};