import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return (
        <div>
            <ul>
                <li><NavLink exact to="/info" activeStyle={activeStyle}>소개</NavLink></li>
                <li><NavLink exact to="/" activeStyle={activeStyle}>The JongHome</NavLink></li>
                <li><NavLink exact to="/questions" activeStyle={activeStyle}>문의</NavLink></li>
            </ul>
        </div>
    );
};

export default Menu;