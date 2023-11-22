import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { User, users as allUsers } from '../../users/users';
import { useState } from 'react';
import './UserManager.css'


const makeStyle = (approved: boolean) => {
    if (approved) {
        return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    }
    else {
        return {
            background: '#ffadad8f',
            color: 'red',
        }
    }
}

export const UserManager = () => {
    const [users, setUsers] = useState(allUsers)

    const approve = (toApprove: User) => {
        setUsers(users => users.map(user => {
            if (user.username === toApprove.username) {
                user.approved = true;
            }
            return user
        }))
    }

    return (
        <div className="user-manager">
            <h1>Gestión de usuarios</h1>
            <div className="user-table send-size">
                <TableContainer className='send-size h-100' component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
                    <Table className='real-table h-100' aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Primer nombre</TableCell>
                                <TableCell align="left">Primer apellido</TableCell>
                                <TableCell align="left">Nombre de usuario</TableCell>
                                <TableCell align="left">Role</TableCell>
                                <TableCell align="left">Aprobado</TableCell>
                                <TableCell align="left"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((row) => (
                                <TableRow
                                    key={row.username}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align='left'>{row.firstname}</TableCell>
                                    <TableCell align="left">{row.lastname}</TableCell>
                                    <TableCell align="left">{row.username}</TableCell>
                                    <TableCell align="left">{row.role}</TableCell>
                                    <TableCell align="left">
                                        <span className="status" style={makeStyle(row.approved)} onClick={() => approve(row)}>{row.approved ? "Aprobado" : "Sin aprobar"}</span>
                                    </TableCell>
                                    <TableCell align="left"><span style={makeStyle(false)} onClick={() => setUsers(users => users.filter(user => user.username !== row.username))} className='status'>Eliminar</span></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

