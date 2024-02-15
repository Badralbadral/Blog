import parse from "html-react-parser";

export default function Page({ data }) {
  return (
    <div className="m-auto max-w-[1200px] mb-36">
      <h1 className="mb-11 text-4xl font-medium">{data.title}</h1>
      <div className="flex items-center gap-3 mb-5 text-[#696A75] text-sm">
        <img
          src={data.user.profile_image}
          width={`40px`}
          className="rounded-full"
        />
        <p>{data.user.username}</p>
        <p>
          {data.readable_publish_date} {new Date(data.created_at).getFullYear()}
        </p>
      </div>
      <div className=" flex flex-col items-center">{parse(data.body_html)}</div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
