
import './App.css'
import Lottery from './Lottery.jsx'
import TicketNum from './TicketNum.jsx'
import Ticket from './Ticket.jsx'

function App() {

  return (
    <>
     {/* <Lottery /> */}
     {/* <TicketNum num = {1} />
     <TicketNum num = {6} />
     <TicketNum num = {2} /> */}
<Lottery  n={3} winningSum={15}/>
{/* <Ticket  ticket = {[1,2,3]} /> */}
    </>
  )
}

export default App
