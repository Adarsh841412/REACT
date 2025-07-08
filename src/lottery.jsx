import { useState } from "react"
import{getLottery,sum} from "./helper"
import Ticket from "./ticket"
export default function Lottery({n=3,winningSum=7}){


let[lottery,setLottery]=useState(getLottery(n))


function newLottery(){

setLottery(getLottery(n));

}

return (

    <div>

<h1>Lottery Match</h1>

<Ticket num={lottery} />
<br/>
<button  onClick={newLottery}>getNewLottery</button>


<br/>
{


(sum(lottery)==winningSum)?<h4>Congratulations,You win the lottery</h4>:<h4>Better  luck next Time</h4>


}
    </div>




)

}