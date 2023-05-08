import React, { FC } from 'react';

import { CircularProgress } from '@mui/material';
import { Routes, Route } from 'react-router-dom';

import routes from './routes';

import { AuthGate } from '@/components';

const AppRouter: FC = () => (
  <Routes>
    {routes.map(({ path, isPrivate, layout: Layout, component: Component, ...layoutProps }) => (
      <Route
        element={
          <AuthGate isPrivate={isPrivate}>
            <Layout {...layoutProps}>
              <React.Suspense fallback={<CircularProgress />}>
                <Component />
              </React.Suspense>
            </Layout>
          </AuthGate>
        }
        path={path}
        key={path}
      />
    ))}
  </Routes>
);

export default AppRouter;
