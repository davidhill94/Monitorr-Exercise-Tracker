import React from 'react';
import ReactPaginate from 'react-paginate';

export const Pagination = ({ pageCount, changePage }) => {
  return (
    <ReactPaginate
    className='flex items-center justify-center h-full row-start-3 row-end-4'
      previousLabel="<"
      nextLabel=">"
      pageCount={pageCount}
      onPageChange={changePage}
      pageClassName="mx-2 border-2 border-alt text-alt flex w-6 h-6 items-center justify-center"
      previousLinkClassName="border-2 border-alt text-alt flex w-6 h-6 items-center justify-center mx-2"
      nextLinkClassName="border-2 border-alt text-alt flex w-6 h-6 items-center justify-center mx-2"
      disabledClassName="hidden"
      activeClassName="bg-alt text-secondary"
      breakLabel="..."
    />
  )
}
