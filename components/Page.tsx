import Navbar from "./Navbar";
import Footer from "./Footer";
export default function Page({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
