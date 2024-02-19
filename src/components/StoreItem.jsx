import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { Link } from "react-router-dom"

export default function StoreItem ({ id, name, price, image}) {
	return (
		<Card className="h-100"> 
			<Link to={`/details/${id}`} style={{color: '#212529', textDecoration: 'none'}}>
				<Card.Img 
					variant='top'
					src={image} 
					height='200px' 
					width='200px'
					style={{ objectFit: "scale-down", }} 
				/>
			</Link>		
				<Card.Body className='d-flex flex-column'>
						<Card.Title className='d-flex flex-column justify-content-between align-items-baseline mb-4'>
							<span style={{fontSize: '25px'}}>{name}</span>
							<span className='ms-2 text-muted'>{formatCurrency(price)}</span>
						</Card.Title>
					<div className='mt-auto'>
						<div className='d-flex align-items-center flex-column' style={{ gap: ".5rem"}}>
									<div className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem"}}>
										<Button>-</Button>
										<div>
											<span className="fs-3">3</span>in Cart
										</div>
										<Button>+</Button>
									</div>
								<Button variant='danger' size='sm' >Remove</Button>
								</div>
					</div>
				</Card.Body>	
		</Card>
	)
}