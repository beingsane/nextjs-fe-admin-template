import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { Grid, Table, TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import UserModelType from '@typescript/types/app/models/User-Model-Type';


const columns = [
  { name: 'firstName', title: 'firstName' },
  { name: 'surname', title: 'surname' },
];
const rows = [
  { id: 0, product: 'DevExtreme', owner: 'DevExpress' },
  { id: 1, product: 'DevExtreme Reactive', owner: 'DevExpress' },
];

interface IProps {
    users: UserModelType[]
}

const UserList: React.FC<IProps> = ({ users }) => {

    useEffect(() => {
        const test = users;
        debugger;

    }, []);

  
    return <div>{users.length}</div>;

    
}

export default UserList;