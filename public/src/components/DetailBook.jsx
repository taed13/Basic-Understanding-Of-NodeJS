import React, { useEffect, useState } from "react";
import { deleteBookRoute, updateBookRoute } from "../utils/APIRoutes";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Form, Input, Select, DatePicker } from "antd";
import TextArea from "antd/es/input/TextArea";
import { createBookRoute } from "../utils/APIRoutes";
import moment from "moment";
import dayjs from "dayjs";

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

export default function DetailBook({ book }) {
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [showMoreShort, setShowMoreShort] = useState(false);
  const [showMoreLong, setShowMoreLong] = useState(false);

  const [form] = Form.useForm();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
  };

  const handleDeleteBook = (id) => {
    axios
      .delete(`${deleteBookRoute}/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Book deleted successfully.", toastOptions);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Book failed to delete.", toastOptions);
      });
  };

  const onFinish = async (values) => {
    values.publishedDate = values.publishedDate.format(
      "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
    );
    // console.log("Received values of form: ", values);
    // console.log(book._id);
    axios
      .put(`${updateBookRoute}/${book._id}`, values)
      .then((response) => {
        console.log("New value: ", response.data);
        // setTasks(
        //   tasks.map((task) =>
        //     task._id === response.data.data._id ? response.data.data : task
        //   )
        // );
        setIsModalEditOpen(false);
      })
      .catch((error) => {
        console.error("Error updating task:", error);
      });

    toast.success("Task updated successfully!", toastOptions);
  };

  return (
    <>
      <div className="border rounded-sm px-3 py-1">
        <div className="header flex items-center justify-between">
          <h2 className="text-xl font-bold">
            {book.title} - {book.authors.join(", ")}
          </h2>
          <span className="flex gap-2 items-center">
            <button
              className="text-blue-400 font-bold rounded"
              onClick={() => {
                setIsModalDetailOpen(true);
                console.log(book);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />{" "}
              </svg>
            </button>
            {isModalDetailOpen ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  onClick={() => setIsModalDetailOpen(false)}
                >
                  <div
                    className="relative w-screen my-6 mx-auto max-w-3xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}

                      <div className="grid grid-cols-12">
                        <div className="col-span-4 bg-gray-300 border rounded-lg p-4">
                          <img
                            src={book.thumbnailUrl}
                            alt={book.title}
                            className="w-64 h-64 rounded-lg"
                          />
                        </div>
                        <div className="col-span-8 bg-gray-300 border rounded-lg p-4">
                          <div className="border-b border-gray-400">
                            <div className="titleNpublishdate flex items-center">
                              <h2 className="text-xl font-bold mr-2">
                                {book.title}
                              </h2>{" "}
                              -
                              <p className="text-gray-500 ml-2">
                                {new Date(
                                  book.publishedDate
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "long",
                                  day: "2-digit",
                                })}
                              </p>
                            </div>
                            <div className="authors flex items-center">
                              <p className="mr-2">
                                by{" "}
                                <span className=" text-blue-600">
                                  {book.authors.join(", ")}
                                </span>{" "}
                                (
                                {book.authors.length >= 2
                                  ? "Authors"
                                  : "Author"}
                                )
                              </p>
                            </div>
                            <div className="status ">
                              <p className="text-yellow-700 ">
                                {book.status} - ISBN: {book.isbn}
                              </p>
                            </div>

                            <div className="categories flex items-center">
                              <p className="mr-2">
                                <span className=" text-blue-600">
                                  {book.categories.join(", ")}
                                </span>{" "}
                                (
                                {book.categories.length >= 2
                                  ? "Categories"
                                  : "Category"}
                                )
                              </p>
                            </div>
                          </div>

                          <div className="description mt-2 p-3">
                            {book.shortDescription && (
                              <>
                                <p className="font-semibold">
                                  SHORT DESCRIPTION
                                </p>
                                <p>
                                  {showMoreShort
                                    ? book.shortDescription
                                    : `${book.shortDescription.substring(
                                        0,
                                        100
                                      )}...`}
                                </p>
                                <button
                                  onClick={() =>
                                    setShowMoreShort(!showMoreShort)
                                  }
                                  className="text-blue-500 hover:underline bg-transparent border-none"
                                >
                                  {showMoreShort ? "Show Less" : "Show More"}
                                </button>
                              </>
                            )}
                            {book.longDescription && (
                              <>
                                <p className="font-semibold mt-2">
                                  LONG DESCRIPTION
                                </p>
                                <p>
                                  {showMoreLong
                                    ? book.longDescription
                                    : `${book.longDescription.substring(
                                        0,
                                        100
                                      )}...`}
                                </p>
                                <button
                                  onClick={() => setShowMoreLong(!showMoreLong)}
                                  className="text-blue-500 hover:underline bg-transparent border-none"
                                >
                                  {showMoreLong ? "Show Less" : "Show More"}
                                </button>
                              </>
                            )}
                            {!book.shortDescription &&
                              !book.longDescription && (
                                <p>Don't have description</p>
                              )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            <button
              className="text-yellow-600 font-bold rounded"
              onClick={() => setIsModalEditOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            {isModalEditOpen ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  onClick={() => setIsModalEditOpen(false)}
                >
                  <div
                    className="relative w-screen my-6 mx-auto max-w-3xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                      {/*header*/}

                      <div className="col-span-4 bg-gray-300 p-3 mr-1 mt-2 border rounded-xl">
                        <p className="text-xl font-bold">Edit book</p>
                        <Form
                          {...formItemLayout}
                          form={form}
                          name="register"
                          onFinish={onFinish}
                          style={{
                            maxWidth: 600,
                          }}
                          initialValues={{
                            title: book.title,
                            isbn: book.isbn,
                            pageCount: book.pageCount,
                            publishedDate: dayjs(book.publishedDate),
                            thumbnailUrl: book.thumbnailUrl,
                            shortDescription: book.shortDescription,
                            longDescription: book.longDescription,
                            status: book.status,
                            authors: book.authors.join(", "),
                            categories: book.categories.join(", "),
                          }}
                          scrollToFirstError
                        >
                          <Form.Item
                            name="title"
                            label="Book Title"
                            rules={[
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
                              <Select.Option value="PUBLISH">
                                PUBLISH
                              </Select.Option>
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
                              Edit Book
                            </Button>
                          </Form.Item>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            <button
              className="text-red-600 font-bold rounded"
              onClick={() => setIsModalDeleteOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
            {isModalDeleteOpen ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Delete Book</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setIsModalDeleteOpen(false)}
                        >
                          <span className="bg-transparent text-rose-500 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-lg leading-relaxed">
                          Are you sure you want to delete this book?
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-white bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setIsModalDeleteOpen(false);
                            handleDeleteBook(book._id);
                          }}
                        >
                          Yes, Delete
                        </button>
                        <button
                          className="text-em text-emerald-500 background-transparent font-bold uppercase px-6 py-2 hover:shadow-lg text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setIsModalDeleteOpen(false)}
                        >
                          No, Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}
          </span>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
