import React from "react";
import { Login, Main, Registration } from "./pages";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Routes as R } from "./constants";
import "antd/dist/antd.css";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api/queryClient";
import { TestConstructorPage } from "./pages/TestConstructorPage";
import { Menu } from "./components/Menu";
import { Layout } from "antd";
import { StartTestPage } from "./pages/StartTestPage";
import logo from "./logo_white_full.svg";

const { Header } = Layout;

export const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Header className="bg-dark h-1/2 ">
            <div className="my-2 flex">
              <img
                className="w-1/12"
                src={logo}
                alt="Казанский федеральный университет"
                title="На главную"
              />
              {/*<p className="text-2xl font-sans font-semibold text-white mx-3">*/}
              {/*  Test constructor*/}
              {/*</p>*/}
            </div>
          </Header>
          <div className="h-full bg-gray-50">
            <Layout className="bg-gray-50">
              <Menu />
              <Switch>
                <Route exact path={R.LOGIN} component={Login} />
                <Route exact path={R.REGISTRATION} component={Registration} />
                <Route exact path={R.MAIN} component={Main} />
                <Route path={R.CONSTRUCTOR} component={TestConstructorPage} />
                <Route path={R.START_TEST} component={StartTestPage} />

                <Redirect to={R.LOGIN} />
              </Switch>
            </Layout>
          </div>
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};
