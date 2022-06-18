import './BasicPaginationBootstrapAndTable';
import React, {useState} from "react";
import JsonData from "../../data/MOCK_DATA_CUSTOMERS.json"
// import ReactPaginate from 'react-paginate';
import Pagination from 'react-bootstrap/Pagination'
import "./BasicPaginationBootstrapAndTable.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';

function BootstrapTable() {
  const [users, setUsers] = useState(JsonData.slice(0,1000));
  const [pageNumber,setPageNumber] = useState(0);
  
  const usersPerPage = 40;
  const usersVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(users.length / usersPerPage);
  const lastPage  = pageCount === 0 ? 0 : pageCount -1 ;


 




  const onClickPage = (event) => {
    console.log(event)
    console.log(event.target.text)
    const goToPage = Number(event.target.text)-1;
    console.log("goto page: ",goToPage)
    setPageNumber(goToPage)
  }

  const onClickFirstPage = (event) => {
    setPageNumber(0)
  }

  const onClickLastPage = (event) => {
    setPageNumber(lastPage)
  }

    
  const onClickPrevPage = (event) => {
    setPageNumber(prev => {return (prev >0 ? prev- 1 : 0)});
  }

  const onClickNextPage = (event) => {
    setPageNumber(prev => {return (prev < pageCount-1  ? prev + 1 : prev)});
  }  


  console.log("pageCount=",pageCount)
  console.log("users=",users.length)
  console.log("usersVisited = 0 ..",usersVisited)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }



  let active = pageNumber;
  let items = [];
  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item key={number} active={number === (active+1)} onClick={onClickPage}>
        {number}
      </Pagination.Item>,
    );
  }
  
  const paginationBasic = (
    <div>
      <Pagination>
        <Pagination.First onClick={onClickFirstPage}/>
        <Pagination.Prev onClick={onClickPrevPage}/>
        {items}
        <Pagination.Next onClick={onClickNextPage}/>
        <Pagination.Last onClick={onClickLastPage}/>
        </Pagination>
      {/* 
      <Pagination size="lg">{items}</Pagination> <br />
      <Pagination size="sm">{items}</Pagination> */}
    </div>
    
  );

  const displayUserRows = () => {
    console.log("Building rows")
    const rows = users.slice(usersVisited,usersVisited + usersPerPage)
    .map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td>
          <button className="btn btn-warning btn-sm" onClick={() => {console.log("click")}}><FontAwesomeIcon icon={faEye} /></button>
          </td>
          
        </tr>
      )})
    return rows;  
  }  
  
  const rows = displayUserRows()

  return (
    <div className="users">
      <h2>Users Bootstrap Table</h2>
      {paginationBasic}
      <div className="table-responsive">  
        <table className="table  table-bordered table-striped table-hover">
          <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">first name</th>                            
                <th scope="col">last name</th>
                <th scope="col">email</th>
                <th scope="col">Action</th>
              </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BootstrapTable;
