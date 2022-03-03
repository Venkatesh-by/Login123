import React from "react";
import "./css/demo.css";
// import Home from "./HomePage";
// import Lay from "./layout";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { bake_cookie, read_cookie, delete_cookie } from "sfcookies";

const Demo = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleSubmit = () => {
    navigate("/home");
    const cookies = "firstname";
    bake_cookie(cookies, "test");
    console.log(read_cookie(cookies));
  };

  return (
    <div className="body">
      <label className="demolabel">Login</label>
      <Form
        name="basic"
        labelCol={{
          span: 8
        }}
        wrapperCol={{
          span: 14
        }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="Email-ID"
          rules={[
            {
              required: true,
              message: "Please input your Email-ID!"
            }
          ]}
        >
          <Input placeholder="Enter Email-ID" />
        </Form.Item>

        <Form.Item
          label="Firstname"
          name="Firstname"
          rules={[
            {
              required: true,
              message: "Please input your firstname!"
            }
          ]}
        >
          <Input placeholder="Enter firstname" />
        </Form.Item>
        <Form.Item
          label="Lastname"
          name="Lastname"
          rules={[
            {
              required: true,
              message: "Please input your lastname!"
            }
          ]}
        >
          <Input placeholder="Enter lastname" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onSubmit={() => handleSubmit()}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Demo;
// const demo = () => {
//   return (
//     <div className="body">
//       <header>
//         <h3 className="login">Login</h3>
//       </header>
//       <form>
//         <label className="demolabel">FirstName :</label>{" "}
//         <input type="text" placeholder="FirstName" />
//         <br />
//         <label className="demolabel">LastName :</label>{" "}
//         <input type="text" placeholder="LastName" />
//         <br />
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };

/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */
