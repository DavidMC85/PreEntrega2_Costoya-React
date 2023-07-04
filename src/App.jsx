import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
  <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={ <ItemListContainer/> } />
        <Route path="/category/:idCategory" element={ <ItemListContainer/> } />
        <Route path="/item/:idItem" element ={ <ItemDetailContainer/> } />
        <Route path="*" element ={ <h2>Paciencia!!!!!! sitio en construcción</h2> } />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App