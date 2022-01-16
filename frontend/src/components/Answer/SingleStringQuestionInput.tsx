import React from "react";
import { Input } from "antd";
import { AnswerResponse } from "./types";

interface SingleStringQuestionInputProps {
  answer: AnswerResponse[];
}

export const SingleStringQuestionInput = ({
  answer,
}: SingleStringQuestionInputProps): JSX.Element => {
  const value = answer[0]?.value ?? "";
  return (
    <Input
      size="middle"
      placeholder="Введите ответ на вопрос"
      className="rounded-lg py-2 px-4"
      defaultValue={value}
    />
  );
};
