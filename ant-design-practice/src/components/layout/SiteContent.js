import { Breadcrumb } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";
import UploadCompo from "../UploadCompo";
import MyTable from "../MyTable";
import Sample from "../Sample";
import { InnerCon } from "../InnerCon";

const SiteContent = ({ test, children }) => {
  return (
    <Content style={{ margin: "0 16px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>{test}</Breadcrumb.Item>
        <Breadcrumb.Item>Bills</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        {children}
        <UploadCompo/>
        <Sample/>
        <InnerCon />
      </div>
    </Content>
  );
};

export default SiteContent;
