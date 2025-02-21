import { useAppSelector } from '../Redux/Hooks';
import { useAppDispatch } from '../Redux/Hooks';
import { Box} from '@mui/material';


export default function TodoList() {

  const info=useAppSelector((state)=>state.todos.todos);
  const dispatch =useAppDispatch();
  const handleClick=(item:any)=>{
      dispatch({type:"todos/markCompleted",payload:{
        item:item
      }})
  } 
  return (
    <Box component="ul">
      {info.map((item:any)=>{
        const {id,text,completed} = item;
        return(
           <Box key={id} component="li">
            <Box component="figure" onClick={()=>handleClick(item)} className= "round" style={{background: completed? "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))": ""}}>
               { completed && <img src= {process.env.PUBLIC_URL + "/images/icon-check.svg"} alt="icon check" />}
            </Box> <Box  component="p" onClick={()=>handleClick(item)} className={completed ? "completed": ""} style={{textDecoration : completed ?  "line-through":"none"}}>{text}</Box></Box>
      )
      })}
    </Box>
  )
}
