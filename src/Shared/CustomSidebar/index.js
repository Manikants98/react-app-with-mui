import {
  FileOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Breadcrumb,
  Divider,
  Layout,
  Menu,
  Popover,
  theme,
} from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Home", "1", <PieChartOutlined />),
  getItem("Users", "2", <UserOutlined />),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const Sidebar = ({ component }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [mode] = useState("dark");
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="min-h-screen bg-white bg-opacity-25 backdrop-blur-md">
      <Sider
        theme={mode}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="h-8 m-4 flex justify-center items-center text-primary text-2xl font-bold">
          MKX
        </div>
        <Menu
          theme={mode}
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            background: colorBgContainer,
          }}
          className="!px-4 flex justify-between"
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger !p-1",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="flex items-center gap-2">
            <Popover
              placement="bottomRight"
              className=""
              title={false}
              content={
                <>
                  <div className="!w-52">
                    <div className="flex flex-col justify-center items-center py-3">
                      <Avatar size={64} className="!text-4xl">
                        {name.slice(0, 1)}
                      </Avatar>
                      <p>{name}</p>
                      <p>{email}</p>
                    </div>
                    <Divider className="!m-0" />
                    <Menu className=" m-0">
                      <MenuItem>Profile</MenuItem>
                      <MenuItem>Settings</MenuItem>
                      <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
                    </Menu>
                  </div>
                </>
              }
              trigger="click"
            >
              <Avatar
                size="small"
                className="btn-circle btn-primary flex items-center justify-center cursor-pointer text-2xl"
                alt="Mani"
              >
                {name.slice(0, 1)}
              </Avatar>
            </Popover>
          </div>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Users</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              minHeight: "75vh",
              maxHeight: "75vh",
              overflowY: "auto",
              background: colorBgContainer,
            }}
          >
            {component}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            padding: 10,
          }}
          className="flex justify-center items-center"
        >
          © Copyright 2023, All Rights Reserved
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
