import { useState } from 'react';
import ReactPaginate from 'react-paginate';


const PaginatedItems = ({ itemsPerPage,items, View}) => {



  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    
    setItemOffset(newOffset);
  };
  
  

  return (
    <>
   
      <View currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageClassName="page-item w-6 text-center text-xl text-page hover:text-pageActive"
        activeClassName=" leading-14  text-main border-b-2	border-pageActive "
        containerClassName="flex bg-white w-343 small:w-pagination mx-auto my-12 justify-center justify-between items-center shadow-md rounded-lg h-14	 "
        nextClassName= "border-l-2 pl-7 pr-6 font-bold text-page"
        previousClassName="border-r-2 pr-7 pl-6 font-bold text-page"
        disabledClassName="opacity-20"
      />
    </>
  );
}

export default PaginatedItems