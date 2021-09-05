import React from 'react';
import { Login, Main, Registration } from './pages';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Routes as R } from './constants';
import 'antd/dist/antd.css';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './api/queryClient';
import { TestConstructorPage } from './pages/TestConstructorPage';
import { Menu } from './components/Menu';
import { Layout } from 'antd';
import { StartTestPage } from './pages/StartTestPage';

export const App = (): JSX.Element => {

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <div className="h-screen bg-gray-200">
            <Layout>
              <Menu/>
              <Switch>
                <Route exact path={R.LOGIN} component={Login}/>
                <Route exact path={R.REGISTRATION} component={Registration}/>
                <Route exact path={R.MAIN} component={Main}/>
                <Route path={R.CONSTRUCTOR} component={TestConstructorPage}/>
                <Route path={R.START_TEST} component={StartTestPage}/>

                <Redirect to={R.LOGIN}/>
              </Switch>
            </Layout>
          </div>
        </Layout>

      </Router>
    </QueryClientProvider>
  );
}
