import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, DatePicker } from "antd";
import TextArea from "antd/es/input/TextArea";
import { createBookRoute } from "../utils/APIRoutes";
import axios from "axios";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function BookDirectory() {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    values.publishedDate = values.publishedDate.format(
      "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
    );
    // console.log("Received values of form: ", values);
    axios
      .post(createBookRoute, values)
      .then((res) => {
        // console.log(res);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div
      className="md:container md:mx-auto 
    bg-gray-200 p-3 border rounded-xl
    "
    >
      <h1 className="bg-gray-300 text-4xl p-3 border rounded-xl">
        Book Directory
      </h1>
      <div className="grid grid-cols-12">
        <div className="col-span-4 bg-gray-300 p-3 mr-1 mt-2 border rounded-xl">
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{
              maxWidth: 600,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="bookTitle"
              label="Book Title"
              rules={[
                {
                  type: "string",
                  message: "The input is not valid Book Title!",
                },
                {
                  required: true,
                  message: "Please input your Book Title!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="isbn"
              label="ISBN"
              rules={[
                {
                  required: true,
                  message: "Please input your ISBN!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="pageCount"
              label="Page Count"
              rules={[
                {
                  required: true,
                  message: "Please input your Page Count!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="publishedDate"
              label="Published Date"
              rules={[
                {
                  required: true,
                  message: "Please input your Published Date!",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>

            {/* thumbnailUrl */}
            <Form.Item
              name="thumbnailUrl"
              label="Thumbnail Url"
              rules={[
                {
                  required: true,
                  message: "Please input your Thumbnail Url!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* shortDescription */}
            <Form.Item
              name="shortDescription"
              label="Short Description"
              rules={[
                {
                  required: true,
                  message: "Please input your Short Description!",
                },
              ]}
            >
              <TextArea />
            </Form.Item>

            {/* longDescription */}
            <Form.Item
              name="longDescription"
              label="Long Description"
              rules={[
                {
                  required: true,
                  message: "Please input your Long Description!",
                },
              ]}
            >
              <TextArea />
            </Form.Item>

            {/* status */}
            <Form.Item
              name="status"
              label="Status"
              rules={[
                {
                  required: true,
                  message: "Please input your Status!",
                },
              ]}
            >
              <Select placeholder="PUBLISH - MEAP">
                <Select.Option value="PUBLISH">PUBLISH</Select.Option>
                <Select.Option value="MEAP">MEAP</Select.Option>
              </Select>
            </Form.Item>

            {/* authors */}
            <Form.Item
              name="authors"
              label="Authors"
              rules={[
                {
                  required: true,
                  message: "Please input your Authors!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* categories */}
            <Form.Item
              name="categories"
              label="Categories"
              rules={[
                {
                  required: true,
                  message: "Please input your Categories!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-yellow-500"
              >
                Create Book
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="col-span-8 bg-gray-300 p-3 ml-1 mt-2 border rounded-xl">
          second column
        </div>
      </div>
    </div>
  );
}
