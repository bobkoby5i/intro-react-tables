import './App.css';
import React, {useState, Fragment} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./components/home/Home"

import BasicPagination from "./components/01_basicPagination/BasicPagination"
import BasicPaginationBootstrap from "./components/02_BasicBootstrap/BasicPaginationBootstrap";
import BootstrapTable from  "./components/03_BootstrapTable/BootstrapTable"
import BasicTable from "./components/04_ReactTables/BasicTable"

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
                {/* <BasicPagination/> */}
                {/* <BasicPaginationBootstrap/> */}
                {/* <BootstrapTable/> */}
            </Routes>
          </div>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
