import React, {Component} from 'react';
import CardList from '../Components/cardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';

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

        const {robots, searchField} = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField);
        })

        return robots.length === 0 ? 
        <h1>LOADING</h1> : (
            <div className="tc">
                <h1 className='f1'>Robo Friends</h1>
                <SearchBox onSearchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
                
                
    }
}

export default App;