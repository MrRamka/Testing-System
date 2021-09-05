import React from "react";
import { Badge, Select } from "antd";
import { TestSelectStatuses } from "./types";

interface TestStatusSelectProps {
  currentStatus: TestSelectStatuses;
}

export const TestStatusSelect = ({
  currentStatus,
}: TestStatusSelectProps): JSX.Element => {
  return (
    <div>
      <Select
        defaultValue={currentStatus}
        bordered={false}
        className="font-semibold"
      >
        <Select.Option
          key={TestSelectStatuses.Active}
          className="font-semibold"
          value={TestSelectStatuses.Active}
        >
          <Badge status="success" />
          Active
        </Select.Option>
        <Select.Option
          key={TestSelectStatuses.Inactive}
          value={TestSelectStatuses.Inactive}
          className="font-semibold"
        >
          <Badge status="error" />
          Inactive
        </Select.Option>
      </Select>
    </div>
  );
};
