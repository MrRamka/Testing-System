import React, { FC, useCallback } from "react";
import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { makeRequiredFormFieldRule } from "../../constants/rules";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const Login: FC = () => {
  const history = useHistory();

  const onSubmit = useCallback(
    (values) => {
      const config = {
        user: {
          email: values.email,
          password: values.password,
        },
      };

      //TODO: EDIT
      axios
        .post("http://127.0.0.1:8000/v1.0/auth/login/", config)
        .then((res) => {
          const data = res.data.user.token;
          localStorage.setItem("access-token", data);
        });

      history.push("/main/");
    },
    [history]
  );

  return (
    <>
      <div className="flex space-x-4 flex items-center justify-center h-screen bg-blue-50">
        <div className="w-1/5">
          <div className="">
            <p className="text-center text-4xl my-4 light">Log in</p>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onSubmit}
              layout="vertical"
              requiredMark={false}
            >
              <Form.Item
                name="email"
                rules={[
                  makeRequiredFormFieldRule("Please enter email"),
                  { type: "email" },
                ]}
                label="Enter your email"
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                  className="rounded-lg shadow-md "
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[makeRequiredFormFieldRule("Please enter password")]}
                label="Enter your password"
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  className="rounded-lg shadow-md "
                />
              </Form.Item>

              <Form.Item>
                <button className="rounded-md bg-blue-500 p-1 w-full h-full font-sans transition duration-300 ease-in-out cursor-pointer shadow-md ">
                  <span className="text-xl text-white font-semibold">
                    Log in
                  </span>
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
