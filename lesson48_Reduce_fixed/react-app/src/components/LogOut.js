import React from 'react';
import { useDispatch } from 'react-redux';

const LogOut = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch({ type: 'logOut' });
  };

  return (
    <button className='logout' type="submit" onClick={handleLogOut}>Log Out</button>
  );
};

export default LogOut;