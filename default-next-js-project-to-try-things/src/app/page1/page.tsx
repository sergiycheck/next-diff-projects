"use client";

import React from "react";
import { Text, Modal } from "../shared";
import s from "./style.module.css";

export default function Page1() {
  const [show, setShow] = React.useState(false);

  return (
    <div className={s.container}>
      <div className={s.header}>
        <Text>Page 1</Text>
      </div>

      <div className={s.buttonsCont}>
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Open modal
        </button>
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          Hide modal
        </button>
      </div>

      <Modal
        show={show}
        showHeader={true}
        onClose={() => {
          setShow((prev) => !prev);
        }}
      >
        <>
          <Text>Modal content</Text>
          <Counter />
        </>
      </Modal>
    </div>
  );
}

function Counter() {
  const [score, setScore] = React.useState(0);
  const [hover, setHover] = React.useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
