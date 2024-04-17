import './App.css';
import {Component, React} from 'react';
import Movies from './Movies';
import Foods from './Foods';
import Receipt from './Receipt';
import Navbar from './Navbar';
import { Call } from './api';
import AuthRedirect from './authRedirect';

class App extends Component {
  state = {
    step: 0
  }
  componentDidMount(){
    
  }
  
  setStep(e){
    this.setState({step: e.target.value})
  }
  nextStep(){
    console.log("!")
    this.setState({step: this.state.step+1})
  }
  render(){
    return (
      <div className="App">
                
        <Navbar/>
        {this.state.step == 0 &&
          <Movies app={this} next={this.nextStep}/>}
        {this.state.step == 1 &&
          <Foods app={this}/>}
        {this.state.step == 2 &&
          <Receipt app={this}/>}
      </div>
    );
  }
}
export default AuthRedirect(App);
