import MainContainer from '@components/layout/Main-Container';
import { Grid, Typography } from '@material-ui/core';
import { NextPage } from 'next';
import { useTranslation } from 'src/i18n';

/**
 * @function UserPage User page component.
 * @returns JSX markup for listing collection of users.
 */
const UserPage: NextPage = () => {
  const { t } = useTranslation(['userspage']);

  return (
    <MainContainer>
      <Grid container>
        <Grid item xs={10}>
          <Typography component="h1" variant="h5">
            {t('pagetitle')}
          </Typography>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default UserPage;