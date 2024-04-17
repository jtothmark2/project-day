import './App.css';
import {Component, React} from 'react';
import {ReactComponent as Logo} from './assets/clapp_logo.svg';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state={
        extended: true
    }
    componentDidMount(){
        this.handleScroll = this.handleScroll.bind(this)
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',  this.handleScroll);
    }
    handleScroll(){
        this.scrollFunction();
    }
    scrollFunction() {
        console.log(document.body.scrollTop)
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("navbar").className = "navbar";
            this.setState({extended: false})
        } else {
          document.getElementById("navbar").className = "navbar extended";
          this.setState({extended: true})
        }
    }
  render(){
    return (
      <div className="navbar extended" id='navbar'>
        <Logo className="logo"/>
        <div className='links'>
            <Link to={"/"}><h1>Filmek</h1></Link>
            <Link to={"/tickets"}><h1>Jegyeim</h1></Link>
        </div>
        <div className='user'>
            <h2>Hey, User!</h2>
        </div>
        
        <div className='hero'>
            <h1>Clapp</h1>
            <img className='banner' src={require('./assets/banner.webp')}></img>
            </div>
      </div>
    );
  }
}
export default Navbar;