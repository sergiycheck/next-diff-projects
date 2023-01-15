'use client';
import React from 'react';
import { CloseIconClient } from '../modal/CloseIcon';
import MenuIconFromServer from './MenuIcon';

export default function RootHeader() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="container mx-auto flex justify-between items-centerp-4">
        <div className="w-fit">
          <div className="text-center p-4 sm:p-2">
            Miguelanger
            <br />
            Herrera
          </div>
        </div>

        <div className="sm:hidden flex flex-col justify-center items-center p-4">
          <div onClick={() => setShowModal((prev) => !prev)}>
            {!showModal ? <MenuIconFromServer /> : <CloseIconClient />}
          </div>
        </div>

        <div className="hidden sm:flex gap-5 items-center">
          <HeaderItems />
        </div>

        {showModal && (
          <div className="absolute flex justify-center items-top bottom-0 w-full min-h-screen bg-white">
            <div className="flex flex-col gap-5 items-center">
              <HeaderItems />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export const HeaderItems = () => {
  return (
    <>
      <div className="p-2">Home</div>
      <div className="p-2">About</div>
      <div className="p-2">Services</div>
      <div className="p-2">Contact Us</div>
      <div className="p-2 bg-zinc-900 text-white rounded-lg">
        Book Appointment
      </div>
    </>
  );
};
