import './App.css';
import React, {useState} from "react";
import JsonData from "./data/MOCK_DATA_CUSTOMERS.json"
import ReactPaginate from 'react-paginate';
import BasicPagination from "./components/basicPagination/BasicPagination"
import BasicPaginationBootstrap from "./components/basicBootstrap/BasicPaginationBootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      {/* <BasicPagination/> */}
      <BasicPaginationBootstrap/>
    </>
  );
}

export default App;
