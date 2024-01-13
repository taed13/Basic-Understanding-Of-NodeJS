import React, { useState } from "react";

export default function TaskManager() {
  const [isModalEditOpen, setIsModalEditOpen] = useState(false);
  const [isModelDeleteOpen, setIsModalDeleteOpen] = useState(false);

  return (
    <>
      <div className="md:container md:mx-auto pt-3">
        <h1 className="text-4xl text-center">Task Manager</h1>
        <div className="submit-task flex justify-center pt-2">
          <form className="flex flex-col bg-slate-500 p-5 rounded-xl w-1/3">
            <label htmlFor="task" className="cursor-pointer ">
              Task
            </label>
            <div className="flex">
              <input
                type="text"
                name="task"
                id="task"
                className="border-2 border-gray-400 rounded-md w-3/4 px-2 rounded-r-none"
                placeholder="e.g. wash the dishes"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md py-1 px-2 w-1/4 rounded-l-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="task-list flex justify-center pt-10">
          <ul className="bg-slate-500 p-5 rounded-xl w-1/3">
            <li className="flex bg-slate-300 p-2 my-2 rounded-xl items-center">
              <p className="text-black w-10/12 px-2">Task 1</p>
              <button
                className="block text-teal-600 rounded-md py-1 px-2 w-1/12"
                type="button"
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
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                          <h3 className="text-3xl font-semibold">Edit Task</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setIsModalEditOpen(false)}
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
                            />
                          </div>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setIsModalEditOpen(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setIsModalEditOpen(false)}
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

              <button
                className="text-rose-600 rounded-md py-1 px-2 w-1/12 mx-1"
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

              {isModelDeleteOpen ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Delete Task
                          </h3>
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
                            Are you sure you want to delete this task?
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-white bg-red-500 font-bold uppercase text-sm px-6 py-3 rounded  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setIsModalDeleteOpen(false)}
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
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
