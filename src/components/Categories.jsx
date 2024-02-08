import Link from "next/link";

export const Categories = () => {
  const categories = [
    "All",
    "design",
    "travel",
    "fashion",
    "technology",
    "branding",
  ];
  return (
    <div className=" flex gap-5 text-[#495057] text-sm font-bold mb-8 duration-300 focus:text-[#D4A373]">
      {categories.map((e, index) => {
        return (
          <Link key={index} className="focus:text-[#D4A373]" href={`/${e}`}>
            {e}
          </Link>
        );
      })}
    </div>
  );
};
