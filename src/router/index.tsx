import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthGate } from '@/components';

import routes from './routes';

const AppRouter: FC = () => {
  return (
    <Routes>
      {routes.map(({ path, isPrivate, layout: Layout, component: Component, ...layoutProps }) => (
        <Route
          element={
            <AuthGate isPrivate={isPrivate}>
              <Layout {...layoutProps}>
                <Component />
              </Layout>
            </AuthGate>
          }
          path={path}
          key={path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
