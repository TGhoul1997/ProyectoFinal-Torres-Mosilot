import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error from "./components/Error"
import Home from './components/Home';
import Layout from './components/Layout';
import Productos from './components/Productos';
import DetalleProducto from "./components/DetalleProducto"
import Contactanos from "./components/Contactanos"



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="productos" element={<Productos/>} />
            <Route path="productos/:id" element={<DetalleProducto/>} />
            <Route path="contactanos" element={<Contactanos/>} />
            <Route path='*' element={<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
