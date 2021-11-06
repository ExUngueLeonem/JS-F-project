import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from 'redux';

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

const mapDispatchToProps = (dispatch) => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch); //почему это достается
    return { //отдает экшены, которые мы ватаскиваем из actions
        inc,
        dec,
        rnd
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);//возвращает обернутый в функцию компонент
//принимает в себя конфигурацию и тот компонент, который мфы хотим связать