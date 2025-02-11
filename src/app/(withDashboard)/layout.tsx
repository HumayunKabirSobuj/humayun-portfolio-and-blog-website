"use client";

import { MdDashboard } from "react-icons/md";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import React, { useState } from "react";

import { Button, Layout, Menu } from "antd";
import Link from "next/link";

const { Header, Content, Sider } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const sidebarItems = [
    {
      key: "UserDashboard",
      icon: <MdDashboard />,
      label: <Link href={"/dashboard"}>Dashboard</Link>,
    },
  ];
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        collapsed={collapsed}
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        style={{ height: "100vh", position: "sticky", top: 0, left: 0 }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          
          items={sidebarItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{ padding: 0, position: "sticky", top: 0, zIndex: 1000 }}
          className="bg-black min-w-f"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "white",
            }}
          />
        </Header>
        <Content>
          <div
            style={{
              minHeight: "100vh",
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
