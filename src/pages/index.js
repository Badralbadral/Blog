import {
  MostPopular,
  TrendingNews,
  BasicNews,
  Header,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      {/* <MostPopular />
      <TrendingNews />
      <BasicNews /> */}
      <Footer />
    </div>
  );
}
