import { Header } from 'components/Header/Header';
import { Layout } from 'components/Layuot';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
