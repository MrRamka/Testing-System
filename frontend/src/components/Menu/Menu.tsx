import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Routes as R } from "../../constants";
import { Layout } from "antd";
import {
  DatabaseOutlined,
  LogoutOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { MenuButton } from "../Buttons/MenuButton";
import { strings } from "../../lang/strings";

const { Sider } = Layout;

const MENU_WIDTH = 200;

export const StyledNavLink = styled(NavLink)`
  color: #677693;
  font-size: 0.9rem;
  padding: 4px 0;
  text-align: center;
  margin-left: 0.5rem;

  &.active {
    font-weight: 500;
  }
`;

export const Menu = (): JSX.Element => {
  const location = useLocation();

  const isOpen = !(
    location.pathname.startsWith(R.LOGIN) ||
    location.pathname.startsWith(R.REGISTRATION)
  );

  return (
    <>
      {isOpen && (
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width={MENU_WIDTH}
          className="bg-primary"
          theme="light"
        >
          <div className="bg-white flex flex-col bg-primary">
            <div className="flex justify-around my-2">
              <MenuButton
                icon={
                  <DatabaseOutlined style={{ verticalAlign: "0.125rem" }} />
                }
                to={R.MAIN}
                isActive={location.pathname.startsWith(R.MAIN)}
                title={strings.menu.mainPage}
              />
            </div>
            <div className="flex justify-around mb-2">
              <MenuButton
                icon={<ToolOutlined style={{ verticalAlign: "0.125rem" }} />}
                to={R.CONSTRUCTOR_NEW}
                isActive={location.pathname.startsWith(R.CONSTRUCTOR_PREFIX)}
                title={strings.menu.constrictor}
              />
            </div>
            <div className="flex justify-around mb-2">
              <MenuButton
                icon={<LogoutOutlined style={{ verticalAlign: "0.125rem" }} />}
                to={R.LOGOUT}
                title={strings.menu.logout}
                className="text-red-300  hover:bg-red-200"
              />
            </div>
          </div>
        </Sider>
      )}
    </>
  );
};
