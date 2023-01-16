import Image from 'next/image';
import { SharedBlackButton } from '../common/button/sharedBlackBtn';
import { HomeIconClient } from './HomeIcons';
import SuccessfullGuyImage from '/public/media/section-1-imgs/successfull_guy.png';
import FiftyPercentInvestment from '/public/media/section-1-imgs/50_percent_investment.png';

export const HomePage = () => {
  return (
    <>
      <div className="w-full bg-zinc-100 ">
        <div className="lg:container lg:mx-auto mx-auto px-4 pt-20 sm:pt-28">
          <SectionFirst />
        </div>
      </div>

      <div className="bg-white">
        <div className="lg:container lg:mx-auto mx-auto px-4">
          <div className="text-3xl font-bold">
            The professional Consultation <br />
            Platform For Your Real Estate and Finance
          </div>
        </div>
      </div>
    </>
  );
};

export const SectionFirst = () => {
  return (
    <div className="flex flex-col sm:flex-row ">
      <div className="sm:basis-2/6 flex flex-col gap-4 mt-24 sm:mt-36">
        <div className="text-5xl font-bold">
          A power that shines your business
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil
          sint at ipsam tenetur voluptate quis aspernatur doloribus voluptatum
          debitis, ad esse possimus quam nostrum in minima sed impedit! Placeat.
        </p>
        <SharedBlackButton className="w-[200px]" text={'Discover Demo'} />
      </div>
      <div className="mt-2 sm:mt-0 sm:basis-4/6 flex justify-center relative">
        <Image
          className="w-[300px] h-auto sm:w-[400px] sm:h-[512.625px]"
          src={SuccessfullGuyImage}
          alt={'picture of author'}
        />
        <div className="absolute w-full h-full flex flex-col gap-y-16">
          <div className="flex">
            <div className="basis-1/3">
              <div className="w-fit rounded-full bg-black p-4">
                <HomeIconClient />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="basis-1/3">
              <Image
                className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] rounded-2xl ml-3 sm:ml-9 shadow-2xl"
                src={FiftyPercentInvestment}
                alt="50 percent investment"
              />
            </div>

            <div className="basis-1/3 relative">
              <Image
                className="h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] rounded-2xl ml-3 sm:ml-9 absolute bottom-9 shadow-2xl"
                src={FiftyPercentInvestment}
                alt="50 percent investment"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
