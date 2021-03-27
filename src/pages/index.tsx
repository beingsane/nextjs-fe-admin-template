import React from 'react';
import { getPosts } from '@redux/actions/foo-actions';
import { wrapper } from '@redux/index';
import Layout from '@components/Layout';
import { checkServerSideCookie } from '@redux/actions/auth-actions';

const Index = ({ foo, token }) => (
  <Layout isAuthenticated={token}>
    <div>{JSON.stringify(foo)}</div>
    <div>Prop from getServerSideProps</div>
  </Layout>
);

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    checkServerSideCookie(context);
    const { token } = context.store.getState().authentication;
    await context.store.dispatch(getPosts());
    return {
      props: {
        foo: context.store.getState().foo,
        token
      }
    };
  }
);

export default Index;