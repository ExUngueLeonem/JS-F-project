import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {

    }
    render() {
        const {menuItems} = this.props

        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu
    }
}

export default connect(mapStateToProps)(MenuList);