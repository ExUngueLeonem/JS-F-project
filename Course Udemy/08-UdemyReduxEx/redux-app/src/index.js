import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, bindActionCreators} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/app';

const store = createStore(reducer);

//const {inc, dec, rnd} = bindActionCreators(actions, dispatch); //почему это достается
//в actions находится массив с функциями inc, dec, rnd

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
, document.getElementById('root'))

