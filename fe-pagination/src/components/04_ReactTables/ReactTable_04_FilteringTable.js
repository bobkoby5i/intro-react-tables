import React, { useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import MOCK_DATA from "../../data/MOCK_DATA_CUSTOMERS.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort as fasFaSort} from '@fortawesome/free-solid-svg-icons';
import { faSortUp as fasFaSortUp, faSortDown as fasFaSortDown } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaSort } from '@fortawesome/free-regular-svg-icons';
import GlobalFilter from "./GlobalFilter"
import ColumnFilter from './ColumnFilter'
import "./BasicTable.css"


const ReactTable_FilteringTable = () => {
    const columns = useMemo(() => COLUMNS, []) // COLUMNS GROUPED_COLUMNS
    const data = useMemo(() => MOCK_DATA.slice(0,500), [])

    const defaultColumn = useMemo(() => {
        return {
            Filter: ColumnFilter
        }
    }, [])

    const tableInstance = useTable({
        columns, // ES6 syntax columns:columns
        data: data,
        defaultColumn: defaultColumn
    }, useFilters,useGlobalFilter, useSortBy)

    // get functions and arrays from reactTable hook
    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        footerGroups,
        rows, 
        prepareRow,
        state,
        setGlobalFilter
     } = tableInstance;

     const { globalFilter } = state;

    return (
        <>
            <div>react-table Filtering Table with (useGlobalFilter, useFilters) and sorting </div>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            <table className="table-bob" {...getTableProps()}>
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
                        rows.map((row) => {
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

export default ReactTable_FilteringTable;
