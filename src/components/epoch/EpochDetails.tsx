import React from 'react'
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { epochDataType } from '../../data/Epochs';

type epochProps = {
    epoch: Array<epochDataType>
}

const EpochDetails = ({ epoch }: epochProps) => (
<Card sx={{ backgroundColor: 'rgb(59,59,59)' }} >
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Expansion</TableCell>
                <TableCell align="right">Serendale</TableCell>
                <TableCell align="right">Crystalvale</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell>Epoch #</TableCell>
                <TableCell align="right">{epoch[0].epoch}</TableCell>
                <TableCell align="right">{epoch[1].epoch}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Unlock Rate</TableCell>
                <TableCell align="right">{epoch[0].unlock}</TableCell>
                <TableCell align="right">{epoch[1].unlock}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Multiplier</TableCell>
                <TableCell align="right">{epoch[0].multiplier}x</TableCell>
                <TableCell align="right">{epoch[1].multiplier}x</TableCell>
            </TableRow>
            {epoch[0].timeLeftString || epoch[1].timeLeftString ? 
            <TableRow>
                <TableCell>Time Until</TableCell>
                <TableCell align="right">{epoch[0].timeLeftString}</TableCell>
                <TableCell align="right">{epoch[1].timeLeftString}</TableCell>
            </TableRow>
            : null }
        </TableBody>
    </Table>
</Card>
);

export default EpochDetails