import React from "react";
import { IQuestionTypes } from "./types";
import { Select } from "antd";

interface QuestionTypeProps {
  type: IQuestionTypes;
  isActive: boolean;
  updateQType: (type: IQuestionTypes) => void;
}

const QuestionTypeColors = {
  [IQuestionTypes.TEXT]: "bg-green-100",
  [IQuestionTypes.MATCHING]: "bg-red-100",
  [IQuestionTypes.MULTIPLE]: "bg-yellow-100",
  [IQuestionTypes.SINGLE]: "bg-blue-100",
  [IQuestionTypes.SEQUENCE]: "bg-pink-100",
};

const getColorByType = (type: IQuestionTypes): string => {
  switch (type) {
    case IQuestionTypes.MATCHING:
      return "bg-red-100";
    case IQuestionTypes.MULTIPLE:
      return "bg-yellow-100";
    case IQuestionTypes.SEQUENCE:
      return "bg-pink-100";
    case IQuestionTypes.TEXT:
      return "bg-green-100";
    case IQuestionTypes.SINGLE:
      return "bg-blue-100";
    default:
      return "bg-gray-100";
  }
};

export const QuestionType = ({
  type,
  isActive,
  updateQType,
}: QuestionTypeProps): JSX.Element => {
  console.log(type);
  return (
    <>
      <Select
        // defaultValue={type}
        value={type}
        className={`font-semibold rounded-md w-full ${getColorByType(type)}`}
        disabled={!isActive}
        bordered={false}
        onSelect={(_, value) => {
          if (value) {
            updateQType(value.key as IQuestionTypes);
          }
        }}
      >
        {Object.keys(QuestionTypeColors).map((item) => (
          <Select.Option key={item} value={item} className={`font-semibold`}>
            {item}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};
