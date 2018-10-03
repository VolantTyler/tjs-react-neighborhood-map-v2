//resource: @Forrest https://www.youtube.com/watch?v=lDVaZY0aG2w&t=0s&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP&index=7

import React, { Component } from 'react';
import ListItem from './ListItem.js'

class VenueList extends Component {

    render() {
        return (
            <ol className='venue-list'>
                {this.props.venues && 
                    this.props.venues.map((venue, referralId) => (
                        <ListItem key={referralId} {...venue}/>

                    ))}
            </ol>
        )
    }
}

export default VenueList