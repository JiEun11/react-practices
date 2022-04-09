import React, { useState } from "react";
import { Layout } from "antd";

const { Header, Sider } = Layout;

import SiteHeader from "./layout/SiteHeader";
import SiteMenu from "./layout/SiteMenu";
import SiteContent from "./layout/SiteContent";
import SiteFooter from "./layout/SiteFooter";
import UploadCompo from "./UploadCompo";

const Main = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        className="site-layout-background"
        style={{ padding: 0, textAlign: "right" }}
      >
        <SiteHeader />
      </Header>
      <Layout className="site-layout">
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <SiteMenu />
        </Sider>

        <Layout>
          <SiteContent test={"hi"} >
            </SiteContent>
          <SiteFooter />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Main;
