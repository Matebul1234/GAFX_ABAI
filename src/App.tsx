import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Bharat from './components/Home'

import Navbar from "./components/Navbar"
import Home from './components/Home'
import Sponser from './components/Sponser'
import B2B from './components/B2B'

function App() {


  return (
    <>
     {/*<Bharat/> */}
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sponser' element={<Sponser/>}/>
          <Route path='/b2b' element={<B2B/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
