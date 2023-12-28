import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../store/store";
import "@testing-library/jest-dom";
import restaurantListMockData from "./mocks/restaurantListMock.json";
import Body from "../components/Body";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(restaurantListMockData);
      },
    });
  });

test("should handle top rated restaurant" , async () => {
   await act(async () => render(
    <BrowserRouter>
      <Provider store={store}>
       
        <Body />
  
      </Provider>
    </BrowserRouter>
    
  )) 

    const topRatedBtn = screen.getByRole("button" , {name : "Top Rated Restaurants"})
    expect(topRatedBtn).toBeInTheDocument()
    fireEvent.click(topRatedBtn)
    expect(screen.getByText("New Manish Eating Point")).toBeInTheDocument()
})
