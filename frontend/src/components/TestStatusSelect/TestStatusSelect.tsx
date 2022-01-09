import React from "react";
import { Badge, Select } from "antd";
import { TestSelectStatuses } from "./types";

interface TestStatusSelectProps {
  currentStatus: TestSelectStatuses;
  onSelect: (item: TestSelectStatuses) => void;
}

export const TestStatusSelect = ({
  currentStatus,
  onSelect,
}: TestStatusSelectProps): JSX.Element => {
  return (
    <div>
      <Select
        defaultValue={currentStatus}
        bordered={false}
        className="font-semibold"
        onSelect={onSelect}
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
