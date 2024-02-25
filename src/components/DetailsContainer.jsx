import { Button, Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity, removeFromCart } from '../redux-tk/cartSlice'
import { useEffect } from 'react'
import { formatCurrency } from "../utilities/formatCurrency";
import { getProductDetails } from "../redux-tk/productsSlice"
import { useParams } from "react-router-dom";

export default function DetailsContainer() {
  const getParams = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductDetails(getParams.id));
  }, [dispatch]);

  let product = useSelector((state) => state.products.productDetail)

	const quantity = 3

  return (
    <Container style={{display: 'flex', flexDirection: 'row', paddingTop: '50px', paddingBottom: '50px'}}> 
      <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img src={product?.image} alt='product image' style={{objectFit: 'contain', height:'50vh', width:'50vw' }} />
      </Col>       
      <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '25px'}}>
        <Row>
          <h3>{product?.name}</h3>
        </Row>
        <Row>
          <h2>{formatCurrency(product?.price)}</h2>
        </Row>
        <Row>
          <hr />
          <p style={{display: 'flex', alignItems:'center', justifyContent: 'center'}}>
            {product?.description}
          </p>          
        </Row>
        <Row>
          {quantity === 0 ? (
							<Button className='w-100' onClick = {() => dispatch(increaseItemQuantity(product?.id))}>+ Addd to Cart</Button>		
						) : <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem"}}>
									<div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem"}}>
										<Button onClick = {() => dispatch(decreaseItemQuantity(product?.id))}>-</Button>
										<div>
											<span className="fs-3">{quantity}</span>in Cart
										</div>
										<Button onClick = {() => dispatch(increaseItemQuantity(product?.id))}>+</Button>
									</div>
								  <Button variant='danger' size='sm' onClick = {() => dispatch(removeFromCart(product?.id))}>Remove</Button>
								</div>}
        </Row>
      </Col>
    </Container>
  )
}