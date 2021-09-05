import React from "react";
import { Badge, Select } from "antd";
import { Option } from "antd/lib/mentions";
import { TestSelectStatuses } from "./types";

export const TestStatusSelect = (): JSX.Element => {
  return (
    <Select defaultValue={TestSelectStatuses.Active} bordered={false}>
      <Option key={TestSelectStatuses.Active}>
        <Badge status="success" />
        Active
      </Option>
      <Option key={TestSelectStatuses.Inactive}>
        <Badge status="error" />
        Inactive
      </Option>
    </Select>
  );
};
