import React, { useEffect, useState } from "react";
import { TestStatusSelect } from "../TestStatusSelect";
import { TestTitleForm } from "../TestTitleForm";
import { Button, Typography } from "antd";
import { CardTestItem } from "../../pages";
import { questions } from "../../mock/questions";
import { Question } from "../Question/Question";
import { IQuestion } from "../Question/types";
import { PlusOutlined } from "@ant-design/icons";
import { ConstructorMenu } from "../ConstructorMenu";

const { Title } = Typography;

interface ConstructorProps {
  testData: CardTestItem;
}

export const Constructor = ({ testData }: ConstructorProps): JSX.Element => {
  const [MQuestions, setMQuestions] = useState<IQuestion[]>(questions);
  const [currentSection, setCurrentSelection] = useState<IQuestion>(
    MQuestions[0]
  );

  return (
    <div className="flex">
      <div className="w-2/3 mt-5">
        <div className="flex justify-between items-center">
          <Title>Test information</Title>
          <TestStatusSelect currentStatus={testData?.status} />
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
            Add new questions
          </Button>
        </div>

        {MQuestions.map((question) => (
          <Question
            key={question.id}
            isActive={currentSection === question}
            question={question}
            onClick={() => setCurrentSelection(question)}
          />
        ))}
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
