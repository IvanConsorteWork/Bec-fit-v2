import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts, sortProducts } from '../redux-tk/productsSlice'

export default function Filters({setCurrentPage}) {
  const allProducts = useSelector((state) => state.products.allProducts)
  const brands = allProducts.map(b => b.brand).filter((value, index, array) => array.indexOf(value) === index)
  const category = allProducts.map(b => b.category).filter((value, index, array) => array.indexOf(value) === index)

  const dispatch = useDispatch();
  
  function handleFilter (e, key) {
    dispatch(filterProducts({key: key, value: e.target.value}))
    setCurrentPage(1)
  }

  function handleSort (e) {
    dispatch(sortProducts(e.target.value))
    setCurrentPage(1)
  }

  return (
    <div className='bg-dark d-flex justify-content-around pb-3' style={{width: '100%'}}>
      <Form.Select
        className='m-3' aria-label="Filter by brand" id='FilterByBrand'
        onChange={(e) => handleFilter(e, 'brand')}
      >
        <option key='all' value = "">Filter by brand</option>
        {brands.map((e) => {
          return (
            <option key={e} value={e}>{e}</option>
          )          
        })}
      </Form.Select>
      <Form.Select className='m-3' aria-label="Filter by category" id='FilterByCategory'
        onChange={(e) => handleFilter(e, 'category')}
      >
        <option key='all' value = "">Filter by category</option>
        {category.map((e) => {
          return (
            <option key={e} value={e}>{e}</option>
          )          
        })}
      </Form.Select>  
      <Form.Select className='m-3' aria-label="Sort by" id='SortBy'
        onChange={(e) => handleSort(e)}
      >
        <option value=''>Sort by</option>
        <option value='name-asc'>Name (A-Z)</option>
        <option value='name-des'>Name (Z-A)</option>
        <option value='price-asc'>Lower cost</option>
        <option value='price-des'>Higher cost</option>
      </Form.Select>
    </div>
  )
}