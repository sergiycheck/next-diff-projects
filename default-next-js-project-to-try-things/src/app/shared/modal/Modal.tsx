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
  const containerRef = React.useRef(null);

  const [isBrowser, setIsBrowser] = React.useState(false);

  React.useEffect(() => {
    setIsBrowser(true);
  }, []);

  React.useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    };
  }, [show]);

  React.useEffect(() => {
    const bodyClickHandler = (e: MouseEvent) => {
      if (containerRef.current == e.target) {
        onClose();
      }
    };

    document.addEventListener("click", bodyClickHandler);

    return () => {
      document.removeEventListener("click", bodyClickHandler);
    };
  }, [onClose]);

  const modalContent = show ? (
    <div className={s.container} ref={containerRef}>
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
