import React from "react";

import { Alert, Button, Table } from "antd";
import ProLayout, { PageContainer } from "@ant-design/pro-layout";
import UploadCompo from "./UploadCompo";

const MyLayout = () => {
  return (
    <ProLayout>
      <PageContainer
        extra={[
          <Button key="3">Operating</Button>,
          <Button key="2" type="link">
            Operating
          </Button>,
          <Button key="1" type="primary">
            Main Operating
          </Button>,
          <Alert type="warning" message="Warining" />,
        ]}
        footer={[
          <Button>reset</Button>,
          <Button type="primary">submit</Button>,
        ]}
      >
        <UploadCompo />
      </PageContainer>
    </ProLayout>
  );
};

export default MyLayout;
