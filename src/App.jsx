import React, { useEffect, useState } from 'react'
 import {Container,Row,Col, Form, Button, Alert} from 'react-bootstrap'
import Nv from './components/Nv'
function App() {

  let [txt,setTxt]=useState('');
  let [msg,setMsg]=useState("");
  let [cd,setCd]=useState(false);
  let handle=(e)=>{
    let {name,value}=e.target;
   setTxt(value);
      console.log('the handle is = ',value);
  }

   
  
    
  let upper= ()=>{
       setCd(true);
       
    setMsg("text converted in uppercase successfully ! ")
    setTxt(txt.toUpperCase());
  }
  let lower=()=>{
    setCd(true);
    setMsg("text converted in LowerCase successfully ! ")
    setTxt(txt.toLowerCase());
  }
  let clear=()=>{
    setCd(true);
    setMsg("Text Clear successfully ! ");
    setTxt("");
  }
let copy=()=>{
  setCd(true);
  
  setMsg("Copy successfully ! ");
  navigator.clipboard.writeText(txt);
}
let removeExtraSpaces=()=>{
setTxt(txt.trim(/\s+/));

}


useEffect(()=>{
setTimeout(() => {
  console.log('settimeout')
   setCd(false); 
  },900);
  },[cd])
  return (
    
    <>
   
      <Nv />
     <Container fluid='md' className='position-relative '   >
     {cd &&<Alert variant='info' className='py-2 position-absolute mb-5 ' aria-disabled={true}  > {msg} </Alert>}
    
    
      
      
      
      <Row >
        
         <Form className='mt-5'>
         <Form.Group>
          <Form.Label> write here </Form.Label>
         <Form.Control as="textarea" rows={8} id="txtBox" name="text"  placeholder='type....' value={txt} onChange={handle}/>
         </Form.Group>
         </Form>
      
      </Row>
      <Row className="my-3" >
        
        <Col>
        <Button className=' m-2'  onClick={upper} disabled={txt.split('').filter((vl)=>{ return vl!=" "}).length==0?true:false} > Convert upperCase </Button>
       
        <Button className="m-2" onClick={lower} disabled={txt.split('').filter((vl)=>{ return vl!=" "}).length==0?true:false}> Convert lowerCase </Button>
        <Button className="m-2" onClick={clear} disabled={txt.split('').filter((vl)=>{ return vl!=" "}).length==0?true:false}>Clear </Button>
        <Button className="m-2" onClick={copy} disabled={txt.split('').filter((vl)=>{ return vl!=" "}).length==0?true:false}>Copy</Button>
        <Button className="m-2" onClick={removeExtraSpaces} disabled={txt.split('').filter((vl)=>{ return vl!=" "}).length==0?true:false}>removeExtraSpaces</Button>
        </Col>

      </Row>
      <Row className='mt-3'>
        {/* <h3>Characters Have : <samp className='text-warning'>{txt.replace(/\s/g,'').split('').filter((vl)=>{ return vl!=" "}).length}</samp> </h3>  */}
        <h3>Characters Have : <samp className='text-warning'>{txt.replace(/\s/g,'').length}</samp> </h3> 
        {/* txt.replace(/\s/g,'')  :: this is used to not count space and newline char */}
        {/* <h3>words have : <samp className='text-warning'>{txt.split(' ').filter((vl)=>{ return vl!=""}).length}</samp> </h3>  */}
        <h3>words have : <samp className='text-warning'>{txt.trim().split(/\s+/).filter((vl)=>{ return vl!=""}).length}</samp> </h3> 
      </Row>
      <Row>

        {
          txt
        }
      </Row>
     </Container>
    </>
  )

}
export default App