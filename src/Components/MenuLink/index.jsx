import { Link, useLocation } from "react-router-dom"
import styles from "./Menu.module.css"

const MenuLink = ({children, to}) => {

    const localizacao = useLocation();

    return (
        <header>
            <nav className={styles.navegacao}>
                <Link className={`${styles.link} ${localizacao.pathname === to ? styles.linkDestacado : ''}`} to={to}>{children}</Link>
            </nav>
        </header>
    )
}

export default MenuLink