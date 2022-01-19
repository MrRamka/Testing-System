import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { StyledContent } from "./styles";
import { TestsList } from "../../components/TestsList";
import { CardTestItem } from "./types";
import { useQuery } from "react-query";
import { MainPageControls } from "../../components/MainPageControls";

export const Main = (): JSX.Element => {
  const { data, isLoading } = useQuery<CardTestItem[]>("core/all-users-tests/");

  const onClick = () => {
    //
  };

  return (
    <StyledContent>
      <h2 className="font-sans antialiased text-3xl py-2">Ваши тесты</h2>

      <Input
        size="middle"
        placeholder="Поиск теста"
        className="w-1/2 rounded-lg my-3 py-2 px-4"
        prefix={<SearchOutlined />}
      />

      <MainPageControls onClick={onClick} />

      <TestsList data={data ?? []} isLoading={isLoading} />
    </StyledContent>
  );
};
