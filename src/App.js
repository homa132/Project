import React, {Component} from 'react';
import { createAppContainer } from "react-navigation";
import DrawerNav from './navigation/DrawerNav';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from '../redux/reducer/reducer';


const store = createStore(reducer,applyMiddleware(ReduxThunk));
const Navigation =  createAppContainer(DrawerNav);

class App extends Component {

    render() {
      return (
        <Provider store={store}>
          <Navigation />
        </Provider>
      );
    }
}

  export default App ;