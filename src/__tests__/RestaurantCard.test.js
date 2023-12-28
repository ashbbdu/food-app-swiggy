import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import store from "../store/store";
import restCartMockData from "./mocks/restaurantCardMock.json"
import '@testing-library/jest-dom'
import UserContext from "../utils/UserContext";

it("should render restaurant card components with props data" , () => {
    render(
        <BrowserRouter>
        {/* <UserContext.Provider userInfo= > */}
          <Provider store={store}>
            <RestaurantCard restData={restCartMockData} />
          </Provider>
          {/* </UserContext.Provider>  */}
        </BrowserRouter>
        
      );

      expect(screen.getByText("New Manish Eating Point")).toBeInTheDocument()
})


