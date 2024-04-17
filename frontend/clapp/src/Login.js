import './App.css';
import {Component, React} from 'react';
import { Call } from './api';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from './assets/clapp_logo.svg';

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  componentDidMount(){
    
  }
  async Login(){
    var r = await Call('POST', 'api/login', {email: this.state.email, password: this.state.password})
    if(r.token != undefined){
      const { navigate } = this.props;
      navigate("/");
    }
  }
  render(){
    return (
      <div className="App">
        <div className='login-container'>
          <div className='infos'>
          <Logo className="logo"></Logo>
              <h1>Sign In</h1>
                <Link to={'/register'}>I don't have an account</Link>
                <div className='user-field'>
                  <h2>Email</h2>
                  <input onChange={(e) => this.setState({email: e.target.value})}></input>
                </div>
                <div className='user-field'>
                  <h2>Password</h2>
                  <input  onChange={(e) => this.setState({password: e.target.value})}></input>
                </div>
                <button className='loginBtn' onClick={()=> this.Login()}>Login</button>
          </div>
          <img className='hero' src={require('./assets/cinema_singinUp.jpg')}></img>
        </div>
      </div>
    );
  }
}
export default Login;
