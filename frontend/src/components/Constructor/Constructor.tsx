import React, { useState } from "react";
import { TestSelectStatuses, TestStatusSelect } from "../TestStatusSelect";
import { TestTitleForm } from "../TestTitleForm";
import { Button, Typography } from "antd";
import { CardTestItem } from "../../pages";
import { questions } from "../../mock/questions";
import { Question } from "../Question/Question";
import { IQuestion } from "../Question/types";
import { PlusOutlined } from "@ant-design/icons";
import { ConstructorMenu } from "../ConstructorMenu";
import { useMutation, useQuery } from "react-query";
import { apiClient } from "../../api/apiClient";

const { Title } = Typography;

interface ConstructorProps {
  testData: CardTestItem;
}

export const Constructor = ({ testData }: ConstructorProps): JSX.Element => {
  const [MQuestions, setMQuestions] = useState<IQuestion[]>(questions);
  const [currentSection, setCurrentSelection] = useState<IQuestion>(
    MQuestions[0]
  );

  const { data } = useQuery<IQuestion[]>(`core/test-questions/${testData.id}/`);

  const updateTestMutation = useMutation(async (newData: CardTestItem) => {
    return apiClient.put(`/core/test/${newData.id}/`, {
      ...newData,
    });
  });

  return (
    <div className="flex">
      <div className="w-2/3 mt-5">
        <div className="flex justify-between items-center">
          <Title>Test information</Title>
          <TestStatusSelect
            currentStatus={
              testData.isActive
                ? TestSelectStatuses.Active
                : TestSelectStatuses.Inactive
            }
            onSelect={(item) => {
              const newData: CardTestItem = {
                ...testData,
                isActive: item === TestSelectStatuses.Active,
              };
              updateTestMutation.mutate(newData);
            }}
          />
        </div>

        <TestTitleForm testData={testData} />

        <div className="flex justify-between items-center">
          <Title level={5} className="font-semibold">
            Questions
          </Title>

          <Button
            type="primary"
            size="middle"
            className="bg-blue-500 h-10 rounded-md"
            icon={<PlusOutlined style={{ display: "inline-flex" }} />}
          >
            Add new question
          </Button>
        </div>
        <div>
          {(data ?? []).map((question) => (
            <Question
              key={question.id}
              isActive={currentSection === question}
              question={question}
              onClick={() => setCurrentSelection(question)}
              test_id={testData.id}
            />
          ))}
        </div>
      </div>
      <div className="w-1/3 mt-5 ml-5">
        <ConstructorMenu
          currentSelection={currentSection}
          setQuestions={setMQuestions}
          questions={MQuestions}
        />
      </div>
    </div>
  );
};
