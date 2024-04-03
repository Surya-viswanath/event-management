import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './component/Signup'
import Login from './component/Login'
import Menu from './component/Menu'
import EventList from './component/EventList'
import ViewClient from './component/ViewClient'
import Banner from './component/Banner'
import Menu1 from './component/Menu1'
import Myevent from './component/Myevent'
import Events from './component/Events'


function Routerc() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/' element={<><Menu/><Banner/></>}></Route>
<Route path='/signup' element={<><Menu/><Signup/></>}></Route>
<Route path='/login' element={<><Menu/><Login/></>}></Route>
<Route path='/viewevent' element={<><Menu/><Events/></>}></Route>
<Route path='/event' element={<><Menu1/><EventList/></>}></Route>
<Route path='/myeve/:email' element={<><Menu1/><Myevent/></>}></Route>
<Route path='/view/:email' element={<><Menu1/><ViewClient/></>}></Route>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default Routerc
