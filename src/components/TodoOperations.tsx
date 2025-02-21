import { useAppSelector } from '../Redux/Hooks';
import { useAppDispatch } from '../Redux/Hooks';
import { Box,Stack } from '@mui/material'


export default function TodoOperations() {
     const info=useAppSelector((state)=>state.todos.todos);
     const activeTodos= info.filter(todo=>todo.completed==false)

       const dispatch =useAppDispatch();
       const handleActive=()=>{
            dispatch({
               type: 'todos/clearCompleted',
            })
       }
       const handleCompleted=()=>{
        dispatch({
               type: 'todos/markAllCompleted',
            })

       }
       const handleClearCompleted =()=>{
        dispatch({
               type: 'todos/clearCompleted',
            })
       }
       const handleAllTodos =()=>{
          dispatch({
               type: 'todos/allTodos',
            })

       }
  return (
     <Stack direction="row" component="ul" className='l-flex'>
        <Box component="li">{activeTodos.length} items left</Box> 
        <Box component="li" onClick={handleAllTodos} className='l-blue'>All </Box> 
        <Box component="li" onClick={handleActive}>Active</Box>
        <Box component="li" onClick={handleCompleted}>Completed</Box> 
        <Box component="li" onClick={handleClearCompleted}>Clear Completed</Box> 
     </Stack>  
  )
}
