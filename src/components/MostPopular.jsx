import { Carousel } from "./Carousel";

export const MostPopular = ({ data }) => {
  return (
    <div className="carousel">
      <Carousel data={data} />
    </div>
  );
};
