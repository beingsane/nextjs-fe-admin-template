import { Grid, Typography } from '@material-ui/core';
import MainContainer from '@components/layout/Main-Container';
import { NextPage } from 'next';
import { useTranslation } from 'src/i18n';

/**
 * @function ProfilePage Display information about current administrator.
 */
const ProfilePage: NextPage = () => {

    const { t } = useTranslation(['profilepage']);

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
}

export default ProfilePage;