import { Pagination as PaginationBs } from 'react-bootstrap';

export default function Pagination ({ totalPages, paginate, setCurrentPage, currentPage }) {
  const maxNumbers = 9;

  let pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  
  let pageNumbers = () => {
    const half = Math.round(maxNumbers / 2);
    let to = maxNumbers;
    if (currentPage + half >= totalPages) {
        to = totalPages;
    } else if (currentPage > half) {
        to = currentPage + half;
    }
    let from = to - maxNumbers;
    if (from < 0) {
        from = 0;
    }
    return pages.slice(from, to);
  };
  
  return (
    <PaginationBs className="justify-content-center" size='lg'>
      {currentPage > 1 && (
        <PaginationBs.Prev onClick={() => paginate(-1)} />
      )}
      {pageNumbers().map((number) => (
        <PaginationBs.Item key={number} onClick={() => setCurrentPage(number)} active={number === currentPage}>
          {number}
        </PaginationBs.Item>
      ))}
      {currentPage !== totalPages && (
        <PaginationBs.Next onClick={() => paginate(1)}/>
      )}
    </PaginationBs>
  )
}