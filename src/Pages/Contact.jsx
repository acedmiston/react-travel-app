import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;

class Contact extends Component {
  render() {
    return (
      <div className="block contactBlock">
        <div className="contact-container">
          <div className="title-holder">
            <h2>Get in Touch</h2>
            <p>Send us a message below: </p>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              className="input-field"
              name="fullname"
              rules={[
                { required: true, message: 'Please input your full name!' },
              ]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              className="input-field"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="input-field"
              name="phone"
              rules={[
                { required: true, message: 'Please input your phone number!' },
              ]}
            >
              <Input placeholder="Phone number" />
            </Form.Item>
            <Form.Item
              className="input-field"
              name="subject"
              rules={[{ required: true, message: 'Please input a subject!' }]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              className="input-field"
              name="subject"
              rules={[{ required: true, message: 'Please input a subject!' }]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              className="input-field"
              name="message"
              rules={[{ required: true, message: 'Please input a message!' }]}
            >
              <TextArea placeholder="Message" />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
