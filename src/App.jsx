import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
      <div>
        <Navbar />
        <ItemListContainer motd={"Hola! Este es el mensaje props del día! 20% de descuento en.. algo por definir"}/>
      </div>

  )
}

export default App
