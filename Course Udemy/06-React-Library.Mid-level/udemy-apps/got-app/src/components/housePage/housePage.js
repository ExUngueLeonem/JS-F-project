import React, {Component} from "react";
import {Col, Row, Container} from 'reactstrap';
import ItemList from "../itemList";
import ItemDetails, {Field} from "../itemDetails";
import ErrorMessage from "../errorMessage";
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class HousePage extends Component {
    gotService = new gotService();

    state = {
        selectedItem: 1,
        error: false
    }
    
    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    render () {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllHouses}
            renderItem={({name}) => `${name}`}/>
        );

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedItem}
                         getData={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ancestralWeapons' label='Ancestral weapons'/>

            </ItemDetails>
        );

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}


/* charDetails полностью отвязать от персонажей 
точно так же, как мы сделали с itemList
создать различные страницы
страница по отображению книг
страница по отобрадению домов
поместить их в отдельную папку в компоненты*/