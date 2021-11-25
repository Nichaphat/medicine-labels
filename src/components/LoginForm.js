import React, { useState } from "react";
import { Input, Button, Row, Col, Form, message } from "antd";
import "./css/Login.css";
import axios from "axios";
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { auth } from "../config";

const LoginForm = (props) => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const linkto = () => {
    history.push("/");
  };
  const handleSubmit = (value) => {
    console.log(value);
    setLoading(true);
    auth
      .signInWithEmailAndPassword(value.email, value.password)
      .then((data) => {
        console.log(data);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        message.error("Invalid username or password please try again")
      });
    setLoading(false);
  };

  return (
    <div>
      <Banner />
      <div className="Form">
        <div className="Form-input">
          <p >
            <h2 id="head"> {<UserOutlined/>} Login</h2>
          </p>
          <Form name="normal_login" className="login-form" onFinish={handleSubmit}>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="Email" disabled={loading} prefix={<MailOutlined />} />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input.Password placeholder="Password" disabled={loading} prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item>
              <div className="btn-box">
                <div className="col">
                  <Row gutter={12}>
                    <Col>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Log in
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
      <br />
    </div>
  );
};
export default LoginForm;

const Banner = () => {
  return (
    <div className="banner">
      <p id="banner-text">
        Medicine Labels
      </p>
    </div>
  )
};
