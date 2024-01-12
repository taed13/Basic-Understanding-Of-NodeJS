import React from "react";
import styled from "styled-components";
import DetailProject from "./DetailProject";

export default function Projects() {
  return (
    <>
      <Container>
        <div className="container">
          <h3>Projects #Node.js #React.js #MongoDB #Javascript</h3>
          <div className="projects">
            <DetailProject />
            <DetailProject />
            <DetailProject />
            <DetailProject />
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
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  h3 {
    font-size: 2rem;
  }
`;
