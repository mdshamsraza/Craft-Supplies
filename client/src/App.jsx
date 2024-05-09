
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../../client/src/pages/Home'
import About from '../../client/src/pages/About'
import Contect from '../../client/src/pages/Contact'
import Policy from '../../client/src/pages/Policy'
import Pagenotfound from '../../client/src/pages/Pagenotfound'
import Register from '../../client/src/pages/Auth/Register'
import Login from '../../client/src/pages//Auth/Login'

function App() {

  return (
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Contact' element={<Contect/>}/>
      <Route path='/Policy' element={<Policy/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
     
    </Routes>
  
  )
}

export default App
