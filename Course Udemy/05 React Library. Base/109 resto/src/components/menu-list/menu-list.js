import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount() {
        const {RestoService} = this.props;
        RestoService.getMenuItems()
            .then(res => console.log(res));
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

export default WithRestoService()(connect(mapStateToProps)(MenuList));