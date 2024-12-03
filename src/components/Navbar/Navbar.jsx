import CartWidget from './CartWidget'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
        <div>
            <img className="navbar--brand" src='../src/assets/img/Electronics-logo.webp'></img>
            <p className="navbar--brand-text"><b>Nata Repairs</b></p>
        </div>

        <ul className="navbar--categories">
            <li>Inicio</li>
            <li>Productos</li>
            <li>Reparaciones</li>
            <li>Refaccionados</li>
            <li>Envíos</li>
            <li>Garantía</li>
            <li>Contacto</li>
        </ul>

        <CartWidget />
    </nav>
  )
}

export default Navbar