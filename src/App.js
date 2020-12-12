import React, {Component} from 'react';
import CardList from './cardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchField : event.target.value});
    }
    render () {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField);
        })

        if(this.state.robots.length === 0){
            return (
                <h1>LOADING</h1>
            )
        } else{
            return (
                <div className="tc">
                    <h1>Robo Friends</h1>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <CardList robots={filteredRobots}/>
                </div>
            );
        }  
    }
}

export default App;