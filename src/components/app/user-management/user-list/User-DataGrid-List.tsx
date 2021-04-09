import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import UserModelType from '@typescript/types/app/models/User-Model-Type';
import styled from 'styled-components';
import IStyledComponentProps from '@typescript/interfaces/shared/styled-components/IStyled-React-Component-Props';

const columns = [
  { field: 'id', headerName: 'Id', width: 150 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'surname', headerName: 'Last name', width: 150 }
];

/**
 * @interface IProps Component`s props interface.
 */
interface IProps extends IStyledComponentProps {
  users: UserModelType[]
}

/**
 * @function UserDataGridList Table grid component for displaying list of users (including pagination, sorting, etc.)
 * @param className Generated classname via "styled-components" library.
 * @param users Fetched users that were passed into this component for rendering purposes.
 */
const UserDataGridList: React.FC<IProps> = ({ className, users }) => {
  return (
    <div className={className}>
      <DataGrid
        rows={users} columns={columns} pageSize={5}
        checkboxSelection autoHeight={true} showCellRightBorder={false} />
    </div>
  );
};

export default styled(UserDataGridList)`
  margin: auto;
  width: 70%;
  border: 0.5px solid whitesmoke;
  padding: 10px;
`;
