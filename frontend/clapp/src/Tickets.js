import './App.css';
import './Tickets.css';
import { Component, React } from 'react';
import Movies from './Movies';
import Foods from './Foods';
import Receipt from './Receipt';
import Navbar from './Navbar';
import { ReactComponent as CloseCircle } from './assets/close-circle.svg';
import { Link } from 'react-router-dom';
import { Call } from './api';

class Tickets extends Component {
  state = {
    step: 0,
    review: null,
    orderDetails: null,
    movies: []
  }
  componentDidMount(){
    this.GetTickets();
  }
  setStep(e) {
    this.setState({ step: e.target.value })
  }
  nextStep() {
    console.log("!")
    this.setState({ step: this.state.step + 1 })
  }
  async GetTickets(){
    var r = await Call("GET", "api/orders", {token: localStorage.getItem('token')})
    console.log(r)
    this.setState({movies: r})
  }
  render() {
    return (
      <div className="App">
        <Navbar />

        <h1 className='moviesHeader' >My tickets:</h1>

        <div className='movies'>
          {this.state.movies.map((movie,index) => (
            <div className='seenMovieCard movieCard'>

            <img src={require("./assets/cinema.jpg")} className='seenMovieImg movieImg'></img>

            <div className='rating'>
              <div className='stars'>
                itt vannak a csillagok
              </div>
              <p>9/10</p>
            </div>

            <h3 className='movieTitle seenMovieTitle'>{movie.title}</h3>
            <div>
              <p className='movieData'> genre - genre</p>
              <p className='movieData'>120 min.</p>
            </div>

            <div className='myReview'>
              <p><strong>My review:</strong></p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
            </div>

            <div className='btn myTicketBtns'>
              <button onClick={() => this.setState({ review: { title: "myReview" } })} className='detailsBtn seenDetailsBtn'>Add review</button>
              <Link to={'/order'}>
                <button className='detailsBtn seenDetailsBtn'>Order details</button>
              </Link>
            </div>

          </div>
          ))}
        </div>

        {this.state.review != null &&
          
          <div className='showReview'>
            <h1>Add your opinion</h1>
            <div className='review'>

              <div className='moviePic'>
                <img src={require('./assets/cinema.jpg')} className='movieImg'></img>
                <p>overall rating: <strong>8.6/10</strong></p>
              </div>


              <div className='allData'>
                <div className='closeDiv'>
                  <CloseCircle className="close-invert" onClick={() => this.setState({ review: null })}></CloseCircle>
                </div>
                <div className='data'>
                  <h1 className='movieTitle'>title</h1>
                  <p>length</p>
                </div>
                <p>genre</p>
                <div className='reviewStars'>
                  <div>csillagok</div>
                  <div>9/10</div>
                </div>

                <input type='text' className='inputReview'></input>
                <div className='addReview btn'>
                  <button className='detailsBtn' onClick={() => this.props.app.nextStep()}>Submit review</button>
                </div>
              </div>
            </div>

          </div>}


      </div>
    );
  }
}
export default Tickets;
