import React, { useState } from "react";

export default function DetailBook({ book }) {
  const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
  return (
    <>
      <div className="border rounded-sm px-3 py-1">
        <div className="header flex items-center justify-between">
          <h1 className="text-xl font-bold">{book.title}</h1>
          <span className="flex gap-2 items-center">
            <button
              className="text-blue-400 font-bold rounded"
              onClick={() => setIsModalDetailOpen(true)}
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
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-screen my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">Edit Task</h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setIsModalDetailOpen(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <div className="flex my-2">
                          <label
                            htmlFor="taskID"
                            className="w-2/6 self-center mr-2"
                          >
                            Task ID
                          </label>
                          <input
                            type="text"
                            name="taskID"
                            id="taskID"
                            disabled
                            className="border-2 border-gray-400 rounded-md px-2 w-4/6"
                            placeholder="e.g. 1234"
                            // value={taskCurrent._id}
                          />
                        </div>
                        <div className="flex my-2">
                          <label
                            htmlFor="name"
                            className="w-2/6 self-center mr-2"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="border-2 border-gray-400 rounded-md px-2 w-4/6"
                            placeholder="e.g. wash the dishes"
                            // value={taskCurrent.name}
                            // onChange={(e) =>
                            //   setTaskCurrent({
                            //     ...taskCurrent,
                            //     name: e.target.value,
                            //   })
                            // }
                          />
                        </div>
                        <div className="flex my-2">
                          <label
                            htmlFor="completed"
                            className="w-2/6 self-center mr-2"
                          >
                            Completed
                          </label>
                          <input
                            type="checkbox"
                            name="completed"
                            id="completed"
                            className="border-2 border-gray-400 rounded-md px-2 w-4/6 cursor-pointer"
                            // checked={taskCurrent.completed}
                            // onChange={(e) =>
                            //   setTaskCurrent({
                            //     ...taskCurrent,
                            //     completed: e.target.checked,
                            //   })
                            // }
                          />
                        </div>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setIsModalDetailOpen(false)}
                        >
                          Close
                        </button>
                        <button
                          className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setIsModalDetailOpen(false);
                            // handleEditTask(taskCurrent);
                          }}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            <a href="/" className="text-yellow-600 font-bold rounded">
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
            </a>

            <a href="/" className="text-red-600 font-bold rounded">
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
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
