import { useState } from "react";
import Link from "next/link";

export const Carousel = ({ data }) => {
  const [num, setNum] = useState(0);
  function addNum() {
    setNum(num + 1);
    if (num > 3) {
      setNum(1);
    }
  }
  function minusNum() {
    setNum(num - 1);
    if (num < 2) {
      setNum(4);
    }
  }
  return (
    <div className="carousel w-[1216px] h-[610px]">
      {data.map((e, index) => {
        return (
          <div key={index}>
            <Link href={`blogs/article/${e.id}`}>
              <div
                id={`slide${
                  index == 0 ? `1` : index == 1 ? `2` : index == 2 ? `3` : `4`
                }`}
                className="carousel-item w-full h-full flex flex-col gap-[35px] rounded-xl"
                style={{
                  backgroundImage: `url(${e.social_image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width: "1216px",
                  height: "600px",
                }}
              >
                <div className="bg-black w-full h-full rounded-xl bg-opacity-15 flex flex-col-reverse p-2">
                  <div className="bg-white w-[598px] h-[252px] rounded-xl p-10 border-[1px] border-[#E8E8EA] flex flex-col gap-6">
                    <div className="flex gap-2">
                      {e.tag_list.map((tag, index) => {
                        return (
                          <p
                            key={index}
                            className="w-fit h-7 rounded-md py-1 px-[10px] bg-[#4B6BFB] text-white font-medium text-sm"
                          >
                            {tag}
                          </p>
                        );
                      })}
                    </div>
                    <h3 className="font-semibold text-3xl text-[#181A2A]">
                      {e.title}
                    </h3>
                    <p className="text-[#97989F] font-normal text-base">
                      {e.readable_publish_date},{" "}
                      {new Date(e.created_at).getFullYear()}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
      <div className="absolute top-[831px] flex transform -translate-y-1/2 w-fit gap-[9px] text-[#696A75] ml-[1111px]">
        <a
          onClick={() => {
            minusNum();
          }}
          href={`#slide${num}`}
          className="btn btn-square rounded-[6px]"
        >
          ❮
        </a>
        <a
          href={`#slide${num}`}
          onClick={() => {
            addNum();
          }}
          className="btn btn-square rounded-[6px]"
        >
          ❯
        </a>
      </div>
    </div>
  );
};
