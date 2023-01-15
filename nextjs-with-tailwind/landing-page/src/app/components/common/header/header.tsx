'use client';
import React from 'react';
import Modal from '../modal/modal';
import MenuIconFromServer from './MenuIcon';

export default function RootHeader() {
  const [showModal, setShowModal] = React.useState(false);
  return (
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
          <MenuIconFromServer />
        </div>
      </div>
      <div className="hidden sm:flex gap-5 items-center">
        <div className="p-2">Home</div>
        <div className="p-2">About</div>
        <div className="p-2">Services</div>
        <div className="p-2">Contact Us</div>
        <div className="p-2 bg-zinc-900 text-white rounded-lg">
          Book Appointment
        </div>
      </div>

      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        showHeader={true}
      >
        <div className="bg-green">
          <p>modal content</p>
          <a
            href="https://codepen.io/t4lh4z/pen/xxKgxYB"
            target="_blank"
            rel="noopener noreferrer"
          >
            blur background codepan
          </a>
        </div>
      </Modal>
    </div>
  );
}
