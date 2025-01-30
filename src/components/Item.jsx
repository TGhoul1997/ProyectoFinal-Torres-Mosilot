import { Link } from "react-router-dom";

function Item({ id, nombre, precio, descripcion, imagen }) {
    return (
        <div>
            <h2>{nombre}</h2>
            <p>{descripcion}</p>
            <p>Precio: ${precio}</p>
            <img src={imagen} alt="" />
            <Link to={`/productos/${id}`}>Ver detalles</Link>
        </div>
    );
}

export default Item;
