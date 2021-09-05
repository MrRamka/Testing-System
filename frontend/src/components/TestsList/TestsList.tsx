import React from "react";
import { List } from "antd";
import { MainPageCard } from "../MainPageCard";
import { CardTestItem } from "../../pages";

interface TestsListProps {
  data: CardTestItem[];
}

export const TestsList = ({ data }: TestsListProps): JSX.Element => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 4,
        xxl: 4,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <MainPageCard item={item} />
        </List.Item>
      )}
      pagination={{
        pageSize: 12,
      }}
    />
  );
};
