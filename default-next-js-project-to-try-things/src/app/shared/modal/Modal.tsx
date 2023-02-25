"use client";

import React from "react";
import ReactDOM from "react-dom";
import s from "./Modal.module.css";

export default function Modal({
  show,
  showHeader,
  onClose,
  children,
}: {
  show: boolean;
  showHeader: boolean;
  onClose: () => void;
  children: JSX.Element;
}) {
  const [isBrowser, setIsBrowser] = React.useState(false);

  React.useEffect(() => {
    setIsBrowser(true);
  }, []);

  React.useEffect(() => {
    if (show) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  const modalContent = show ? (
    <div className={s.container}>
      <div className={s.content}>
        {showHeader && (
          <div className={s.header}>
            <div
              className={s.close_icon}
              onClick={onClose}
              data-testid="close_modal_btn"
            >
              X
            </div>
          </div>
        )}

        {children}
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.body);
  } else {
    return null;
  }
}
