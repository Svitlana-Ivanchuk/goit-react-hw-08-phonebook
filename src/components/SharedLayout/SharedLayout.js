import { Layout } from 'components/Layuot';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Layout>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </Layout>
  );
};
