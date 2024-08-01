import Home from "./components/home"
import Navbar from "./components/navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
<Routes>
  <Route path="/" element={<Navbar/>}/>
  <Route index element={<Home/>}/>
</Routes>

    </BrowserRouter>
  )
}

export default App
