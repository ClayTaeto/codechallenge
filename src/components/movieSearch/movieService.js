import { EventEmitter } from "events";
import 'whatwg-fetch';
import moment from 'moment';
import dispatcher from "../common/dispatcher";

class MovieService extends EventEmitter {
  
  constructor() {
    super()
    this.movies = {
      page: 0,
      query: null,
      results: [],
      total_results: 0,
      total_pages: 0
    };
  }

  get() {    
    return this.movies.results;
  }

  processResponse(response){
    if(!response.ok){
      //Todo:I would normally handle this error better than this.
      throw new Error("Search attempt responded in error!");

    }

    return response.json()
  }

  clearMovies(){
    this.movies = {
      page: 0,
      query: null,
      results: [],
      total_results: 0,
      total_pages: 0
    };
  }

  handleResponse(response){

    if(response.page == 1){
      response.query = this.movies.query;
      this.movies = response
      window.scrollTo(0, 0);
      
    } else {
      this.movies.page = response.page
      this.movies.results.push(... response.results);
    }
    //look at me flux'n
    this.emit("change");
  }

  getAll() {    
    fetch("http://api.themoviedb.org/3/search/movie?api_key=42b3e60b6636f50062f6d3579100d83f&query=" + this.movies.query)
      .then((response) => this.processResponse(response))
      .then((response) => this.handleResponse(response))    
  }

  getNext() {    
    if(this.movies.page == this.movies.total_pages){
      return false;
    }
    var nextPage = this.movies.page + 1    
    fetch("http://api.themoviedb.org/3/search/movie?api_key=42b3e60b6636f50062f6d3579100d83f&query=" + this.movies.query + "&page=" + nextPage)
      .then((response) => this.processResponse(response))
      .then((response) => this.handleResponse(response))    
  }

  handleActions(action) {
    switch(action.type) {
      case "SEND_QUERY": { 
        this.clearMovies()       
        this.movies.query = action.query;
        this.getAll();
        break;
      }
    }
  }

}

const movieService = new MovieService;
dispatcher.register(movieService.handleActions.bind(movieService));

export default movieService;
