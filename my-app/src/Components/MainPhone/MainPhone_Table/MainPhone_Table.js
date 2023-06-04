import './MainPhone_Table.css'
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom'

const MainPhone_Table = ({setAlert, state, search, filter}) => {
    return (
        <TableContainer component={Paper} className={'MainPhone_Table'}>
            <Table sx={{minWidth: 100}} aria-label="simple table">
                <TableBody>
                    {state.filter(user => user.favorite === filter || user.favorite === true).filter(user => user.fullName.toLowerCase().includes(search.toLowerCase())).map((user) => (
                        <TableRow key={user.id}>
                            <TableCell sx={{width:'5%'}}>
                                <Link to={`/contacts/${user.id}`}>
                                    <div className={'avatar-style'}>
                                        <img src={'https://robohash.org/' + user.id} alt={user.id}/>
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <Link to={`/contacts/${user.id}`}>
                                    <div>
                                        {user.fullName}
                                    </div>
                                    <div style={{color:'#747d8c'}}>
                                        {user.group}
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell align={'right'}><DeleteIcon style={{cursor:'pointer'}} onClick={() => setAlert({display: 'flex', id: user.id})}/></TableCell>
                        </TableRow>))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MainPhone_Table