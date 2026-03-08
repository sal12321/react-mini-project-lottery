import { useState } from "react";
import { genTicket, randomNumber, sumArr } from "./helper.js";

import Snowfall from 'react-snowfall'

// export default function Lottery(){

//     let[lottery , setLottery] = useState(randomNumber());
//     let isWinning = sumArr(lottery);


//     return (
 
// <>
// {/* <Snowfall color="RED" snowflakeCount={300} /> */}

//         { isWinning ? <h1>Your win</h1> : <h3>Get sum 15 to Win</h3>}
//         <h1>Lottery</h1>

//         <span>{lottery[0]}</span>
//         <span>{lottery[1]}</span>
//         <span>{lottery[2]}</span>
// <br />
// <hr />
//         <button onClick={ ()=>setLottery(randomNumber()) }>Trigger</button>

// </>




//     )
// }

import Ticket from "./Ticket.jsx"
export default function Lottery({n =3 , winningSum = 15}){

    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sumArr(ticket) === winningSum;

    let buyTicket = ()=>{
        setTicket(genTicket(n))
    }

    return (
        <>
        <Snowfall color="RED" snowflakeCount={300} />
        <h2>Lottery Game</h2>
        <Ticket ticket = {ticket} />
        <hr />
        <button onClick={buyTicket}>Buy Ticket</button>
        <h3>{isWinning && "You Win"}</h3>
        </>
    )
}