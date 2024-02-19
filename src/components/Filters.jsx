import { Form } from 'react-bootstrap';

export default function Filters() {
  // const allProducts = useSelector((state: RootState) => state.products.allProducts)
  // const brands: string[] = allProducts.map(b => b.brand).filter((value, index, array) => array.indexOf(value) === index)
  // const category: string[] = allProducts.map(b => b.category).filter((value, index, array) => array.indexOf(value) === index)

  // const dispatch = useDispatch();

  return (
    <div className='bg-dark d-flex justify-content-around pb-3' style={{width: '100%'}}>
      <Form.Select
        className='m-3' aria-label="Filter by brand" id='FilterByBrand'
        // onChange={(e) => dispatch(filterProducts({key: "brand", value: e.target.value}))}
      >
        <option key='all' value = "">Filter by brand</option>
        {/* {brands.map((e) => {
          return (
            <option key={e} value={e}>{e}</option>
          )          
        })} */}
      </Form.Select>
      <Form.Select className='m-3' aria-label="Filter by category" id='FilterByCategory'
        // onChange={(e) => dispatch(filterProducts({key: "category", value: e.target.value}))}
      >
        <option key='all' value = "">Filter by category</option>
        {/* {category.map((e) => {
          return (
            <option key={e} value={e}>{e}</option>
          )          
        })} */}
      </Form.Select>
      <Form.Select className='m-3' aria-label="Filter by price range" id='FilterByPriceRange'
        // onChange={(e) => dispatch(filterProducts({key: "price", value: e.target.value}))}
      >
        <option key='all' value = "">Filter by price range</option>
        <option value="10">Bellow $10</option>
        <option value="25">Bellow $25</option>
        <option value="50">Bellow $50</option>
      </Form.Select>   
      <Form.Select className='m-3' aria-label="Sort by name" id='SortByName'>
        <option value=''>Sort by name</option>
        <option value='asc'>A-Z</option>
        <option value='desc'>Z-A</option>
      </Form.Select>
      <Form.Select className='m-3' aria-label="Sort by price range" id='SortByPriceRange'>
        <option value=''>Sort by price range</option>
        <option value='asc'>Lower to Higher</option>
        <option value='desc'>Higher to Lower</option>
      </Form.Select>
    </div>
  )
}