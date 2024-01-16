import React, { useEffect, useState } from "react";
import DetailBook from "./DetailBook";
import axios from "axios";
import { Pagination } from "antd";
import { getAllBooksRoute } from "../utils/APIRoutes";

export default function ListBook() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get(getAllBooksRoute + `?page=${page}`)
      .then((res) => {
        setBooks(res.data.data);
        setTotal(parseInt(res.data.total));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]); // Depend on page, not books

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold">ListBook</h1>
      {books.map((book) => (
        <DetailBook key={book._id} book={book} />
      ))}
      <Pagination current={page} onChange={handlePageChange} total={total} />{" "}
      {/* Adjust total as per your data */}
    </div>
  );
}
