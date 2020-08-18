import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/cardlist';
import SearchBox from '../components/searchbox';
import Scroll from '../components/scroll';
import './app.css';

import { setSearchField, RequestRobots } from '../actions.js';

const mapStateToProps = state => {
	return{
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onSearch: (event) => dispatch(setSearchField(event.target.value)),
		onRequest: () => dispatch(RequestRobots())
	}
}

class App extends Component{
	render(){
			const {searchField, onSearch, robots, isPending} = this.props;
			const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
			return isPending ? <h1>Loading...</h1> :
		(
		<div className='tc'>
		<h1 className='f1'>Robo Friends</h1>
		<SearchBox onSearch={onSearch}/>
		<Scroll>
		<CardList robots={filteredRobots} />
		</Scroll>
		</div>
		)
	}
	componentDidMount(){
		this.props.onRequest();
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(App);