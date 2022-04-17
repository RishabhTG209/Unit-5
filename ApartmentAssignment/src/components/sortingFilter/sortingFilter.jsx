import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export const SortFilter=()=> {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="outlined" size="large">
            Sort Flat Low to High
        </Button>
        <Button variant="outlined" size="large">
            Sort Flat High to Low
        </Button>
        <br/>
        <Box sx={{ minWidth: 20 }}>
        <FormControl>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Type
            </InputLabel>
            <NativeSelect
            defaultValue={30}
            inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
            }}
            >
            <option>--</option>
            <option value={"Owner"}>Owner</option>
            <option value={"Tenants"}>Tenants</option>
            </NativeSelect>
        </FormControl>
        </Box>
        <br/>
        <Box sx={{ minWidth: 20 }}>
        <FormControl>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Block
            </InputLabel>
            <NativeSelect
            defaultValue={30}
            inputProps={{
                name: 'age',
                id: 'uncontrolled-native',
            }}
            >
            <option>--</option>
            <option value={"A"}>A</option>
            <option value={"B"}>B</option>
            <option value={"C"}>C</option>
            <option value={"D"}>D</option>
            </NativeSelect>
        </FormControl>
        </Box>
      </div>
    </Box>
  );
}
