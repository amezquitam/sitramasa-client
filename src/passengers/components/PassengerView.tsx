import { Form } from 'react-router-dom'
import { docks } from '../../docks/dockData'
import { NoUserSelect } from '../../util/components/NoUserSelect'
import { useForm } from 'react-hook-form'
import './PassengerView.css'

type Dock = 'Rodadero' | 'La Marina' | 'Playa Blanca' | 'Playa Grande' | 'Taganga'

interface Trip {
    from: Dock
    to: Dock
    price: number
    boatman: string
    boatname: string
    capacity: number
}

const trips: Trip[] = [
    { from: 'Rodadero', to: 'La Marina', price: 150, boatman: 'Juan Pérez', boatname: 'El Velero', capacity: 20 },
    { from: 'Rodadero', to: 'Playa Blanca', price: 160, boatman: 'Laura Martínez', boatname: 'Marinero Feliz', capacity: 30 },
    { from: 'Rodadero', to: 'Playa Grande', price: 200, boatman: 'Andrés Castro', boatname: 'El Capitán', capacity: 18 },
    { from: 'Rodadero', to: 'Taganga', price: 160, boatman: 'Raúl Salazar', boatname: 'Mar de Fantasía', capacity: 28 },
    { from: 'Rodadero', to: 'La Marina', price: 180, boatman: 'Diana Silva', boatname: 'Mar y Cielo', capacity: 30 },
    { from: 'Rodadero', to: 'La Marina', price: 170, boatman: 'Mónica Pérez', boatname: 'Marinero Audaz', capacity: 20 },
    { from: 'La Marina', to: 'Rodadero', price: 200, boatman: 'María Rodríguez', boatname: 'La Perla', capacity: 15 },
    { from: 'La Marina', to: 'Taganga', price: 190, boatman: 'Carlos Sánchez', boatname: 'La Aventura Azul', capacity: 25 },
    { from: 'La Marina', to: 'Playa Grande', price: 170, boatman: 'Paola Jiménez', boatname: 'La Brisa', capacity: 22 },
    { from: 'La Marina', to: 'Playa Blanca', price: 160, boatman: 'Ricardo González', boatname: 'La Perla del Mar', capacity: 25 },
    { from: 'La Marina', to: 'Rodadero', price: 180, boatman: 'Sandra Ramírez', boatname: 'La Brisa del Mar', capacity: 15 },
    { from: 'La Marina', to: 'Playa Blanca', price: 150, boatman: 'Roberto Medina', boatname: 'El Marino Feliz', capacity: 22 },
    { from: 'Playa Grande', to: 'Taganga', price: 120, boatman: 'Ana García', boatname: 'La Sirena', capacity: 18 },
    { from: 'Playa Grande', to: 'La Marina', price: 210, boatman: 'Miguel Ramírez', boatname: 'El Viajero', capacity: 15 },
    { from: 'Playa Grande', to: 'Playa Blanca', price: 160, boatman: 'Marcela González', boatname: 'El Amanecer', capacity: 20 },
    { from: 'Playa Grande', to: 'Rodadero', price: 150, boatman: 'Vanessa Gómez', boatname: 'La Sirena Encantada', capacity: 25 },
    { from: 'Playa Grande', to: 'Taganga', price: 170, boatman: 'Luisa Ortega', boatname: 'El Navegante Azul', capacity: 25 },
    { from: 'Playa Grande', to: 'Taganga', price: 140, boatman: 'Martín Ríos', boatname: 'El Capitán Valiente', capacity: 28 },
    { from: 'Taganga', to: 'Rodadero', price: 170, boatman: 'Pedro López', boatname: 'El Navegante', capacity: 22 },
    { from: 'Taganga', to: 'La Marina', price: 180, boatman: 'Elena Torres', boatname: 'Mar de Sueños', capacity: 28 },
    { from: 'Taganga', to: 'Playa Blanca', price: 190, boatman: 'Alejandro Díaz', boatname: 'El Solitario', capacity: 15 },
    { from: 'Taganga', to: 'Playa Grande', price: 140, boatman: 'Gabriel Varela', boatname: 'El Viajero Soñador', capacity: 20 },
    { from: 'Taganga', to: 'Rodadero', price: 200, boatman: 'Diego Torres', boatname: 'El Aventurero del Mar', capacity: 18 },
    { from: 'Taganga', to: 'Rodadero', price: 150, boatman: 'Silvia Varela', boatname: 'Mar de Ensueño', capacity: 22 },
    { from: 'Playa Blanca', to: 'Rodadero', price: 140, boatman: 'Isabel Vargas', boatname: 'El Explorador', capacity: 20 },
    { from: 'Playa Blanca', to: 'La Marina', price: 180, boatman: 'Carlos Gómez', boatname: 'El Aventurero', capacity: 25 },
    { from: 'Playa Blanca', to: 'Taganga', price: 150, boatman: 'Javier Ruiz', boatname: 'El Marino', capacity: 25 },
    { from: 'Playa Blanca', to: 'Playa Grande', price: 200, boatman: 'Carolina Ríos', boatname: 'La Aventura Rosa', capacity: 18 },
    { from: 'Playa Blanca', to: 'Playa Grande', price: 190, boatman: 'Hugo Vargas', boatname: 'El Explorador Azul', capacity: 22 },
    { from: 'Playa Blanca', to: 'Playa Grande', price: 180, boatman: 'Catalina Díaz', boatname: 'El Aventurero Intrépido', capacity: 15 },
];


