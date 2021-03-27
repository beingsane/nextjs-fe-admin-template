import React from 'react';
import { getProjectDetail, getPosts } from '@redux/actions/foo-actions';
import { wrapper } from '@redux/index';
import Layout from '@components/Layout';
import { checkServerSideCookie } from '@redux/actions/auth-actions';

const Index = ({ token }) => (
  <Layout isAuthenticated={token}>
    <div>Prop from getServerSideProps</div>
  </Layout>
);

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    checkServerSideCookie(context);
    await context.store.dispatch(getPosts());
    await context.store.dispatch(getProjectDetail());
    return {
      props: {
        projectDetail: context.store.getState().projectDetail
      }
    };
  }
);

export default Index;