import { Link, Outlet } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.svg"
function Layout() {
    return (
        <>
            <nav>
                <div>
                    <img src={logo} alt="Logo de la marca" />
                </div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"productos"}>Productos</Link>
                    </li>
                    <li>
                        <Link to={"contactanos"}>Contáctanos</Link>
                    </li>
                </ul>
                <div>
                    <CartWidget />
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;
