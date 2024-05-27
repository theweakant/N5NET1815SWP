import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import "./RegisterPageBackup.css";

function RegisterPageBackup() {
  const [form] = useForm();
  function hanldeClickSubmit() {
    form.submit();
  }

  async function handleSubmit(value) {
    console.log(value);
    await axios.post("http://157.245.145.162:8080/api/register", value);
  }

  return (
    <>
      <div className="form">
        <Form
          form={form}
          onFinish={handleSubmit}
          id="form"
          className="form-main"
        >
          <Form.Item label="Họ" name="firstname">
            <Input />
          </Form.Item>
          <Form.Item label="Tên" name="lastname">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Số Điện Thoại" name="phone">
            <Input />
          </Form.Item>
          <Form.Item label="Địa Chỉ" name="address">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="Giới Tính" name="sex">
            <Input />
          </Form.Item>
          <Form.Item label="Tên Đăng Nhập" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Mật Khẩu" name="password">
            <Input type="password" />
          </Form.Item>
          <Button onClick={hanldeClickSubmit} className="form-button">
            Register
          </Button>
        </Form>
      </div>
    </>
  );
}

export default RegisterPageBackup;
