import Image, { StaticImageData } from 'next/image';
import { SharedBlackButton } from '../common/button/sharedBlackBtn';
import {
  ArrowUpwardIconClient,
  KeyboardArrowDownIconClient,
} from './0_HomeIcons';
import SuccessfullGuyImage from '/public/media/section-1-imgs/successfull_guy.png';
import FiftyPercentInvestment from '/public/media/section-1-imgs/50_percent_investment.png';
import PlotImage from '/public/media/section-1-imgs/plot.png';
import FilledPlot from '/public/media/section-1-imgs/filled-plot.png';
import HouseImage from '/public/media/section-1-imgs/house.jpeg';
import HouseIconImage from '/public/media/section-1-imgs/house-icon.png';
import MoneyCoinsImage from '/public/media/section-1-imgs/money-coins.png';
import { H1Heading } from '../common/headings/headings';
import { PEl, Text } from '../common/textsContainers/textContainers';

export const SectionFirst = () => {
  return (
    <div className="overflow-y-hidden">
      <div className="flex flex-col sm:flex-row">
        {/*left section */}
        <div className="sm:basis-2/6 flex flex-col gap-4 mt-10 sm:mt-20 sm:mb-20">
          <H1Heading>
            <Text>A power that shines your business</Text>
          </H1Heading>

          <PEl>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil
              sint at ipsam tenetur voluptate quis aspernatur doloribus
              voluptatum debitis, ad esse possimus quam nostrum in minima sed
              impedit! Placeat.
            </Text>
          </PEl>
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
          <div className="absolute w-full h-full flex flex-col gap-y-5 sm:gap-y-16 ">
            {/* first row with home */}
            <div className="flex">
              <div className="basis-1/3">
                <BlackSmallRoundedImage
                  className="h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] rounded-full object-cover"
                  src={HouseIconImage}
                  alt="house icon image"
                />
              </div>
            </div>
            {/* second row images */}
            <div className="flex justify-between">
              <div className="basis-1/3">
                <div
                  className="
                p-2 bg-white h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] 
                rounded-2xl ml-2 shadow-2xl"
                >
                  <Image
                    className="w-full"
                    src={FiftyPercentInvestment}
                    alt="50 percent investment"
                  />
                </div>
              </div>

              <div className="basis-1/3 relative">
                <div
                  className="p-2 bg-white w-[120px]  sm:w-[140px] rounded-2xl 
                ml-3  shadow-2xl relative  flex flex-col gap-1 sm:gap-3"
                >
                  <div className="flex justify-center pt-2">
                    <Image
                      className="h-[35px] w-[35px] sm:h-[50px] sm:w-[50px] rounded-full object-cover"
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
                      <PEl className="text-stone-900 text-[10px] sm:text-[12px] font-bold">
                        <Text>5678</Text>
                      </PEl>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* thrid row images */}
            <div className="flex justify-between">
              <div className="basis-1/3">
                <div
                  className="p-2 bg-white h-[80px] w-[90px] sm:h-[100px] sm:w-[130px]  
                rounded-2xl ml-3 sm:ml-5 shadow-2xl flex justify-center items-center relative"
                >
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

              <div className="basis-2/3 relative flex justify-between">
                <div
                  className="p-4 bg-white h-[90px] w-[120px] sm:h-[100px] sm:w-[150px] 
                rounded-2xl ml-3 shadow-2xl flex flex-col justify-center  gap-3"
                >
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

                <div className="flex flex-col justify-end">
                  <BlackSmallRoundedImage
                    className="h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] rounded-full object-cover"
                    src={MoneyCoinsImage}
                    alt="house icon image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*fourth row bottom of heading  */}
      <div className="flex">
        <div className="basis-1/2 relative">
          <div
            className="
              bg-white absolute rounded-full h-[150px] w-[150px] bottom-[-90px]"
          >
            <div className="relative w-full h-full flex flex-col justify-top items-center">
              <PEl className="absolute top-[20px] uppercase text-[12px] font-bold">
                <Text>Next / Prev</Text>
              </PEl>
            </div>
          </div>
        </div>

        <div className="basis-1/2 relative">
          <div
            className="
            bg-white h-7 w-7 rounded-full absolute bottom-[10px] 
              ring-0 flex items-center justify-center"
          >
            <KeyboardArrowDownIconClient />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionImagesLightGrayBold = ({ text }: { text: string }) => {
  return (
    <PEl className="text-stone-900 text-[10px] sm:text-[12px] font-bold">
      <Text>{text}</Text>
    </PEl>
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
    <PEl
      className={`
        bg-black dark:bg-white text-white dark:text-black rounded-[7px]  
        p-[5px] text-[8px]  sm:text-[10px] font-bold  ${
          otherClasses ? otherClasses : ''
        } `}
    >
      <Text>{text}</Text>
    </PEl>
  );
};

type BlackSmallRoundedImageProps = {
  className: string;
  src: StaticImageData;
  alt: string;
};
export const BlackSmallRoundedImage = (props: BlackSmallRoundedImageProps) => {
  return (
    <div
      className="p-2 rounded-full 
      bg-[#212121] h-[55px] w-[55px] sm:h-[60px] sm:w-[60px] 
      flex items-center
      shadow-2xl"
    >
      <Image {...props} />
    </div>
  );
};
