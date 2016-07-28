import React from "react";
import { Link } from "react-router";

import Footer from "./Footer";
import Nav from "./Nav";

import moment from 'moment';

require("./layout.less")


//load bootstrap theme from node modules 
require("../../../../node_modules/bootswatch/flatly/bootstrap.min.css");

export default class Layout extends React.Component {
  render() {
    return (
      <div>

        <Nav location={location} />
        
        <div class="container page-container">

              {this.props.children}

          <Footer/>
        </div>
      </div>

    );
  }
}
