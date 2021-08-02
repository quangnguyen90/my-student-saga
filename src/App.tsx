import cityApi from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  useEffect(() => {
    cityApi.getAll().then((response) => console.log(response));
  });

  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <PrivateRoute path="/admin">
          <AdminLayout />
        </PrivateRoute>
        
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
