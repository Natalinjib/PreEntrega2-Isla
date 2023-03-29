import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

const mockedItems = [
  {
    id: 1,
    title: 'Camisa tiger',
    description: 'Camisa',
    price: 200,
    pictureUrl:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81e4Ws9pTlL._AC_UY1000_.jpg',
  },
  {
    id: 2,
    title: 'Camisa tiger',
    description: 'Camisa',
    price: 200,
    pictureUrl:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81e4Ws9pTlL._AC_UY1000_.jpg',
  },
  {
    id: 3,
    title: 'Camisa tiger',
    description: 'Camisa',
    price: 200,
    pictureUrl:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81e4Ws9pTlL._AC_UY1000_.jpg',
  },
]

const fetchItems = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockedItems)
    }, 2000)
  })

const ItemListContainer = () => {
  const [items, setItems] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchItems().then((items) => {
      setItems(items)
      setLoading(false)
    })
  }, [])

  return loading || !items ? (
    <span>Cargando...</span>
  ) : (
    <ItemList items={items} />
  )
}

export default ItemListContainer
