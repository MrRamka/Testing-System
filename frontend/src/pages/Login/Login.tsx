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
          history.push("/main/");
        });
    },
    [history]
  );

  return (
    <>
      <div className="flex space-x-5 flex items-center justify-center h-screen bg-primary">
        <div className="w-1/5">
          <div className="">
            <p className="text-center text-2xl my-4 light text-white">
              Вход в личный кабинет
            </p>
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
                  makeRequiredFormFieldRule("Введите почту"),
                  { type: "email" },
                ]}
                label={<span className="text-white">Введите почту</span>}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Почта"
                  className="rounded-lg shadow-md "
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[makeRequiredFormFieldRule("Введите свой пароль")]}
                label={<span className="text-white">Введите пароль</span>}
                className="text-white"
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Пароль"
                  className="rounded-lg shadow-md "
                />
              </Form.Item>

              <Form.Item>
                <button className="rounded-md bg-logo-header p-1 w-full h-full font-sans transition duration-300 ease-in-out cursor-pointer shadow-md border-2 border-white ">
                  <span className="text-xl text-white font-semibold">
                    Войти
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
