import './App.css';
import {Component, React} from 'react';
import Movies from './Movies';
import Foods from './Foods';
import Receipt from './Receipt';
import Navbar from './Navbar';

class App extends Component {
  state = {
    step: 0
  }
  setStep(e){
    this.setState({step: e.target.value})
  }
  render(){
    return (
      <div className="App">
        <input style={{marginTop: 50}} onChange={(e)=>this.setStep(e)}></input>
        {this.state.step == 0 &&
          <Movies app={this}/>}
        {this.state.step == 1 &&
          <Foods app={this}/>}
        {this.state.step == 2 &&
          <Receipt app={this}/>}
        
        <Navbar/>
      </div>
    );
  }
}
export default App;
