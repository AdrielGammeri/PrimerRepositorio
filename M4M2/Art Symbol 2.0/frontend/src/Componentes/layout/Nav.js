import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return(
<nav>
    <div className="holder">
        <div className="Cont_nav">
            <ul>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "activo" : undefined}
                > Home</NavLink></li>
                <li><NavLink to="/servicios"className={({ isActive }) => isActive ? "activo" : undefined}
                >Artistas</NavLink></li>
                <li><NavLink to="/galeria"className={({ isActive }) => isActive ? "activo" : undefined}
                >Obras</NavLink></li>
                <li><NavLink to="/nosotros"className={({ isActive }) => isActive ? "activo" : undefined}
                >Nosotros</NavLink></li>
                <li><NavLink to="/contacto"className={({ isActive }) => isActive ? "activo" : undefined}
                >Contacto</NavLink></li>
            </ul>
        </div>
    </div>
</nav>
    )
}
export default Nav; 