import React from 'react'

const ItemDetail = (props) => {
  const { title, description, pictureUrl, price } = props

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <img
        style={{
          padding: 16,
          borderRadius: 6,
          border: '1px solid #e3e3e3',
          width: 400,
          height: 400,
          objectFit: 'cover',
        }}
        alt={title}
        src={pictureUrl}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 100,
          maxWidth: 400,
          gap: 16,
        }}
      >
        <h2>{title}</h2>
        <span>{description}</span>
        <h6>Precio: S/. {price}</h6>
      </div>
    </div>
  )
}

export default ItemDetail
