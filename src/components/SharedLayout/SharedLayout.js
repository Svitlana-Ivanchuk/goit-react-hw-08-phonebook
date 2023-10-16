import { Header } from 'components/Header/Header';
import { Layout } from 'components/Layuot';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
      <Toaster />
    </Layout>
  );
};
