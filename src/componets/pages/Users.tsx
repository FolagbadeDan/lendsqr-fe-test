import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../astetics/Loader';
import UsersStats from '../users/UsersStats';
import UsersTable from '../users/UsersTable';
import ReactPaginate from 'react-paginate';
import { UserModel } from '../../core/models';

import '../../styles/users.scss';


// interface User {
//   [key: string]: any;
// }

interface Event {
  selected: number;
}

const Users: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserModel[]>([]);
  const [currentItems, setCurrentItems] = useState<UserModel[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [itemOffset, setItemOffset] = useState<number>(0);
  const itemsPerPage = 9;

  const handlePageClick = (event: Event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    setItemOffset(newOffset);
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(users.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(users.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, users]);

  return (
    <section className="users">
      <h1>Users</h1>
      <div>
        <UsersStats />
        {loading ? (
          <div>
            <Loader/>
          </div>
        ) : (
          <>
            <UsersTable users ={currentItems} loading={loading} />
            <div className="users-paginate">
              <div className="user-page-info">
                <p>
                  Showing <span>{itemOffset + itemsPerPage}</span> out of {users.length}
                </p>
              </div>
              <ReactPaginate
                previousLabel="<"
                nextLabel=">"
                pageCount={pageCount}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                onPageChange={handlePageClick}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="arrow"
                nextClassName="arrow"
                breakLabel="..."
                containerClassName="pagination"
                activeClassName="active"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Users;
export {}