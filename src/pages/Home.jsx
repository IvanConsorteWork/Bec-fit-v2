import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../redux-tk/productsSlice'
import { Col, Container, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import Pagination from "../components/Pagination"
import Navbar from '../components/Navbar';
import Filters from '../components/Filters';
import Footer from '../components/Footer';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  const allProducts = useSelector((state) => state.products.allProducts)
  const products = useSelector((state) => state.products.currentProducts)

  const [currentPage, setCurrentPage] = useState(1);

  let currentProducts
  let totalPages = Math.ceil(products.length / 10) + 1;

  if (currentPage === 1) {
    currentProducts = products.slice(0, 9);
  } else {
    currentProducts = products.slice(
      (currentPage - 1) * 10 -1, 
      (currentPage - 1) * 10 + 8
    );
  }

  if (products.length < allProducts.length) {
    totalPages = Math.ceil(products.length / 10);
  }

  const paginate = (number) => {
    setCurrentPage(currentPage + number);
  };

  return (
  <>
    <Navbar />
    <Filters setCurrentPage = {setCurrentPage}/>
    <Container className='mb-4'>
      <Row className='p-3'>
        <Pagination
          totalPages={totalPages}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} 
        />
      </Row> 
      <Row md={2} xs={1} lg={3} className='g-3 p-3'>
        {currentProducts.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      <Row>
        <Pagination
          totalPages={totalPages}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} 
        />
      </Row>  
    </Container> 
    <Footer />     
  </>
  )
}