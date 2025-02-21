import './styles/index.css';
import Heading from './components/Heading';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Box from '@mui/material/Box';
import TodoOperations from './components/TodoOperations';
import { useAppSelector } from './Redux/Hooks';

export default function App() {
    const info:any=useAppSelector((state)=>state.todos.todos);
  return (
     <Box component="div" width={"500px"}>
         <Heading/>
        <Form/>
        <TodoList/>
        {(info.length>0) && <TodoOperations/>}
    </Box>
  )
}
