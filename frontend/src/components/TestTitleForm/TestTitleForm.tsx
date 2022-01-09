import React from "react";
import { Form, Input, Typography } from "antd";
import { CardTestItem } from "../../pages";

interface TestTitleFormProps {
  testData: CardTestItem;
}
const { Title } = Typography;

export const TestTitleForm = ({
  testData,
}: TestTitleFormProps): JSX.Element => {
  return (
    <Form
      layout="vertical"
      requiredMark={false}
      initialValues={{
        title: testData?.name ?? "",
      }}
    >
      <Form.Item
        name="title"
        label={
          <Title level={5} className="font-semibold">
            Test title
          </Title>
        }
        className="login-form"
      >
        <Input
          size="middle"
          placeholder="Enter test title"
          className="rounded-lg py-2 px-4"
        />
      </Form.Item>
    </Form>
  );
};
