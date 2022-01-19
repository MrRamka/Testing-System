import React from "react";
import { List } from "antd";
import { MainPageCard } from "../MainPageCard";
import { CardTestItem } from "../../pages";

interface TestsListProps {
  data: CardTestItem[];
  isLoading: boolean;
}

export const TestsList = ({ data, isLoading }: TestsListProps): JSX.Element => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 4,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <MainPageCard item={item} />
        </List.Item>
      )}
      loading={isLoading}
    />
  );
};
