import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-[#eeeff2] to-[#dfe4f2] dark:from-[#1a152b] dark:to-[#0e0e0e] flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow w-full max-w-7xl mx-auto ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
