import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailsContainer from './components/ItemDetailsContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div
        style={{
          width: '90%',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        <Routes>
          <Route path='/' Component={ItemListContainer} />
          <Route path='/category/:id' Component={ItemListContainer} />
          <Route path='/item/:id' Component={ItemDetailsContainer} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
