import './App.css';
import {Component, React} from 'react';
import { Call } from './api';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from './assets/clapp_logo.svg';
import { useNavigate } from "react-router-dom";

const RegisterWrapper = () => {
  const navigate = useNavigate();

  return <Register navigate={navigate} />;
};
class Register extends Component {
  state={
    email: '',
    password: '',
    confirmp: ''
  }
  componentDidMount(){
    
  }
  async Register(){
    if(this.state.password == this.state.confirmp){
      var r = await Call('POST', 'api/register', {email: this.state.email, password: this.state.password})
      if(r.token != undefined){
        localStorage.setItem('token', r.token)
        const { navigate } = this.props;
        navigate("/");
      }
    }
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
                  <input onChange={(e)=>this.setState({email: e.target.value})}></input>
                </div>
                <div className='user-field'>
                  <h2>Password</h2>
                  <input onChange={(e)=>this.setState({password: e.target.value})}></input>
                </div>
                <div className='user-field'>
                  <h2>Confirm password</h2>
                  <input onChange={(e)=>this.setState({confirmp: e.target.value})}></input>
                </div>
                <button className='loginBtn' onClick={()=> this.Register()}>Create</button>
          </div>
          <img className='hero' src={require('./assets/cinema_singinUp.jpg')}></img>
        </div>
      </div>
    );
  }
}
export default RegisterWrapper;
