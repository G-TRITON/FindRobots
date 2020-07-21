import React, {Component} from 'react';
import CardList from '../components/cardlist';
import SearchBox from '../components/searchbox';
import Scroll from '../components/scroll';
import './app.css';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			robots: [],
			searchfield: ''
		}
		this.onSearch = this.onSearch.bind(this);
	}
	onSearch(event){
		this.setState({searchfield: event.target.value})
	}
	render(){
			const {robots, searchfield} = this.state;
			const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			return !robots.length ? <h1>Loading...</h1> :
		(
		<div className='tc'>
		<h1 className='f1'>Robo Friends</h1>
		<SearchBox onSearch={this.onSearch}/>
		<Scroll>
		<CardList robots={filteredRobots} />
		</Scroll>
		</div>
		)
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
  			.then(response => response.json())
  			.then(users => this.setState({robots: users}))
		
	}

}

export default App;