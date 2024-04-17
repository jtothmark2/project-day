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
              <button onClick={() => this.setState({ selectedMovie: movie})} className='detailsBtn'>Details</button>
            </div>

          </div>
            ))
          }
          
        </div>



        {this.state.selectedMovie != null &&


          <div className='showDetails'>

            <div className='bigMovieCard'>
              <div className='closeDiv'>
                <CloseCircle className="close-invert" onClick={() => this.setState({selectedMovie: null})}></CloseCircle>
              </div>

              <img src={require(`./assets${this.state.selectedMovie.img_url}`)} className='bigMovieImg'></img>


            <h3 className='movieTitle'>{this.state.selectedMovie.title}</h3>
            <div className='movieData'>
              <p>{this.state.selectedMovie.genre}</p>
              <p>{this.state.selectedMovie.length}</p>
            </div>
           
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
