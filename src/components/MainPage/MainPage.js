import React, {Component} from 'react';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import Header from '../Header';
// import { robots } from "./robots";
import './MainPage.css'

class MainPage extends Component {
   componentDidMount() {
      // Grabbing data from local json
      // this.setState({ robots: robots })

      // Fetch data from API and error handling
      this.props.onRequestRobots();
      // Test Loading if response had delay
      // .then(users => {});
      console.log('The componentDidMount is triggered as last');
   }

   filterRobots = () => {
      return this.props.robots.filter(robot => {
         return robot.name
             .toLowerCase()
             .includes(this.props.searchField.toLowerCase()
             );
      });
   };

   render() {
      const { onSearchChange, robots, isPending } = this.props;
      return (
          <div className='tc'>
             <Header />
             <SearchBox searchChange={onSearchChange}/>
             <Scroll>
                { isPending ? <h1>Loading</h1> :
                    <ErrorBoundary>
                       <CardList robots={this.filterRobots(robots)}/>
                    </ErrorBoundary>
                }
             </Scroll>
          </div>
      );
   }
}

export default MainPage;
