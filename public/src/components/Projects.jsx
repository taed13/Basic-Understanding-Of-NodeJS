import React from "react";
import styled from "styled-components";
import DetailProject from "./DetailProject";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <>
      <Container>
        <div className="container">
          <h3>Projects #Node.js #React.js #MongoDB #Javascript</h3>
          <div className="projects">
            <Link to="/task-manager">
              <DetailProject
                imgSrc="https://media.istockphoto.com/id/952067048/photo/schedule-management-of-business-concept.webp?b=1&s=170667a&w=0&k=20&c=pAovA-bpoCaC9xg39sJcV89OMI8UDRAVjP0qUYGMEj8="
                name="Task Manager"
              />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  h3 {
    font-size: 2rem;
    text-align: center;
  }
`;
