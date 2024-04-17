import './Foods.css';
import {Component, React} from 'react';

class FoodCardSmall extends Component {
  render(){
    return (
      <div className='small-card'>
       <div class="underline">
         <p className='movie-title-small-card'>2x Love movie</p>
       </div>
       <ul>
         <div class="items">
          <p>2x</p>
           <span>X</span>
         </div>
       </ul>
      </div>
    );
  }
}
export default FoodCardSmall;
