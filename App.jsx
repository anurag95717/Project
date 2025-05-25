import React from 'react'
import Navbar from './component/Navbar'
import { Route, Routes, useLocation} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './component/Footer'
import AllRooms from './Pages/AllRooms'
import RoomDetails from './Pages/RoomDetails'
import MyBookings from './Pages/MyBookings'
import HotelReg from './component/HotelReg'
import LayOut from './Pages/HotelOwner/LayOut'
import Dashboard from './Pages/HotelOwner/Dashboard'
import AddRoom from './Pages/HotelOwner/AddRoom'
import ListRoom from './Pages/HotelOwner/ListRoom'


const App = () => {

   const isOwnerPath = useLocation().pathname.includes("owner")
   return(
    <div>
    {!isOwnerPath && <Navbar/>}
    {false && <HotelReg/>}
    <div className='min-h-[70vh]'>
        <Routes>
            
            <Route path='/'element={<Home/>}/>
            <Route path='/room' element={<AllRooms/>}/>
            <Route path='/room/:id' element={<RoomDetails/>}/>
            <Route path='/my-Bookings' element={<MyBookings/>}/>
            <Route path='/owner' element={<LayOut/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="add-room" element={<AddRoom/>}/>
                <Route path="list-room" element={<ListRoom/>}/>

            </Route>

        </Routes>

    </div>
    <Footer/>
    </div>
   )
  
}

export default App

