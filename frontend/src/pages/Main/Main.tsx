import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { StyledContent } from "./styles";
import { TestsList } from "../../components/TestsList";
import { CardTestItem } from "./types";
import { useQuery } from "react-query";

export const Main = (): JSX.Element => {
  const { data, isLoading } = useQuery<CardTestItem[]>("core/all-users-tests/");

  return (
    <StyledContent>
      <h2 className="font-sans antialiased text-3xl py-2">Your tests</h2>

      <Input
        size="middle"
        placeholder="Search test"
        className="w-1/2 rounded-lg my-3 py-2 px-4"
        prefix={<SearchOutlined />}
      />

      {/*<MainPageControls onClick={onClick} />*/}

      <TestsList data={data ?? []} isLoading={isLoading} />
    </StyledContent>
  );
};
