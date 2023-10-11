import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './store/hooks';
import { fetchUsers } from './store/users/users.slice';

function App() {
  const dispatch = useAppDispatch();
  const usersData = useAppSelector((state) => state.users);

  useEffect(() => {
    // dispatch(fetchUsers(10, 'asc'));
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className='container'>
        <h2>DATA STATUS: {usersData.status}</h2>
        <h3>List of users</h3>
        {usersData.users?.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.address.city}</p>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
