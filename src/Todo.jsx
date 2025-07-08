import { useState } from "react";
import uuid from 'react-uuid';

export default function Todo(){

let[inp,setinp]=useState("");
let[todo,setTodo]=useState([{task:"Maths",id:uuid()}])





function addTask(){

if(inp) setTodo([...todo,{task:inp,id:uuid()}])
console.log(todo);
}


function protect(ev){
ev.preventDefault();
addTask();
setinp("");
}

function inpValue(event){


setinp(event.target.value);

}


function deleteTask(idx){

setTodo(todo.filter((todo)=>{


return todo.id!=idx;

}))


}



function updateTask(idx){

setTodo(todo.map((todo)=>{


if(todo.id==idx){
todo.task=todo.task.toUpperCase();
console.log(todo.task);
    return todo;
}
return todo;
}))


}



return (


<div>

<form  onSubmit={protect}>

<input placeholder="enter the Task" onChange={inpValue} value={inp}></input>
<br/>
<br/>
<button style={{backgroundColor:"blue", color:"white"}} >enter a Task</button>



</form>
<br/>
{

todo.map((ele,idx)=>{

    return ele?<li key={idx}>{ele.task}
    
    &nbsp;
    <button onClick={()=>{
        deleteTask(ele.id);
    }}>delete</button>
    

      &nbsp;
    <button onClick={()=>{
        updateTask(ele.id);
    }}>update</button>


    </li>:null


})


}



</div>


)
}