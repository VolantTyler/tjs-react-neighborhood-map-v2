//resource: @Forrest https://www.youtube.com/watch?v=lDVaZY0aG2w&t=0s&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&index=7

import React, { Component } from 'react';
import VenueList from './VenueList'

class Sidebar extends Component {

    render() {
        return (
            <div className='sidebar'>
                <VenueList />
            </div>
        )
    }
}

export default Sidebar