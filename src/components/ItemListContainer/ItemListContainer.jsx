import './itemlistcontainer.scss'

const ItemListContainer = ({motd}) => {
  return (
    <div className='body--motd'>
        <p>{motd}</p>
        <img className='under-construction-img' src="../src/assets/img/underconstruction.jpg"></img>
        <p>Sitio en construcción</p>
    </div>
  )
}

export default ItemListContainer