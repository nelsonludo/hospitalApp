import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';
import { FaUserAlt } from 'react-icons/fa';

const AllHospitalAdmins = () => {
  const [page, setPage] = useState(1);

  const handleChange = (e, p) => {
    setPage(p);
  };

  return (
    <Wrapper>
      <div className='flex'>
        <h1 className='title'>All Hospital Admins</h1>
        <button>
          <FaUserAlt /> create new admin
        </button>
      </div>
      <div className='page'>
        <button>{1}</button>
      </div>
      <table>
        <thead>
          <th>
            <td>Profile</td>
            <td>Name</td>
            <td>Email</td>
            <td>Created By</td>
            <td>Created At</td>
            <td>Updated At</td>
            <td>Actions</td>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src='/images/profile.jpg' alt='' />
            </td>
            <td>Diallo Abdourahman</td>
            <td>dialliabdourahman78@gmail.com</td>
            <td>An admin user</td>
            <td>25/03/2001</td>
            <td>25/03/2001</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src='/images/profile.jpg' alt='' />
            </td>
            <td>Diallo Abdourahman</td>
            <td>dialliabdourahman78@gmail.com</td>
            <td>An admin user</td>
            <td>25/03/2001</td>
            <td>25/03/2001</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src='/images/profile.jpg' alt='' />
            </td>
            <td>Diallo Abdourahman</td>
            <td>dialliabdourahman78@gmail.com</td>
            <td>An admin user</td>
            <td>25/03/2001</td>
            <td>25/03/2001</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src='/images/profile.jpg' alt='' />
            </td>
            <td>Diallo Abdourahman</td>
            <td>dialliabdourahman78@gmail.com</td>
            <td>An admin user</td>
            <td>25/03/2001</td>
            <td>25/03/2001</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src='/images/profile.jpg' alt='' />
            </td>
            <td>Diallo Abdourahman</td>
            <td>dialliabdourahman78@gmail.com</td>
            <td>An admin user</td>
            <td>25/03/2001</td>
            <td>25/03/2001</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src='/images/profile.jpg' alt='' />
            </td>
            <td>Diallo Abdourahman</td>
            <td>dialliabdourahman78@gmail.com</td>
            <td>An admin user</td>
            <td>25/03/2001</td>
            <td>25/03/2001</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src='/images/profile.jpg' alt='' />
            </td>
            <td>Diallo Abdourahman</td>
            <td>dialliabdourahman78@gmail.com</td>
            <td>An admin user</td>
            <td>25/03/2001</td>
            <td>25/03/2001</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src='/images/profile.jpg' alt='' />
            </td>
            <td>Diallo Abdourahman</td>
            <td>dialliabdourahman78@gmail.com</td>
            <td>An admin user</td>
            <td>25/03/2001</td>
            <td>25/03/2001</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src='/images/profile.jpg' alt='' />
            </td>
            <td>Diallo Abdourahman</td>
            <td>dialliabdourahman78@gmail.com</td>
            <td>An admin user</td>
            <td>25/03/2001</td>
            <td>25/03/2001</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
          <tr>
            <td>
              <img src='/images/profile.jpg' alt='' />
            </td>
            <td>Diallo Abdourahman</td>
            <td>dialliabdourahman78@gmail.com</td>
            <td>An admin user</td>
            <td>25/03/2001</td>
            <td>25/03/2001</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        size='large'
        // showFirstButton
        // showLastButton
      />
    </Wrapper>
  );
};

export default AllHospitalAdmins;

const Wrapper = styled.section`
  width: 100%;
  height: 400;
  padding: 25px;
`;
