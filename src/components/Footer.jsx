import { Col, Row, Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsTwitter, BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";

export default function Footer () {
  return (
      <Container fluid style={{backgroundColor: '#212529', color: '#FBFBFB'}}>
        <Row>
          <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '25px'}}>
            <h4>CONTACT</h4>            
            <ListGroup variant='secondary'>
              <ListGroupItem action={true} style={{backgroundColor: '#212529', border: '0', color:'#6c757d'}}>
                <h5>
                  henry.becomingfit@gmail.com
                </h5>
              </ListGroupItem>
              <ListGroupItem style={{backgroundColor: '#212529', border: '0', color:'#6c757d'}}>               
                <ListGroup style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <ListGroupItem action={true} style={{backgroundColor: '#212529', border: '0', color:'#6c757d'}}>                  
                    <BsTwitter style={{fontSize: '25px'}} />                  
                  </ListGroupItem>
                  <ListGroupItem action={true} style={{backgroundColor: '#212529', border: '0', color:'#6c757d'}}>                  
                    <BsFacebook style={{fontSize: '25px'}} />                  
                  </ListGroupItem>
                  <ListGroupItem action={true} style={{backgroundColor: '#212529', border: '0', color:'#6c757d'}}>                  
                    <BsInstagram style={{fontSize: '25px'}} />                  
                  </ListGroupItem>
                  <ListGroupItem action={true} style={{backgroundColor: '#212529', border: '0', color:'#6c757d'}}>                  
                    <BsWhatsapp style={{fontSize: '25px'}} />                  
                  </ListGroupItem>
                </ListGroup>
              </ListGroupItem>              
            </ListGroup>            
          </Col>
          <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '25px'}}>
            <h4>COMPANY</h4>
            <ListGroup style={{fontSize: '20px'}}>
              <ListGroupItem action={true} style={{backgroundColor: '#212529', border: '0', color:'#6c757d'}}>    
                  Contact                
              </ListGroupItem>
              <ListGroupItem action={true} style={{backgroundColor: '#212529', border: '0', color:'#6c757d'}}>    
                  About Us                
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '25px'}}>
            <h4>INFORMATION</h4>
            <ListGroup style={{fontSize: '20px'}}>
              <ListGroupItem action={true} style={{backgroundColor: '#212529', border: '0', color:'#6c757d'}}>                
                  Terms & Conditions                
              </ListGroupItem>
              <ListGroupItem action={true} style={{backgroundColor: '#212529', border: '0', color:'#6c757d'}}>                
                  Privacy Policy                
              </ListGroupItem>
              <ListGroupItem action={true} style={{backgroundColor: '#212529', border: '0', color:'#6c757d'}}>                
                  F.A.Q.                
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <hr style={{width: '90vw'}}/>
          <h5 style={{backgroundColor: '#212529', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop:'12px', paddingBottom: '12px'}}>
              © 2024 Becoming-Fit
          </h5>        
        </Row>
      </Container>
  )
}

