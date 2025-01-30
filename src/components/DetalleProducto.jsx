import { products } from "../zapatillas";
import { useParams } from "react-router-dom"

function DetalleProducto() {
    const {id} = useParams();
    console.log(id)
    const producto=products.find(prod=>prod.id===parseInt(id))

    if(!producto){
        return <h2>El producto no existe!</h2>
    }
  return (
    <div>
        <h2>Detalle del producto</h2>
        <h2>{products.nombre}</h2>
        <p>{products.descripcion}</p>
        <h3>{products.precio}</h3>
    </div>
  )
}

export default DetalleProducto