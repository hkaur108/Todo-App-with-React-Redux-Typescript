import React from 'react';
import { useAppSelector } from '../Redux/Hooks';
import { useAppDispatch } from '../Redux/Hooks';
import { Box,List,ListItem } from '@mui/material';


export default function TodoList() {

  const info=useAppSelector((state)=>state.todos.todos);
  const dispatch =useAppDispatch();
  const handleClick=(item:any)=>{
      dispatch({type:"todos/markCompleted",payload:{
        item:item
      }})
  } 
  return (
    <ul>
      {info.map((item:any)=>{
        const {id,text,completed} = item;
        return(
           <li key={id}>
            <figure onClick={()=>handleClick(item)} className= "round" style={{background: completed? "linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))": ""}}>
               { completed && <img src="/images/icon-check.svg" alt="icon check" />}
            </figure> <p onClick={()=>handleClick(item)} className={completed ? "completed": ""} style={{textDecoration : completed ?  "line-through":"none"}}>{text}</p></li>
      )
      })}
    </ul>
  )
}
