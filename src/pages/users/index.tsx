import MainContainer from '@components/layout/Main-Container';
import { Grid, Typography } from '@material-ui/core';
import { NextPage } from 'next';
import { useTranslation } from 'src/i18n';
import { wrapper } from '@redux/store';
import { connect } from 'react-redux';

/**
 * @interface PageProps Page`s props interface.
 */
interface PageProps {
  projectName: string;
}

/**
 * @function UserPage User page component.
 * @returns JSX markup for listing collection of users.
 */
const UserPage: NextPage<PageProps> = ({ projectName }) => {
  const { t } = useTranslation(['userspage']);
  return (
    <MainContainer>
      <Grid container>
        <Grid item xs={12} sm={12}>

        <Typography component="h1" variant="h4">
            {projectName}
          </Typography>

          <Typography component="h1" variant="h5">
            <p> {t('pagetitle')}</p>
          </Typography>

        </Grid>
      </Grid>
    </MainContainer>
  );
};

/**
 * @function getServerSideProps Redux initial data processing.
 */
const getServerSideProps = wrapper.getServerSideProps( 
  async (context) => {
    return {
      props: {
        projectName: context.store.getState().projectDetail.name
      }
    }
  }
);

export default connect((state) => state.projectDetail, null)(UserPage);
export { getServerSideProps };