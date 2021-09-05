import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { useParams } from "react-router-dom";
import isNil from "lodash.isnil";
import { CardTestItem, StyledContent } from "../Main";
import { mockMainPageData } from "../../mock/main_page";
import { TestStatusSelect } from "../../components/TestStatusSelect";

const { Title } = Typography;

export const TestConstructorPage = (): JSX.Element => {
  const { id: testId } = useParams<{ id: string }>();
  const isNewConstructor = isNil(testId) || testId.endsWith("new");
  const [testData, setTestData] = useState<CardTestItem>();

  useEffect(() => {
    if (!isNewConstructor) {
      setTestData(mockMainPageData[+testId - 1]);
    }
  }, [isNewConstructor, testId]);

  return (
    <StyledContent>
      <div className="h-full">
        <Title>Test information</Title>

        <TestStatusSelect />

        {isNewConstructor ? (
          <p>Create new test</p>
        ) : (
          <p>Edit test {testData?.title}</p>
        )}
      </div>
    </StyledContent>
  );
};
