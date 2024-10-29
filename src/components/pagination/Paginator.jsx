import React from 'react';
import { Button, Stack } from '@mui/material';

const Paginator = ({ currentPage, totalPages, onNext, onPrevious }) => {
    return (
        <Stack direction="row" spacing={2} justifyContent="center" style={{ margin: '20px 0' }}>
            <Button 
                variant="contained" 
                onClick={onPrevious} 
                disabled={currentPage === 1}
            >
                Previous
            </Button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <Button 
                variant="contained" 
                onClick={onNext} 
                disabled={currentPage === totalPages}
            >
                Next
            </Button>
        </Stack>
    );
};

export default Paginator;
