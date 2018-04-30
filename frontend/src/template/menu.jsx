import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='nav-header'>
                <a className='navbar-brand' href="#">
                    <i className='fa fa-calendar-check-o'></i> IT Inventory
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href="#/users">Users</a></li>
                </ul>
            </div>
        </div>
    </nav>
)