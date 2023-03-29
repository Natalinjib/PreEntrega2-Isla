import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const mockedItem = {
  id: 1,
  title: 'Camisa tiger',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book.`,
  price: 200,
  pictureUrl:
    'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81e4Ws9pTlL._AC_UY1000_.jpg',
}

const fetchItem = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockedItem)
    }, 2000)
  })

const ItemDetailsContainer = () => {
  // const { id } = useParams()
  const [item, setItem] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchItem().then((item) => {
      setItem(item)
      setLoading(false)
    })
  }, [])

  return (
    <div>
      {loading || !item ? (
        <span>Cargando...</span>
      ) : (
        <ItemDetail
          title={item.title}
          description={item.description}
          pictureUrl={item.pictureUrl}
          price={item.price}
        />
      )}
    </div>
  )
}

export default ItemDetailsContainer
