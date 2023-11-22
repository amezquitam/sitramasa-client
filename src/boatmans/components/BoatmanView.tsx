import { UilEdit, UilHistory } from '@iconscout/react-unicons'
import './BoatmanView.css'

const boatman = {
    name: 'Lucas Hernandez',
    boat: {
        name: 'El Special',
        capacity: 9,
        img: '/sitramasa-client/res/img/03-lancha.jpg'
    },
    pending: [
        {
            name: 'Juan Pérez',
            people: 7,
            from: 'Rodadero',
            to: 'Playa Grande',
            date: Date.UTC(2023, 11, 23, 9, 0, 0, 0)
        }
    ]
}

export const BoatmanView = () => {
    return (
        <div className="pg-container bm-view">
            <h1 className='bv-title'>Bienvenido Lanchero {boatman.name} </h1>
            <div className="grid-doble">
                <div className="boat-info">
                    <h3>Lancha registrada</h3>
                    <img src={boatman.boat.img} alt="lancha" />
                    <div className='all-btw'> <div>Nombre:{' '}</div>  <div>{boatman.boat.name}</div></div>
                    <div className='all-btw'> <div>Capacidad:{' '}</div>  <div>{boatman.boat.capacity}</div></div>
                    <div className='all-btw'>
                        <div className='pg-button al-center'> <UilEdit /> Editar</div>
                        <div className="pg-button al-center"> <UilHistory /> Eliminar</div>
                    </div>
                </div>

                <div className="pending">
                    <h2>Viajes pendientes</h2>
                    <ul>
                        <li>Viaje pendiente 1</li>
                        <li>Viaje pendiente 2</li>
                        <li>Viaje pendiente 3</li>
                    </ul>
                    <h2>Viajes completados</h2>
                    <ul>
                        <li>Viaje completado 1</li>
                        <li>Viaje completado 2</li>
                        <li>Viaje completado 3</li>
                    </ul>
                    <br />
                    <div className="pg-button">
                        Habilitarse para viajar
                    </div>
                </div>
            </div>
        </div>
    )
}