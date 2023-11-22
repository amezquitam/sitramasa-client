
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

type Dock = 'Rodadero' | 'La Marina' | 'Playa Blanca' | 'Playa Grande' | 'Taganga'

interface DockTrips {
    from: Dock
    to: Dock
    numOfTrips: number
}


const dockTrips: DockTrips[] = [
    { from: 'Rodadero', to: 'La Marina', numOfTrips: 700 },
    { from: 'Rodadero', to: 'Playa Blanca', numOfTrips: 1200 },
    { from: 'Rodadero', to: 'Playa Grande', numOfTrips: 900 },
    { from: 'Rodadero', to: 'Taganga', numOfTrips: 600 },

    { from: 'La Marina', to: 'Rodadero', numOfTrips: 1000 },
    { from: 'La Marina', to: 'Playa Blanca', numOfTrips: 800 },
    { from: 'La Marina', to: 'Playa Grande', numOfTrips: 1300 },
    { from: 'La Marina', to: 'Taganga', numOfTrips: 1100 },

    { from: 'Playa Blanca', to: 'Rodadero', numOfTrips: 1400 },
    { from: 'Playa Blanca', to: 'La Marina', numOfTrips: 1000 },
    { from: 'Playa Blanca', to: 'Playa Grande', numOfTrips: 1500 },
    { from: 'Playa Blanca', to: 'Taganga', numOfTrips: 800 },

    { from: 'Playa Grande', to: 'Rodadero', numOfTrips: 1200 },
    { from: 'Playa Grande', to: 'La Marina', numOfTrips: 900 },
    { from: 'Playa Grande', to: 'Playa Blanca', numOfTrips: 700 },
    { from: 'Playa Grande', to: 'Taganga', numOfTrips: 1100 },

    { from: 'Taganga', to: 'Rodadero', numOfTrips: 1300 },
    { from: 'Taganga', to: 'La Marina', numOfTrips: 600 },
    { from: 'Taganga', to: 'Playa Blanca', numOfTrips: 1400 },
    { from: 'Taganga', to: 'Playa Grande', numOfTrips: 1200 },
];

export const DockReport = () => {
    return (
        <div className="user-manager">
            <h1>Cantidad de viajes realizados en cada ruta en la ultima semana</h1>
            <div className="user-table send-size">
                <TableContainer className='send-size h-100' component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
                    <Table className='real-table h-100' aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Desde</TableCell>
                                <TableCell align="center">Hacia</TableCell>
                                <TableCell align="center">Viajes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dockTrips.map((row) => (
                                <TableRow
                                    key={row.from + row.to}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='center'>{row.from}</TableCell>
                                    <TableCell align="center">{row.to}</TableCell>
                                    <TableCell align="center">{row.numOfTrips}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
