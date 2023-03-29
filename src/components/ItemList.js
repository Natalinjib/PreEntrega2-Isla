import React from 'react'
import Item from './Item'

const ItemList = (props) => {
  const { items } = props

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 16,
      }}
    >
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          title={item.title}
          pictureUrl={item.pictureUrl}
          price={item.price}
        />
      ))}
    </div>
  )
}

export default ItemList
