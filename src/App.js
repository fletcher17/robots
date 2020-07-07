import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount () {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
		}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
		
	render() {
		const { robots, searchfield } = this.state;
		const filterCardList = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			if (robots.length === 0) {
				return <h1>Please Wait</h1>
			} else {
		return (
			<div className="tc">
				<h1 className="f1">Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filterCardList}/>
					</ErrorBoundary>
				</Scroll>
			</div>
			);
		}
 	}
}
	

export default App;