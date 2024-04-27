import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import classnames from "classnames";
import React, { useEffect } from "react";
import { ReactDOM } from "react";
import { useState,useRef } from "react";
import { Link } from "react-router-dom";
import {
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Button
  } from "reactstrap";

  import axios, { Axios } from "axios";
const Bookhotel=()=>{
  const navigate = useNavigate();
  
  
  const [name,setName]=useState("");
  const [gmail,setGmail]=useState("");
   const[checkindate,setCheckindate]=useState("");
   const [child,setChild]=useState("");
   const [checkoutdate,setCeckoutdate]=useState("");
   const [adult,setAdult]=useState("");
   const [aadhar,setAdhar]=useState("");
const [mobileno,setMobileno]=useState("");




  const  send= async(e)=>{
    
    const response= await  axios.post('http://localhost:8000/hotelbooking',{
      fullname:name,
      gmail:gmail,
      checkindate:checkindate,
      checkoutdate:checkoutdate,
      child:child,
      adult:adult,
      aadhar:aadhar,
      mobileno:mobileno,
      })
      .then(response=>{
    console.log(response.data);
   
   
      })
      .catch(error=>{
   console.error(error);
      });
      alert("Booking done");
      navigate("/detail")
     }
    return(

        <>
            <Col sm="15" style={{textAlign:"center"}}>
            <h1 className="text-success">ROOM BOOKING</h1>
          </Col><br></br><br></br>
        
        <Container style={{width:"400px"}}>  
     
              <label className="text-success"> FUll NAME:</label>
              
                        <FormGroup>
                  <Input
                    className="is-valid"
                    placeholder="Full Name"
                    type="text"
                    value={name} onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
               
        
                <label className="text-success">GMAIL ID:</label>
                <FormGroup>
                  <Input
                    className="is-valid"
                    placeholder="Gmail@.Com/In"
                    type="gmail"
                    value={gmail} onChange={(e) => setGmail(e.target.value)}
                   
                  />
                  
                  </FormGroup>
                  <label className="text-success">MOBILE NO:</label>
                <FormGroup>
                  <Input
                    className="is-valid"
                    placeholder="Mobile no"
                    type="number"
                    value={mobileno} onChange={(e) => setMobileno(e.target.value)}
                   
                  />
                  
                  </FormGroup>
                  <label className="text-success">AADHAR ID:</label>
                <FormGroup>
                  <Input
                    className="is-valid"
                    placeholder="enter your 12 digit AADHAR no"
                    type="number"
                    value={aadhar} onChange={(e) => setAdhar(e.target.value)}
                   
                  />
                  
                  </FormGroup>
                  <label className="text-success"> CHECK IN-DATE:</label>
                  <FormGroup>
                  <Input
                    className="is-valid"
                    
                    type="date"
                    value={checkindate} onChange={(e) => setCheckindate(e.target.value)}
                  />
                  
                  
                  </FormGroup>
                  <label className="text-success">CEHCK OUT-DATE:</label>
                  <FormGroup>
                  <Input
                    className="is-valid"
                    
                    type="date"
                    value={checkoutdate} onChange={(e) => setCeckoutdate(e.target.value)}
                  />
                  </FormGroup>

                  <Col>
                  <label className="text-success"> CHILD</label> <label style={{marginLeft:"210px"}} className="text-success"> ADULT</label>
                  <Row>
                 
                  <select style={{width:"100px"}}   value={child} onChange={(e) => setChild(e.target.value)}>
                  <option className="text-success" value="0">0</option>
                  <option className="text-success" value="1">1</option>
                  <option className="text-success" value="2">2</option>
                  <option className="text-success" value="3">3</option>
                  
</select>

<select style={{width:"100px" ,marginLeft:"170px"}}   value={adult} onChange={(e) => setAdult(e.target.value)}>
                
                  <option className="text-success" value="1">1</option>
                  <option className="text-success" value="2">2</option>
                  <option className="text-success" value="3">3</option>
                  <option className="text-success" value="4">4</option>
                  
</select>


                 

</Row></Col>
<br></br>
<center>
                <Button className="btn-1 ml-1" color="success" type="button" onClick={send}>
                  Submit
                </Button>
                </center>
                </Container>
                
       
  
        </>
    );
};  export default Bookhotel;



