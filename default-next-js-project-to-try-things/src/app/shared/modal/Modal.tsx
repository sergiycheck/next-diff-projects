"use client";

import React from "react";
import ReactDOM from "react-dom";
import s from "./Modal.module.css";

function useDelayUnmount(isMounted: boolean, delayTime: number) {
  const [shouldRender, setShouldRender] = React.useState(false);

  React.useEffect(() => {
    let timeoutId: any;

    if (isMounted && !shouldRender) {
      setShouldRender(true);
      //
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px";
      //
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => {
        setShouldRender(false);
        //
        document.body.style.overflow = "unset";
        document.body.style.paddingRight = "0";
        //
      }, delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);

  return shouldRender;
}

const useInBrowser = () => {
  const [isBrowser, setIsBrowser] = React.useState(false);

  React.useEffect(() => {
    setIsBrowser(true);
  }, []);

  return {
    isBrowser,
  };
};

const useAnimationStylesWithDelay = ({
  show,
  delay,
}: {
  show: boolean;
  delay: number;
}) => {
  const [opacity, toggleOpacity] = React.useState(0);

  React.useEffect(() => {
    const enableOpacityId = setTimeout(() => {
      if (show) {
        toggleOpacity(() => 1);
      }
    }, delay);

    return () => {
      clearTimeout(enableOpacityId);
      toggleOpacity(() => 0);
    };
  }, [show, delay]);

  const mountedStyle = {
    transition: `opacity ${delay}ms ease-in`,
    opacity: opacity,
  };
  const unmountedStyle = {
    transition: `opacity ${delay}ms ease-out`,
    opacity: opacity,
  };

  return {
    mountedStyle,
    unmountedStyle,
  };
};

export default function Modal({
  show,
  showHeader,
  onClose,
  children,
  delay = 500,
}: {
  show: boolean;
  showHeader: boolean;
  onClose: () => void;
  children: JSX.Element;
  delay?: number;
}) {
  const { isBrowser } = useInBrowser();

  const containerRef = React.useRef(null);

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

  const shouldRenderChild = useDelayUnmount(show, delay);

  const { mountedStyle, unmountedStyle } = useAnimationStylesWithDelay({
    show,
    delay,
  });

  let styleAnimation = mountedStyle;
  if (!show) {
    styleAnimation = unmountedStyle;
  }

  const modalContent = shouldRenderChild ? (
    <div className={s.container} ref={containerRef} style={styleAnimation}>
      <div className={s.content}>
        {showHeader && (
          <div className={s.header}>
            <div
              className={s.close_icon}
              onClick={() => {
                onClose();
              }}
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
