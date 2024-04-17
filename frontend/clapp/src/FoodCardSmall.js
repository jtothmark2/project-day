import './Foods.css';
import {Component, React} from 'react';
import { ReactComponent as CloseCircle} from './assets/close-circle.svg';

class FoodCardSmall extends Component {
  render(){
    return (
      <div className='small-card'>
       <div class="underline">
         <p className='movie-title-small-card'>2x Love movie</p>
       </div>
       <ul>
         <li>
            <div class="item">
              <p>2x smol cola</p>
              <CloseCircle className="close-circle"></CloseCircle>
            </div>
         </li>
         
       </ul>
      </div>
    );
  }
}
export default FoodCardSmall;
