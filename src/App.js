import './App.css'
import Counter from './Components/Counter';
import { createStore } from "redux";
import {Provider} from 'react-redux';

const firstState = {
  count: 0
}
function reducer(state = firstState, action) {
  console.log(state,action)
  switch(action.type){
     case 'INCREMENT':
       return{
         count:state.count+1
       }
       case "DECREMENT":
         return {
           count:state.count-1
         }
         case 'RESET':
         return{
           count:0
         }
       default:
       return state;
  }

}

const Store = createStore(reducer)


function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Counter></Counter>
    </div>
    </Provider>
  );
}

export default App;
