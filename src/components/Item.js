import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = (props) => {
  const { id, title, pictureUrl, price } = props
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/item/${id}`)}
      style={{
        placeSelf: 'center',
        display: 'grid',
        border: '2px solid #e3e3e3',
        gap: 8,
        cursor: 'pointer',
        padding: 16,
      }}
    >
      <img
        style={{
          width: '100%',
          objectFit: 'cover',
        }}
        alt={title}
        src={pictureUrl}
      />
      <h5 style={{ textAlign: 'center' }}>{title}</h5>
      <h6 style={{ textAlign: 'center' }}>S/. {price}</h6>
    </div>
  )
}

export default Item
