import './App.css';
import {Component, React} from 'react';
import Movies from './Movies';
import Foods from './Foods';
import Receipt from './Receipt';
import Navbar from './Navbar';
import { Call } from './api';
import AuthRedirect from './authRedirect';
import FoodsWrapper from './Foods';

class App extends Component {
  state = {
    step: 0,
    selectedMovie: null
  }
  componentDidMount(){
    
  }
  
  setStep(e){
    this.setState({step: e.target.value})
  }
  nextStep(selectedMovie = null){
    this.setState({step: this.state.step+1, selectedMovie: selectedMovie})
  }
  render(){
    return (
      <div className="App">
                
        <Navbar/>
        {this.state.step == 0 &&
          <Movies app={this} next={this.nextStep}/>}
        {this.state.step == 1 &&
          <FoodsWrapper app={this} selectedMovie={this.state.selectedMovie}/>}
      </div>
    );
  }
}
export default AuthRedirect(App);
