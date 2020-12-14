import React ,{useState} from 'react';
import Icon from './Components/Icon'
import  {Card,CardBody,Col,Container,Button,Row} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

const itemArray = new Array(9).fill("empty");
function App() {
  const [isCross,setIsCross] = useState(false);
  const [winMessage,setWinMessage] =useState("");
  
  const reloadGame = () => {
      setIsCross(false);
      setWinMessage("");
      itemArray.fill("empty",0,9);
  }
  const checkIsWinner = () => {
    if(itemArray[0] !== "empty" && 
       itemArray[0] === itemArray[1] &&
       itemArray[0] === itemArray[2]  )
       {
         setWinMessage(`${itemArray[0]} wins`);
       } else if(itemArray[3] !== "empty" &&
       itemArray[3] === itemArray[4] &&
       itemArray[3] === itemArray[5]
       ) {
        setWinMessage(`${itemArray[0]} wins`);
       } else if(itemArray[6] !== "empty" &&
       itemArray[6] === itemArray[7] &&
       itemArray[6] === itemArray[8]
       ) {
         setWinMessage(`${itemArray[6]} wins`);
       } else if(itemArray[0] !== "empty" &&
       itemArray[0] === itemArray[3] &&
       itemArray[0] === itemArray[6]
       ) {
         setWinMessage(`${itemArray[0]} wins`);
       } else if(
        itemArray[1] !== "empty" &&
        itemArray[1] === itemArray[4] &&
        itemArray[1] === itemArray[7]
       ) {
         setWinMessage(`${itemArray[1]} wins`);
       } else if(
        itemArray[2] !== "empty" &&
        itemArray[2] === itemArray[5] &&
        itemArray[2] === itemArray[8]
       ) {
        setWinMessage(`${itemArray[2]} wins`);
       } else if(
        itemArray[0] !== "empty" &&
        itemArray[0] === itemArray[4] &&
        itemArray[0] === itemArray[8]
       ) {
         setWinMessage(`${itemArray[0]} wins`);
       } else if(
        itemArray[2] !== "empty" &&
        itemArray[2] === itemArray[4] &&
        itemArray[2] === itemArray[6]
       ) {
         setWinMessage(`${itemArray[2]} wins`)
       }
  }

  const changeItem = itemNumber => {
    if(winMessage) {
      return toast(winMessage,{type:"success"});
    } 
    if(itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already Filled",{type:"error"});
    }

    checkIsWinner();
  }
  return (
   <Container className="p-5">
     <ToastContainer position="bottom-center"/>
     <Row>
       <Col md={5} className="offset-md-3">
         {winMessage ? (
           <div className="mt-2 mb-2">
             <h1 className="text-warning text-center text-uppercase">{winMessage}</h1>
             <Button
             color="success"
             block
             onClick={reloadGame}
             >Reload Game</Button>
           </div>
         ): ( 
           <h2 className="text-center text-success"> {isCross ? "Cross": "Circle"} turns</h2>
         )}
         <div className="grid">
           {itemArray.map((item,index) =>(
             <Card onClick={ () => changeItem(index)}>
               <CardBody className='box'>
                 <Icon name={item}/>
               </CardBody>
             </Card>
           ))}
         </div>
       </Col>
     </Row>
   </Container>
  );
}

export default App
