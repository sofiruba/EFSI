import { Link, Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/estadistica">Estadisticas</Link>
                <Link to="/persona">Buscar persona</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;