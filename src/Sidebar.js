//resource: @Forrest https://www.youtube.com/watch?v=lDVaZY0aG2w&t=0s&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&index=7

import React, { Component } from 'react';
import VenueList from './VenueList'

class Sidebar extends Component {

    state = {
        query: ''
    }
    render() {
        return (
            <div className='sidebar'>
                <input placeholder='Search List'type={'serach'} id={'search'} value={this.state.query}></input>
                <VenueList 
                    {...this.props}
                />
            </div>
        )
    }
}

export default Sidebar