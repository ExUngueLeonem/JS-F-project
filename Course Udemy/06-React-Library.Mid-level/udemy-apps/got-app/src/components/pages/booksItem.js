import React, {Component} from "react";
import gotService from '../../services/gotService';
import ItemDetails, {Field} from "../itemDetails";

import RowBlock from '../rowBlock';


export default class BooksItem extends Component {
    gotService = new gotService();

    state = {
        selectedItem: 1,
        error: false
    }

    render () {
        return (
            <ItemDetails itemId={this.state.selectedItem}
                         getData={this.gotService.getBook}>       
                <Field field='numberOfPages' label='Pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
    }
}