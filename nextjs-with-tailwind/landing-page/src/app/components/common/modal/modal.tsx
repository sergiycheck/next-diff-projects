'use client';
import React from 'react';
import ReactDOM from 'react-dom';
import { CloseIconClient } from './CloseIcon';

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

  const modalContent = show ? (
    <div className="fixed inset-0 w-full min-h-full flex justify-center items-center bg-zinc-500/70">
      <div className="bg-white w-full min-h-[300px] p-2 z-10">
        {showHeader && (
          <div className="flex justify-end text-base">
            <div onClick={onClose}>
              <CloseIconClient />
            </div>
          </div>
        )}

        <div className="pt-2">{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, document.body);
  } else {
    return null;
  }
}
