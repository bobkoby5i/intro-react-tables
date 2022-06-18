import React, { useMemo } from 'react';
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "../../data/MOCK_DATA_CUSTOMERS.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import "./BasicTable.css"


const ReactTable_Pagination = () => {
    const columns = useMemo(() => COLUMNS, []) // COLUMNS GROUPED_COLUMNS
    const data = useMemo(() => MOCK_DATA, [])
    

    const tableInstance = useTable({
        columns, // ES6 syntax columns:columns
        data: data,
        initialState: {pageIndex:2}
    },usePagination)

    // get functions and arrays from reactTable hook
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        footerGroups,
        page,  //rows -> page
        nextPage, 
        previousPage, 
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        prepareRow } = tableInstance;

    const { pageIndex, pageSize} = state

    return (
        <>
            <div>react-table BasicTable Basic Pagination</div>
            <div className="pagination-div">
                <span>
                    Page{' '}<strong>{pageIndex + 1}</strong> of <strong>{pageOptions.length}</strong>{' '}
                </span>
                <span>
                    | Go to page: {' '}
                    <input type='number' defaultValue={pageIndex + 1} 
                      onChange={(e) => {
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                      }}
                      style={{ width: '50px'}}
                    />
                </span>
                <select value={pageSize} onChange={e => {
                    setPageSize(Number(e.target.value))
                    gotoPage(0)
                }}>
                    {
                        [10,25,50].map((pSize) => (
                            <option key={pSize} value={pSize}>
                                Show {pSize}
                            </option>
                        ))
                    }
                </select>    
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
            </div>            
            <table className="table-bob"  {...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {
                                    headerGroup.headers.map((column, index) => (
                                        <th key={index} {...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        // rows -> page
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
            </table>

        </>
    )
}

export default ReactTable_Pagination;
