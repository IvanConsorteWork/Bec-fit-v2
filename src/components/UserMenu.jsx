import { FaUserAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap'

export default function UserMenu () {
  return (
    <div>
      <Button 
        style={{width: "3rem", height: "3rem", position: "relative"}}
        variant='outline-light'
        className='rounded-circle'
      >
        <FaUserAlt />
      </Button>       
    </div>
  )
}