import React from "react";
import styled from "styled-components";

export default function DetailProject() {
  return (
    <>
      <Container>
        <div className="container">
          <img
            src="https://www.idurarapp.com/file/2023/09/08/graphql_4.png"
            alt=""
          />
          <p>React Js Developers Create a Email Editor with React-Quill</p>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  .container {
  }
  img {
    width: 75%;
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
