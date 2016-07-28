import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./common/layout/Layout";
import MovieList from "./movieSearch/MovieList";


//webpack needs to know to include the index.html file in builds
require('file?name=[name].[ext]!../index.html');

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MovieList}></IndexRoute>
      <Route path="search/:stuff" component={MovieList}></Route>
    </Route>
  </Router>,
app);
