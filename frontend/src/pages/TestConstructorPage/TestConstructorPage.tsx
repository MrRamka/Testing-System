import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import isNil from "lodash.isnil";
import { CardTestItem, StyledContent } from "../Main";
import { emptyCardItem, mockMainPageData } from "../../mock/main_page";
import { Constructor } from "../../components/Constructor";

export const TestConstructorPage = (): JSX.Element => {
  const { id: testId } = useParams<{ id: string }>();
  const isNewConstructor = isNil(testId) || testId.endsWith("new");
  const [testData, setTestData] = useState<CardTestItem>(emptyCardItem);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    if (!isNewConstructor) {
      setTestData(mockMainPageData[+testId - 1]);
    }
    setLoading(false);
  }, [isNewConstructor, testId]);

  return (
    <StyledContent>
      <div className="h-full">
        {loading ? <Spin /> : <Constructor testData={testData} />}
      </div>
    </StyledContent>
  );
};
