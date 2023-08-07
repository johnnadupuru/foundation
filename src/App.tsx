import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Blog from "./components/Blog/Blog"
import Footer from "./components/Footer/Footer"
import Payments from "./components/Payments/Payments"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<Blog/>}/>
          <Route path="/payments" element={<Payments/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
