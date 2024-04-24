
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Contect from '../pages/Contact'
import Policy from '../pages/Policy'
import Pagenotfound from '../pages/Pagenotfound'

function App() {

  return (
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='About' element={<About/>}/>
      <Route path='/Contact' element={<Contect/>}/>
      <Route path='/Policy' element={<Policy/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
     
    </Routes>
  
  )
}

export default App
