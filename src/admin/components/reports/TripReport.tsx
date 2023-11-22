
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

interface Trip {
    boatman: string
    boatname: string
    tripsLastWeek: number
}

const trips: Trip[] = [
    { boatman: "John", boatname: "Sapphire Dream", tripsLastWeek: 5 },
    { boatman: "Alice", boatname: "Golden Serenity", tripsLastWeek: 3 },
    { boatman: "Bob", boatname: "Silver Whisper", tripsLastWeek: 7 },
    { boatman: "Charlie", boatname: "Ocean Harmony", tripsLastWeek: 2 },
    { boatman: "David", boatname: "Sunset Voyager", tripsLastWeek: 8 },
    { boatman: "Eve", boatname: "Starlight Explorer", tripsLastWeek: 4 },
    { boatman: "Frank", boatname: "Mystic Mariner", tripsLastWeek: 6 },
    { boatman: "Grace", boatname: "Celestial Navigator", tripsLastWeek: 1 },
    { boatman: "Henry", boatname: "Eternal Wave", tripsLastWeek: 9 },
];


export const TripReport = () => {
    return (
        <div className="user-manager">
            <h1>Viajes realizados por cada lanchero la ultima semana</h1>
            <div className="user-table send-size">
                <TableContainer className='send-size h-100' component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
                    <Table className='real-table h-100' aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Lanchero</TableCell>
                                <TableCell align="center">Nombre de la lancha</TableCell>
                                <TableCell align="center">Número de viajes realizados esta semana</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {trips.map((row) => (
                                <TableRow
                                    key={row.boatman}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='center'>{row.boatman}</TableCell>
                                    <TableCell align="center">{row.boatname}</TableCell>
                                    <TableCell align="center">{row.tripsLastWeek}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
