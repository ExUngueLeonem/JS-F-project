import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props; //this.gotService.getAllHouses

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => { // в нашем айтеме нет ID 
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected(id)}>
                    {label}
                </li>
            )
        })
    }


    render() {
        const {itemList} = this.state;
        console.log(itemList);

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}