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
    <h1>{projectDetail.name}</h1>
  );
};

export default connect((state: IProps) => { return state.projectDetail; }, null)(HeaderTitle);