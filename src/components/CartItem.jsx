import storeItems from "../data/products.json"
import { Button, Stack } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useDispatch } from 'react-redux'
import { removeFromCart } from "../redux-tk/cartSlice"

export function CartItem({ id, quantity }) {
    const dispatch = useDispatch()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
            <img src={item.image} style={{ width: "125px", height: "75px", objectFit: "cover"}} />
            <div className='me-auto'>
                <div>
                    {item.name} {quantity > 1 && <span className='text-muted' style={{ fontSize: ".75rem"}}>x{quantity}</span>}  
                </div>
                <div className='text-muted' style={{ fontSize: ".75rem"}}>{formatCurrency(item.price)}</div>            
            </div>
            <div> {formatCurrency(item.price * quantity)}</div>
            <Button variant='outline-danger' size='sm' onClick = {() => dispatch(removeFromCart(item.id))} >&times;</Button>
        </Stack>
    )
}