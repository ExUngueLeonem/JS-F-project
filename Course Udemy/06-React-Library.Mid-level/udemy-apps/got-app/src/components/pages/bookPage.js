import React, {Component} from "react";
import {Col, Row, Container} from 'reactstrap';
import ItemList from "../itemList";
import ItemDetails, {Field} from "../itemDetails";
import ErrorMessage from "../errorMessage";
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';

export default class BookPage extends Component {
    gotService = new gotService();

    state = {
        selectedItem: null,
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
            getData={this.gotService.getAllBooks}
            renderItem={({name}) => `${name}`}/>
        );

        const itemDetails = (
            <ItemDetails itemId={this.state.selectedItem}
                         getData={this.gotService.getBook}>
                             
                <Field field='numberOfPages' label='Pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
                
            </ItemDetails>
        );

        return (
            <RowBlock left={itemList} right={itemDetails}/>
        )
    }
}
