import parse from "html-react-parser";

export default function Page({ data }) {
  return <div>detail page</div>;
}

export const getServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const data = res.json();
  return {
    props: {
      data,
    },
  };
};
