import Image from 'next/image';
import { SharedBlackButton } from '../common/button/sharedBlackBtn';
import { ArrowUpwardIconClient, HomeIconClient } from './HomeIcons';
import SuccessfullGuyImage from '/public/media/section-1-imgs/successfull_guy.png';
import FiftyPercentInvestment from '/public/media/section-1-imgs/50_percent_investment.png';
import PlotImage from '/public/media/section-1-imgs/plot.png';
import FilledPlot from '/public/media/section-1-imgs/filled-plot.png';
import HouseImage from '/public/media/section-1-imgs/house.jpeg';
import HouseIconImage from '/public/media/section-1-imgs/house-icon.png';

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
      {/*left section */}
      <div className="sm:basis-2/6 flex flex-col gap-4 mt-10 sm:mt-20">
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
      {/* right section */}
      <div className="mt-2 sm:mt-0 sm:basis-4/6 flex justify-center relative">
        <Image
          className="w-[300px] h-auto sm:w-[400px] sm:h-[512.625px]"
          src={SuccessfullGuyImage}
          alt={'picture of author'}
        />

        {/* absolute cover */}
        <div className="absolute w-full h-full flex flex-col gap-y-16">
          {/* first row with home */}
          <div className="flex">
            <div className="basis-1/3">
              <div className="p-4  rounded-full bg-[#21212100] h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] ">
                <Image src={HouseIconImage} alt="house icon image" />
              </div>
            </div>
          </div>
          {/* second row images */}
          <div className="flex justify-between">
            <div className="basis-1/3">
              <div className="p-2 bg-white h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] rounded-2xl ml-3 sm:ml-9 shadow-2xl">
                <Image
                  className="w-full"
                  src={FiftyPercentInvestment}
                  alt="50 percent investment"
                />
              </div>
            </div>

            <div className="basis-1/3 relative">
              <div className="p-2 bg-white w-[120px]  sm:w-[140px] rounded-2xl ml-3 sm:ml-9 shadow-2xl relative  flex flex-col gap-1 sm:gap-3">
                <div className="flex justify-center pt-2">
                  <Image
                    className="h-[50px] w-[50px] rounded-full object-cover"
                    src={HouseImage}
                    alt="house to invest in"
                  />
                </div>

                <div>
                  <div className="flex justify-center">
                    <SectionImagesLightGrayBold text={'House investment'} />
                  </div>
                  <div className="flex justify-center items-center">
                    <ArrowUpwardIconClient />
                    <p className="text-stone-900 text-[10px] sm:text-[12px] font-bold">
                      5678
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* thrid row images */}
          <div className="flex justify-between">
            <div className="basis-1/3">
              <div className="p-2 bg-white h-[80px] w-[90px] sm:h-[100px] sm:w-[130px]  rounded-2xl ml-3 sm:ml-9 shadow-2xl flex justify-center items-center relative">
                <BlackBgMarkLegend
                  text={'1234'}
                  otherClasses={
                    'absolute right-0 top-0 translate-y-[-15px]  sm:translate-y-[-10px] translate-x-[5px] sm:translate-x-[-7px]'
                  }
                />
                <Image
                  className="w-[100px] h-auto"
                  src={PlotImage}
                  alt="50 percent investment"
                />
              </div>
            </div>

            <div className="basis-2/3 relative">
              <div className="p-4 bg-white h-[90px] w-[120px] sm:h-[100px] sm:w-[150px] rounded-2xl ml-3 sm:ml-9 shadow-2xl flex flex-col justify-center  absolute gap-3">
                <div className="flex justify-between items-center grow">
                  <BlackBgMarkLegend text={'1234'} />
                  <SectionImagesLightGrayBold text={'Financial'} />
                </div>
                <Image
                  className="w-[100px] h-auto"
                  src={FilledPlot}
                  alt="50 percent investment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionImagesLightGrayBold = ({ text }: { text: string }) => {
  return (
    <p className="text-stone-900 text-[10px] sm:text-[12px] font-bold">
      {text}
    </p>
  );
};

export const BlackBgMarkLegend = ({
  text,
  otherClasses,
}: {
  text: string;
  otherClasses?: string;
}) => {
  return (
    <p
      className={`bg-black dark:bg-white text-white dark:text-black rounded-[7px]  p-[5px] text-[8px]  sm:text-[10px] font-bold  ${otherClasses} `}
    >
      {text}
    </p>
  );
};
