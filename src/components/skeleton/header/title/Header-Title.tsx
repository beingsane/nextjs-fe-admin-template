import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

/**
 * @interface IProps Component`s props interface.
 */
interface IProps {
    projectDetail?: {
        name: string;
    }
}

/**
 * @function HeaderTitle Title component for logo title header.
 */
const HeaderTitle: React.FC<IProps> = ({ projectDetail }) => {
  return (
    <Typography component='h1' variant='h6'>
      { projectDetail.name }
    </Typography>
  );
};

export default connect((state: IProps) => { return state.projectDetail; }, null)(HeaderTitle);