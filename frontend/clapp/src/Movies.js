import './App.css';
import './Movies.css';
import { Component, React } from 'react';
import { ReactComponent as CloseCircle } from './assets/close-circle.svg';
import { Call } from './api';
class Movies extends Component {
  state = {
    selectedMovie: null,
    movies: []
  }
  componentDidMount(){
    this.GetMovies();
  }
  async GetMovies(){
    var r = await Call('GET', 'api/movies', {})
    console.log(r)
    this.setState({movies: r})
  }
  render() {
    return (
      <div className="App">

        <h1 className='moviesHeader' >Our next movies:</h1>

        <div className='movies'>
          {
            this.state.movies.map((movie,index) => (
              <div key={index} className='movieCard'>

            <img src={require(`./assets${movie.img_url}`)} className='movieImg'></img>


            <h3 className='movieTitle'>{movie.title}</h3>
            <div className='movieData'>
              <p>{movie.genre}</p>
              <p>{movie.length}</p>
            </div>
            <p className='desc'>
              {movie.description}
            </p>
            <div className='btn'>
              <button onClick={() => this.setState({ selectedMovie: { title: "superman", rating: 8.5 } })} className='detailsBtn'>Details</button>
            </div>

          </div>
            ))
          }
          
        </div>



        {this.state.selectedMovie != null &&


          <div className='showDetails'>

            <div className='bigMovieCard'>
              <div className='closeDiv'>
                <CloseCircle className="close" onClick={() => this.setState({selectedMovie: null})}></CloseCircle>
              </div>

              <img src={require("./assets/cinema.jpg")} className='bigMovieImg'></img>

              <h3 className='movieTitle'>Movie title</h3>
              <div className='movieData'>
                <p> genre - genre</p>
                <p>120 min.</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
              </p>
              <div className='btn'>
                <button className='detailsBtn' onClick={() => this.props.app.nextStep()}>Buy ticket</button>
              </div>

            </div>

          </div>}
      </div>
    );
  }
}
export default Movies;
