import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Logout from './components/Logout'
import NotFound from "./components/NotFound";

const App = () => {
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/logout" element={<Logout/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
}
export default App