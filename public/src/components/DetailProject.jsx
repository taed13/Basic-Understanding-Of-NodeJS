import React from "react";
import styled from "styled-components";

export default function DetailProject({ imgSrc, name }) {
  return (
    <>
      <Container>
        <div className="container">
          <img src={imgSrc} alt="" />
          <p>{name}</p>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  .container {
    margin-top: 1rem;
  }
  img {
    width: 100%;
    height: 15vh;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
  }
  p {
    font-size: 1rem;
    margin: 1rem 0;
    padding: 0 4rem 0 4rem;
    font-weight: bold;
    text-align: center;
  }
`;
