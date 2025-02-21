import { Box,FormControl,Input,Stack } from '@mui/material'
import { useState } from 'react'
import { useAppDispatch } from '../Redux/Hooks';



export default function Form() {
  const [text,setText] =useState<string>("");
  const dispatch =useAppDispatch();
  const handleSubmit= (e:any)=>{
    e.preventDefault();
    setText(e.currentTarget.value);
    let id=Math.floor(Math.random()*10 + Date.now());
    dispatch({type:'todos/getTodos',  
              payload:{
                id:id,
                text:text,
                completed:false
              },
            })
    setText("");

  }

  return (
    <Stack component="main">
      <Box component="form" onSubmit={handleSubmit}>
          <Box component="span" className='round'></Box>    
          <Box component="input" type='text' autoComplete='off' onChange={(e)=>setText(e.currentTarget.value)} value={text} name="text"  placeholder='Create a new todo' aria-describedby="Enter todo in the field"></Box>
      </Box>
    </Stack>
  
  )
} 
