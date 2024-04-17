import './Foods.css';
import {Component, React} from 'react';
import { ReactComponent as Plus} from './assets/plus.svg';
import { ReactComponent as Minus} from './assets/minus.svg';

class FoodCardSmall extends Component {
  render(){
    return (
      <div className='small-card'>
       <div class="underline">
          <Plus className="plus"></Plus>
          <p className='movie-title-small-card'>2x Love movie</p>
          <Minus className="minus"></Minus>
       </div>
       <ul>
         <li>
            <div class="item">
              <p>2x smol cola</p>
              <Minus className="small-minus"></Minus>
            </div>
         </li>
         
       </ul>
      </div>
    );
  }
}
export default FoodCardSmall;
