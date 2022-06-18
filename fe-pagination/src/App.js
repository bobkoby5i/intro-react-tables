import './App.css';
import React, {useState, Fragment} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./components/home/Home"

import BasicPagination                  from "./components/01_basicPagination/BasicPagination"
import BasicPaginationBootstrap         from "./components/02_BasicBootstrap/BasicPaginationBootstrap";
import BasicPaginationBootstrapAndTable from "./components/03_BootstrapTable/BasicPaginationBootstrapAndTable"


// react-table
import ReactTable_BasicTable              from "./components/04_ReactTables/ReactTable_01_BasicTable"
import ReactTable_BasicTableGroupHeaders  from "./components/04_ReactTables/ReactTable_02_BasicTableGroupHeaders"
import ReactTable_SortingTable            from "./components/04_ReactTables/ReactTable_03_SortingTable"

import ReactTable_FilteringTable          from "./components/04_ReactTables/ReactTable_04_FilteringTable"
import ReactTable_FilteringTable_Debounce from "./components/04_ReactTables/ReactTable_05_FilteringTable_Debounce"
import ReactTable_Pagination              from "./components/04_ReactTables/ReactTable_06_Pagination"
import ReactTable_Pagination_Filter_Sort  from "./components/04_ReactTables/ReactTable_07_Pagination_Filter_Sort"
import ReactTable_Pagination_Filter_Sort_Bootstrap  from "./components/04_ReactTables/ReactTable_08_Pagination_Filter_Sort_Bootstrap"




// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <div className="container">
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route exact path='/BasicPagination' element={<BasicPagination/>} />
              <Route exact path='/BasicPaginationBootstrap' element={<BasicPaginationBootstrap/>} />
              <Route exact path='/BasicPaginationBootstrapAndTable' element={<BasicPaginationBootstrapAndTable/>} />
              <Route exact path='/ReactTable_BasicTable' element={<ReactTable_BasicTable/>} />
              <Route exact path='/ReactTable_BasicTableGroupHeaders' element={<ReactTable_BasicTableGroupHeaders/>} />
              <Route exact path='/ReactTable_SortingTable' element={<ReactTable_SortingTable/>} />
              <Route exact path='/ReactTable_FilteringTable' element={<ReactTable_FilteringTable/>} />
              <Route exact path='/ReactTable_FilteringTable_Debounce' element={<ReactTable_FilteringTable_Debounce/>} />
              <Route exact path='/ReactTable_Pagination' element={<ReactTable_Pagination/>} />
              <Route exact path='/ReactTable_Pagination_Filter_Sort' element={<ReactTable_Pagination_Filter_Sort/>} />
              <Route exact path='/ReactTable_Pagination_Filter_Sort_Bootstrap' element={<ReactTable_Pagination_Filter_Sort_Bootstrap/>} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
