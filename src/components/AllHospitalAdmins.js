import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';
import SystemAdminNavbar from './SystemAdminNavbar';
import SystemAdminTitle from './SystemAdminTitle';

const AllHospitalAdmins = () => {
  const [page, setPage] = useState(1);

  const handleChange = (e, p) => {
    setPage(p);
  };

  return (
    <Wrapper>
      <SystemAdminNavbar />
      <SystemAdminTitle title={'All Hospital Administrators'} />
      <div className='inside'>
        <div className='flex top'>
          <h1 className='title'>
            <span className='green'>All</span> Hospital Admins
          </h1>
          <button className='create-admin'>
            <span className='green'>
              <FaUserAlt /> create new admin
            </span>
          </button>
        </div>
        <div className='page'>
          <select
            name='page'
            id='page'
            value={page}
            onChange={(e) => {
              setPage(e.target.value);
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
            <option value={9}>9</option>
            <option value={10}>10</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created By</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src='/images/profile.jpg' className='profile' alt='' />
              </td>
              <td>Diallo Abdourahman</td>
              <td>dialliabdourahman78@gmail.com</td>
              <td>An admin user</td>
              <td>25/03/2001</td>
              <td>25/03/2001</td>
              <td>
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src='/images/profile.jpg' className='profile' alt='' />
              </td>
              <td>Diallo Abdourahman</td>
              <td>dialliabdourahman78@gmail.com</td>
              <td>An admin user</td>
              <td>25/03/2001</td>
              <td>25/03/2001</td>
              <td>
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src='/images/profile.jpg' className='profile' alt='' />
              </td>
              <td>Diallo Abdourahman</td>
              <td>dialliabdourahman78@gmail.com</td>
              <td>An admin user</td>
              <td>25/03/2001</td>
              <td>25/03/2001</td>
              <td>
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src='/images/profile.jpg' className='profile' alt='' />
              </td>
              <td>Diallo Abdourahman</td>
              <td>dialliabdourahman78@gmail.com</td>
              <td>An admin user</td>
              <td>25/03/2001</td>
              <td>25/03/2001</td>
              <td>
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src='/images/profile.jpg' className='profile' alt='' />
              </td>
              <td>Diallo Abdourahman</td>
              <td>dialliabdourahman78@gmail.com</td>
              <td>An admin user</td>
              <td>25/03/2001</td>
              <td>25/03/2001</td>
              <td>
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src='/images/profile.jpg' className='profile' alt='' />
              </td>
              <td>Diallo Abdourahman</td>
              <td>dialliabdourahman78@gmail.com</td>
              <td>An admin user</td>
              <td>25/03/2001</td>
              <td>25/03/2001</td>
              <td>
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src='/images/profile.jpg' className='profile' alt='' />
              </td>
              <td>Diallo Abdourahman</td>
              <td>dialliabdourahman78@gmail.com</td>
              <td>An admin user</td>
              <td>25/03/2001</td>
              <td>25/03/2001</td>
              <td>
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src='/images/profile.jpg' className='profile' alt='' />
              </td>
              <td>Diallo Abdourahman</td>
              <td>dialliabdourahman78@gmail.com</td>
              <td>An admin user</td>
              <td>25/03/2001</td>
              <td>25/03/2001</td>
              <td>
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src='/images/profile.jpg' className='profile' alt='' />
              </td>
              <td>Diallo Abdourahman</td>
              <td>dialliabdourahman78@gmail.com</td>
              <td>An admin user</td>
              <td>25/03/2001</td>
              <td>25/03/2001</td>
              <td>
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <img src='/images/profile.jpg' className='profile' alt='' />
              </td>
              <td>Diallo Abdourahman</td>
              <td>dialliabdourahman78@gmail.com</td>
              <td>An admin user</td>
              <td>25/03/2001</td>
              <td>25/03/2001</td>
              <td>
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='pagination-container'>
          <Pagination
            className='pagination'
            count={10}
            page={page}
            onChange={handleChange}
            size='large'
            // showFirstButton
            // showLastButton
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default AllHospitalAdmins;

const Wrapper = styled.section`
  .inside {
    background-color: white;
    box-shadow: 0px 0px 2px black;
  }

  .page {
    margin: 25px 0;
  }

  .page select {
    padding: 3px 0px;
    border-radius: 10px;
    border: 2px solid var(--green);
    outline: none;
    color: var(--green);
    font-size: var(--medium-font-size);
    text-align: center;
    width: 80px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    border-bottom: 1px solid var(--grey);

    th {
      font-weight: bold;
      font-size: var(--medium-font-size);
      text-align: left;
      padding-bottom: 10px;
    }
  }

  tbody td {
    padding: 15px 0;
    border-bottom: 1px solid var(--grey);
    font-size: var(--medium-font-size);
  }

  .create-admin {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: var(--medium-font-size);
    text-transform: capitalize;
  }

  .edit,
  .delete {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: var(--medium-font-size);
  }

  .edit {
    margin-right: 10px;
    color: var(--green);
  }

  .delete {
    color: red;
  }

  .profile {
    border: 1px solid red;
    border-radius: 50%;
    object-fit: cover;
    width: 70px;
    height: 70px;
  }

  .pagination-container {
    margin: 30px auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .green {
    color: var(--green);
  }
`;
