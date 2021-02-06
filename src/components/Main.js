import React, { Component } from 'react'

import Header from './Header'
import { clothing } from '../shared/clothing';
import Item from './Item'

export default class Main extends Component {
    state = {
        clothing
    }

    render() {
        console.log(this.state.clothing)
        return (
            <div>
                <Header />
                Main Component
                {this.state.clothing.map(item => {
                    return (
                        <Item item={item} />
                    )
                })}
            </div>
        )
    }
}
