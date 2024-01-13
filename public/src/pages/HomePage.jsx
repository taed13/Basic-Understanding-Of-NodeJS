import React, { useRef } from "react";
import styled from "styled-components";
import Projects from "../components/Projects";

export default function HomePage() {
  const prjRef = useRef(null);

  const handleClick = () => {
    prjRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Container>
        <div className="container">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/348/534/415/into-the-wild-christopher-mccandless-movie-scenes-men-wallpaper-preview.jpg"
            alt="into the wild"
            className="img-parent"
          />
          <div className="content">
            <h1>Home page about projects to understand nodejs</h1>
            <span className="scroll" onClick={handleClick}>
              Scroll down to discover
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.0}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="prj" ref={prjRef}>
          <Projects />
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  .container {
    display: flex;
    align-items: center;
  }
  .img-parent {
    width: 50%;
    height: 100vh;
    object-fit: cover;
    border-radius: 0 1rem 1rem 0;
  }
  .content {
    text-align: center;
    padding: 2rem;
  }

  h1 {
    text-transform: uppercase;
    font-size: 1.8rem;
  }
  span {
    font-size: 1.2rem;
    cursor: pointer;
    color: #777;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 1rem;
    margin-left: 0.5rem;
  }
`;
