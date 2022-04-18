import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect,useState} from 'react';
import {SortingFlats,FilterBlock,FilterType} from "../../Redux/allflats/action"

export const SortFilter=()=> {
  const dispatch = useDispatch();
  

  const sortingFlatNo=(value)=>{
    console.log("Hello hello",value)
    dispatch(SortingFlats(value))
  }

  const filterBlocks=(e)=>{
    console.log("Hey",e.target.value)
    dispatch(FilterBlock(e.target.value))
  }
  const filterTypes=(e)=>{
    console.log("Hey hey",e.target.value)
    dispatch(FilterType(e.target.value))
  }

  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div>
        <Button variant="outlined" size="large" onClick={()=>sortingFlatNo(1)}>
            Sort Flat Low to High
        </Button>
        <Button variant="outlined" size="large" onClick={()=>sortingFlatNo(2)}>
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
            onChange={(e)=>{
              filterTypes(e)
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
            onChange={(e)=>{
              filterBlocks(e)
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
