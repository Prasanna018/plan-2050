import React from 'react'
import { motion } from "motion/react"
import NavBar from './Components/Navigation/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Summary from './Pages/Summary'
import Report from './Pages/Report'
import Introduction from './Pages/Introduction'
import Appendices from './Pages/Appendices'
import TrendsAndForeCasts from './Pages/TrendsAndForeCasts'
import SystemToday from './Pages/SystemToday'
import OurSystemsTommarow from './Pages/OurSystemsTommarow'
import Funding from './Pages/Funding'

function App() {
  return (
    <div className='min-h-screen  bg-[#e7eaeb] text-white'>

      <NavBar></NavBar>

      <main className=' absolute sm:top-52 top-10 md:top-[170px] bg-[#e7eaeb] lg:top-[136px]
      '>

        <Routes>
          <Route path='/report' element={<Report></Report>}></Route>
          <Route path='/' element={<Summary></Summary>}></Route>
          <Route path='/introduction' element={<Introduction></Introduction>}></Route>
          <Route path='appendices' element={<Appendices></Appendices>}></Route>
          <Route path='trends-and-forecasts' element={<TrendsAndForeCasts></TrendsAndForeCasts>}></Route>
          <Route path='system-today' element={<SystemToday></SystemToday>}></Route>
          <Route path='our-systems-tomorrow' element={<OurSystemsTommarow></OurSystemsTommarow>}></Route>
          <Route path='funding' element={<Funding></Funding>}> </Route>
        </Routes>







      </main>

    </div>
  )
}

export default App
