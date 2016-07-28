import React from "react";
import { IndexLink, Link } from "react-router";
import dispatcher from "../dispatcher";

import SearchBox from "./Search";

export default class Nav extends React.Component {
	constructor() {
		super()
		this.state = {
			collapsed: true,
		};
	}

	toggleCollapse() {
		const collapsed = !this.state.collapsed;
		this.setState({ collapsed });
	}

	render() {
		const { location } = this.props;
		const { collapsed } = this.state;
		const featuredClass = location.pathname === "/" ? "active" : "";
		const archivesClass = location.pathname.match(/^\/favorites/) ? "active" : "";
		const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";

		function isActive(path) {
			return location.pathname.includes(path) ? "active" : "";
		}

		function getSomething() {
			dispatcher.dispatch({
				type: "SEND_QUERY",
				query: "Star Wars",
			});
		}

		const navClass = collapsed ? "collapse" : "";
		return (
			<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        		<div class="container">	            
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<Link class="navbar-brand" to="/" onClick={getSomething()}>Code Challenge</Link>
					</div>

					<div class={"navbar-collapse " + navClass}>
						<ul class="nav navbar-nav">
							<li class={isActive("about")}>
								<a href="https://github.com/Sdonai/codechallenge" onClick={this.toggleCollapse.bind(this)}>About</a>
							</li>
						</ul>
						<SearchBox inNav="true"/>
					</div>		            
		        </div>	        
	    	</nav>
		);
	}
}
