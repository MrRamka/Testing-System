import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Routes as R } from '../../constants';
import { Layout, Menu as AntMenu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const {Sider} = Layout;

const MENU_WIDTH = 250;


export const StyledNavLink = styled(NavLink)`
  color: #677693;
  font-size: 0.9rem;
  padding: 4px 0;
  text-align: center;

  &.active {
    font-weight: 500;
  }

`;

export const Menu = (): JSX.Element => {

  const location = useLocation();

  const isOpen = !(location.pathname.startsWith(R.LOGIN) || location.pathname.startsWith(R.REGISTRATION));

  return (
    <>
      {
        isOpen && <Sider
          breakpoint="lg"
          collapsedWidth="0"
          width={MENU_WIDTH}
          className="h-screen bg-white"
          theme="light"
        >
          <div className="logo"/>
          <AntMenu theme="light" mode="inline" className="bg-white">
            <AntMenu.Item key="1" icon={<UserOutlined/>}>
              <StyledNavLink
                to={R.MAIN}
                isActive={(match, location): boolean =>
                  location.pathname.startsWith(R.MAIN)
                }
              >
                <span className="">Main page</span>
              </StyledNavLink>
            </AntMenu.Item>
            <AntMenu.Item key="2" icon={<VideoCameraOutlined/>}>
              <StyledNavLink
                to={R.CONSTRUCTOR_NEW}
                isActive={(match, location): boolean =>
                  location.pathname.startsWith(R.CONSTRUCTOR_PREFIX)
                }
              >
                <span className="">Constructor</span>
              </StyledNavLink>
            </AntMenu.Item>
            <AntMenu.Item key="3" icon={<UploadOutlined/>}>
              nav 3
            </AntMenu.Item>
            <AntMenu.Item key="4" icon={<UserOutlined/>}>
              <NavLink
                to="/logout"
              >
                <span className="text-red-500">Log out</span>
              </NavLink>
            </AntMenu.Item>
          </AntMenu>
        </Sider>
      }

    </>
  )
}
