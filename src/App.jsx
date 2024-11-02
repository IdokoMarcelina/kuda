import Header from './static/Header'
import './App.css'
import Business from './pages/Business'
import Companies from './pages/Companies'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path = '/' element={<Home/>}/>
            <Route path = '/business' element={<Business/>}/>
            <Route path = '/companies' element={<Companies/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
