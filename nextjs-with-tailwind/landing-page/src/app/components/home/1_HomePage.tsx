import { SectionFirst } from './2_SectionFirst';
import { SectionSecond } from './3_SectionSecond';

export const HomePage = () => {
  return (
    <>
      <div className="w-full bg-zinc-100 relative">
        <div
          className="
          absolute lg:bg-black
          right-[-30px] top-[150px] half_circle_left"
        ></div>

        <div
          className="
          absolute lg:bg-black
          left-[-50px] top-[550px] half_circle_right"
        ></div>

        <div className="lg:container lg:mx-auto mx-auto px-4 pt-20 sm:pt-32">
          <SectionFirst />
        </div>
      </div>

      <div className="bg-white">
        <div className="lg:container lg:mx-auto mx-auto px-4">
          <SectionSecond />
        </div>
      </div>
    </>
  );
};