export const PassengerView = () => {
    const { register, getValues, watch } = useForm({
        defaultValues: {
            startDock: 1,
            endDock: 2,
            numOfPeople: 1
        }
    })

    const getDock = (dockId: number) => docks.find(dock => dock.dockId === dockId)

    const values = getValues() 
    const startDock = getDock(values.startDock).name.toLowerCase()
    const endDock = getDock(values.endDock).name.toLowerCase()

    const filterTrips = trips.filter(
        trip => 
            trip.from.toLowerCase() === startDock &&
            trip.to.toLowerCase() === endDock &&
            trip.capacity >= values.numOfPeople 
    )

    const images = new Map<number, string>([
        [1, '/sitramasa-client/res/img/01-rodadero.jpg'],
        [2, '/sitramasa-client/res/img/01-marina.jpg'],
        [3, '/sitramasa-client/res/img/01-taganga.jpg'],
        [4, '/sitramasa-client/res/img/01-playa-blanca.jpg'],
        [5, '/sitramasa-client/res/img/01-playa-grande.jpg'],
    ])


    const originOptions = docks.filter(dock => dock.dockId != values.endDock).map(
        opt => <option key={"ori-" + opt.dockId} value={opt.dockId} className="dock-option">{opt.name}</option>
    )

    const destinyOptions = docks.filter(dock => dock.dockId != values.startDock).map(
        opt => <option key={"dest-" + opt.dockId} selected={opt.dockId === 2} value={opt.dockId} className="dock-option">{opt.name}</option>
    )

    // Select route page
    return (
        <NoUserSelect>
            <div className="pg-container">
                <div
                    style={{ backgroundImage: `url(${images.get(watch().startDock) || 'none'})` }}
                    className="bg-image bg-left"
                ></div>
                <div
                    style={{ backgroundImage: `url(${images.get(watch().endDock) || 'none'})` }}
                    className="bg-image bg-right"
                ></div>

                <Form className='pg-form'>
                    <h1 className='pg-label'>Selecciona tu ruta</h1>
                    <div className="route-select">
                        <select {...register("startDock", { valueAsNumber: true })} className="dock-origin route-option">
                            {originOptions}
                        </select>
                        <select {...register("endDock", { valueAsNumber: true })} className="dock-destiny route-option">
                            {destinyOptions}
                        </select>
                    </div>
                    <h1 className='pg-label'>Número de personas</h1>
                    <input {...register("numOfPeople")} className='pg-num-inp' min={1} max={30} defaultValue={1} type="number" />
                    <div className="pg-button light" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>Consultar</div>
                </Form>
            </div>



            <div className="pg-container">
                <div className="result">
                    <h2>Viajes de { startDock + " a " + endDock } { filterTrips.length === 0 ? '(No hay)' : '' } </h2>
                    <div className="viajes">
                        {filterTrips.map(trip => 
                            <div key={trip.boatman}>
                                <ul>
                                    <li>Lanchero: {trip.boatman}</li>
                                    <li>Lancha: {trip.boatname}</li>
                                    <li>Precio por persona: ${trip.price}.000</li>
                                    <li>Capacidad: {trip.capacity}</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="black pg-button" onClick={() => window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' })}>Volver arriba</div>
                </div>
            </div>

        </NoUserSelect>
    )
}

