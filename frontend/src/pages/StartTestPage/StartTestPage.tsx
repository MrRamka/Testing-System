import React, { useCallback } from "react";
import { Button } from "antd";
import { useParams } from "react-router-dom";
import { mockMainPageData } from "../../mock/main_page";
import { StyledContent } from "../Main/styles";
import { CardTestItem } from "../Main/types";

export const StartTestPage = (): JSX.Element => {
  const { id: testId } = useParams<{ id: string }>();

  //TODO: get data from server
  const testData: CardTestItem = mockMainPageData[+testId - 1];

  const onClick = useCallback(() => {
    //send data and start
    //TODO: add mutation and start test
  }, []);

  return (
    <StyledContent>
      <p>{testData?.name}</p>
      <Button onClick={onClick}>Start test</Button>
    </StyledContent>
  );
};
