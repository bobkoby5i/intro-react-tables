import './BasicPagination.css';
import React, {useState} from "react";
import JsonData from "../../data/MOCK_DATA_CUSTOMERS.json"
import ReactPaginate from 'react-paginate';

function BasicPagination() {
  const [users, setUsers] = useState(JsonData.slice(0,50));
  const [pageNumber,setPageNumber] = useState(0);
  
  const usersPerPage = 10;
  const usersVisited = pageNumber * usersPerPage;

  const displayUsers =  users.slice(usersVisited,usersVisited + usersPerPage)
  .map(user => {
    return (
      <div key={user.id} className="user">
      <h3>#{user.id} {user.first_name} {user.last_name}</h3>
      <h3>{user.email}</h3>
    </div>
    )
  })
  


  const pageCount = Math.ceil(users.length / usersPerPage);
  console.log("pageCount=",pageCount)
  console.log("users=",users.length)
  console.log("usersVisited = 0 ..",usersVisited)

  const changePage = ({selected}) => {
    setPageNumber(selected)
  }

  return (
    <div className="users">
      <h2>Users</h2>
      <div>
          {displayUsers}
          <ReactPaginate
            pageCount={pageCount}
            previousLabel={"Prev"}
            nextLabel={"Next"}
            onPageChange={changePage}
            siblingCount={1}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"prevoiusBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
      </div>
    </div>
  );
}

export default BasicPagination;
