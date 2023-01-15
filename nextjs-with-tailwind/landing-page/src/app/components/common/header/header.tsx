'use client';
import React from 'react';
import { SharedBlackButton } from '../button/sharedBlackBtn';
import { CloseIconClient } from '../modal/CloseIcon';
import MenuIconFromServer from './MenuIcon';

export default function RootHeader() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="fixed left-1/2 top-0 translate-x-[-50%] container flex justify-between items-center p-4  z-10 bg-white">
        <div className="w-fit">
          <div className="text-center sm:p-2 text-xl">
            Miguelanger
            <br />
            Herrera
          </div>
        </div>

        <div className="sm:hidden flex flex-col justify-center items-center">
          <div onClick={() => setShowModal((prev) => !prev)}>
            {!showModal ? <MenuIconFromServer /> : <CloseIconClient />}
          </div>
        </div>

        <div className="hidden sm:flex gap-5 items-center">
          <HeaderItems />
        </div>
      </div>
      {showModal && (
        <div className="absolute flex justify-center items-top w-full min-h-full bg-white">
          <div className="flex flex-col gap-5 items-center">
            <HeaderItems />
          </div>
        </div>
      )}
    </>
  );
}

export const HeaderItems = () => {
  return (
    <>
      <div className="p-3">Home</div>
      <div className="p-3">About</div>
      <div className="p-3">Services</div>
      <div className="p-3">Contact Us</div>
      <SharedBlackButton text={'Book Appointment'} />
    </>
  );
};
