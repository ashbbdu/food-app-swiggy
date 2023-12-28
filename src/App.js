import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import "../index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./routes";
import store from "./store/store";
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  // Passing data using context API
  const [userInfo, setUserInfo] = useState({});
  // console.log(<Body />, "body");

  // Suppose we made a login api call and we received some data from API
  useEffect(() => {
    const data = {
      loggedInUser: "Ashish",
    };
    setUserInfo(data);
  }, []);

  return (

    <Provider store={store}>
    <UserContext.Provider value={{userInfo : userInfo  , setUserInfo}}>
     <UserContext.Provider value={{loggedInUser : "Naman" }}>
      <Header />
     </UserContext.Provider>
      <Router />
      <Footer />
    </UserContext.Provider>
    </Provider>

  );
};

export default AppLayout;
