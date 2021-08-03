import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import swal from 'sweetalert';
// import { Redirect } from 'react-router-dom';
const { TextArea } = Input;

class Contact extends Component {
  // componentDidMount() {
  //   swal("Oops!", "Something went wrong!", "error");
  // }

  onSubmit = async () => {
    const results = await axios.post('http://localhost:6002/contact', {
      fullname: this.state.fullname,
      email: this.state.email,
      phone: this.state.phone,
      subject: this.state.subject,
      message: this.state.message,
    });
    if (results.data.received === true) {
      //make a thank you message and send back to home page
      swal({
        title: 'Your message was sent!',
        text: 'We will get back to you shortly',
        type: 'success',
      });
    }
  };

  onUserInput = (e) => {
    console.log(e.target.value, e.target.id);
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    console.log(this.state);

    return (
      <div className="block contactBlock" onInput={this.onUserInput}>
        <div className="contact-container">
          <div className="title-holder">
            <h2>Get in Touch</h2>
            <p>Send us a message below: </p>
          </div>
          <Form
            // name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              id="fullname"
              className="input-field"
              name="fullname"
              rules={[
                { required: true, message: 'Please input your full name!' },
              ]}
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            <Form.Item
              id="email"
              className="input-field"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item
              id="phone"
              className="input-field"
              name="phone"
              rules={[
                { required: true, message: 'Please input your phone number!' },
              ]}
            >
              <Input placeholder="Phone number" />
            </Form.Item>
            <Form.Item
              id="subject"
              className="input-field"
              name="subject"
              rules={[{ required: true, message: 'Please input a subject!' }]}
            >
              <Input placeholder="Subject" />
            </Form.Item>
            <Form.Item
              id="message"
              className="input-field"
              name="message"
              rules={[{ required: true, message: 'Please input a message!' }]}
            >
              <TextArea placeholder="Message" />
            </Form.Item>
            <div className="contact-button-holder">
              <Button
                onClick={this.onSubmit}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
