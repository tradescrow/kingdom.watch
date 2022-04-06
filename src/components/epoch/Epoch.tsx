import React, { useEffect, useMemo } from 'react';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { updateCurrentBlocks } from '../../stateStore/epoch/slices/epochSlice';
import { RPCs } from '../../utils/ethers';
import Epochs from '../../data/Epochs';
import EpochDetails from './EpochDetails';

const CALC_MAX_EPOCHS = 60;

const Epoch = () => {
    const currentBlockNumbers = useAppSelector((state) => state.epoch.currentBlocks);
    const dispatch = useAppDispatch();

    useEffect(() => {
        async function fetchCurrentBlocks() {
            if (!currentBlockNumbers || currentBlockNumbers[0] === 0) {
                const sd = await RPCs.sd.getBlockNumber();
                const cv = await RPCs.cv.getBlockNumber();
                dispatch(updateCurrentBlocks([sd as number, cv as number]));
            }
        }
        fetchCurrentBlocks();       
	}, [currentBlockNumbers, dispatch]);

    const epochList = useMemo(() => {
        if (currentBlockNumbers && currentBlockNumbers[0] !== 0) {
            return Epochs.calculateEpochData(currentBlockNumbers, CALC_MAX_EPOCHS);
        }
        return [];
    }, [currentBlockNumbers]);

    return (
        <Box sx={{ maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
            <h2>Epochs</h2>
            <Stack spacing={2}>
                { epochList.length ? epochList.map( (i, j) => (
                    <React.Fragment key={`epoch-details-${j}`} >
                        { j === 0 ? <div>Current Epoch</div> : (j === 1 ? <div>Future Epochs</div> : <React.Fragment />)}
                        <EpochDetails epoch={i} /> 
                    </React.Fragment>
                 )) : <React.Fragment/>}
            </Stack>
        </Box>);
}
export default Epoch;