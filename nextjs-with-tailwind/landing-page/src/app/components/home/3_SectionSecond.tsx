import Image from 'next/image';

import { H3Heading } from '../common/headings/headings';
import { PEl, Text } from '../common/textsContainers/textContainers';

import LightingLampImage from '/public/media/section-2-imgs/lighting_lamp.png';
import PapersServiceImage from '/public/media/section-2-imgs/papers_service.png';
import PlotPerformanceImage from '/public/media/section-2-imgs/plot_performance.png';

export const SectionSecond = () => {
  return (
    <>
      <H3Heading>
        <Text>
          The professional Consultation Platform For Your Real Estate and
          Finance
        </Text>
      </H3Heading>

      <div className="flex gap-4 flex-col sm:flex-row mt-16">
        <CliableSectionOfElements />
      </div>
    </>
  );
};

export const CliableSectionOfElements = () => {
  const arrOfdataToPass: WhiteShadowedBlockWithImage[] = [
    {
      Image: (
        <Image
          className="w-[80px] h-auto"
          src={LightingLampImage}
          alt="lamp icon"
        ></Image>
      ),
      title: 'We innovate',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
      voluptatem qui optio animi`,
    },
    {
      Image: (
        <Image
          className="w-[80px] h-auto"
          src={PlotPerformanceImage}
          alt="papers icon"
        ></Image>
      ),
      title: 'Performance',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
      voluptatem qui optio animi`,
    },
    {
      Image: (
        <Image
          className="w-[80px] h-auto"
          src={PapersServiceImage}
          alt="papers icon"
        ></Image>
      ),
      title: 'A Full Service',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
      voluptatem qui optio animi`,
    },
  ];

  return (
    <>
      {arrOfdataToPass.map((el, index) => (
        <WhiteShadowedBlockWithImage
          key={index}
          Image={el.Image}
          title={el.title}
          text={el.text}
        />
      ))}
    </>
  );
};

type WhiteShadowedBlockWithImage = {
  Image: JSX.Element;
  title: string;
  text: string;
};
export const WhiteShadowedBlockWithImage = (
  props: WhiteShadowedBlockWithImage
) => {
  return (
    <div className="drop-shadow-2xl flex basis-1/3 bg-white rounded-lg p-3">
      <div className="basis-2/6 flex justify-center items-center">
        {props.Image}
      </div>
      <div className="basis-4/6 flex flex-col gap-4">
        <PEl className="font-bold text-lg">
          <Text>{props.title}</Text>
        </PEl>
        <PEl className="text-neutral-500">
          <Text>{props.text}</Text>
        </PEl>
      </div>
    </div>
  );
};
