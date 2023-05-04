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
      </div>
    </Wrapper>
  );
};

export default AllHospitalAdmins;

const Wrapper = styled.section`
  width: 75%;

  .inside {
    padding: 25px;
  }
`;
