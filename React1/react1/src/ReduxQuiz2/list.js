import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, selectUser } from './slice';
import UserDetail from './UserDetail';

function UserList() {
    const dispatch = useDispatch();
    const { users, status, error, selectedUser } = useSelector((state) => state.users);
  
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (status === 'loading') return <div>로딩 중...</div>;
    if (status === 'failed') return <div>{error}</div>;
  
    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1 }}>
                <h2>사용자 목록</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {users.map(user => (
                        <li 
                            key={user.id}
                            onClick={() => dispatch(selectUser(user))}
                            style={{
                            padding: '10px',
                            margin: '5px 0',
                            border: '1px solid #ddd',
                            cursor: 'pointer',
                            backgroundColor: selectedUser?.id === user.id ? '#e3e3e3' : 'white'
                            }}
                        >
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
            {selectedUser && <UserDetail user={selectedUser} />}
        </div>
    );
}

export default UserList;