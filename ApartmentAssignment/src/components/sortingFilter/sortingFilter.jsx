import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const SortFilter=()=> {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="outlined" size="large">
            Large
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
        <Button variant="outlined" size="large">
            Large
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
        <Button variant="outlined" size="large">
            Large
        </Button>
        <Button variant="outlined" size="large">
          Large
        </Button>
      </div>
    </Box>
  );
}
