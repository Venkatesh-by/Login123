import React from "react";
import { Layout, Table } from "antd";
import "antd/dist/antd.css";
import "./css/layout.css";
import Data from "./datasource/datasource";
import Columns from "./datasource/columns";

const { Content } = Layout;

const layout = () => {
  return (
    <Layout>
      <Content>
        <Table dataSource={Data} columns={Columns}></Table>
      </Content>
    </Layout>
  );
};

export default layout;
