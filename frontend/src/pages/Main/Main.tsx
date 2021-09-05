import React, { useCallback, useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { mockMainPageData } from "../../mock/main_page";
import { StyledContent } from "./styles";
import { TestsList } from "../../components/TestsList";
import { MainPageControls } from "../../components/MainPageControls";
import { CardTestItem } from "./types";

export const Main = (): JSX.Element => {
  //TODO: Get data from server
  const [data, setData] = useState<CardTestItem[]>(mockMainPageData);

  //TODO: get more data from server
  const onClick = useCallback(() => {
    setData([...data, ...data]);
  }, [data]);

  return (
    <StyledContent>
      <h2 className="font-sans antialiased text-3xl py-2">Your tests</h2>

      <Input
        size="middle"
        placeholder="Search test"
        className="w-1/2 rounded-lg my-3 py-2 px-4"
        prefix={<SearchOutlined />}
      />

      <MainPageControls onClick={onClick} />

      <TestsList data={data} />
    </StyledContent>
  );
};
