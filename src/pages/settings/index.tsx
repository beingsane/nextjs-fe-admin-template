import { Grid, Typography } from '@material-ui/core';
import MainContainer from '@components/layout/Main-Container';
import { useTranslation } from 'src/i18n';
import { NextPage } from 'next';

/**
 * @function SettingsPage Admin settings page component.
 */
const SettingsPage: NextPage = () => {
  const { t } = useTranslation(['settingspage']);

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

export default SettingsPage;