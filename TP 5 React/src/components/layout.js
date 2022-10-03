import { Link, Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav className="collapse navbar-collapse" id="navbarSupportedConten">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/quienessomos">Quienes somos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/productos">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;