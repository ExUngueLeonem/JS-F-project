import React, {Component} from 'react';
import './itemDetails.css'
import gotService from '../../services/gotService';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>

    )
}

export {
    Field
} 

class ItemDetails extends Component {

    gotService = new gotService();

    state = {
        item: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.itemId !== this.props.itemId) {
            this.updateChar();
        }
    }

    updateChar() {
        const {itemId, getData} = this.props;
        if (!itemId) return
        getData(itemId)
            .then((item) => {
                this.setState({item})
            })

    }

    render() {

        if (!this.state.item) {
            return <span className='select-error'>Please select a character</span>
        }
        const {item} = this.state;
        const {name} = item;

        return (
                <div className="char-details">
                    <h4>{name}</h4>
                    <ul className="list-group-flush">
                     {
                         React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                         })
                     }
                    </ul>
                </div>
        );
    }   
};

export default ItemDetails;