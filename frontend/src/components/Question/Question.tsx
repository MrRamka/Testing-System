import React, { useState } from "react";
import { DragOutlined } from "@ant-design/icons";
import { getQuestionTypeByNumberType, IQuestion } from "./types";
import { Card, Spin } from "antd";
import { QuestionType } from "./QuestionType";
import { Answer } from "../Answer";
import { useQuery } from "react-query";
import { AnswerResponse } from "../Answer/types";

interface QuestionProps {
  isActive: boolean;
  question: IQuestion;
  onClick: () => void;
  test_id: number;
}

export const Question = ({
  isActive,
  question,
  onClick,
  test_id,
}: QuestionProps): JSX.Element => {
  const isActiveClassNames = isActive ? "bg-gray-50 shadow-xl" : "bg-gray-100";

  const created_at = new Date(Date.parse(question.created_at));
  const [qType, setQType] = useState(
    getQuestionTypeByNumberType(question.type)
  );

  const { data, isLoading } = useQuery<AnswerResponse[]>(
    `core/test-question-answers/${test_id}/${question.id}/`,
    { enabled: isActive }
  );

  return (
    <Card
      className={`my-3 border-gray-300 rounded-lg ${isActiveClassNames}`}
      onClick={onClick}
    >
      <div className="flex justify-start items-center">
        <div className="mr-2">
          <DragOutlined style={{ display: "block" }} />
        </div>
        <div>
          <div>
            <span className="font-semibold">Name: </span>
            {question.name}
          </div>
          {isActive ? (
            <div>
              <span className="font-semibold">Creation date: </span>
              {created_at.toLocaleString()}
              {question.description ? (
                <div>
                  <span className="font-semibold">Description: </span>
                  {question.description}
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="w-40">
            <QuestionType
              type={qType}
              isActive={isActive}
              updateQType={setQType}
            />
          </div>

          {isLoading ? (
            <Spin size="large" />
          ) : (
            <div className="py-3">
              <Answer questionType={qType} answer={data ?? []} />
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
