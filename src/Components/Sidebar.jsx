import React, { useState } from "react";
import "../CssFiles/sidebar.css";

import Items from "./sidebarData";
import Navbar from "./Navbar";

import { Layout, Menu } from "antd";
const { Content, Sider } = Layout;

const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Layout>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width="200px"
            color="white"
          >
            <Menu
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={Items}
              style={{ textDecoration: "none", backgroundColor: "#2c343b" }}
            />
          </Sider>
          <Layout className="site-layout">
            <Navbar />
            <Content
              style={{
                margin: "0 16px",
                backgroundColor: "#f6f9fc",
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
export default Sidebar;
