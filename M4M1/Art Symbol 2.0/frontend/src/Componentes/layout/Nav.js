import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
<nav>
    <div class="holder">
        <div class="Cont_nav">
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/servicios">Artistas</Link></li>
            <li><Link to="/galeria">Obras</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </div>
    </div>
</nav>
    )
}
export default Nav;