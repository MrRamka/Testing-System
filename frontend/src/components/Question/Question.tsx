import React, { useEffect, useState } from "react";
import { DragOutlined } from "@ant-design/icons";
import { IQuestion } from "./types";
import { Card } from "antd";
import { QuestionType } from "./QuestionType";

interface QuestionProps {
  isActive: boolean;
  question: IQuestion;
  onClick: () => void;
}

export const Question = ({
  isActive,
  question,
  onClick,
}: QuestionProps): JSX.Element => {
  const isActiveClassNames = isActive ? "bg-gray-50 shadow-xl" : "bg-gray-100";

  const created_at = new Date(Date.parse(question.created_at));
  const [qType, setQType] = useState(question.type);

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
          <div className="w-40">
            {/*<QuestionType*/}
            {/*  type={qType}*/}
            {/*  isActive={isActive}*/}
            {/*  updateQType={setQType}*/}
            {/*/>*/}
            {qType}
          </div>
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
        </div>
      </div>
    </Card>
  );
};
