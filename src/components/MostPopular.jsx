import { Carousel } from "./Carousel";

export const MostPopular = ({ data }) => {
  return (
    <>
      <div className="w-[1216px] h-[600px]">
        <Carousel data={data} />
      </div>
    </>
  );
};
