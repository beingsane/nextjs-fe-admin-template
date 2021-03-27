import React from 'react';
import UserModelType from '@typescript/types/app/models/User-Model-Type';

interface IProps {
    users: UserModelType[]
}

const UserList: React.FC<IProps> = ({ users }) => <div>{users.length}</div>;

export default UserList;