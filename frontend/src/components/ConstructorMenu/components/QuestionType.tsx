import React from "react";
import { QuestionType } from "../../Question/QuestionType";
import { IQuestionTypes } from "../../Question/types";

interface QuestionTypeBlockProps {
  type: IQuestionTypes;
  updateQType: (type: IQuestionTypes) => void;
}

export const QuestionTypeBlock = ({
  type,
  updateQType,
}: QuestionTypeBlockProps): JSX.Element => {
  return (
    <div className="mt-1">
      <span className="font-semibold">Question type: </span>
      <QuestionType isActive type={type} updateQType={updateQType} />
    </div>
  );
};
