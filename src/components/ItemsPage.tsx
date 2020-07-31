import React from 'react';
import { useHistory } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function createData(name: string, quantity: number, price: number) {
    return { name, quantity, price };
}

const rows = [
    createData('item1', 1, 20),
    createData('item2', 5, 5),
    createData('item3', 3, 30),
];

export const ItemsPage: React.FC = () => {

    const history = useHistory();

    return(
        <div className='input-field mt2'>
            <TextField
                type='text'
                id='title'
                label='Название продукта'
                placeholder='Введите название продукта'
                style={{ width: '100%' }}
            />
            <div className='items-table mt2'>
                <TableContainer component={Paper}>
                <Table aria-label='simple table'>
                    <TableHead>
                    <TableRow style={{ backgroundColor: '#9e9e9e' }}>
                        <TableCell>Items</TableCell>
                        <TableCell align='right'>Quantity</TableCell>
                        <TableCell align='right'>Price</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell component='th' scope='row'>{row.name}</TableCell>
                        <TableCell align='right'>{row.quantity}</TableCell>
                        <TableCell align='right'>{row.price}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </div>
            <Button variant="contained" color="primary" onClick={() => history.push('/')} style={{ marginTop: '20px' }}>Вернуться на главную</Button>
        </div>
    )
}