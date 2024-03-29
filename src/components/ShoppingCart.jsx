import { Offcanvas, Stack } from "react-bootstrap";
import { CartItem  } from "./CartItem";
import { useDispatch, useSelector } from 'react-redux';
import { closeCart } from '../redux-tk/cartSlice';
import { formatCurrency } from "../utilities/formatCurrency";

export default function ShoppingCart() {
	const dispatch = useDispatch ()
	const displayCart = useSelector((state) => state.cart.isOpen)
	const cartItems = useSelector((state) => state.cart.cartItems)
	const storeItems = useSelector((state) => state.products.allProducts)
	return (
		<Offcanvas show={displayCart} onHide={() => dispatch(closeCart())} placement='end'>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>
						Cart
				</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<Stack gap={3}>
					{cartItems.map(item => (
							<CartItem key={item.id} {...item} />
					))}
					<div className='ms-auto fw-bold fs-S'>Total {formatCurrency(cartItems.reduce((total, cartItem) => {
							const item = storeItems.find(i => i.id === cartItem.id)
							return total + (item?.price || 0) * cartItem.quantity
					}, 0)
					)}</div>
				</Stack>
			</Offcanvas.Body>
		</Offcanvas>
	)
}