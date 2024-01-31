import { MostPopular, TrendingNews, BasicNews } from "@/components";

export default function Home({ data, dataSecond, news }) {
  return (
    <div className="flex flex-col items-center">
      <MostPopular data={data} />
      <TrendingNews data={dataSecond} />
      <BasicNews data={news} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://dev.to/api/articles?top=1&per_page=4");
  const data = await res.json();

  const trend = await fetch(
    "https://dev.to/api/articles?top=1&per_page=4&page=2"
  );
  const dataSecond = await trend.json();

  const allNews = await fetch(
    "https://dev.to/api/articles?top=1&per_page=9&page=2"
  );
  const news = await allNews.json();

  return {
    props: {
      data,
      dataSecond,
      news,
    },
  };
}
