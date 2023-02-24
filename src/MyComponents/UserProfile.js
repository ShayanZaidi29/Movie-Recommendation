import React from 'react'
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import DefaultUserPic from "../Images/avatar.jpg";
function UserProfile() {  
    return (
        <Container>
        <Row>
       <Col>
       <h1>User Profile</h1><br/>
       <img src={DefaultUserPic} alt="profils pic" height="150px" width={"150px"}/> <br/>
       
            
            <Form className="form">     
    
  <Form.Group controlId="formCategory1">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" />
  
  </Form.Group>
  <Form.Group controlId="formCategory2">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email"  /><br/>
  
  </Form.Group>
  <Button variant="primary" >Update Profile</Button>
  </Form>
   </Col>

       </Row>
        </Container>
    )
}

export default UserProfile