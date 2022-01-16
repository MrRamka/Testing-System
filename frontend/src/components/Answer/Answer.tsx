import React, { useMemo } from "react";
import { IQuestionTypes } from "../Question/types";
import { SingleStringQuestionInput } from "./SingleStringQuestionInput";
import { SingleAnswerQuestion } from "./SingleAnswerQuestion";
import { AnswerResponse } from "./types";

interface AnswerProps {
  id?: number;
  questionType: IQuestionTypes;
  answer: AnswerResponse[];
}

export const Answer = ({ questionType, answer }: AnswerProps): JSX.Element => {
  const renderAnswers = useMemo((): JSX.Element => {
    if (questionType === IQuestionTypes.TEXT) {
      return <SingleStringQuestionInput answer={answer} />;
    }
    if (questionType === IQuestionTypes.SINGLE) {
      return <SingleAnswerQuestion answer={answer} />;
    }
    return <p>Not implemented</p>;
  }, [questionType, answer]);

  return <>{renderAnswers}</>;
};
