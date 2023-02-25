"use client";

import React from "react";
import { Text, Modal } from "../shared";
import s from "./style.module.css";

export default function Page1() {
  const [show, setShow] = React.useState(false);

  return (
    <div className={s.container}>
      <Text>Page 1</Text>

      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Open modal
      </button>

      <Modal
        show={show}
        showHeader={true}
        onClose={() => {
          setShow((prev) => !prev);
        }}
      >
        <Text>Modal content</Text>
      </Modal>
    </div>
  );
}
