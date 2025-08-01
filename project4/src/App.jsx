

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Loading from './components/Loading'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshows from './components/Tvshows'
import People from './components/People'

function App() {
 

  return (
    <div className='w-screen min-h-screen bg-[#1F1E24] flex'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trending' element={<Trending/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/tv-shows' element={<Tvshows/>}/>
        <Route path='/people' element={<People/>}/>
        
      </Routes>
    </div>
  )
}

export default App
