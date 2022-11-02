import React from 'react'
import ReactPaginate from 'react-paginate'
import './pagination.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function Pagination({
    pageNo, func, urlFunc, type
}) {
    const dispatch = useDispatch()
    
    return (
        <div className='pda' >
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                // breakLabel={"..."}
                pageCount={pageNo+1}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onClick={(data) => {
                    dispatch(func(urlFunc(data.nextSelectedPage), type))
                }}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"previous-page"}
                previousLinkClassName={"page-link "}
                nextClassName={"next-page"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item dots"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
                
            />
        </div>
    )
}
