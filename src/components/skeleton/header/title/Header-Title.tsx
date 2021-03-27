import { connect } from 'react-redux';

interface IProps {
    projectDetail?: {
        name: string;
    }
}

const HeaderTitle: React.FC<IProps> = ({ projectDetail }) => (
  <h1>{projectDetail.name}</h1>
);

export default connect((state: any) => state.projectDetail, null)(HeaderTitle);