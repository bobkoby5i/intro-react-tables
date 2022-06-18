import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import { usePagination } from "react-table";

import MOCK_DATA from "../../data/MOCK_DATA_CUSTOMERS.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort as fasFaSort} from '@fortawesome/free-solid-svg-icons';
import { faSortUp as fasFaSortUp, faSortDown as fasFaSortDown } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaSort } from '@fortawesome/free-regular-svg-icons';
// import GlobalFilter from "./GlobalFilter"
// import ColumnFilter from './ColumnFilter'
// import GlobalFilterDebounce from "./GlobalFilterDebounce"
import ColumnFilterDebounce from './ColumnFilterDebounce'
import GlobalFilterDebouncePaginateBootstrap from "./GlobalFilterDebouncePaginateBootstrap"

import Pagination from 'react-bootstrap/Pagination'





const ReactTable_Pagination_Filter_Sort_Bootstrap = () => {
    const columns = useMemo(() => COLUMNS, []) // COLUMNS GROUPED_COLUMNS
    const data = useMemo(() => MOCK_DATA.slice(0,500), [])

    // const PaginationBootsrap = () => {
    //     return (
    //         <div>
    //           <Pagination>
    //             <Pagination.First onClick={onClickFirstPage}/>
    //             <Pagination.Prev onClick={onClickPrevPage}/>
    //             {items}
    //             <Pagination.Next onClick={onClickNextPage}/>
    //             <Pagination.Last onClick={onClickLastPage}/>
    //             </Pagination>
    //           {/* <br />
          
    //           <Pagination size="lg">{items}</Pagination>
    //           <br />
          
    //           <Pagination size="sm">{items}</Pagination> */}
    //         </div>
            
    //       );
    // }
    

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilterDebounce
        }
    }, [])

    const tableInstance = useTable({
        columns, // ES6 syntax columns:columns
        data: data,
        defaultColumn: defaultColumn,
    }, useFilters,useGlobalFilter, useSortBy, usePagination)

    // get functions and arrays from reactTable hook
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        footerGroups,
        rows, 
        prepareRow,
        state,
        setGlobalFilter,
        page,  //rows -> page
        nextPage, 
        previousPage, 
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize
     } = tableInstance;

     const changePageSize = (e) => {
        setPageSize(Number(e.target.value))
        gotoPage(0)        
     }

     const chnageGotoPage = (e) => {
        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
        gotoPage(pageNumber)
      }

     const { globalFilter, pageIndex, pageSize } = state;

     
     

    return (
        <>
            <div>react-table Filtering Table with (useGlobalFilter, useFilters) and sorting and debounce; Pagination; Bootstrap style</div>
            <div className="row" >
                <div className="col pagination-row-item" >
                    <div>
                        Page{' '}<strong>{pageIndex + 1}</strong> of <strong>{pageOptions.length}</strong>{' '}
                    </div>
                </div>                
                <div className="col">
                    <select class="form-select" aria-label="Default select example" value={pageSize} onChange={changePageSize}>
                        {/* <option selected>Page size</option> */}
                        {
                            [10,25,50].map((pSize) => (
                                <option key={pSize} value={pSize}>Show {pSize}</option>
                            ))
                        }                    
                    </select>                        
                </div>
                <div className="col">
                    <div className="input-group  mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Go to Page</span>
                        <input type="number" defaultValue={pageIndex + 1}  onChange={chnageGotoPage} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                </div>
                <div className="col">
                    <Pagination>
                        <Pagination.First disabled={!canPreviousPage} onClick={() => gotoPage(0)}/>
                        <Pagination.Prev  disabled={!canPreviousPage} onClick={() => previousPage()}/>
                        <Pagination.Next  disabled={!canNextPage}     onClick={() => nextPage()}/>
                        <Pagination.Last  disabled={!canNextPage}     onClick={() => gotoPage(pageCount-1)}/>
                    </Pagination>
                </div>
                <div className="col">
                    <GlobalFilterDebouncePaginateBootstrap filter={globalFilter} setFilter={setGlobalFilter} />
                </div>
            </div>

            
            <table className="table table-striped table-sm table-hover" {...getTableProps()}>
                <caption>
                    List of users:{' '}
                    <span>
                        Page{' '}<strong>{pageIndex + 1}</strong> of <strong>{pageOptions.length}</strong>{' '}
                    </span>    
                </caption>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column, index) => (
                                        <th key={index}>
                                            <span {...column.getHeaderProps(column.getSortByToggleProps())} style={{color: column.isSorted ? "white" : "green"}}  >
                                                {/* {column.isSorted ? (column.isSortedDesc ? <FontAwesomeIcon icon="fa-solid fa-sort" /> : ' U') : ''} */}
                                                {column.isSorted ? (column.isSortedDesc ? <FontAwesomeIcon icon={fasFaSortDown} /> : <FontAwesomeIcon icon={fasFaSortUp} />) : <FontAwesomeIcon icon={fasFaSort} />}
                                            </span>
                                            {' '} {column.render('Header')} {' '}
                                            {/* <span style={{color: column.isSorted ? "bue" : "red"}}  >
                                                {column.isSorted ? (column.isSortedDesc ? <i className="fas fa-sort-down"></i> : <i className="fas fa-sort-up"></i> ) : <FontAwesomeIcon icon={"fa-regular fa-coffee"} />}
                                            </span>                                             */}
                                            <div>
                                                {column.canFilter ? column.render('Filter') : null}
                                            </div>
                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        page.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {
                                        row.cells.map((cell, index) => {
                                            return (
                                                <td key={index} {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )

                        })
                    }
                </tbody>
                <tfoot>
                    {
                        footerGroups.map((footerGroup) => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                                {
                                    footerGroup.headers.map(column => (
                                        <td {...column.getFooterProps()}>
                                            {column.render('Footer')}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tfoot>

            </table>
        </>
    )
}

export default ReactTable_Pagination_Filter_Sort_Bootstrap;
