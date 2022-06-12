import './App.css';
import React, {useState, Fragment} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./components/home/Home"

import BasicPagination from "./components/01_basicPagination/BasicPagination"
import BasicPaginationBootstrap from "./components/02_BasicBootstrap/BasicPaginationBootstrap";
import BootstrapTable from  "./components/03_BootstrapTable/BootstrapTable"
import BasicTable from "./components/04_ReactTables/BasicTable"
import BasicTableGroupHeaders from "./components/04_ReactTables/BasicTableGroupHeaders"
import SortingTable from "./components/04_ReactTables/SortingTable"
import FilteringTable from "./components/04_ReactTables/FilteringTable"
import FilteringTableDebounce from "./components/04_ReactTables/FilteringTableDebounce"
import ReactTablePagination from "./components/04_ReactTables/ReactTablePagination"
import ReactTablePaginationSort from "./components/04_ReactTables/ReactTablePaginationSort"



import 'bootstrap/dist/css/bootstrap.min.css';

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
              <Route exact path='/BootstrapTable' element={<BootstrapTable/>} />
              <Route exact path='/ReactTablesBasicTable' element={<BasicTable/>} />
              <Route exact path='/BasicTableGroupHeaders' element={<BasicTableGroupHeaders/>} />
              <Route exact path='/SortingTable' element={<SortingTable/>} />
              <Route exact path='/FilteringTable' element={<FilteringTable/>} />
              <Route exact path='/FilteringTableDebounce' element={<FilteringTableDebounce/>} />
              <Route exact path='/ReactTablePagination' element={<ReactTablePagination/>} />
              <Route exact path='/ReactTablePaginationSort' element={<ReactTablePaginationSort/>} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
