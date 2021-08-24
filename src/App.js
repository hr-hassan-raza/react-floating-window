import "./App.css";
import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
Modal.setAppElement("#root");

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <Container>
      <button onClick={toggleModal}>Open Floating Window</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        style={{
          overlay: {
            position: "relative",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            padding: "40px",
          },
          content: {
            position: "absolute",
            top: "-70px",
            left: "40px",
            right: "40px",
            bottom: "40px",
            border: "5px solid #ccc",
            background: "#fff",
            overflow: "hidden",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            paddingLeft: "200px",
            height: "120px",
            marginLeft: "300px",
            marginRight: "300px",
          },
        }}
      >
        <div>Change Task Limit.</div>
        <p>Change user's monthly task limit</p>
        <form>
          <label>
            <input type="text" placeholder="1,000,000"></input>
          </label>
        </form>
        <Button onClick={toggleModal}>Save</Button>
      </Modal>
    </Container>
  );
}
const Container = styled.div`
  text-align: center;
  padding: 100px;
  button {
    width: 25%;
    background-color: rgba(217, 217, 68, 1);
    font-weight: blod;
    padding: 17px 0;
    color: rgba(17, 17, 17, 1);
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    &:hover {
      background: rgba(255, 255, 18, 1);
    }
  }
`;
const Button = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  width: 10%;
  height: 10%;
  background-color: rgba(36, 190, 60, 1);
  font-weight: blod;
  color: rgba(17, 17, 17, 1);
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: all 250ms;
`;
