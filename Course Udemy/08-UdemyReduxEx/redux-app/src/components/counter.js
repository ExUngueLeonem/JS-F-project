import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
//import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div>
    );
}

const mapStateToProps = (state) => { 
    return { //возвращаем объект с теми свойствами, которые мы хотим вытащить из нашего стейта
        counter: state
    }
}

/* 
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch); //почему это достается
}
 */

export default connect(mapStateToProps, actions)(Counter);//возвращает обернутый в функцию компонент
//принимает в себя конфигурацию и тот компонент, который мфы хотим связать