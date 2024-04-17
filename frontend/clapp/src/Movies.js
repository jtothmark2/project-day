import './App.css';
import './Movies.css';
import { Component, React } from 'react';

class Movies extends Component {
  state = {
    selectedMovie: null
  }
  render() {
    return (
      <div className="App">
        <h1>Movies</h1>

        <h1 className='moviesHeader' >Our next movies:</h1>

        <div className='movies'>
          <div className='movieCard'>

            <img src={require("./cinema.jpg")} className='movieImg'></img>


            <h3 className='movieTitle'>Movie title</h3>
            <div className='movieData'>
              <p> genre - genre</p>
              <p>120 min.</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
            </p>
            <div className='btn'>
              <button onClick={() => this.setState({ selectedMovie: { title: "superman", rating: 8.5 } })} className='detailsBtn'>Details</button>
            </div>

          </div>

          {/* sdas */}

          <div className='movieCard'>

            <img src={require("./cinema.jpg")} className='movieImg'></img>


            <h3 className='movieTitle'>Movie title</h3>
            <div className='movieData'>
              <p> genre - genre</p>
              <p>120 min.</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
            </p>
            <div className='btn'>
              <button onClick={() => this.setState({ selectedMovie: { title: "superman", rating: 8.5 } })} className='detailsBtn'>Details</button>
            </div>

          </div>
          <div className='movieCard'>

            <img src={require("./cinema.jpg")} className='movieImg'></img>


            <h3 className='movieTitle'>Movie title</h3>
            <div className='movieData'>
              <p> genre - genre</p>
              <p>120 min.</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
            </p>
            <div className='btn'>
              <button onClick={() => this.setState({ selectedMovie: { title: "superman", rating: 8.5 } })} className='detailsBtn'>Details</button>
            </div>

          </div>
          <div className='movieCard'>

            <img src={require("./cinema.jpg")} className='movieImg'></img>


            <h3 className='movieTitle'>Movie title</h3>
            <div className='movieData'>
              <p> genre - genre</p>
              <p>120 min.</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
            </p>
            <div className='btn'>
              <button onClick={() => this.setState({ selectedMovie: { title: "superman", rating: 8.5 } })} className='detailsBtn'>Details</button>
            </div>

          </div>
          <div className='movieCard'>

            <img src={require("./cinema.jpg")} className='movieImg'></img>


            <h3 className='movieTitle'>Movie title</h3>
            <div className='movieData'>
              <p> genre - genre</p>
              <p>120 min.</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
            </p>
            <div className='btn'>
              <button onClick={() => this.setState({ selectedMovie: { title: "superman", rating: 8.5 } })} className='detailsBtn'>Buy ticket</button>
            </div>

          </div>
          {/* sad */}
        </div>



        {this.state.selectedMovie != null &&


          <div className='showDetails'>

            <div className='bigMovieCard'>

              <img src={require("./cinema.jpg")} className='bigMovieImg'></img>

              <h3 className='movieTitle'>Movie title</h3>
              <div className='movieData'>
                <p> genre - genre</p>
                <p>120 min.</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
              </p>
              <div className='btn'>
                <button className='detailsBtn'>Foglalás</button>
              </div>

            </div>

          </div>}
      </div>
    );
  }
}
export default Movies;
