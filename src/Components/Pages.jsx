import React from 'react'
import AnimeGallery from './AnimeGallery'
import Home from './Home'
import AnimePage from './AnimePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Pages = () => {
  return (
   <BrowserRouter> 
      <Routes> 
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<AnimeGallery />} />
            <Route path='/page' element={<AnimePage />} />
      </Routes>
   </BrowserRouter>
  )
}

export default Pages
