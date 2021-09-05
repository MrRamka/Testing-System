import React, { FC } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { makeRequiredFormFieldRule } from "../../constants/rules";

export const Registration: FC = () => {
  const onSubmit = () => {
    //TODO: Add mutation
  };

  return (
    <>
      <div className="flex space-x-4 flex-col justify-center justify-items-center">
        <div className="w-1/2">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onSubmit}
          >
            <Form.Item
              name="email"
              rules={[
                makeRequiredFormFieldRule("Please enter email"),
                { type: "email" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[makeRequiredFormFieldRule("Please enter password")]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Link to="">Forgot password</Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="rounded-md bg-blue-300 p-1"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
