import { useEffect, useState } from "react";
import "../index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./routes";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  // Passing data using context API
  const [userInfo, setUserInfo] = useState({});
  // console.log(<Body />, "body");

  // Suppose we made a login api call and we received some data from API
  useEffect(() => {
    const data = {
      loggedInUser: "Ashish",
      token: "123lkjasdfo8asufjlkj",
    };
    setUserInfo(data);
  }, []);

  return (
    <UserContext.Provider value={userInfo}>
     <UserContext.Provider value={{loggedInUser : "Naman"}}>
      <Header />
     </UserContext.Provider>
      <Router />
      <Footer />
    </UserContext.Provider>
  );
};

export default AppLayout;
