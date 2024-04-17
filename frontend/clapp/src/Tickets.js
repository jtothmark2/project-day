import './App.css';
import './Tickets.css';
import { Component, React } from 'react';
import Movies from './Movies';
import Foods from './Foods';
import Receipt from './Receipt';
import Navbar from './Navbar';

class Tickets extends Component {
  state = {
    step: 0
  }
  setStep(e) {
    this.setState({ step: e.target.value })
  }
  nextStep() {
    console.log("!")
    this.setState({ step: this.state.step + 1 })
  }
  render() {
    return (
      <div className="App">
        <Navbar />

        <h1 className='moviesHeader' >Already seen:</h1>

        <div className='movies'>
          <div className='seenMovieCard movieCard'>

            <img src={require("./assets/cinema.jpg")} className='movieImg'></img>

            <div className='rating'>
              <div className='stars'>
                itt vannak a csillagok
              </div>
              <p>9/10</p>
            </div>

            <h3 className='movieTitle seenMovieTitle'>Movie title</h3>
            <div className='movieData'>
              <p> genre - genre</p>
              <p>120 min.</p>
            </div>

            <div className='myReview'>
              <p>My review:</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
            </div>
          
            <div className='btn'>
              <button onClick={() => this.setState({ selectedMovie: { title: "superman", rating: 8.5 } })} className='detailsBtn seenDetailsBtn'>Add review</button>
            </div>

          </div>
        </div>


      </div>
    );
  }
}
export default Tickets;
