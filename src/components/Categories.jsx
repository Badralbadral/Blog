import Link from "next/link";

export const Categories = () => {
  return (
    <div className=" flex gap-5 text-[#495057] text-sm font-bold mb-8 duration-300 focus:text-[#D4A373]">
      <Link className="focus:text-[#D4A373]" href={`/blogs/blogList`}>
        All
      </Link>
      <Link className="focus:text-[#D4A373]" href={`/blogs/design`}>
        Design
      </Link>
      <Link className="focus:text-[#D4A373]" href={`/blogs/travel`}>
        Travel
      </Link>
      <Link className="focus:text-[#D4A373]" href={`/blogs/fashion`}>
        Fashion
      </Link>
      <Link className="focus:text-[#D4A373]" href={`/blogs/technology`}>
        Technology
      </Link>
      <Link className="focus:text-[#D4A373]" href={`/blogs/branding`}>
        Branding
      </Link>
    </div>
  );
};
