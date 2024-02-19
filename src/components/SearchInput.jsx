import { Button, Form, InputGroup } from 'react-bootstrap'
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchInput() {
  return (
    <>
			<InputGroup className="mb-1">
				<Button variant='light' id="button-search">
					<AiOutlineSearch />
				</Button>
				<Form.Control
					placeholder="Search a product here"
					aria-label="Search a product here"
					aria-describedby="input-search"
					name='search'
				/>
      </InputGroup>
		</>
  )
}

