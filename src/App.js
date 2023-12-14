
import "../index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./routes";



const AppLayout = () => {
  // console.log(<Body />, "body");
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
};

export default AppLayout;

