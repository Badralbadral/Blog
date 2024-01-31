import { Header, Footer } from "@/components/index";
export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
