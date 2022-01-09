import React from "react";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { CardTestItem, StyledContent } from "../Main";
import { emptyCardItem } from "../../mock/main_page";
import { Constructor } from "../../components/Constructor";
import { useQuery } from "react-query";

export const TestConstructorPage = (): JSX.Element => {
  const { id: testId } = useParams<{ id: string }>();
  // const isNewConstructor = isNil(testId) || testId.endsWith("new");

  const { data, isLoading } = useQuery<CardTestItem>(`core/test/${testId}`);

  return (
    <StyledContent>
      <div className="h-full">
        {isLoading ? (
          <Spin />
        ) : (
          <Constructor testData={data ?? emptyCardItem} />
        )}
      </div>
    </StyledContent>
  );
};
