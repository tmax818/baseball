import React from 'react'

const Item = ({ item }) => {
    console.log(item)
    return (
        <div>
            <a href={`clothing/${item.id}`}>{item.type}</a>
        </div>
    )
}
export default Item;