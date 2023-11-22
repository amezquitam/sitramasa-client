
import { useLocation } from "react-router-dom";
import { roles } from "../../roles/roles"
import { Card } from "./Card"
import './SelectUser.css'

function chunk<T>(arr: T[], size: number) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );
}

export const SelectUser = () => {
    const { pathname } = useLocation()

    if (!pathname.endsWith('sitramasa-client/')) {
        return <></>
    }

    const [firstRoles, secondRoles] = chunk(roles.map(
        role => <Card text={role} key={role} route={`/sitramasa-client/${role}`} />
    ), 2)

    return (
        <div id="bg-container">
            <div className="all-container">
                <h1 className="su-text">Seleccione el Rol que desea simular</h1>
                <div className="opt-container">
                    {firstRoles}
                </div>
                <div className="opt-container">
                    {secondRoles}
                </div>
            </div>
        </div>
    )
}
