import { Categories } from "./Categories";
export const CateLayout = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <Categories />
      <main>{children}</main>
    </div>
  );
};
