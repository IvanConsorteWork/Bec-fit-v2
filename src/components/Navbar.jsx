import { Button, Col, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import title from '../assets/Title.png';
import SearchInput from './SearchInput';
import UserMenu from './UserMenu';

export default function Navbar() {
  return (
    <NavbarBs className='bg-dark d-flex justify-content-around' sticky='top'>
      <Col className='d-flex justify-content-center'>
        <Nav>
          <Nav.Link to='/' as={NavLink}>
            <img src={title} alt="not found" className="img-fluid" width={200} height={60}/>
          </Nav.Link>
        </Nav>
      </Col>      
      <Col>
        <SearchInput />
      </Col>  
      <Col 
      style={{display: 'flex', justifyContent: 'center', gap: '9vw'}}
      >
          <Button 
          style={{width: "3rem", height: "3rem", position: "relative"}}
          variant='outline-light'
          className='rounded-circle '
          >
            <FaShoppingCart />
            {/* {cartQuantity > 0 && (<div 
            className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
            style={{color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: "0", right: "0", transform: 'translate(25%, 25%)'}}
            >
              {cartQuantity}
            </div>
            )} */}
          </Button>
        <UserMenu />   
      </Col>           
    </NavbarBs>
  )
}