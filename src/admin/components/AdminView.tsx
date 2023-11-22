import { Link, Outlet, useLocation } from "react-router-dom"
import './AdminView.css'
import logo from './02-logo.png'

export const AdminView = () => {
    const { pathname } = useLocation()

    return (
        <div className="scr-container admin-bg">
            <div id="admin-panel" className="admin-glass">
                <div id="admin-menu">
                    <Link to="/sitramasa-client/" className="mark bar-gap">
                        <img id="logo" src={logo} width={80} height={80}/>
                        <h1>Sitramasa</h1>
                    </Link>
                    <div className="options bar-gap">
                        <h2>Acciones</h2>
                        <Link className={ pathname.toLowerCase().endsWith("administrador") ? "active" : "" } to="/sitramasa-client/Administrador">Gestionar usuarios</Link>
                        <h2>Reportes</h2>
                        <Link className={ pathname.endsWith("ventas") ? "active" : "" } to="/sitramasa-client/administrador/reporte/ventas">Ventas</Link>
                        <Link className={ pathname.endsWith("viajes") ? "active" : "" } to="/sitramasa-client/administrador/reporte/viajes">Viajes</Link>
                        <Link className={ pathname.endsWith("muelles") ? "active" : "" } to="/sitramasa-client/administrador/reporte/muelles">Muelles</Link>
                        <Link className={ pathname.endsWith("pasajeros") ? "active" : "" } to="/sitramasa-client/administrador/reporte/pasajeros">Pasajeros</Link>
                        <Link className={ pathname.endsWith("anomalias") ? "active" : "" } to="/sitramasa-client/administrador/reporte/anomalias">Anomalias</Link>
                    </div>
                </div>
                <div id="admin-current">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}