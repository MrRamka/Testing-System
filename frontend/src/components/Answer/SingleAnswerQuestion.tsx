import React, { useCallback, useState } from "react";
import { Radio, Space } from "antd";
import { AnswerResponse } from "./types";

interface SingleAnswerQuestionProps {
  answer: AnswerResponse[];
}

export const SingleAnswerQuestion = ({
  answer,
}: SingleAnswerQuestionProps): JSX.Element => {
  const [value, setValue] = useState();

  const onChange = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        {answer.map((data, idx) => {
          return (
            <Radio key={data.id + "-" + data.question} value={idx + 1}>
              {data.value}
            </Radio>
          );
        })}
      </Space>
    </Radio.Group>
  );
};
