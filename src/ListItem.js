//resource: @Forrest https://www.youtube.com/watch?v=lDVaZY0aG2w&t=0s&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&index=7

import React, { Component } from 'react';

class ListItem extends Component {

    render() {
        return (
            <li className='list-item'>
                {this.props.venue.name}
            </li>
        )
    }
}

export default ListItem