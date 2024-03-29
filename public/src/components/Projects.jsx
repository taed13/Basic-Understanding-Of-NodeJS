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
            <a href="https://chatapp-ui-roan.vercel.app/" target="_blank">
              <DetailProject
                imgSrc="https://static.vecteezy.com/system/resources/thumbnails/021/885/976/original/4k-animation-of-chat-mobile-application-for-business-businessman-and-businesswoman-communicate-with-mobile-app-on-big-hand-holding-smart-phone-free-video.jpg"
                name="Chat App Real Time"
              />
            </a>
            <Link to="/qrcode-generator">
              <DetailProject
                imgSrc="https://www.qr-generator.nu/qrcode.svg?download=1"
                name="QR Code Generator"
              />
            </Link>
            <Link to="/book-directory">
              <DetailProject
                imgSrc="https://e0.pxfuel.com/wallpapers/540/340/desktop-wallpaper-lot-of-books-in-library.jpg"
                name="Book Directory"
              />
            </Link>
            <a href="https://nhanhouse.vercel.app/" target="_blank">
              <DetailProject
                imgSrc="https://media-cdn.tripadvisor.com/media/photo-p/18/8c/39/6c/nhanhouse-mat-truoc.jpg"
                name="Nhan House"
              />
            </a>
            <Link to="/discord-bot">
              <DetailProject
                imgSrc="https://images.ctfassets.net/lzny33ho1g45/how-to-make-discord-bot-withou-p-img/18fdb59df96ee1bc0a4dcc7ac4ceec2f/Group_12427.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760"
                name="Discord Bot"
              />
            </Link>

            <a
              href="https://github.com/taed13/nodejs-api-auth-jwt"
              target="_blank"
            >
              <DetailProject
                imgSrc="https://images.ctfassets.net/23aumh6u8s0i/16VIM0ExdiVtMpEVamzZzG/a0b6699a966257d51fa001ab55ddf5b4/jwt_05"
                name="JWT Authentication"
              />
            </a>

            <a
              href="https://bamboolee.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DetailProject
                imgSrc="https://images.pexels.com/photos/14936128/pexels-photo-14936128.jpeg?cs=srgb&dl=pexels-ann-h-14936128.jpg&fm=jpg"
                name="Bamboo Lee Portfolio"
              />
            </a>
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
