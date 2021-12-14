import React, { useCallback, useEffect, useState } from "react";
import { IQuestion, IQuestionTypes } from "../Question/types";
import { Card, Typography } from "antd";
import { DescriptionBlock } from "./components/DesctiptionBlock";
import { QuestionTypeBlock } from "./components/QuestionType";
import { questions } from "../../mock/questions";

interface ConstructorMenuProps {
  currentSelection: IQuestion;
  setQuestions: (arr: IQuestion[]) => void;
  questions: IQuestion[];
}

const { Title } = Typography;

export const ConstructorMenu = ({
  currentSelection,
  setQuestions,
  questions,
}: ConstructorMenuProps): JSX.Element => {
  const [qType, setQType] = useState(currentSelection.type);

  useEffect(() => {
    setQType(currentSelection.type);
  }, [currentSelection]);

  const updateQType = useCallback(
    (qType: IQuestionTypes) => {
      setQType(qType);
      //update data
      // const data = questions.find((item) => item.id === currentSelection.id);
      // if (data) {
      //   data.type = qType;
      //   setQuestions([
      //     ...questions.filter((item) => item.id !== currentSelection.id),
      //     data,
      //   ]);
      // }
    },
    [setQType, currentSelection, questions, setQuestions]
  );

  return (
    <Card className="my-3 border-gray-300 rounded-lg bg-gray-50 shadow-xl">
      <Title level={3}>{currentSelection.name}</Title>
      <DescriptionBlock description={currentSelection.description} />
      <QuestionTypeBlock type={qType} updateQType={updateQType} />
    </Card>
  );
};
