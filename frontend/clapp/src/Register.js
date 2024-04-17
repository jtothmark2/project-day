import './App.css';
import {Component, React} from 'react';
import { Call } from './api';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from './assets/clapp_logo.svg';

class Register extends Component {
  componentDidMount(){
    
  }
  render(){
    return (
      <div className="App">
        <div className='login-container'>
          <div className='infos'>
          <Logo className="logo"></Logo>
              <h1>Sign In</h1>
                <Link to={'/login'}>I already have an account</Link>
                <div className='user-field'>
                  <h2>Email address</h2>
                  <input></input>
                </div>
                <div className='user-field'>
                  <h2>Password</h2>
                  <input></input>
                </div>
                <div className='user-field'>
                  <h2>Confirm password</h2>
                  <input></input>
                </div>
                <button className='loginBtn'>Create</button>
          </div>
          <img className='hero' src={require('./assets/cinema_singinUp.jpg')}></img>
        </div>
      </div>
    );
  }
}
export default Register;
