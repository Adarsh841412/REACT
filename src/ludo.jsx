
import { useState } from "react"
import "./Ludo.css"
export default function Ludo(){

let[blue,setblue]=useState(0);
let[red,setred]=useState(0);

let[green,setgreen]=useState(0);



function incCount(clr){

if(clr=="blue"){

    setblue((blue)=>{
        return blue+1;
    })

}

if(clr=="red"){

    setred((red)=>{
        return red+1;
    })

}


if(clr=="green"){

    setgreen((green)=>{
        return green+1;
    })

}


}







return (

 <div className="Ludo">


<div className="child">
<h3>blue moves:{blue}</h3>
<button style={{backgroundColor:"blue"}}   onClick={()=>{
    incCount("blue");
}}>+1</button>
<br/>

</div>

<div className="child">

<h3>green moves:{green}</h3>
<button style={{backgroundColor:"green"}}  onClick={()=>{
    incCount("green");
}} >+1</button>
<br/>

</div>

<div className="child">
<h3>red moves:{red}</h3>
<button style={{backgroundColor:"red"}}    onClick={()=>{
    incCount("red");
}}>+1</button>
<br/>

</div>

 </div>

)
}