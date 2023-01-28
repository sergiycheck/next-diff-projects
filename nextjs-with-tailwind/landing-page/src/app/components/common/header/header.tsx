'use client';
import React from 'react';
import { SharedBlackButton } from '../button/sharedBlackBtn';
import { H4Heading } from '../headings/headings';
import { CloseIconClient } from '../modal/CloseIcon';
import { Text } from '../textsContainers/textContainers';
import MenuIconFromServer from './MenuIcon';

export default function RootHeader() {
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    if (showModal) document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  return (
    <>
      <div
        className="
        p-4 fixed left-1/2 top-0 translate-x-[-50%] w-full lg:container 
        md:mx-auto flex justify-between items-center 
        pb-0 z-20 bg-zinc-100 "
      >
        <div className="basis-2/6 relative">
          <div
            className="
            sm:bg-white sm:absolute  sm:h-[300px] sm:w-[300px] 
            sm:bottom-[-60px] sm:left-[-40px] 
            rounded-full flex flex-col justify-end isolate"
          >
            <div className="text-center sm:p-2 ">
              <H4Heading>
                <Text>Miguelanger</Text>
              </H4Heading>
              <H4Heading className="sm:pb-5">
                <Text>Herrera</Text>
              </H4Heading>
            </div>
          </div>
        </div>

        <div className="sm:hidden flex flex-col justify-center items-center">
          <div onClick={() => setShowModal((prev) => !prev)}>
            {!showModal ? <MenuIconFromServer /> : <CloseIconClient />}
          </div>
        </div>

        <div className="hidden basis-4/6 sm:flex gap-5 justify-end">
          <HeaderItems />
        </div>
      </div>
      {showModal && (
        <div
          className="absolute flex justify-center items-top w-full min-h-full 
          bg-zinc-100 pt-24 sm:pt-28 z-10"
        >
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
      <div className="p-3">
        <Text>Home</Text>
      </div>
      <div className="p-3">
        <Text>About</Text>
      </div>
      <div className="p-3">
        <Text>Services</Text>
      </div>
      <div className="p-3">
        <Text>Contact Us</Text>
      </div>
      <SharedBlackButton text={'Book Appointment'} />
    </>
  );
};
