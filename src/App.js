import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import BurgerIngredients from './Component/BurgerIngredient';
import keyvalue from './ActionType';
const initailstate={
  salad:0,
  meat:0,
  cheese:0,
  bacon:0
}


 function reducer(state=initailstate,action){
   console.log(state,action)
   switch(action.type){
     case keyvalue.saledadded:
       return{
         salad:state.salad+1,
         meat:state.meat,
         cheese:state.cheese,
         bacon:state.bacon
       }
       case keyvalue.saledremove:
       return{
        salad:state.salad-1,
         meat:state.meat,
         cheese:state.cheese,
         bacon:state.bacon
       }
       case keyvalue.meatadded:
       return{
        salad:state.salad,
        meat:state.meat+1,
        cheese:state.cheese,
        bacon:state.bacon
       }
       case keyvalue.meatremove:
       return{
        salad:state.salad,
        meat:state.meat-1,
        cheese:state.cheese,
        bacon:state.bacon
       }
       case keyvalue.cheeseadded:
        return{
         salad:state.salad,
         meat:state.meat,
         cheese:state.cheese+1 ,
         bacon:state.bacon
        }
        case keyvalue.cheeseremove:
        return{
         salad:state.salad,
         meat:state.meat,
         cheese:state.cheese-1,
         bacon:state.bacon
        }
        case keyvalue.baconadded:
          return{
           salad:state.salad,
           meat:state.meat,
           cheese:state.cheese,
           bacon:state.bacon+1
          }
          case keyvalue.baconremove:
          return{
           salad:state.salad,
           meat:state.meat,
           cheese:state.cheese,
           bacon:state.bacon-1
          }
          case keyvalue.reset:
            return{
             salad:0,
             meat:0,
             cheese:0,
             bacon:0
            }
       default:
         return state;
   }
  
 }
 const store =createStore(reducer)

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      reducing practing 
      <BurgerIngredients/>
    </div>
    </Provider>
  );
}

export default App;
