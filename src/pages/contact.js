const Contact = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 pt-[14px] px-[10px]">
        <h1 className="text-black text-4xl font-semibold">Contact Us</h1>
        <p className="text-[#696A75] text-base font-normal w-[624px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
        <div className="flex gap-[50px] mb-[49px]">
          <div className="rounded-xl border-[1px] border-[#E8E8EA] p-4 flex flex-col gap-[10px] w-[294px]">
            <h1 className="font-semibold text-2xl">Address</h1>
            <p className="text-[#696A75] font-normal text-base w-[210px]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </div>
          <div className="rounded-xl border-[1px] border-[#E8E8EA] p-4 flex flex-col gap-[10px] w-[294px]">
            <h1 className="font-semibold text-2xl">Contact</h1>
            <p className="text-[#696A75] font-normal text-base w-[210px]">
              313-332-8662 info@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-[10px] w-[643px] h-[440px] bg-[#F6F6F7] mb-[166px]">
        <div className="flex flex-col gap-6 relative top-[29px] left-[35px]">
          <h1 className="text-lg font-semibold">Leave a Message</h1>
          <div className="flex gap-7">
            <input
              className="rounded-[5px] border-[1px] border-[#DCDDDF] py-[14px] pl-[14px] pr-5 text-base w-[225px] h-[38px]"
              placeholder="Your Name"
            ></input>
            <input
              className="rounded-[5px] border-[1px] border-[#DCDDDF] py-[14px] pl-[14px] pr-5 text-base w-[225px] h-[38px]"
              placeholder="Your Email"
            ></input>
          </div>
          <input
            className="rounded-[5px] border-[1px] border-[#DCDDDF] py-[14px] pl-[14px] pr-5 text-base w-[478px] h-[35px]"
            placeholder="Subject"
          ></input>
          <textarea
            className=" resize-none rounded-[5px] border-[1px] border-[#DCDDDF] py-[14px] pl-[14px] pr-5 text-base w-[478px] h-[134px]"
            placeholder="Write a message"
          ></textarea>
          <button className="bg-[#4B6BFB] rounded-md py-[10px] px-4 w-[130px] text-white">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
export default Contact;
