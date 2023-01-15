import { SharedBlackButton } from '../common/button/sharedBlackBtn';

export const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <SectionFirst />
    </div>
  );
};

export const SectionFirst = () => {
  return (
    <div className="flex flex-row ">
      <div className="basis-2/6 flex flex-col gap-4">
        <h1 className="text-5xl">A power that shines your business</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nihil
          sint at ipsam tenetur voluptate quis aspernatur doloribus voluptatum
          debitis, ad esse possimus quam nostrum in minima sed impedit! Placeat.
        </p>
        <SharedBlackButton text={'Discover Demo'} />
      </div>
    </div>
  );
};
