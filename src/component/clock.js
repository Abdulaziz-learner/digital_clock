import React,{useState}  from 'react';
import { Container,Row,Col } from 'reactstrap';
function Clock(){
    let date=new Date();
    let timeNew=date.toLocaleTimeString();
    const [time,setTime]=useState(timeNew);

    const UpdateTime=()=>{
        let date= new Date();
        let newTime=date.toLocaleTimeString();
        setTime(newTime);}
        setInterval(function(){

            UpdateTime()
        },1000
        )
    
    return(
    <>
<Container className='bg-secondary'>
    <Row>
        <Col md={{size:12}}>
            
    <div className='clock bg-dark text-secondary'>
        <p className='display-1 soat text-info'>{time}</p>
    </div>
        </Col>
    </Row>
</Container>
    </>
    )
}
export default Clock;